# ENGRAM Memory Skill

## Purpose

ENGRAM gives bots durable memory: buffered events, semantic search, consolidation, and a small CLI/API surface for recall. Point a bot at this file when you want it to install, verify, or support ENGRAM.

## Safety and scope

- Do not store secrets in ENGRAM memories.
- Do not expose private user memories in logs, tickets, or public channels.
- Back up the ENGRAM data directory before upgrades or destructive maintenance.
- If this public guide lacks a deployment-specific value, ask for it or use the private repo instructions.

## Prerequisites

- Linux host with systemd recommended.
- `curl`, `tar`, and `sqlite3` recommended for install and support.
- Optional: OpenClaw integration if the bot platform is OpenClaw.
- Required values, when applicable:
  - `ENGRAM_DATA_DIR` — defaults to `~/.local/share/engram`
  - `ENGRAM_ADDR` — defaults to `127.0.0.1:37371`

## Install

Preferred install from an existing ENGRAM source checkout:

```bash
cd ~/projects/engram
./scripts/install.sh
```

If the host only has release artifacts, install the two binaries into the user's local bin directory:

```bash
mkdir -p ~/.local/bin ~/.local/share/engram
install -m 755 engramd ~/.local/bin/engramd
install -m 755 engramctl ~/.local/bin/engramctl
```

Ensure the binaries are on `PATH`:

```bash
export PATH="$HOME/.local/bin:$PATH"
engramctl --help
engramd --help
```

## Configure

Default local configuration:

```bash
export ENGRAM_DATA_DIR="${ENGRAM_DATA_DIR:-$HOME/.local/share/engram}"
export ENGRAM_ADDR="${ENGRAM_ADDR:-127.0.0.1:37371}"
mkdir -p "$ENGRAM_DATA_DIR"
```

For systemd hosts, create a user service only after confirming the binary path:

```ini
[Unit]
Description=ENGRAM memory service
After=network.target

[Service]
Type=simple
ExecStart=%h/.local/bin/engramd serve --addr 127.0.0.1:37371 --data-dir %h/.local/share/engram
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

Enable it:

```bash
systemctl --user daemon-reload
systemctl --user enable --now engramd
systemctl --user status engramd --no-pager
```

## Verify

Run the smallest smoke test before claiming success:

```bash
engramctl status
engramctl remember "ENGRAM smoke test memory" --type note --scope agent
engramctl search "smoke test memory" --limit 3
```

Expected result: status succeeds, the memory write succeeds, and search returns the smoke-test memory.

For OpenClaw memory-script integration, verify the wrapper too:

```bash
cd ~/.openclaw/workspace
node scripts/memory/mem-status.js
node scripts/memory/mem-search.js "ENGRAM smoke test memory" --json
```

## Operate

Common support commands:

```bash
# service status/logs
systemctl --user status engramd --no-pager
journalctl --user -u engramd -n 100 --no-pager

# CLI health
engramctl status
engramctl search "recent work" --limit 5

# backup SQLite data before maintenance
mkdir -p ~/.local/share/engram/backups
cp ~/.local/share/engram/engram.sqlite ~/.local/share/engram/backups/engram-$(date -u +%Y%m%dT%H%M%SZ).sqlite.bak
```

## OpenClaw integration pattern

When integrating with OpenClaw, keep ENGRAM as the sidecar durable memory layer and keep native OpenClaw memory search enabled. For important recall, use dual recall:

1. OpenClaw native `memory_search`.
2. ENGRAM sidecar search, usually through `scripts/memory/mem-search.js`.
3. Merge the results and cite the source when useful.

## Troubleshooting

| Symptom | Check | Fix |
| --- | --- | --- |
| `engramctl` not found | `echo $PATH && ls ~/.local/bin/engramctl` | Add `~/.local/bin` to `PATH` or reinstall binaries. |
| Service will not start | `journalctl --user -u engramd -n 100 --no-pager` | Fix the binary path, data-dir permissions, or port conflict shown in logs. |
| Search returns nothing | Confirm memories exist and the service is running | Run a smoke-test `remember`, then search exact text. |
| OpenClaw wrapper falls back unexpectedly | Run `node scripts/memory/mem-status.js` | Start ENGRAM or inspect wrapper configuration. |

## Handoff prompt

> Read `ENGRAM.md` first. Install ENGRAM, configure it as a local service if systemd is available, run the smoke tests, and report the exact verification output. Do not guess missing deployment-specific values.
