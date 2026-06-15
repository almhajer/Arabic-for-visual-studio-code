#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const translationsRoot = path.join(repoRoot, 'translations');

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, data) {
	fs.writeFileSync(file, `${JSON.stringify(data, null, '\t')}\n`);
}

const needs = JSON.parse(execSync('git show HEAD:reports/needs-translation.json', {
	cwd: repoRoot,
	encoding: 'utf8'
}));

const replacements = [
	[/هيئة الدستور الغذائي/g, 'Codex'],
	[/الدستور الغذائي/g, 'Codex'],
	[/كوديكس/g, 'Codex'],
	[/كوبيلوت/g, 'Copilot'],
	[/ميرميد/g, 'Mermaid'],
	[/جيثب/g, 'GitHub'],
	[/جافا سكريبت/g, 'JavaScript'],
	[/ويباسمبلي|ويب أسيمبلي/g, 'WebAssembly'],
	[/فصدفة/g, 'فشل'],
	[/الالإعدادات/g, 'الإعدادات'],
	[/تم إعدام/g, 'تم تنفيذ'],
	[/إعدام/g, 'تنفيذ'],
	[/قذيفة/g, 'الصدفة'],
	[/شل/g, 'الصدفة'],
	[/عنوان URL الذي تم استرجاعه/g, 'تم جلب عنوان URL'],
	[/استعادة عنوان URL/g, 'جلب عنوان URL'],
	[/استرجاع عنوان URL/g, 'جلب عنوان URL'],
	[/استعادة \{0\}/g, 'جلب {0}'],
	[/دومين/g, 'نطاق'],
	[/وقت تشغيل Sandbox المتقدم/g, 'بيئة تشغيل وضع الحماية المتقدمة'],
	[/Sandbox/g, 'وضع الحماية'],
	[/الصندوق الرمل/g, 'وضع الحماية'],
	[/وقت التشغيل/g, 'بيئة التشغيل'],
	[/عدد مرات الصعود/g, 'أبدًا'],
	[/تلميذ/g, 'مرتفع'],
	[/ضعيف/g, 'منخفض'],
	[/عاجز/g, 'معطل'],
	[/ومباشرة/g, 'مباشر'],
	[/تقصير/g, 'افتراضي'],
	[/خلف/g, 'رجوع'],
	[/الدردشة المحرر/g, 'دردشة المحرر'],
	[/الالوكلاء/g, 'العوامل'],
	[/الوكيل البعيد/g, 'العامل البعيد'],
	[/الوكلاء البعيدين/g, 'العوامل البعيدة'],
	[/الوكلاء/g, 'العوامل'],
	[/وكيل الذكاء الاصطناعي/g, 'عامل الذكاء الاصطناعي'],
	[/وكيل بعيد/g, 'عامل بعيد'],
	[/وكيل/g, 'عامل'],
	[/مضيف العامل/g, 'مضيف العامل'],
	[/نافذة Agents/g, 'نافذة العوامل'],
	[/المنعطفات/g, 'الجولات'],
	[/المنعطف/g, 'الجولة'],
	[/غير الملتزم بها/g, 'غير المثبتة'],
	[/غير ملتزم بها/g, 'غير مثبتة'],
	[/للتحقق من صحة/g, 'تثبيت التغييرات'],
	[/تم التحقق من صحة التغييرات/g, 'تم تثبيت التغييرات'],
	[/رسالة التحقق/g, 'رسالة التثبيت'],
	[/رسالة التزام/g, 'رسالة تثبيت'],
	[/طلب سحب مسودة/g, 'مسودة طلب سحب'],
	[/المجلد مدرج/g, 'تم سرد المجلد'],
	[/المدرجة \{0\}/g, 'تم سرد {0}'],
	[/مترجم أوامر الصدفة/g, 'إيقاف أمر الصدفة'],
	[/أدلة/g, 'مجلدات'],
	[/دليل/g, 'مجلد'],
	[/اقرأ فقط/g, 'للقراءة فقط'],
	[/مكالمات الأدوات/g, 'استدعاءات الأدوات'],
	[/مكالمات الأداة/g, 'استدعاءات الأداة'],
	[/تخفيض السعر/g, 'Markdown'],
	[/إضافة Host Copilot CLI/g, 'Extension Host Copilot CLI'],
	[/Agent Host Copilot CLI/g, 'Agent Host Copilot CLI']
];

const keySpecific = new Map([
	['chat.agents.copilotCli.hideExtensionHost', 'عند التمكين، يخفي إدخال Extension Host Copilot CLI من منتقي نافذة العوامل.'],
	['chat.editor.copilotCli.hideExtensionHost', 'عند التمكين، يخفي إدخال Extension Host Copilot CLI من منتقي الدردشة في نافذة المحرر.'],
	['chat.editor.defaultProvider.copilotAh', 'استخدام Agent Host Copilot CLI'],
	['chat.editor.defaultProvider.copilotEh', 'استخدام Extension Host Copilot CLI'],
	['chatAgentHostConfigurationTitle', 'مضيف عامل الدردشة'],
	['agentHost.config.enableCustomTerminalTool.title', 'استخدام أداة الطرفية في مضيف العامل'],
	['agentHost.config.rubberDuck.description', 'عند التمكين، يستخدم مساعد البرمجة عاملًا فرعيًا نقديًا باسم "rubber duck" لمراجعة تغييرات التعليمات البرمجية بالاستفادة من نموذج تكميلي.'],
	['agentHost.config.rubberDuck.title', 'عامل rubber duck'],
	['chat.agentHost.codexAgent.codexHome', 'بديل اختياري لـ `$CODEX_HOME`. يحدد المكان الذي يقرأ منه ملف Codex الثنائي الإعدادات ويكتب النشرات. عند تركه فارغًا، يستخدم Codex قيمته الافتراضية (`~/.codex`).'],
	['chatAgentHostStarterConfigurationTitle', 'بادئ مضيف عامل الدردشة'],
	['compareTurnsChangeset.label', 'مقارنة الجولات'],
	['thisTurnChangeset.label', 'هذه الجولة'],
	['agentHost.config.sandbox.allowedDomains.item.title', 'النطاق'],
	['agentHost.config.sandbox.deniedDomains.item.title', 'النطاق'],
	['agentHost.config.sandbox.title', 'وضع حماية العامل'],
	['agentHost.changeset.commit.authExpired', 'المصادقة مطلوبة لإنشاء رسالة تثبيت. يرجى تسجيل الدخول إلى GitHub Copilot ثم المحاولة مرة أخرى.'],
	['agentHost.changeset.commit.cancelled', 'تم إلغاء عملية التثبيت.'],
	['agentHost.changeset.commit.committed', 'تم تثبيت التغييرات بالرسالة: `{0}`'],
	['agentHost.changeset.commit.noChanges', 'لا توجد تغييرات غير مثبتة تحتاج إلى تثبيت.'],
	['agentHost.changeset.commit', 'تثبيت'],
	['claude.toolComplete.bashCmd', 'تم تنفيذ {0}'],
	['claude.toolComplete.bashOutput', 'تمت قراءة مخرجات الصدفة'],
	['claude.toolInvoke.bash', 'تشغيل أمر الصدفة'],
	['claude.toolInvoke.bashOutput', 'قراءة مخرجات الصدفة'],
	['claude.toolInvoke.killBash', 'إيقاف أمر الصدفة'],
	['claude.discovered.displayName', 'Claude المكتشف'],
	['codex.modelThinkingLevel.description', 'يحدد جهد الاستدلال الذي يستخدمه Codex.'],
	['codex.modelThinkingLevel.title', 'مستوى الاستدلال'],
	['codex.sessionConfig.approvalPolicyDescription', 'كيفية طلب Codex الموافقة على استدعاءات الأدوات.'],
	['codex.sessionConfig.modelReasoningEffort', 'جهد الاستدلال'],
	['codex.sessionConfig.modelReasoningEffortDescription', 'يحدد جهد الاستدلال الذي يستخدمه Codex.'],
	['codex.sessionConfig.webSearchMode.disabled', 'معطل'],
	['codex.sessionConfig.webSearchMode.live', 'مباشر'],
	['codexAgent.displayName', 'Codex'],
	['agentHost.copilot.systemNotification.shellCompleted', 'اكتمل أمر الصدفة'],
	['agentHost.copilot.systemNotification.shellIdCompleted', 'اكتمل أمر الصدفة `{0}`'],
	['serverEnvironmentService.agent-host-bridge-host', 'يمكن الوصول إلى مضيف العامل الخارجي عند استخدامه مع --agent-host-bridge-port. الإعداد الافتراضي هو المضيف المحلي.'],
	['multiDiffView.back', 'رجوع'],
	['mobileTopBar.filesChangedTooltip', '{0} من الملفات المعدلة'],
	['mobileTopBar.singleFileChanged', 'ملف واحد'],
	['sshAuthAgent', 'عامل SSH'],
	['sshAuthAgentDesc', 'استخدم عامل SSH قيد التشغيل للمصادقة']
]);

function cleanup(value, key) {
	if (keySpecific.has(key)) {
		return keySpecific.get(key);
	}
	let out = value;
	for (const [pattern, replacement] of replacements) {
		out = out.replace(pattern, replacement);
	}
	return out
		.replace(/\s+([،.؟:])/g, '$1')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

const byFile = new Map();
for (const item of needs) {
	if (!byFile.has(item.file)) {
		byFile.set(item.file, []);
	}
	byFile.get(item.file).push(item);
}

let changed = 0;
for (const [file, items] of byFile.entries()) {
	const fullPath = path.join(translationsRoot, file);
	const json = readJson(fullPath);
	for (const item of items) {
		const current = json.contents[item.section][item.key];
		const next = cleanup(current, item.key);
		if (next !== current) {
			json.contents[item.section][item.key] = next;
			changed++;
		}
	}
	writeJson(fullPath, json);
}

console.log(`Cleaned ${changed} translated value(s).`);
