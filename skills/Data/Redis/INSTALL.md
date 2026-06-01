# Redis Install Guide

## Purpose

Use this file to verify Redis capability during VPS provisioning or operations.

## Safety and scope

- FLUSHALL/FLUSHDB requires approval.
- Redis must not be exposed publicly.
- Never print secrets or sensitive key values.
- Confirm whether data is cache or durable before restart.

## Prerequisites

- Redis installed and managed by systemd or container.
- Expected bind address and port known.
- Password/auth policy known from secret store if used.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
redis-cli ping
systemctl status redis-server --no-pager
redis-cli INFO server
redis-cli INFO memory
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
