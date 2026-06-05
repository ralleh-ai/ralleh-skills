# Ralleh Skills

> A golden operating library for AI workers: reusable skills, safety standards, installation runbooks, troubleshooting guides, and source-backed workflows that bots can read directly from GitHub.

Ralleh Skills is a curated capability library.
It is not the source of truth for role-agent ownership anymore.

That split is now:

- **`ralleh-skills`** = reusable skills, runbooks, safety, workflow guidance
- **`ralleh-agents`** = templates, roles, generated agents, custom agents, role overlays, agent composition

---

## Start here

- [`pages/onboarding/README.md`](pages/onboarding/README.md) — first instructions a bot should read when entering a Ralleh-managed environment.
- [`skills/README.md`](skills/README.md) — complete skill map by family.
- [`agents/README.md`](agents/README.md) — agent file standards and evaluation guidance.
- [`mcp/README.md`](mcp/README.md) — Ralleh MCP service family overview, runtime map, and safety boundaries.
- [`docs/GOLDEN_CONTENT_STANDARD.md`](docs/GOLDEN_CONTENT_STANDARD.md) — what belongs in this public golden repo.
- [`docs/NAMING_STANDARD.md`](docs/NAMING_STANDARD.md) — folder and file naming rules.

---

## What this repo contains

```text
ralleh-skills/
├── pages/                  # curated multi-skill reading paths
├── skills/                 # golden reusable skills by capability family
├── agents/                 # agent file standards and evaluation guidance
├── mcp/                    # Ralleh MCP service family overview
├── docs/                   # governance, naming, and quality standards
└── scripts/                # repo validation and quality gates
```

Each skill follows the same golden pattern:

```text
skills/<Family>/<Skill>/
├── README.md
├── INSTALL.md
├── DOCTOR.md
└── PROMPTS.md
```

---

## Core principles

### Golden, not noisy
This repo contains reusable, production-quality instruction. No scratch notes. No half-finished prompt experiments. No customer secrets. No environment-specific credentials.

### Skills over improvisation
A skill is a compact operating capability: what to do, what not to do, how to verify, and how to recover.

### Verification before done
A bot is not done when it thinks it is done. It is done when it has evidence.

### Safety by default
External effects are gated. Reads are usually safe. Writes, purchases, posts, emails, public changes, permission changes, destructive actions, and billing changes require explicit approval.

### Public/private split
This public repo contains reusable instructions. Customer-specific hosts, internal URLs, credentials, private runbooks, and sensitive procedures belong in the private overlay repo.

---

## Agent ownership note

This repo still contains:
- `agents/Definitions/`
- `agents/Evaluation/`

These remain here because they are **standards and audit guidance**.

Role-specific agent ownership has moved to:
- `ralleh-agents`

That repo now owns:
- role definitions
- role overlays
- template composition
- generated agents
- custom agents

If you need a role package such as IT, Sales, or Finance, use `ralleh-agents`.

---

## How bots should use this repo

1. Read onboarding.
2. Identify the relevant skill family.
3. Read the specific skill `README.md`.
4. Read `INSTALL.md` only when installing or verifying setup.
5. Read `DOCTOR.md` when troubleshooting.
6. Read `PROMPTS.md` for safe user-facing request patterns.
7. Verify before reporting success.

---

## Quality gate

Before changes are committed, run:

```bash
node scripts/check-repo.mjs
git diff --check
```

---

## The standard

Ralleh agents should be able to read this repository and become better immediately.

Not louder. Better.
More precise. More careful. More capable. More accountable.
