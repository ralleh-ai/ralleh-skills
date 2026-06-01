# SQLite Install Guide

## Purpose

Use this file to verify SQLite capability during VPS provisioning or operations.

## Safety and scope

- Back up before migrations, restores, vacuum, or manual writes.
- Use backup API or app command when WAL is active.
- Avoid printing sensitive rows unnecessarily.

## Prerequisites

- sqlite3 CLI or app-native backup tools.
- Database path and owning service known.
- Maintenance window for write operations.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
sqlite3 <db> "PRAGMA integrity_check;"
sqlite3 <db> ".tables"
sqlite3 <db> "PRAGMA journal_mode;"
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
