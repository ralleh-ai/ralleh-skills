# CORTEX Doctor

## Purpose

Use this when CORTEX is installed or expected to be installed, but task status, CLI commands, database access, daemon/API, or lifecycle updates are failing or uncertain.

## Stop conditions

Stop and ask before:

- Restoring over an active database.
- Applying retention or compaction.
- Deleting task data.
- Disabling API authentication.
- Exposing the daemon beyond localhost or a trusted private network.

## Fast triage

Run from the expected CORTEX checkout:

```bash
cd ~/projects/cortex
pwd
git status --short --branch
node --version
npm --version
node cortex.js status
```

If the checkout path is unknown:

```bash
find ~/projects ~/.local -maxdepth 3 -name cortex.js -type f 2>/dev/null
```

## Database checks

Inspect the active database path and schema health:

```bash
cd ~/projects/cortex
printf 'CORTEX_DB_PATH=%s\n' "${CORTEX_DB_PATH:-./db/cortex.db}"
ls -lah "${CORTEX_DB_PATH:-./db/cortex.db}" 2>/dev/null || true
node db/init.js
node cortex.js status --json
```

If SQLite CLI is available:

```bash
sqlite3 "${CORTEX_DB_PATH:-./db/cortex.db}" 'select name from sqlite_master where type="table" order by name;'
sqlite3 "${CORTEX_DB_PATH:-./db/cortex.db}" 'select version, filename, applied_at from schema_migrations order by version;'
```

## CLI smoke test

Create a harmless doctor task, inspect it, then cancel it so the test does not pollute active work:

```bash
cd ~/projects/cortex
TASK_JSON=$(node cortex.js add "CORTEX doctor smoke test" --project cortex --priority low --json)
printf '%s\n' "$TASK_JSON"
TASK_ID=$(printf '%s\n' "$TASK_JSON" | node -e 'let s="";process.stdin.on("data",d=>s+=d);process.stdin.on("end",()=>{const j=JSON.parse(s);console.log(j.id || j.data?.id || j.task?.id)})')
node cortex.js get "$TASK_ID" --json
node cortex.js cancel "$TASK_ID" --json
```

Expected result: add, get, and cancel all succeed.

## Daemon/API checks

```bash
pgrep -af 'cortexd|cortex.js|node .*cortex' || true
ss -ltnp 2>/dev/null | grep -E '8777|cortex' || true
curl -s http://127.0.0.1:8777/v1/health || true
curl -s -H 'Authorization: Bearer reader' http://127.0.0.1:8777/v1/status || true
```

If status fails with auth errors, confirm the expected scoped token names from the private deployment overlay. Do not invent or expose tokens.

## Task lifecycle checks

```bash
node cortex.js status
node cortex.js list --status in-progress
node cortex.js list --status blocked
node cortex.js list --status needs-input
node cortex.js list --status failed
node cortex.js orphans
```

Use these results to find stale tasks, blocked tasks, tasks waiting on human input, and orphaned subagent/session work.

## Diagnosis table

| Symptom | Check | Likely fix |
| --- | --- | --- |
| `node cortex.js` fails | `node --version`, `npm install`, stack trace | Install dependencies or fix Node version mismatch. |
| Database missing | `ls -lah ${CORTEX_DB_PATH:-./db/cortex.db}` | Run `node db/init.js` with the intended `CORTEX_DB_PATH`. |
| Schema/migration issue | `node db/init.js`, `schema_migrations` query | Apply migrations through `db/init.js`; do not hand-edit schema first. |
| Status works but tasks look wrong | Print `CORTEX_DB_PATH` | Point CLI/API to the intended database path. |
| API health works but status fails | Auth header and token scopes | Use a read-scoped token from the private overlay. |
| Agents leave stale work | `node cortex.js orphans` and in-progress list | Resume, reassign, block, fail, or close with evidence. |

## Doctor report format

Return:

- Status: healthy / degraded / down / not installed.
- Commands run.
- Active checkout path.
- Active database path.
- Exact failing output or log excerpt.
- CLI smoke-test result.
- API health result, if daemon is expected.
- Recommended next action.
