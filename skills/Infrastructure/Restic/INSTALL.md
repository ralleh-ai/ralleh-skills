# Restic Install Guide

## Purpose

Use this file to verify Restic capability during VPS provisioning or operations.

## Safety and scope

- Never print repository passwords or backend credentials.
- Snapshot forget/prune requires approval.
- Restoring over live data requires backup, plan, and approval.

## Prerequisites

- restic installed.
- Repository backend and password configured through secret store.
- Backup paths and excludes defined.
- Restore test target available.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
restic version
restic snapshots
restic check
restic restore latest --target /tmp/restic-restore-test --include <safe-path>
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
