# Ralleh Skills

Public, bot-readable skill instructions for Ralleh AI agents.

Each skill is a self-contained Markdown guide that an agent can read from a repo URL and then know how to install, configure, verify, and support that tool or capability.

## Start here

- [`bundles/onboarding/BOT_ONBOARDING_INDEX.md`](bundles/onboarding/BOT_ONBOARDING_INDEX.md) — the first 10 instructions a bot should read when onboarding into a Ralleh-managed environment.
- [`skills/README.md`](skills/README.md) — skill library map by family.

## Organization

```text
bundles/                     # ordered reading lists
  onboarding/                # bot onboarding package
skills/
  Foundation/                # operating rules, navigation, safety
  Engineering/               # git, implementation, verification
  Memory/                    # ENGRAM and recall workflows
  Operations/                # handoffs, installation support, troubleshooting
templates/                   # authoring templates
```

## Canonical skill examples

- [ENGRAM Memory Skill](skills/Memory/Engram/README.md) — durable semantic memory service and CLI for bots.

## How agents should use this repo

1. Open the requested bundle or skill file.
2. Follow the instructions in order.
3. Never invent missing commands, paths, secrets, or config fields.
4. If a step requires credentials or environment-specific values, use the private overlay repo or ask for the one missing input.

## Skill authoring standard

Use [`templates/SKILL_TEMPLATE.md`](templates/SKILL_TEMPLATE.md) for individual skills and [`templates/BUNDLE_TEMPLATE.md`](templates/BUNDLE_TEMPLATE.md) for bundles.

Public repo rule: include reusable instructions only. Put customer-specific hosts, private URLs, credentials, and internal runbooks in `ralleh-skills-private`.
