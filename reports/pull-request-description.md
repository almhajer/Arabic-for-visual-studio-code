## Summary

This PR performs a full synchronization and repository modernization for the Arabic Language Pack for Visual Studio Code.

## What Changed

- synced the Arabic localization files against the latest Microsoft `vscode-loc` French sources
- preserved existing Arabic translations for keys still present upstream
- imported new upstream keys and removed obsolete ones
- raised the extension version and VS Code engine compatibility to `1.125.0`
- modernized marketplace metadata, documentation, contribution guidance, and security policy
- added repeatable audit and validation scripts
- added a screenshot asset under `docs/images/`

## Localization Audit

- upstream translation files compared: `94`
- local translation files compared: `94`
- missing translation files: `0`
- obsolete translation files: `0`
- upstream keys added: `1133`
- obsolete keys removed: `146`
- newly imported entries still needing human Arabic translation: `1016`

See:

- `reports/localization-sync-audit.md`
- `reports/needs-translation.json`
- `reports/repository-quality-audit.md`

## Validation

- JSON validation
- localization validation
- markdown linting
- extension packaging via `vsce package`

## Notes

- New untranslated entries currently retain upstream source text and are tracked separately for human completion.
- The sync intentionally preserves current Arabic translations where matching keys already exist.
