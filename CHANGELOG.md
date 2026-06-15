# سجل التغييرات | Changelog

يوثّق هذا الملف أبرز التغييرات في المشروع.

This file documents notable changes in the project.

يعتمد هذا الملف أسلوبًا بسيطًا قريبًا من Keep a Changelog.

This file follows a simple format inspired by Keep a Changelog.

---

## [Unreleased]

### العربية

- مزامنة ملفات الترجمة مع مرجع Microsoft `vscode-loc` حتى الإصدار `1.125.0`.
- تحديث `package.json` لرفع توافق VS Code وتحسين الوصف والكلمات المفتاحية وسكربتات التحقق.
- تحديث ملفات التوثيق والسياسات: `README.md` و`README_EN.md` و`CONTRIBUTING.md` و`SECURITY.md`.
- إضافة تقارير تدقيق المزامنة وملفات دعم التحقق الآلي.
- ترجمة جميع المفاتيح الجديدة التي كانت موثقة في `reports/needs-translation.json`.

### English

- Synced localization files against Microsoft `vscode-loc` version `1.125.0`.
- Updated `package.json` compatibility, metadata, keywords, and validation scripts.
- Refreshed repository documentation and policy files.
- Added sync audit output and repeatable validation helpers.
- Translated all newly imported keys previously tracked in `reports/needs-translation.json`.

---

## [1.125.2]

### العربية

- توسيع توافق الحزمة مع إصدارات VS Code ضمن السلسلة `1.x` لضمان وصول التحديث التلقائي إلى شريحة أوسع من المستخدمين.

### English

- Relaxed the VS Code engine compatibility range across the `1.x` release line so automatic updates can reach more users.

---

## [1.125.1]

### العربية

- رفع إصدار الحزمة إلى `1.125.1` مع الحفاظ على التوافق مع مرجع ترجمة Microsoft `1.125.0`.
- إضافة `1133` مفتاحًا من upstream وإزالة `146` مفتاحًا لم تعد موجودة.
- الحفاظ على الترجمات العربية الحالية لكل المفاتيح المستمرة.
- ترجمة `1016` إدخالًا جديدًا كانت بحاجة إلى ترجمة عربية.
- تحديث README وإضافة قسم Impact ولقطة شاشة وسياسات المساهمة والأمان.

### English

- Bumped the extension to `1.125.1` while keeping compatibility with the Microsoft localization baseline `1.125.0`.
- Added `1133` upstream keys and removed `146` obsolete keys.
- Preserved existing Arabic translations for keys still present upstream.
- Translated `1016` newly imported entries that previously needed Arabic localization.
- Modernized the README, added Impact metrics, screenshot coverage, and contribution/security guidance.

---

## [0.0.16]

### العربية

- رفع رقم الإصدار إلى `0.0.16`.
- مزامنة `translations/main.i18n.json` مع مفاتيح Microsoft الحالية وإزالة المفاتيح الزائدة.
- مزامنة ملفات `translations/extensions` مع مرجع Microsoft الحالي.
- إضافة ترجمة `vscode.mermaid-markdown-features`.
- إضافة المفاتيح الناقصة في ملفات الإضافات المدمجة، مع الحفاظ على سلامة JSON والرموز النائبة.

### English

- Bumped the extension version to `0.0.16`.
- Synced `translations/main.i18n.json` with the current Microsoft keys and removed extra keys.
- Synced `translations/extensions` with the current Microsoft reference.
- Added `vscode.mermaid-markdown-features` localization.
- Added missing bundled extension keys while preserving JSON validity and placeholders.

---

## [0.0.15]

### العربية

- رفع رقم الإصدار إلى `0.0.15`.
- تحديث مراجع الإصدار في ملفات الحزمة والتوثيق.

### English

- Bumped the extension version to `0.0.15`.
- Updated version references across package metadata and documentation.

---

## [0.0.14]

### العربية

- رفع رقم الإصدار إلى `0.0.14`.
- تحديث مراجع الإصدار في ملفات الحزمة والتوثيق.

### English

- Bumped the extension version to `0.0.14`.
- Updated version references across package metadata and documentation.

---

## [0.0.12]

### العربية

- تحسينات عامة على ملفات الترجمة العربية وصياغة النصوص.
- إضافة ملف `CONTRIBUTING.md` للمساهمة بالعربية والإنجليزية.
- إضافة ملف `CHANGELOG.md`.
- تحسين ملف `LICENSE.txt` وتوحيد بيانات الترخيص في `package.json`.
- تحديث روابط ووصف الإصدار في ملفات التوثيق.

### English

- General improvements to Arabic localization files and text phrasing.
- Added `CONTRIBUTING.md` in Arabic and English.
- Added `CHANGELOG.md`.
- Improved `LICENSE.txt` and aligned license metadata in `package.json`.
- Updated release references in the documentation.

---

## [0.0.11]

### العربية

- الإصدار الحالي المسجل في `package.json`.
- تتضمن الحزمة ترجمة واجهة فيجوال ستوديو كود وملفات ترجمة للإضافات المضمنة.

### English

- Current version listed in `package.json`.
- The package includes translations for the Visual Studio Code interface and bundled extension localization files.
