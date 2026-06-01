# ENGRAM Doctor

## Purpose

Use this when ENGRAM is installed or expected to be installed, but memory write/search/status is failing or uncertain.

## Fast triage

Run these first and capture exact output:

```bash
command -v engramctl || true
command -v engramd || true
engramctl status
```

If ENGRAM runs as a user service:

```bash
systemctl --user status engramd --no-pager
journalctl --user -u engramd -n 100 --no-pager
```

Check default data and process state:

```bash
ls -lah ~/.local/share/engram || true
pgrep -af 'engramd|engramctl' || true
ss -ltnp 2>/dev/null | grep -E '37371|engram' || true
```

## Smoke test

Use a unique marker so search results are unambiguous:

```bash
MARKER="engram-doctor-$(date -u +%Y%m%dT%H%M%SZ)"
engramctl remember "$MARKER" --type note --scope agent
engramctl search "$MARKER" --limit 5
```

Expected result: the search returns the same marker.

## Diagnosis table

| Symptom | Check | Likely fix |
| --- | --- | --- |
| `engramctl: command not found` | `echo $PATH && ls ~/.local/bin/engramctl` | Install binaries or add `~/.local/bin` to `PATH`. |
| `engramctl status` cannot connect | `pgrep -af engramd`, service status, port check | Start `engramd` or fix `ENGRAM_ADDR`. |
| Service fails immediately | `journalctl --user -u engramd -n 100 --no-pager` | Fix binary path, data directory permissions, or invalid flags. |
| Search returns nothing | Run the unique marker smoke test | Confirm writes are going to the same data dir/service being searched. |
| Permission errors | `ls -ld ~/.local/share/engram ~/.local/share/engram/*` | Correct ownership/permissions for the service user. |
| OpenClaw wrapper falls back to legacy memory | `cd ~/.openclaw/workspace && node scripts/memory/mem-status.js` | Start ENGRAM, fix wrapper config, or inspect wrapper logs. |

## Data directory checks

Default data directory:

```bash
ENGRAM_DATA_DIR="${ENGRAM_DATA_DIR:-$HOME/.local/share/engram}"
find "$ENGRAM_DATA_DIR" -maxdepth 2 -type f -printf '%p %s bytes\n' 2>/dev/null | sort
```

Before destructive repair, back up the database:

```bash
mkdir -p "$ENGRAM_DATA_DIR/backups"
cp "$ENGRAM_DATA_DIR/engram.sqlite" "$ENGRAM_DATA_DIR/backups/engram-$(date -u +%Y%m%dT%H%M%SZ).sqlite.bak"
```

Do not delete or rebuild memory data without explicit approval.

## OpenClaw integration checks

```bash
cd ~/.openclaw/workspace
node scripts/memory/mem-status.js
node scripts/memory/mem-search.js "doctor smoke" --json
```

If native memory and ENGRAM disagree, report both results. Do not silently choose one.

## Doctor report format

Return:

- Status: healthy / degraded / down / not installed.
- Commands run.
- Exact failing output or log excerpt.
- Data directory inspected.
- Smoke-test result.
- Recommended next action.
