# Caddy Doctor

## Purpose

Use this when Caddy provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before public exposure changes, disabling TLS, changing admin/private routes, or overwriting Caddyfile without backup.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
caddy validate --config /etc/caddy/Caddyfile
systemctl status caddy --no-pager
curl -I http://<approved-hostname>
curl -I https://<approved-hostname>
journalctl -u caddy -n 100 --no-pager
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
