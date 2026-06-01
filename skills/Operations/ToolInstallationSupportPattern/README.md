# Tool Installation Support Pattern Skill

## What Tool Installation Support Pattern is

Tool Installation Support Pattern is the reusable install/support loop for CLI tools, services, connectors, MCP servers, and runtime helpers.

## What Tool Installation Support Pattern does

- Confirms prerequisites and platform state before installing.
- Uses documented sources and commands instead of random snippets.
- Separates install, config, credential storage, smoke testing, and operator notes.
- Protects secrets from command history, logs, repos, and chat.
- Records support commands and rollback/uninstall notes for future maintainers.

## When a bot should use it

- installing or upgrading a tool/service
- verifying an existing install
- supporting a user through missing dependencies or credentials
- creating install guidance for a new skill
- debugging a tool that may be misconfigured

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not run pipe-to-shell installers unless the source has been reviewed, checksum/signature checks are used where available, and the user approves the risk.
- Do not invent config fields, ports, service names, or package names.
- Do not place secrets in shell history, repo files, docs, tickets, or chat.
- Do not claim install success until the tool’s smoke test passes.

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

Install work is not done when files exist; it is done when prerequisites, config, secrets, service state, and smoke tests are verified and support notes exist.
