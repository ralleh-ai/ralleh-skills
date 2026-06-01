# Tailscale Doctor

## Purpose

Use this when Tailscale provisioning, verification, or runtime behavior is failing or uncertain.

## Stop conditions

Stop before key creation, ACL changes, route advertisement, exit-node changes, or device approval workflows without explicit authorization.

## Fast triage

1. Confirm target host, environment, and authoritative source of truth.
2. Confirm the expected service/package/config exists.
3. Run safe read-only status checks.
4. Check recent changes and logs where available.
5. Report exact blocker and avoid risky mutation until approved.

## Common checks

```bash
tailscale status
tailscale ip -4
tailscale netcheck
systemctl status tailscaled --no-pager
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
