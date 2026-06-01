# Ralleh Skills

Public, bot-readable skill instructions for Ralleh AI agents.

Each skill is a self-contained Markdown guide that an agent can read from a repo URL and then know how to install, configure, verify, and support that tool or capability.

## Start here

- [`pages/onboarding/README.md`](pages/onboarding/README.md) — the first 10 instructions a bot should read when onboarding into a Ralleh-managed environment.
- [`skills/README.md`](skills/README.md) — skill library map by family.

## Organization

```text
pages/                       # curated multi-instruction pages
  onboarding/README.md       # bot onboarding page
skills/
  Foundation/<Skill>/        # operating rules, navigation, safety
  Engineering/<Skill>/       # git, implementation, verification
  Memory/<Skill>/            # ENGRAM and recall workflows
  TaskManagement/<Skill>/    # CORTEX and operational task ledgers
  Operations/<Skill>/        # handoffs, installation support, troubleshooting
templates/                   # authoring templates
```

Naming and golden-content rules are enforced by [`docs/NAMING_STANDARD.md`](docs/NAMING_STANDARD.md), [`docs/GOLDEN_CONTENT_STANDARD.md`](docs/GOLDEN_CONTENT_STANDARD.md), and [`scripts/check-repo.mjs`](scripts/check-repo.mjs).

## Canonical skill examples

- [ENGRAM Memory Skill](skills/Memory/Engram/README.md) — durable semantic memory service and CLI for bots.
- [CORTEX Task Management Skill](skills/TaskManagement/Cortex/README.md) — durable operational task ledger for bots.

## How agents should use this repo

1. Open the requested bundle or skill file.
2. Follow the instructions in order.
3. Never invent missing commands, paths, secrets, or config fields.
4. If a step requires credentials or environment-specific values, use the private overlay repo or ask for the one missing input.

## Skill authoring standard

Public repo rule: include golden reusable instructions only. Put customer-specific hosts, private URLs, credentials, and internal runbooks in `ralleh-skills-private`.
