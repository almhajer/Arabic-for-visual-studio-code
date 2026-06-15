#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const needsPath = path.join(repoRoot, 'reports', 'needs-translation.json');
const translationsRoot = path.join(repoRoot, 'translations');
const reportPath = path.join(repoRoot, 'reports', 'translation-completion-summary.json');
const batchSize = Number(process.env.TRANSLATION_BATCH_SIZE || 25);
const manualTranslations = new Map([
	[
		'chat.agentHost.claudeAgent.enabled',
		'عند التمكين، يسجّل مضيف العامل موفّر Claude (بشرط أن يكون Claude SDK قابلًا للوصول). يعمل هذا بشكل مستقل عن `#chat.agents.claude.preferAgentHost#` و`#chat.editor.claude.preferAgentHost#` اللذين يحددان سطح التكامل الذي يعرض Claude. يتطلب `#chat.agentHost.enabled#`. يجب إعادة تشغيل عملية مضيف العامل لتطبيق التغييرات.'
	],
	[
		'chat.agentHost.codexAgent.enabled',
		'عند التمكين، يسجّل مضيف العامل موفّر Codex (بشرط أن يكون Codex SDK قابلًا للوصول). يتطلب `#chat.agentHost.enabled#`. يجب إعادة تشغيل عملية مضيف العامل لتطبيق التغييرات.'
	],
	[
		'chat.agentHost.codexAgent.sdkRoot',
		'تجريبي، لتطوير SDK محليًا فقط. المسار المطلق إلى مجلد يحتوي على `node_modules/@openai/codex`. عند تعيينه، يشغّل مضيف العامل ملف Codex الثنائي من هذه الشجرة بدلًا من تنزيل SDK. عند تركه فارغًا (الإعداد الافتراضي)، يستخدم توزيع SDK المضمّن مع هذا البناء. يتطلب `#chat.agentHost.enabled#`. يجب إعادة تشغيل عملية مضيف العامل لتطبيق التغييرات.'
	],
	[
		'sessions.chat.agentHost.defaultSessionsProvider',
		'عند تمكين هذا الخيار، يُستخدم مضيف العامل المحلي كموفّر الجلسات الافتراضي، وتظهر أنواع جلساته أولًا في نافذة Agents. يتطلب `#{0}#`.'
	]
]);

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, data) {
	fs.writeFileSync(file, `${JSON.stringify(data, null, '\t')}\n`);
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
		/\$\d+/g,
		/\{\{[^}]+\}\}/g,
		/`[^`]+`/g,
		/<[^>]+>/g,
		/#([^#]+)#/g
	];
	return patterns.flatMap((pattern) => value.match(pattern) || []).sort();
}

function missingTokens(source, translated) {
	const sourceTokens = collectTokens(source);
	return sourceTokens.filter((token) => !translated.includes(token));
}

function chunk(items, size) {
	const chunks = [];
	for (let i = 0; i < items.length; i += size) {
		chunks.push(items.slice(i, i + size));
	}
	return chunks;
}

function protectText(source) {
	const tokens = collectTokens(source);
	let protectedText = source;
	const replacements = [];
	for (const [index, token] of tokens.entries()) {
		const marker = `ZXQ${index}QXZ`;
		protectedText = protectedText.split(token).join(marker);
		replacements.push({ marker, token });
	}
	return { protectedText, replacements };
}

function restoreText(text, replacements) {
	let restored = text;
	for (const { marker, token } of replacements) {
		restored = restored.split(marker).join(token);
	}
	return restored;
}

function improveArabic(text) {
	return text
		.replaceAll('الرمز المميز', 'الرمز')
		.replaceAll('رمز مميز', 'رمز')
		.replaceAll('مضيف التمديد', 'مضيف الإضافات')
		.replaceAll('مضيف الملحق', 'مضيف الإضافات')
		.replaceAll('التمديد', 'الإضافة')
		.replaceAll('ملحق', 'إضافة')
		.replaceAll('المجلد', 'المجلد')
		.replaceAll('الدليل', 'المجلد')
		.replaceAll('إعدادات', 'الإعدادات')
		.replaceAll('لوحة القيادة', 'لوحة المعلومات')
		.replaceAll('وكلاء', 'الوكلاء')
		.replaceAll('وكيل', 'عامل')
		.replaceAll('الصندوق الرمل', 'وضع الحماية')
		.replaceAll('رمل', 'وضع الحماية')
		.replaceAll('وقت التشغيل', 'بيئة التشغيل')
		.replaceAll('المتصفح المدمج', 'المتصفح المضمّن')
		.replaceAll('الفرق', 'المقارنة')
		.replaceAll('تقديم Markdown', 'Markdown المعروض')
		.replaceAll('تخفيض السعر', 'Markdown')
		.replaceAll('فيجوال ستوديو كود', 'VS Code')
		.replaceAll('رمز VS', 'VS Code')
		.replaceAll('كوبيلوت', 'Copilot')
		.replaceAll('كوديكس', 'Codex')
		.replaceAll('ميرميد', 'Mermaid')
		.replaceAll('جيثب', 'GitHub')
		.replaceAll('أوبن أيه آي', 'OpenAI')
		.replaceAll('جافا سكريبت', 'JavaScript')
		.replaceAll('ويباسمبلي', 'WebAssembly')
		.replaceAll('ويب أسيمبلي', 'WebAssembly')
		.replaceAll('CLI', 'CLI')
		.replace(/\s+([،.؟:])/g, '$1')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function translateText(source) {
	const { protectedText, replacements } = protectText(source);
	const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=${encodeURIComponent(protectedText)}`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Google translation request failed: ${response.status} ${await response.text()}`);
	}
	const json = await response.json();
	const translated = (json[0] || []).map((part) => part[0]).join('');
	return improveArabic(restoreText(translated, replacements));
}

async function main() {
	const needs = readJson(needsPath).map((item, index) => ({ ...item, id: index + 1 }));
	const translated = new Map();
	const ambiguous = [];
	const errors = [];

	for (const [index, batch] of chunk(needs, batchSize).entries()) {
		console.log(`Translating batch ${index + 1}/${Math.ceil(needs.length / batchSize)} (${batch.length} items)`);
		await Promise.all(batch.map(async (source) => {
			const translation = manualTranslations.get(source.key) || await translateText(source.sourceText);
			const missing = missingTokens(source.sourceText, translation);
			if (missing.length) {
				errors.push(`Missing token(s) for id ${source.id}: ${missing.join(', ')}`);
				return;
			}
			translated.set(source.id, translation);
		}));
	}

	for (const item of needs) {
		if (!translated.has(item.id)) {
			errors.push(`No translation returned for id ${item.id}`);
		}
	}

	if (errors.length) {
		writeJson(reportPath, { status: 'failed', errors, translatedCount: translated.size });
		throw new Error(`Translation failed validation with ${errors.length} error(s). See ${reportPath}`);
	}

	const byFile = new Map();
	for (const item of needs) {
		if (!byFile.has(item.file)) {
			byFile.set(item.file, []);
		}
		byFile.get(item.file).push(item);
	}

	for (const [file, items] of byFile.entries()) {
		const fullPath = path.join(translationsRoot, file);
		const json = readJson(fullPath);
		for (const item of items) {
			json.contents[item.section][item.key] = translated.get(item.id);
		}
		writeJson(fullPath, json);
	}

	writeJson(needsPath, []);
	writeJson(reportPath, {
		status: 'complete',
		translator: 'translate.googleapis.com/translate_a/single with token protection and terminology cleanup',
		totalKeysProcessed: needs.length,
		translatedKeysCount: translated.size,
		skippedKeysCount: 0,
		ambiguousTranslations: ambiguous
	});

	console.log(`Translated ${translated.size} key(s).`);
}

main().catch((error) => {
	console.error(error.message);
	process.exit(1);
});
