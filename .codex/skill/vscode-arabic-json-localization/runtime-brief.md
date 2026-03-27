# runtime-brief.md

## Project
VS Code Arabic JSON Localization

## Model
gpt-5.4

## Reasoning
- default: high
- heavy-review: xhigh

## Mission
Translate and review VS Code JSON localization files from French to Arabic with maximum accuracy while preserving:
- JSON validity
- placeholders
- escape sequences
- technical identifiers
- terminology consistency

## Files in Scope
- main.i18n.json
- package.json
- extensions/*.i18n.json

## Required References
Always read and follow:
1. AGENTS.md
2. SKILL.md
3. TERMINOLOGY.md

## Core Priorities
1. JSON validity
2. Preserve placeholders and expressions
3. Meaning accuracy
4. Natural Arabic UI phrasing
5. Terminology consistency
6. Avoid literal translation

## Translation Policy
- Translate only user-visible strings
- Do not translate JSON keys
- Do not translate command ids
- Do not translate configuration keys
- Do not translate internal identifiers
- Keep placeholders exactly as they are
- Keep escape sequences exactly as they are
- Prefer Arabic UI phrasing over literal wording
- Remove leftover French from visible UI strings
- Do not leave English in user-facing Arabic unless technically justified

## Large File Policy
For large files:
- translate in batches
- review each batch independently
- keep terminology consistent with previous batches
- run a final consistency pass on the whole file

Recommended batch size:
- 500 to 1500 lines
- or one logical section at a time

## Review Policy
When reviewing:
- fix only what needs fixing
- do not rewrite correct strings unnecessarily
- normalize technical terms using TERMINOLOGY.md
- normalize keyboard terms
- check for mixed Arabic/English/French strings
- check JSON validity after edits

## package.json Policy
Translate only user-visible fields such as:
- displayName
- description
- title
- command titles
- visible categories
- visible configuration descriptions

Do not translate:
- name
- publisher
- version
- engines
- scripts
- activationEvents
- command ids
- contributes keys
- configuration property names

## Output Policy
For translation tasks:
- output JSON only

For review tasks:
- edit only the necessary parts
- optionally provide a very short summary after finishing

## Final Goal
Deliver Arabic localization that reads naturally to Arabic-speaking VS Code users, preserves all technical integrity, and stays consistent across the full project.