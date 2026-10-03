# Contributing | المساهمة

Thank you for helping improve the Arabic Language Pack for Visual Studio Code.

شكرًا لمساهمتك في تحسين حزمة اللغة العربية لـ Visual Studio Code.

## Development Setup | إعداد بيئة التطوير

### English

1. Fork and clone the repository.
2. Use a supported Node.js release and check `node -v` and `npm exec -- node -v` before build or package work.
3. The project has no runtime dependencies; do not run `npm install` unless dependencies are added intentionally.
4. Keep a local checkout of `microsoft/vscode-loc` and use its French language pack as the comparison source.
5. Run the available validation and packaging commands in `package.json` before opening a pull request.

### العربية

1. أنشئ نسخة متفرعة من المستودع ثم استنسخها محليًا.
2. استخدم إصدارًا مدعومًا من Node.js، وتحقق من `node -v` و`npm exec -- node -v` قبل البناء أو التغليف.
3. لا يحتاج المشروع إلى تبعيات تشغيل؛ لا تشغّل `npm install` إلا عند إضافة تبعيات عمدًا.
4. احتفظ بنسخة محلية من `microsoft/vscode-loc` واستخدم حزمة اللغة الفرنسية للمقارنة.
5. شغّل أوامر التحقق والتغليف المتاحة في `package.json` قبل فتح طلب السحب.

## Translation Workflow | سير عمل الترجمة

### English

1. Compare every upstream file with its Arabic counterpart using the `(section, key)` pair.
2. Record missing, obsolete, and present key counts in the review; do not retain generated audit reports in the repository.
3. Preserve an existing Arabic value when its upstream key still exists.
4. Translate every new user-visible value into natural Arabic; do not copy the French source value as the translation.
5. Keep placeholders, escape sequences, command ids, paths, and configuration keys unchanged.
6. Review Arabic quality and terminology, then validate JSON and key coverage.
7. Record new terminology decisions in `TERMINOLOGY.md`.

### العربية

1. قارن كل ملف upstream بنظيره العربي باستخدام زوج `(section, key)`.
2. سجّل أعداد المفاتيح الموجودة والناقصة والقديمة ضمن المراجعة، ولا تحتفظ بتقارير التدقيق المؤقتة في المستودع.
3. احتفظ بالقيمة العربية الحالية إذا ظل مفتاحها موجودًا في المصدر.
4. ترجم كل قيمة جديدة ظاهرة للمستخدم إلى عربية طبيعية، ولا تنسخ قيمة المصدر الفرنسية بوصفها ترجمة.
5. حافظ على placeholders وتسلسلات الهروب ومعرّفات الأوامر والمسارات ومفاتيح الإعدادات.
6. راجع جودة العربية والمصطلحات، ثم تحقق من JSON وتغطية المفاتيح.
7. دوّن المصطلحات الجديدة في `TERMINOLOGY.md`.

## Pull Request Process | آلية طلبات السحب

### English

1. Create a focused branch.
2. Keep commits logical and readable; do not include unrelated workspace changes.
3. Include a short summary, validation results, source version, key counts, and any unresolved translation questions.
4. Link related issues when applicable.

### العربية

1. أنشئ فرعًا واضحًا ومخصصًا للتعديل.
2. اجعل الالتزامات منطقية وسهلة المراجعة، ولا تضمّن تغييرات محلية غير مرتبطة.
3. أضف ملخصًا قصيرًا ونتائج التحقق وإصدار المصدر وأعداد المفاتيح وأي مواضع ترجمة غير محسومة.
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
