# TERMINOLOGY.md

name: vscode-arabic-terminology-normalization

description: >
  مرجع توحيد المصطلحات لمشروع تعريب ملفات JSON الخاصة ببرنامج VS Code
  من الفرنسية إلى العربية. يهدف هذا الملف إلى ضبط ترجمة المصطلحات التقنية،
  والاختصارات، وأسماء الواجهات، ومفاتيح لوحة المفاتيح، وبقايا الإنجليزية
  والفرنسية، بحيث تكون الترجمة العربية طبيعية، دقيقة، ومتسقة في كامل المشروع.

## الهدف
استخدم هذا الملف عند الترجمة أو المراجعة من أجل:
- توحيد المصطلحات في كامل المشروع
- إزالة البقايا الإنجليزية والفرنسية من النصوص الظاهرة للمستخدم
- تحديد ما يجب تعريبه بالكامل
- تحديد ما يجوز إبقاؤه تقنيًا مع صياغة عربية واضحة
- منع الترجمة الحرفية أو الهجينة غير الطبيعية
- جعل واجهة VS Code تبدو وكأنها مكتوبة أصلًا بالعربية

---

## القاعدة العامة

### 1) النص الظاهر للمستخدم يجب أن يكون عربيًا طبيعيًا
إذا ظهر المصطلح داخل:
- عنوان
- وصف
- رسالة خطأ
- عنصر قائمة
- تسمية زر
- تلميح واجهة
- شرح إعداد

فالأولوية لصياغة عربية واضحة ومفهومة.

### 2) أسماء التقنيات والمنتجات قد تبقى كما هي عند الحاجة
يجوز إبقاء أسماء مثل:
- Git
- JSON
- OAuth
- IntelliSense
- TextMate
- Bash
- PowerShell

لكن:
- يجب أن تكون العبارة العربية المحيطة بها واضحة
- لا يُترك المصطلح الإنجليزي أو الاختصار وحده داخل جملة عربية مرتبكة
- إذا احتاج المستخدم المعنى، يوضح عربيًا داخل السياق

### 3) البقايا الفرنسية يجب تعريبها بالكامل
أي كلمة أو عبارة فرنسية ظاهرة للمستخدم يجب ترجمتها إلى العربية، ما لم تكن اسمًا ثابتًا أو قيمة تقنية غير معروضة للمستخدم.

### 4) لا تترجم العناصر التقنية الداخلية
لا تترجم:
- مفاتيح JSON
- command ids
- configuration keys
- identifiers
- أسماء الخصائص البرمجية
- القيم التقنية الداخلية
- placeholders
- escape sequences

---

## ترتيب القرار عند الحسم
إذا احتجت اتخاذ قرار ترجمي، استخدم هذا الترتيب:
1. سلامة JSON
2. الحفاظ على placeholders والمتغيرات
3. صحة المعنى
4. وضوح العربية للمستخدم
5. الاتساق الاصطلاحي
6. الإيجاز المناسب

---

## قواعد ثابتة للمشروع

### يجب تعريبه بالكامل
- المصطلحات الواجهية العامة
- الأفعال الظاهرة للمستخدم
- رسائل الحالة والخطأ
- أوصاف الإعدادات
- عناصر التنقل
- النصوص الفرنسية المتبقية

### يجوز إبقاؤه تقنيًا
- أسماء منتجات وتقنيات مشهورة
- الاختصارات القياسية المعروفة للمطورين
- أسماء أدوات أو منصات ثابتة
- بعض المصطلحات التي يؤدي تعريبها الحرفي إلى إرباك المستخدم

### عند الإبقاء على المصطلح
يجب أن يكون داخل جملة عربية سليمة.

مثال:
- غير جيد: `استخدم URL`
- أفضل: `استخدم عنوان URL`
- غير جيد: `تم رفض OAuth`
- أفضل: `تم رفض المصادقة عبر OAuth`

---

## المصطلحات التقنية والاختصارات

### تنسيق وملفات ومعايير
- JSON → JSON / ملفات JSON
- URL → عنوان URL
- URI → عنوان URI
- MIME → نوع MIME / أنواع MIME
- ANSI → ANSI
- PCRE2 → PCRE2
- UTF-8 → UTF-8
- ASCII → ASCII
- XML → XML / ملفات XML
- YAML → YAML / ملفات YAML
- CSV → CSV / ملفات CSV

### سطر الأوامر والتشغيل
- CLI → واجهة سطر الأوامر (CLI)
- Copilot CLI → Copilot CLI / عميل Copilot لواجهة سطر الأوامر حسب السياق
- REPL → بيئة REPL التفاعلية
- Runtime → بيئة التشغيل
- Runtime Extensions → إضافات بيئة التشغيل
- Process → عملية
- Background Process → عملية في الخلفية
- Shell → الصدفة
- Integrated Shell → الصدفة المدمجة
- Command Line → سطر الأوامر

### التعبيرات والأنماط والنحو
- RegExp → تعبير نمطي
- Regular Expression → تعبير نمطي
- Pattern → نمط
- Match → مطابقة
- Replace Pattern → نمط الاستبدال
- Capture Group → مجموعة التقاط
- Flags → علامات

### الويب والعرض
- Webview → عرض ويب
- Web Worker → عامل ويب
- Browser → المتصفح
- Embedded Browser → المتصفح المضمّن
- Simple Browser → المتصفح البسيط
- Network → الشبكة
- Proxy → وكيل
- Port → منفذ
- Localhost → المضيف المحلي

### الإدخال والتحرير والنصوص
- IME → أسلوب الإدخال / محرر أساليب الإدخال
- TextMate → TextMate
- Markdown → Markdown / ملفات Markdown
- Notebook → دفتر ملاحظات
- Cell → خلية
- Snippet → مقتطف
- Inline Edit → تحرير مضمن
- Suggestion → اقتراح
- Completion → إكمال
- Hover → تمرير
- Selection → تحديد
- Cursor → مؤشر
- Caret → موضع المؤشر
- Clipboard → الحافظة

### أجزاء واجهة VS Code
- Workbench → بيئة العمل
- View → عرض
- Panel → لوحة
- Pane → جزء
- Sidebar → الشريط الجانبي
- Activity Bar → شريط النشاط
- Status Bar → شريط الحالة
- Editor → المحرر
- Diff Editor → محرر المقارنة
- Explorer → المستكشف
- Output → المخرجات
- Terminal → الطرفية
- Problems → المشكلات
- Debug Console → وحدة تحكم التصحيح
- Open Editors → المحررات المفتوحة
- Preview → معاينة
- Tab → علامة تبويب
- Group → مجموعة
- Layout → تخطيط
- Focus → تركيز
- Accessible View → العرض الميسّر
- Screen Reader → قارئ الشاشة
- Notifications → الإشعارات

### أدوات وميزات معروفة
- IntelliSense → IntelliSense / الإكمال الذكي
- CodeLens → CodeLens
- Emmet → Emmet
- TextMate Grammar → قواعد TextMate
- Extension Host → مضيف الإضافات
- Dev Containers → حاويات التطوير
- Settings Sync → مزامنة الإعدادات
- Profiles → ملفات التعريف
- Chat → الدردشة
- Prompt → مطالبة
- Quick Pick → الاختيار السريع
- Peek View → عرض المعاينة
- Breadcrumbs → مسار التنقل
- Walkthrough → دليل البدء
- Keybinding → ربط المفاتيح
- Keyboard Shortcut → اختصار لوحة المفاتيح

### التصحيح والتنفيذ
- Debug → تصحيح الأخطاء
- Start Debugging → بدء تصحيح الأخطاء
- Stop Debugging → إيقاف تصحيح الأخطاء
- Restart Debugging → إعادة تشغيل تصحيح الأخطاء
- Breakpoint → نقطة توقف
- Breakpoints → نقاط التوقف
- Call Stack → مكدس الاستدعاءات
- Watch → المراقبة
- Variable → متغير
- Exception → استثناء
- Step Into → الدخول إلى
- Step Out → الخروج من
- Step Over → التخطي
- Continue → متابعة

### مستودعات وشبكات ومصادقة
- Git → Git
- GitHub → GitHub
- OAuth → OAuth / المصادقة عبر OAuth
- MCP → بروتوكول سياق النموذج (MCP) عند السياق التعريفي
- SSH → SSH / اتصال SSH
- HTTP → HTTP
- HTTPS → HTTPS
- API → API / واجهة برمجة التطبيقات
- Token → رمز وصول / رمز
- Authentication → المصادقة
- Authorization → التخويل
- Sign In → تسجيل الدخول
- Sign Out → تسجيل الخروج

### أنظمة ومنصات
- Windows → Windows
- macOS → macOS
- Linux → Linux
- Bash → Bash
- PowerShell → PowerShell
- Finder → Finder
- Explorer (Windows) → مستكشف الملفات
- Marketplace → المتجر
- Extension Marketplace → متجر الإضافات

---

## مفاتيح لوحة المفاتيح

### قاعدة عامة
- أسماء المفاتيح الفعلية تبقى غالبًا كما هي
- تُترجم الجملة المحيطة بها إلى العربية
- عند الحاجة الوصفية، استخدم صياغة عربية مفهومة

### صيغ موصى بها
- Ctrl → Ctrl
- Shift → Shift
- Alt → Alt
- Tab → Tab
- Enter → Enter
- Esc / Escape → Esc
- Space → مفتاح المسافة
- Backspace → Backspace
- Delete → Delete
- Insert → Insert
- Home → Home
- End → End
- Page Up → Page Up
- Page Down → Page Down
- Up → السهم لأعلى
- Down → السهم لأسفل
- Left → السهم لليسار
- Right → السهم لليمين
- Arrow Keys → مفاتيح الأسهم
- Command / Cmd → Command
- Option → Option
- Windows Key → مفتاح Windows
- Numpad → لوحة الأرقام
- Numpad Enter → Enter في لوحة الأرقام

### مصطلحات مرتبطة بالمفاتيح
- Keyboard Shortcut → اختصار لوحة المفاتيح
- Keyboard Shortcuts → اختصارات لوحة المفاتيح
- Keybinding → ربط المفاتيح
- Keybindings → عمليات ربط المفاتيح
- Shortcut → اختصار
- Press → اضغط
- Press and Hold → اضغط مع الاستمرار على
- Release → حرر
- Toggle → تبديل
- Chord → تسلسل مفاتيح

### أمثلة صحيحة
- Press Enter to continue → اضغط Enter للمتابعة
- Press Ctrl+C to copy → اضغط Ctrl+C للنسخ
- Use the arrow keys to navigate → استخدم مفاتيح الأسهم للتنقل
- Press Space to select → اضغط مفتاح المسافة للتحديد

### صيغ غير مفضلة
تجنب غالبًا:
- Ctrl → التحكم
- Shift → التحويل
- Alt → البديل
- Tab → الجدولة
- Esc → الهروب
- Backspace → مسافة للخلف

---

## مصطلحات واجهية شائعة

### أفعال واجهة
- Open → فتح
- Close → إغلاق
- Save → حفظ
- Save As → حفظ باسم
- Copy → نسخ
- Cut → قص
- Paste → لصق
- Delete → حذف
- Remove → إزالة
- Rename → إعادة تسمية
- Select → تحديد
- Deselect → إلغاء التحديد
- Search → بحث
- Replace → استبدال
- Refresh / Reload → إعادة التحميل
- Undo → تراجع
- Redo → إعادة
- Retry → إعادة المحاولة
- Cancel → إلغاء
- Apply → تطبيق
- Configure → تهيئة
- Reset → إعادة التعيين
- Restore → استعادة
- Enable → تمكين
- Disable → تعطيل
- Install → تثبيت
- Uninstall → إلغاء التثبيت
- Update → تحديث
- Filter → تصفية
- Clear → مسح
- Sort → فرز
- Move → نقل
- Split → تقسيم
- Collapse → طي
- Expand → توسيع
- Compare → مقارنة

### حالات ورسائل
- Loading → جارٍ التحميل
- Running → قيد التشغيل
- Processing → جارٍ المعالجة
- Completed → اكتمل
- Failed → فشل
- Succeeded → نجح
- Disabled → معطل
- Enabled → ممكّن
- Read Only → للقراءة فقط
- Modified → تم التعديل
- Pending → معلّق
- Warning → تحذير
- Error → خطأ
- Information → معلومات

---

## مصطلحات إعدادات وتكوين

### صيغ مفضلة في أوصاف الإعدادات
- Controls whether ... → يحدد ما إذا كان ...
- Specifies ... → يحدد ...
- Defines ... → يعرّف ...
- Enables ... → يمكّن ...
- Disables ... → يعطّل ...
- Sets the ... → يعيّن ...
- Configure ... → هيّئ ...
- The maximum number of ... → الحد الأقصى لـ ...
- The default value is ... → القيمة الافتراضية هي ...
- When enabled ... → عند التمكين ...
- When disabled ... → عند التعطيل ...
- If set to true ... → إذا تم تعيينه إلى true ...
- If set to false ... → إذا تم تعيينه إلى false ...

### مصطلحات أساسية
- Setting → إعداد
- Settings → الإعدادات
- Configuration → التكوين / الإعدادات بحسب السياق
- Configure / Configuration Schema → مخطط التكوين إذا كان تقنيًا، أو وصف إعدادات طبيعي إذا كان للمستخدم
- Default → افتراضي
- Custom → مخصص
- Value → قيمة
- Option → خيار
- Options → خيارات

---

## بقايا فرنسية يجب تعريبها بالكامل

### كلمات مفردة
- Ligne → السطر
- colonne → العمود
- Objet → كائن
- Valide → صالح
- Retour → رجوع
- Recharger → إعادة التحميل
- Navigateur → المتصفح
- Bienvenue → مرحبًا
- Ignorer → تجاهل
- Fermeture → الإغلاق
- Jours → الأيام

### عبارات
- Comportement du focus → سلوك التركيز
- Traitement en cours → المعالجة جارية
- Texte de remplacement → نص الاستبدال
- Conserver la casse → مطابقة حالة الأحرف
- Vous recherchez → أنت تبحث عن
- Vous filtrez la sortie → أنت تصفي المخرجات
- Journaux de la console → سجلات وحدة التحكم
- Nouvel onglet → علامة تبويب جديدة
- Contactez votre administrateur → تواصل مع المسؤول
- examiner l’extension → مراجعة الإضافة
- Annoncer la position du curseur → الإعلان عن موضع المؤشر

---

## صيغ يجب تحسينها إن ظهرت كما هي

### غير مرغوب
- Open Accessible View
### الصياغة الأفضل
- فتح العرض الميسّر

### غير مرغوب
- Focus on Output
### الصياغة الأفضل
- التركيز على المخرجات

### غير مرغوب
- Keep Open
### الصياغة الأفضل
- الإبقاء مفتوحًا

### غير مرغوب
- Max Preview
### الصياغة الأفضل
- أقصى عدد للمعاينات
أو
- الحد الأقصى للمعاينة
بحسب السياق

### غير مرغوب
- Runtime extensions
### الصياغة الأفضل
- إضافات بيئة التشغيل

### غير مرغوب
- Modal Editor
### الصياغة الأفضل
- محرر نمطي
أو
- محرر قائم على الأوضاع
بحسب السياق

### غير مرغوب
- Debug: Step Out
### الصياغة الأفضل
- تصحيح الأخطاء: الخروج من

### غير مرغوب
- Debug: Step Over
### الصياغة الأفضل
- تصحيح الأخطاء: التخطي

### غير مرغوب
- Debug: Step Into
### الصياغة الأفضل
- تصحيح الأخطاء: الدخول إلى

---

## قواعد خاصة بالمراجعة

### عند رؤية كلمة إنجليزية داخل نص عربي
اسأل:
1. هل هي اسم تقنية ثابت؟
2. هل تعريبها الحرفي سيضر الوضوح؟
3. هل يمكن صياغتها عربيًا مع إبقاء الاسم؟
4. هل يحتاج المستخدم معناها بالعربية؟

### عند رؤية بقايا فرنسية
- ترجَمها بالكامل
- لا تُبقِها داخل النص الظاهر للمستخدم

### عند رؤية مصطلح مكرر بصيغ مختلفة
- اختر صيغة واحدة
- طبّقها على جميع المواضع المتشابهة

### عند رؤية ترجمة حرفية
- استبدلها بعبارة عربية وظيفية
- قدّم الوضوح على الالتصاق الحرفي

---

## أمثلة معيارية

- "Ligne {0}, colonne {1}" → "السطر {0}، العمود {1}"
- "Open Accessible View" → "فتح العرض الميسّر"
- "Runtime used for Windows" → "بيئة التشغيل المستخدمة في Windows"
- "RegExp flags" → "علامات التعبير النمطي"
- "Use the arrow keys to navigate" → "استخدم مفاتيح الأسهم للتنقل"
- "Keyboard shortcut" → "اختصار لوحة المفاتيح"
- "Comportement du focus" → "سلوك التركيز"
- "Conserver la casse" → "مطابقة حالة الأحرف"
- "URL of the server" → "عنوان URL للخادم"
- "Authenticate with OAuth" → "المصادقة عبر OAuth"

---

## الصيغة النهائية المعتمدة
في هذا المشروع:
- العربية هي الأساس في النصوص الظاهرة للمستخدم
- التقنية تبقى تقنية فقط عند الضرورة
- لا تبقَ بقايا فرنسية
- لا تبقَ عبارات هجينة غير طبيعية
- لا تُستخدم ترجمة حرفية ركيكة
- يجب أن تبدو الترجمة وكأنها مكتوبة أصلًا بالعربية لمستخدم VS Code
