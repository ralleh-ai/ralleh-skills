# Ralleh Skills Naming Standard

## Purpose

Keep the skill repository predictable for humans and bots. A bot should be able to infer where to find overview, install, doctor, and prompt guidance for any skill without guessing.

## Repository layout

```text
README.md
bundles/
  README.md
  <bundle-slug>/
    README.md
skills/
  README.md
  <FamilyName>/
    README.md
    <SkillName>/
      README.md
      INSTALL.md      # optional
      DOCTOR.md       # optional
      PROMPTS.md      # optional
templates/
  *_TEMPLATE.md
scripts/
  check-names.mjs
```

## Folder names

- Root management folders are lowercase: `bundles`, `docs`, `scripts`, `skills`, `templates`.
- Bundle folders use lowercase kebab-case: `onboarding`, `new-agent`, `memory-stack`.
- Skill family folders use PascalCase: `Foundation`, `Engineering`, `Memory`, `Operations`.
- Skill folders use PascalCase with no spaces, underscores, or hyphens: `Engram`, `RecallWorkflow`, `GitRepoDiscipline`.

## File names

- Every folder intended as an entry point has `README.md`.
- Skill companion files use uppercase role names with a lowercase `.md` extension:
  - `INSTALL.md` — install/configure/verify/operate.
  - `DOCTOR.md` — troubleshooting and health checks.
  - `PROMPTS.md` — user-facing prompt suggestions.
- Templates use `SCREAMING_SNAKE_TEMPLATE.md`.
- No loose skill instruction files are allowed directly under a family folder. Put each skill in its own folder.

## Enforcement

Run this before committing:

```bash
node scripts/check-names.mjs
```

The check fails on non-standard folders, loose family-level skill files, missing skill `README.md` files, and broken local Markdown links.
