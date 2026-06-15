# VS Code Localization Sync Audit

Generated: 2026-06-15T20:40:28.236Z

Upstream version: 1.125.0

Upstream engine: ^1.125.0

## Summary

- Local translation files: 94
- Upstream translation files: 94
- Missing files: 0
- Obsolete files: 0
- Missing keys: 1133
- Obsolete keys: 146
- New entries needing human Arabic translation: 1016

## Files With Structural Changes

| File | Missing keys | Obsolete keys | Needs translation |
| --- | ---: | ---: | ---: |
| `extensions/ms-vscode.js-debug.i18n.json` | 1 | 0 | 1 |
| `extensions/vscode.debug-server-ready.i18n.json` | 1 | 0 | 1 |
| `extensions/vscode.markdown-language-features.i18n.json` | 5 | 0 | 4 |
| `extensions/vscode.mermaid-markdown-features.i18n.json` | 6 | 0 | 6 |
| `extensions/vscode.npm.i18n.json` | 1 | 0 | 1 |
| `main.i18n.json` | 1119 | 146 | 1003 |

## Notes

- No local translation file is missing from the current upstream French language pack.
- No local translation file is obsolete against the current upstream French language pack.
- New keys are filled with a matching existing Arabic value when an identical section/key or leaf key already exists elsewhere. Otherwise the upstream French text is retained and tracked in `reports/needs-translation.json` with `__needs_translation: true`.
- Obsolete keys are removed during sync by rebuilding each JSON file from the upstream structure while preserving current Arabic values for keys that still exist.
