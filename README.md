# Arabic Language Pack for Visual Studio Code | حزمة اللغة العربية لـ Visual Studio Code

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/Arabic-language.vscode-ar?label=Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=Arabic-language.vscode-ar)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/Arabic-language.vscode-ar?label=Downloads)](https://marketplace.visualstudio.com/items?itemName=Arabic-language.vscode-ar)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/Arabic-language.vscode-ar?label=Rating)](https://marketplace.visualstudio.com/items?itemName=Arabic-language.vscode-ar)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE.md)

Arabic localization for Visual Studio Code, synchronized with the latest Microsoft language-pack sources and maintained for Arabic-speaking developers.

تعريب واجهة Visual Studio Code إلى العربية، متزامن مع ملفات الترجمة الرسمية من Microsoft ومهيأ لتجربة استخدام واضحة للمطورين الناطقين بالعربية.

## Impact

| Metric | Value |
| --- | ---: |
| Acquisitions — last 30 days | 1,511 |
| Acquisitions — till date | 22,205 |
| Page views — last 30 days | 291 |
| Acquisition funnel | 519.24% (1.5K) |

Marketplace Insights reports 1,511 acquisitions in the last 30 days and 22,205 acquisitions to date. Its conversion funnel shows 291 page views and 1.5K acquisitions (519.24%). Checked on 2026-10-03; Marketplace metrics change over time.

تعرض إحصاءات Marketplace عدد 1,511 عملية اكتساب خلال آخر 30 يومًا و22,205 عملية حتى الآن. ويعرض مسار التحويل 291 مشاهدة للصفحة و1.5 ألف عملية اكتساب (519.24%). تم التحقق من الأرقام في 2026-10-03، وهي تتغير بمرور الوقت.

## Screenshots

![Arabic Language Pack in VS Code](docs/images/vscode-arabic-language-pack.png)

## Features

- Synchronizes with the latest upstream VS Code localization structure.
- Covers the VS Code workbench and bundled extension translations.
- Preserves placeholders, command identifiers, and JSON integrity.
- Uses consistent Arabic UI terminology across the project.

- مزامنة مع أحدث بنية ترجمة رسمية لواجهة VS Code.
- تغطية لترجمة واجهة VS Code والإضافات المدمجة.
- الحفاظ على placeholders والمعرّفات التقنية وسلامة JSON.
- توحيد المصطلحات العربية المناسبة لواجهات الاستخدام.

## Installation

### English

1. Open Extensions in Visual Studio Code.
2. Search for `Arabic Language Pack`.
3. Install the extension published by `Arabic-language`.
4. Run `Configure Display Language`.
5. Choose `العربية`, then reload VS Code.

### العربية

1. افتح قسم الإضافات في Visual Studio Code.
2. ابحث عن `Arabic Language Pack`.
3. ثبّت الإضافة المنشورة من `Arabic-language`.
4. نفّذ الأمر `Configure Display Language`.
5. اختر `العربية` ثم أعد تحميل VS Code.

## Usage

### English

- Open the Command Palette with `Ctrl+Shift+P` or `Cmd+Shift+P`.
- Run `Configure Display Language`.
- Select Arabic and restart the editor if prompted.

### العربية

- افتح لوحة الأوامر عبر `Ctrl+Shift+P` أو `Cmd+Shift+P`.
- نفّذ الأمر `Configure Display Language`.
- اختر العربية ثم أعد تشغيل المحرر عند الطلب.

## Contributing

Contributions are welcome for translation quality, terminology consistency, release tooling, and documentation.

نرحّب بالمساهمات في تحسين جودة الترجمة، وتوحيد المصطلحات، وأدوات الإصدار، والتوثيق.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full workflow.

راجع [CONTRIBUTING.md](./CONTRIBUTING.md) لمعرفة آلية العمل بالتفصيل.

## Security

Please report vulnerabilities privately as described in [SECURITY.md](./SECURITY.md).

يرجى الإبلاغ عن الثغرات أمنيًا وبشكل خاص وفق ما هو موضح في [SECURITY.md](./SECURITY.md).

## Release Process

### English

1. Compare every localization file and `(section, key)` pair with the current French package.
2. Translate every new user-facing value and review terminology and placeholders.
3. Run the available JSON, localization, Markdown, and packaging checks.
4. Update `CHANGELOG.md` and the package version.
5. Inspect the VSIX, then publish the tagged release and extension.

### العربية

1. قارن كل ملف ترجمة وزوج `(section, key)` بأحدث حزمة فرنسية.
2. ترجم كل قيمة واجهة جديدة وراجع المصطلحات والـ placeholders.
3. شغّل فحوص JSON والتعريب وMarkdown والتغليف المتاحة في المشروع.
4. حدّث `CHANGELOG.md` ورقم النسخة.
5. افحص ملف VSIX ثم انشر الإصدار الموسوم والإضافة.

## Roadmap

- Complete human translation for all newly imported upstream keys.
- Automate upstream diff reporting in CI.
- Add release automation for VSIX packaging and validation.
- Expand reviewer guidance for terminology and UI tone.

- استكمال الترجمة البشرية لجميع المفاتيح الجديدة المستوردة من upstream.
- أتمتة تقارير الفروقات مع upstream ضمن CI.
- إضافة أتمتة لتغليف VSIX والتحقق قبل الإصدار.
- توسيع إرشادات المراجعة الخاصة بالمصطلحات وأسلوب الواجهة.

## Repository Links

- Marketplace: https://marketplace.visualstudio.com/items?itemName=Arabic-language.vscode-ar
- Repository: https://github.com/almhajer/Arabic-for-visual-studio-code
- Issues: https://github.com/almhajer/Arabic-for-visual-studio-code/issues

## License

This project is licensed under the MIT License. See [LICENSE.md](./LICENSE.md).

هذا المشروع مرخّص بموجب رخصة MIT. راجع [LICENSE.md](./LICENSE.md).
