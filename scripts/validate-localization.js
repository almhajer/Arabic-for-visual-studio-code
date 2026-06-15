#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
const translationsRoot = path.join(repoRoot, 'translations');

function listJsonFiles(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...listJsonFiles(full));
		} else if (entry.isFile() && entry.name.endsWith('.json')) {
			out.push(full);
		}
	}
	return out.sort();
}

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function collectTokens(value) {
	if (typeof value !== 'string') {
		return [];
	}
	const patterns = [
		/\{\d+\}/g,
		/\{[A-Za-z_][A-Za-z0-9_]*\}/g,
		/\$\{[^}]+\}/g,
		/%[sdif]/g,
		/\{\{[^}]+\}\}/g
	];
	return patterns.flatMap((pattern) => value.match(pattern) || []).sort();
}

function flattenContents(data) {
	const entries = [];
	for (const [section, values] of Object.entries(data.contents || {})) {
		for (const [key, value] of Object.entries(values || {})) {
			entries.push({ section, key, value });
		}
	}
	return entries;
}

const errors = [];
const translationEntries = packageJson.contributes.localizations[0].translations;

for (const entry of translationEntries) {
	const translationPath = path.join(repoRoot, entry.path);
	if (!fs.existsSync(translationPath)) {
		errors.push(`Missing translation path in package.json: ${entry.path}`);
	}
}

const referenced = new Set(translationEntries.map((entry) => path.normalize(path.join(repoRoot, entry.path))));
for (const file of listJsonFiles(translationsRoot)) {
	try {
		const data = readJson(file);
		if (!referenced.has(path.normalize(file))) {
			errors.push(`Translation file is not referenced by package.json: ${path.relative(repoRoot, file)}`);
		}
		if (!data.contents || typeof data.contents !== 'object') {
			errors.push(`Missing contents object: ${path.relative(repoRoot, file)}`);
		}
		for (const entry of flattenContents(data)) {
			const tokens = collectTokens(entry.value);
			if (tokens.length !== new Set(tokens).size) {
				continue;
			}
			for (const token of tokens) {
				if (!entry.value.includes(token)) {
					errors.push(`Broken token ${token}: ${path.relative(repoRoot, file)} ${entry.section}/${entry.key}`);
				}
			}
		}
	} catch (error) {
		errors.push(`${path.relative(repoRoot, file)}: ${error.message}`);
	}
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}

console.log(`Validated ${translationEntries.length} localization files.`);
