# CORTEX Install Guide

## Purpose

Use this file when a bot needs to install, configure, verify, or operate CORTEX on a host.

Read [`README.md`](README.md) first for what CORTEX is and when to use it. Use [`DOCTOR.md`](DOCTOR.md) if install or verification fails.

## Safety and scope

- Do not commit CORTEX database files, `.env` files, API tokens, or credentials.
- Keep daemon/API access bound to localhost or a trusted private network unless the deployment has explicit hardening.
- Use scoped API tokens: read-only for dashboards, write only for trusted agents/tools.
- Before restore, retention apply, compaction, or database replacement, back up the database and get explicit approval.
- If this public guide lacks a deployment-specific value, ask for it or use the private repo instructions.

## Prerequisites

- Linux host recommended.
- Node.js and npm installed.
- Git installed.
- SQLite tooling recommended for inspection and support.
- Approved CORTEX source repository URL.
- Optional daemon/API values:
  - `CORTEX_DB_PATH` — defaults to `./db/cortex.db` in the checkout.
  - `CORTEX_API_HOST` — default `127.0.0.1`.
  - `CORTEX_API_PORT` — default `8777`.
  - `CORTEX_API_TOKENS` — scoped token list, for example `reader:read;writer:read,write`.

## Install CLI from source

Use the approved source URL for the deployment. Current RALLEH source:

```bash
git clone https://github.com/ralleh-ai/ralleh-tasks.git ~/projects/cortex
cd ~/projects/cortex
npm install
node db/init.js
```

If the deployment uses a different approved mirror, replace the clone URL but keep the same verification gates.

## Configure database path

Default repo-local database:

```bash
cd ~/projects/cortex
node db/init.js
node cortex.js status
```

Custom data directory:

```bash
mkdir -p ~/.local/share/cortex
CORTEX_DB_PATH="$HOME/.local/share/cortex/cortex.sqlite" node db/init.js
CORTEX_DB_PATH="$HOME/.local/share/cortex/cortex.sqlite" node cortex.js status
```

## Verify CLI install

Run these checks before reporting success:

```bash
cd ~/projects/cortex
npm test
node cortex.js status
node cortex.js list --status in-progress
```

Expected result: tests pass, status returns a dashboard, and list command returns tasks or an empty valid result.

## Optional daemon/API setup

Start a local authenticated daemon for dashboards or integrations:

```bash
cd ~/projects/cortex
CORTEX_API_HOST=127.0.0.1 \
CORTEX_API_PORT=8777 \
CORTEX_API_AUTH_REQUIRED=true \
CORTEX_API_TOKENS='reader:read;writer:read,write' \
node cortexd.js
```

Verify from another shell:

```bash
curl -s http://127.0.0.1:8777/v1/health
curl -s -H 'Authorization: Bearer reader' http://127.0.0.1:8777/v1/status
```

Expected result: health succeeds and authenticated status returns a valid response envelope.

## Daily operation commands

```bash
cd ~/projects/cortex
node cortex.js status
node cortex.js list --status in-progress
node cortex.js list --status blocked
node cortex.js list --status needs-input
node cortex.js orphans
```

## Task lifecycle commands

```bash
node cortex.js add "Implement API health endpoint" --project cortex --assign carmack --priority high
node cortex.js update 1 --status in-progress --progress 25 --step "implementation"
node cortex.js block 1 "waiting for API token"
node cortex.js input 1 "Which deployment target should receive this?"
node cortex.js fail 1 "test failure"
node cortex.js done 1 --notes "Validated with npm test"
```

Use `--json` for automation-safe scripts:

```bash
node cortex.js add "JSON-safe task" --project cortex --json
node cortex.js status --json
node cortex.js get 1 --json
```

## Backup before maintenance

```bash
mkdir -p ~/backups/cortex
node cortex.js backup --out "$HOME/backups/cortex/cortex-$(date -u +%Y%m%dT%H%M%SZ).sqlite"
```

Do not run restore, retention apply, or compaction without explicit approval and a fresh backup.

## Handoff prompt

> Read `README.md` and `INSTALL.md`. Install CORTEX, initialize the database, run tests, verify `node cortex.js status`, and report exact verification output. If anything fails, switch to `DOCTOR.md` and report the blocker.
