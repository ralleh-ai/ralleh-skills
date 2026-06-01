# Redis Doctor

## Purpose

Use this when Redis provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before FLUSHALL/FLUSHDB, public bind changes, persistence changes, or destructive restarts without approval.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
redis-cli ping
systemctl status redis-server --no-pager
redis-cli INFO server
redis-cli INFO memory
```

## Doctor report format

```text
Status: healthy | degraded | blocked | down | risky
Target:
Environment:
Evidence:
Issue:
Risk/blast radius:
Recommended next action:
Verification gate:
```
