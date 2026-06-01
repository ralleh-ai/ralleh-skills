# Ralleh Skills Naming Standard

## Purpose

Keep the skill repository predictable for humans and bots. A bot should be able to infer where to find overview, install, doctor, and prompt guidance for any skill without guessing.

## Repository layout

```text
README.md
agents/
  README.md
  Definitions/
    SOUL.md
    TOOLS.md
    AGENTS.md
    MEMORY.md
    USER.md
    PATTERNS.md
  Evaluation/
    AgentFileAudit.md
docs/
  NAMING_STANDARD.md
  GOLDEN_CONTENT_STANDARD.md
mcp/
  README.md
pages/
  <page-slug>/
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
scripts/
  check-repo.mjs
```

## Folder names

- Root management folders are lowercase: `agents`, `docs`, `mcp`, `pages`, `scripts`, `skills`.
- Page folders use lowercase kebab-case: `onboarding`, `new-agent`, `memory-stack`.
- Skill family folders use PascalCase: `Foundation`, `Engineering`, `Memory`, `Operations`.
- Skill folders use PascalCase with no spaces, underscores, or hyphens: `Engram`, `RecallWorkflow`, `GitRepoDiscipline`.

## File names

- Every folder intended as an entry point has `README.md`.
- Skill companion files use uppercase role names with a lowercase `.md` extension:
  - `INSTALL.md` — install/configure/verify/operate.
  - `DOCTOR.md` — troubleshooting and health checks.
  - `PROMPTS.md` — user-facing prompt suggestions.
- No loose skill instruction files are allowed directly under a family folder. Put each skill in its own folder.

## Enforcement

Run this before committing:

```bash
node scripts/check-repo.mjs
```

The check fails on non-standard folders, loose family-level skill files, missing `README.md` entrypoints, broken local Markdown links, unsupported temp folders, and unsafe placeholder language.
