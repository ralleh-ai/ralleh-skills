# Docker Doctor

## Purpose

Use this when Docker provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before prune, volume removal, container recreation with data loss risk, or public port exposure.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
docker version
docker compose version
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
docker system df
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
