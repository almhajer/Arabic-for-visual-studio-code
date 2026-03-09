# المساهمة | Contributing

شكرًا لاهتمامك بالمساهمة في مشروع حزمة اللغة العربية لـ فيجوال ستوديو كود.

Thank you for your interest in contributing to the Arabic Language Pack for Visual Studio Code.

---

## العربية

### قبل البدء

- راجع الملفات الحالية قبل تعديل أي ترجمة.
- حافظ على اتساق المصطلحات في جميع ملفات الترجمة.
- اجعل الصياغة العربية واضحة وطبيعية ومناسبة لواجهة المستخدم.

### قواعد الترجمة

- عدّل القيم النصية فقط، ولا تعدّل مفاتيح JSON.
- حافظ على بنية JSON كما هي بدون حذف أو إضافة عناصر غير مطلوبة.
- لا تغيّر العناصر الديناميكية مثل `{0}` و `${name}` و `\n`.
- لا تغيّر النصوص البرمجية داخل `code` أو الأوامر أو المسارات أو الوسوم.
- لا تغيّر أسماء لغات البرمجة أو البرامج أو الشركات إلا إذا كان المشروع يعتمد تعريبًا لفظيًا ثابتًا لها.
- حافظ على الاتساق في الأزرار والعناصر الشائعة مثل: `فتح` و`إغلاق` و`حفظ` و`إلغاء`.

### إرشادات المراجعة

- تجنّب الترجمة الحرفية إذا كانت الصياغة الطبيعية أوضح للمستخدم.
- حسّن الرسائل الطويلة لتكون أسهل في الفهم بدون تغيير معناها.
- راجع النصوص المكررة وتأكد من توحيدها.
- عند الشك، اختر الصياغة الأبسط والأوضح.

### التحقق قبل إرسال التعديل

- تأكد أن ملفات JSON ما زالت صالحة.
- راجع أي placeholders أو سلاسل خاصة لم يتم كسرها.
- اختبر التعديلات داخل فيجوال ستوديو كود إن أمكن.
- إذا كان التعديل ظاهرًا للمستخدم، حدّث ملف `CHANGELOG.md`.

### أسلوب المساهمة

- أنشئ فرعًا واضح الاسم للتعديل.
- اجعل كل تعديل مركزًا على موضوع واحد قدر الإمكان.
- استخدم رسائل commit مختصرة وواضحة.
- افتح Pull Request مع وصف موجز لما تم تغييره ولماذا.

### عند فتح Issue أو Pull Request

- اذكر الملف أو الملفات المتأثرة.
- أضف أمثلة قبل/بعد عند تحسين الصياغة.
- وضّح إن كان التغيير تصحيح ترجمة أو تحسين أسلوب أو توحيد مصطلحات.

---

## English

### Before You Start

- Review the existing files before changing any translation.
- Keep terminology consistent across all translation files.
- Prefer Arabic wording that is clear, natural, and suitable for UI text.

### Translation Rules

- Edit text values only. Do not edit JSON keys.
- Preserve the JSON structure exactly as it is.
- Do not change dynamic tokens such as `{0}`, `${name}`, or `\n`.
- Do not alter code snippets, commands, paths, or tags.
- Do not rename programming languages, products, or companies unless the project already uses an established Arabic transliteration.
- Keep common UI terms consistent, such as `فتح`, `إغلاق`, `حفظ`, and `إلغاء`.

### Review Guidelines

- Avoid literal translation when a more natural phrasing is clearer.
- Improve long messages so they are easier to understand without changing meaning.
- Review repeated strings and keep them uniform.
- When in doubt, choose the simplest and clearest phrasing.

### Validation Before Submitting

- Make sure JSON files are still valid.
- Verify that placeholders and special sequences were not broken.
- Test the changes in Visual Studio Code when possible.
- If the change is user-facing, update `CHANGELOG.md`.

### Contribution Workflow

- Create a clearly named branch for your change.
- Keep each change focused on one topic when possible.
- Use short and clear commit messages.
- Open a Pull Request with a brief explanation of what changed and why.

### When Opening an Issue or Pull Request

- Mention the affected file or files.
- Include before/after examples for wording improvements.
- Clarify whether the change is a translation fix, style improvement, or terminology cleanup.
