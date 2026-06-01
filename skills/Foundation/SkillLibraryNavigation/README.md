# Skill Library Navigation Skill

## What Skill Library Navigation is

Skill Library Navigation teaches bots how to use the Ralleh Skills repo efficiently without wandering, over-reading, or missing required companion files.

## What Skill Library Navigation does

- Starts from the user’s requested task, then chooses the narrowest relevant skill family and skill.
- Reads `README.md` first for purpose and boundaries, then loads `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task calls for them.
- Distinguishes repo-wide pages, family indexes, individual skills, agent standards, and MCP service-family guidance.
- Prefers canonical links and avoids stale duplicate paths.
- Reports which guidance was used when helpful for auditability.

## When a bot should use it

- a bot enters the library repo
- a user gives a skill URL or asks for a capability
- a task spans multiple skills and needs an ordered reading path
- a bot is unsure whether to load install, troubleshooting, prompt examples, agent standards, or MCP docs

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not read the whole repo when one skill is enough.
- Do not skip a skill’s README and jump straight to commands.
- Do not treat private overlays as public defaults.
- Do not invent paths or use non-canonical folder names.

## Useful outputs

- current state or requested scope
- actions taken or proposed
- evidence inspected
- risks and unknowns
- approval needed, if any
- verification performed or blocked
- next safe action

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, prerequisite, capability, or readiness checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshooting, unsafe states, stop conditions, and recovery verification.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompt patterns.

## Golden operating rule

Navigate narrowly: root or onboarding for orientation, family index for routing, skill README for boundaries, companion files only when the task needs them.
