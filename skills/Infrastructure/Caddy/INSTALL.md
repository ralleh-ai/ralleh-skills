# Caddy Install Guide

## Purpose

Use this file to verify Caddy capability during VPS provisioning or operations.

## Safety and scope

- Back up and validate production Caddy config before reload.
- Private OpenClaw/admin services must remain private unless an approved exposure plan exists.
- Public DNS/proxy changes require explicit approval.
- Disabling HTTPS or security headers requires owner approval and a documented temporary reason.

## Prerequisites

- Caddy installed as a systemd service.
- Expected hostnames and web roots.
- Firewall allows intended ports, usually tcp/80, tcp/443, and udp/443 for HTTP/3.
- Access to validate config and reload service.

## Verify capability

Run the approved checks for the deployment. Common checks include:

```bash
caddy validate --config /etc/caddy/Caddyfile
systemctl status caddy --no-pager
curl -I http://example.com
curl -I https://example.com
journalctl -u caddy -n 100 --no-pager
```

## Verification gate

Before reporting success, confirm the target host/environment, command output, risk level, and any remaining blocker.

## Handoff prompt

> Verify capability in read-only/safe mode first. Report target host, version/status, exact checks, blockers, and do not perform risky changes without approval.
