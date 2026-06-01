# Token Doctor Install Guide

## Purpose

Use this file when a bot needs to install, verify, or run Token Doctor capability on a host.

Read [`README.md`](README.md) first for what Token Doctor is and when to use it. Use [`DOCTOR.md`](DOCTOR.md) if the report fails or produces unsafe/unclear output.

## Safety and scope

- Diagnostic only by default.
- Do not mutate OpenClaw config, prompts, sessions, memory, skills, or provider keys while installing or reporting.
- Do not print raw secrets, tokens, private message bodies, session cookies, or `.env` values.
- Prefer aggregate sizes, counts, hashes, paths, and redacted excerpts over raw content.
- Treat LiteLLM or the configured provider ledger as source of truth for actual spend.
- If this public guide lacks deployment-specific paths, use the private overlay or ask for the one missing value.

## Prerequisites

- Node.js available on the host.
- Approved Token Doctor implementation or script path from the deployment.
- Read access to the target bot state directory.
- Optional provider-spend access through LiteLLM or another approved billing ledger.

Common environment values:

- `OPENCLAW_STATE_DIR` — OpenClaw state directory, often `~/.openclaw`.
- `OPENCLAW_CONFIG_PATH` — OpenClaw config path when not under the state directory.

## Install or locate implementation

Do not invent a Token Doctor script path. Find the approved deployment path or use the private overlay.

Expected implementation shape:

```text
Token Doctor executable/script
  input: agent scope, state dir, config path, output format
  output: markdown or JSON report
  behavior: read-only diagnostics
```

If the implementation is provided as a script, place it in an approved tools directory and make it executable only after reviewing that it is read-only.

## Verify read-only behavior

Before first use, inspect the implementation for dangerous operations. It should not contain commands that delete, rewrite, compact, rotate, or modify config/session files.

Minimum review:

```bash
grep -En "rm -rf|unlink|writeFile|appendFile|rename|truncate|compact|restore|config.patch|sed -i" <token-doctor-script> || true
```

Finding a match is not automatic failure, but it requires manual review before running.

## Run first report

Use the approved command for the deployment. Safe example shape:

```bash
node <token-doctor-script> --agent <agent-id> --format markdown
node <token-doctor-script> --all --format json
```

Expected result: a report with top context/token contributors, recommendations, and no raw secrets.

## Verification gate

Before reporting success, confirm:

- The report command completed successfully.
- Output identifies scope, generated time, and inspected state/config paths.
- Findings are aggregate or redacted.
- Recommendations are advisory, not automatically applied.
- Provider spend is clearly separated from estimated context bloat.

## Handoff prompt

> Read `README.md` and `INSTALL.md`. Locate the approved Token Doctor implementation, verify it is read-only, run a scoped report, and summarize top offenders plus safe recommendations. If anything fails or output may expose secrets, switch to `DOCTOR.md` and stop.
