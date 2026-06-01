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
    IDENTITY.md
    AGENTS.md
    SKILLS.md
    TOOLS.md
    DOCTOR.md
    GUIDELINES.md
    WORKFLOWS.md
    MEMORY.md
    USER.md
    PATTERNS.md
  Evaluation/
    AgentFileAudit.md
  <role-slug>/
    README.md
    SOUL.md
    IDENTITY.md
    AGENTS.md
    SKILLS.md
    TOOLS.md
    DOCTOR.md
    GUIDELINES.md
    WORKFLOWS.md
    MEMORY.md
    USER.md
    PATTERNS.md
    examples/
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
      INSTALL.md      # required setup/readiness guidance
      DOCTOR.md       # required troubleshooting and stop conditions
      PROMPTS.md      # required safe prompt examples
scripts/
  check-repo.mjs
```

## Folder names

- Root management folders are lowercase: `agents`, `docs`, `mcp`, `pages`, `scripts`, `skills`.
- Agent role folders use lowercase kebab-case and must include the required role files, an LLM-readable file index in `README.md`, and an `examples/` folder.
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

The check fails on non-standard folders, loose family-level skill files, missing required companion files, missing role-agent files, missing role README file indexes, thin skill READMEs, broken local Markdown links, unsupported temp folders, and unsafe placeholder language.
