# Caddy Skill

## What Caddy is

Caddy is the web server and reverse proxy skill for managed VPS hosts. It covers automatic HTTPS, HTTP to HTTPS redirects, reverse proxying, static sites, security headers, compression, JSON access logs, HTTP/3, and systemd hardening.

## What Caddy does

- Validates and reloads Caddy configuration safely.
- Checks public hostnames, HTTPS certificates, redirects, headers, compression, logs, and service state.
- Guides Caddyfile/site-block changes with backup and rollback.
- Verifies RALLEH golden posture for public sites.

## When a bot should use it

Use Caddy when provisioning or troubleshooting public sites, HTTPS, reverse proxies, Caddyfile changes, access logs, HTTP/3, or web-root deployment on a VPS.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
