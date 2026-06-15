#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const upstreamArg = args.find((arg) => !arg.startsWith('--'));
const upstreamRoot = upstreamArg
	? path.resolve(upstreamArg)
	: '/tmp/vscode-loc-sync/i18n/vscode-language-pack-fr';
const localTranslations = path.join(repoRoot, 'translations');
const upstreamTranslations = path.join(upstreamRoot, 'translations');
const reportsDir = path.join(repoRoot, 'reports');

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, data) {
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, `${JSON.stringify(data, null, '\t')}\n`);
}

function listJsonFiles(dir) {
	if (!fs.existsSync(dir)) {
		return [];
	}
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

function relativeTranslationPath(file, root) {
	return path.relative(root, file).split(path.sep).join('/');
}

function flattenContents(contents) {
	const map = new Map();
	for (const [section, values] of Object.entries(contents || {})) {
		if (!values || typeof values !== 'object' || Array.isArray(values)) {
			continue;
		}
		for (const key of Object.keys(values)) {
			map.set(`${section}\u0000${key}`, { section, key, value: values[key] });
		}
	}
	return map;
}

function buildExistingTranslationIndex(localFiles) {
	const byCompositeKey = new Map();
	const byLeafKey = new Map();

	for (const file of localFiles) {
		const data = readJson(file);
		for (const entry of flattenContents(data.contents).values()) {
			if (typeof entry.value !== 'string') {
				continue;
			}
			const composite = `${entry.section}\u0000${entry.key}`;
			if (!byCompositeKey.has(composite)) {
				byCompositeKey.set(composite, entry.value);
			}
			if (!byLeafKey.has(entry.key)) {
				byLeafKey.set(entry.key, entry.value);
			}
		}
	}

	return { byCompositeKey, byLeafKey };
}

function syncFile(relPath, translationIndex, apply) {
	const upstreamFile = path.join(upstreamTranslations, relPath);
	const localFile = path.join(localTranslations, relPath);
	const upstream = readJson(upstreamFile);
	const local = fs.existsSync(localFile) ? readJson(localFile) : null;
	const localFlat = flattenContents(local && local.contents);
	const upstreamFlat = flattenContents(upstream.contents);
	const missingKeys = [];
	const obsoleteKeys = [];
	const needsTranslation = [];
	const synced = {
		'': local && local[''] ? local[''] : upstream[''],
		version: upstream.version,
		contents: {}
	};

	for (const [section, upstreamValues] of Object.entries(upstream.contents || {})) {
		synced.contents[section] = {};
		for (const [key, upstreamValue] of Object.entries(upstreamValues || {})) {
			const composite = `${section}\u0000${key}`;
			if (localFlat.has(composite)) {
				synced.contents[section][key] = localFlat.get(composite).value;
				continue;
			}

			missingKeys.push({ section, key });
			const matched = translationIndex.byCompositeKey.get(composite) || translationIndex.byLeafKey.get(key);
			if (typeof matched === 'string') {
				synced.contents[section][key] = matched;
			} else {
				synced.contents[section][key] = upstreamValue;
				needsTranslation.push({
					file: relPath,
					section,
					key,
					sourceText: upstreamValue,
					__needs_translation: true
				});
			}
		}
	}

	if (local) {
		for (const [composite, entry] of localFlat.entries()) {
			if (!upstreamFlat.has(composite)) {
				obsoleteKeys.push({ section: entry.section, key: entry.key });
			}
		}
	}

	if (apply) {
		writeJson(localFile, synced);
	}

	return {
		file: relPath,
		existsLocally: Boolean(local),
		upstreamKeys: upstreamFlat.size,
		localKeys: localFlat.size,
		missingKeys,
		obsoleteKeys,
		needsTranslation
	};
}

function main() {
	const apply = args.includes('--apply');
	if (!fs.existsSync(upstreamTranslations)) {
		throw new Error(`Upstream translations directory not found: ${upstreamTranslations}`);
	}

	fs.mkdirSync(reportsDir, { recursive: true });
	const upstreamFiles = listJsonFiles(upstreamTranslations).map((file) => relativeTranslationPath(file, upstreamTranslations));
	const localFiles = listJsonFiles(localTranslations);
	const localRelFiles = localFiles.map((file) => relativeTranslationPath(file, localTranslations));
	const translationIndex = buildExistingTranslationIndex(localFiles);
	const upstreamSet = new Set(upstreamFiles);
	const localSet = new Set(localRelFiles);
	const missingFiles = upstreamFiles.filter((file) => !localSet.has(file));
	const obsoleteFiles = localRelFiles.filter((file) => !upstreamSet.has(file));
	const files = upstreamFiles.map((file) => syncFile(file, translationIndex, apply));
	const summary = {
		generatedAt: new Date().toISOString(),
		upstreamRoot,
		apply,
		upstreamVersion: readJson(path.join(upstreamRoot, 'package.json')).version,
		upstreamEngine: readJson(path.join(upstreamRoot, 'package.json')).engines.vscode,
		localFileCount: localRelFiles.length,
		upstreamFileCount: upstreamFiles.length,
		missingFiles,
		obsoleteFiles,
		totalMissingKeys: files.reduce((sum, file) => sum + file.missingKeys.length, 0),
		totalObsoleteKeys: files.reduce((sum, file) => sum + file.obsoleteKeys.length, 0),
		totalNeedsTranslation: files.reduce((sum, file) => sum + file.needsTranslation.length, 0),
		files
	};
	const needsTranslation = files.flatMap((file) => file.needsTranslation);

	writeJson(path.join(reportsDir, apply ? 'sync-report-after.json' : 'sync-report-before.json'), summary);
	writeJson(path.join(reportsDir, 'needs-translation.json'), needsTranslation);

	console.log(JSON.stringify({
		apply,
		upstreamVersion: summary.upstreamVersion,
		upstreamEngine: summary.upstreamEngine,
		upstreamFileCount: summary.upstreamFileCount,
		localFileCount: summary.localFileCount,
		missingFiles: summary.missingFiles.length,
		obsoleteFiles: summary.obsoleteFiles.length,
		totalMissingKeys: summary.totalMissingKeys,
		totalObsoleteKeys: summary.totalObsoleteKeys,
		totalNeedsTranslation: summary.totalNeedsTranslation
	}, null, 2));
}

main();
