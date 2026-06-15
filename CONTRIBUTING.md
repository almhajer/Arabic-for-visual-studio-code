# Contributing | المساهمة

Thank you for helping improve the Arabic Language Pack for Visual Studio Code.

شكرًا لمساهمتك في تحسين حزمة اللغة العربية لـ Visual Studio Code.

## Development Setup | إعداد بيئة التطوير

### English

1. Fork and clone the repository.
2. Install Node.js 20 or later.
3. Run `npm install`.
4. Keep a local checkout of `microsoft/vscode-loc` when preparing a sync release.
5. Use the validation scripts in `package.json` before opening a pull request.

### العربية

1. انسخ المستودع ثم استنسخه محليًا.
2. ثبّت Node.js 20 أو أحدث.
3. شغّل `npm install`.
4. احتفظ بنسخة محلية من `microsoft/vscode-loc` عند تجهيز مزامنة إصدار جديد.
5. استخدم أوامر التحقق الموجودة في `package.json` قبل فتح طلب السحب.

## Translation Workflow | سير عمل الترجمة

### English

1. Sync against the latest upstream French localization files.
2. Review the generated audit report in `reports/`.
3. Preserve existing Arabic strings when the upstream key still exists.
4. Translate only user-visible text.
5. Keep placeholders, command ids, paths, and configuration keys unchanged.
6. Record terminology decisions in `TERMINOLOGY.md`.

### العربية

1. نفّذ مزامنة مع أحدث ملفات الترجمة الفرنسية من upstream.
2. راجع تقرير التدقيق الناتج داخل `reports/`.
3. احتفظ بالنص العربي الحالي ما دام المفتاح ما زال موجودًا upstream.
4. ترجم النصوص الظاهرة للمستخدم فقط.
5. اترك placeholders ومعرّفات الأوامر والمسارات ومفاتيح الإعدادات كما هي.
6. دوّن قرارات المصطلحات في `TERMINOLOGY.md`.

## Pull Request Process | آلية طلبات السحب

### English

1. Create a focused branch.
2. Keep commits logical and readable.
3. Include a short summary, validation notes, and any remaining translation gaps.
4. Link related issues when applicable.

### العربية

1. أنشئ فرعًا واضحًا ومخصصًا للتعديل.
2. اجعل الالتزامات منطقية وسهلة المراجعة.
3. أضف ملخصًا قصيرًا ونتائج التحقق وأي فجوات ترجمة متبقية.
4. اربط القضايا ذات الصلة عند الحاجة.

## Commit Conventions | أسلوب رسائل الالتزام

Use Conventional Commits whenever possible:

- `feat:` for repository or tooling additions
- `fix:` for translation fixes or validation corrections
- `docs:` for documentation updates
- `chore:` for release prep, sync scripts, or metadata cleanup

استخدم رسائل Conventional Commits قدر الإمكان:

- `feat:` للإضافات الوظيفية أو الأدوات
- `fix:` لإصلاحات الترجمة أو التحقق
- `docs:` لتحديثات التوثيق
- `chore:` للتحضير للإصدار أو التنظيفات العامة

## Issue Reporting Guidelines | إرشادات الإبلاغ عن المشكلات

### English

- Identify the affected file and key when reporting a translation issue.
- Include screenshots for UI wording problems when possible.
- Describe expected wording, current wording, and context.

### العربية

- حدّد الملف والمفتاح المتأثرين عند الإبلاغ عن مشكلة ترجمة.
- أرفق لقطة شاشة عند الإمكان إذا كانت المشكلة ظاهرة في الواجهة.
- اذكر الصياغة الحالية والصياغة المقترحة والسياق.

## Code Review Expectations | توقعات المراجعة

### English

- Reviewers check meaning accuracy, terminology consistency, placeholder safety, and JSON validity.
- Large syncs should include audit output and validation results.
- Avoid unrelated formatting churn in translation files.

### العربية

- يراجع المراجعون دقة المعنى واتساق المصطلحات وسلامة placeholders وصحة JSON.
- يجب أن تتضمن المزامنات الكبيرة تقرير التدقيق ونتائج التحقق.
- تجنّب التغييرات الشكلية غير المرتبطة في ملفات الترجمة.
