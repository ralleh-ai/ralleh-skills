# Ralleh Skills

Public, bot-readable skill instructions for Ralleh AI agents.

Each skill is a self-contained Markdown guide that an agent can read from a repo URL and then know how to install, configure, verify, and support that tool.

## How agents should use this repo

1. Open the requested skill file.
2. Follow the **Install**, **Configure**, **Verify**, and **Support** sections in order.
3. Never invent missing commands, paths, secrets, or config fields.
4. If a step requires credentials, use environment variables or the private repo instructions. Do not put secrets in this public repo.

## Skills

- [ENGRAM](skills/engram/ENGRAM.md) — durable semantic memory service and CLI for bots.

## Skill authoring standard

Use [`templates/SKILL_TEMPLATE.md`](templates/SKILL_TEMPLATE.md) for new skills.

Public repo rule: include reusable instructions only. Put customer-specific hosts, private URLs, credentials, and internal runbooks in `ralleh-skills-private`.
