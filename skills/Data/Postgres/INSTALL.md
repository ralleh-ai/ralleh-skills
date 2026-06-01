# Postgres Install Guide

## Purpose

Use this file to verify Postgres capability during VPS provisioning or operations.

## Safety and scope

- Back up before migrations, restores, destructive queries, role changes, or extension changes.
- Never print passwords, connection strings, or sensitive rows.
- Public Postgres exposure requires explicit secured design.

## Prerequisites

- Postgres installed and service managed.
- Access method defined: local socket, psql role, or secret store.
- Database name, role, and environment known.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
psql --version
systemctl status postgresql --no-pager
sudo -u postgres psql -c "select version();"
sudo -u postgres psql -c "\\l"
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
