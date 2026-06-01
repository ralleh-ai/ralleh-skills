# Ralleh MCP Skill

## What Ralleh MCP is

Ralleh MCP is the VPS-local Go MCP service family for enterprise-grade, bounded shopping and travel research. It installs `ralleh-mcp-shop` and `ralleh-mcp-travel`, exposes local health checks, and keeps search services private to the VPS/OpenClaw runtime.

## What Ralleh MCP does

- Installs or verifies the Ralleh MCP binaries, configs, health checks, and systemd units.
- Keeps services local-only by default with loopback health endpoints.
- Runs upgrade, backup, and restore checks before service changes.
- Confirms hard v1 boundaries: no checkout, no booking, no credit cards, no passenger PII, no arbitrary website crawling.

## When a bot should use it

Use Ralleh MCP when installing, upgrading, backing up, health-checking, or troubleshooting the shared MCP runtime on a VPS.

## Golden rules

- Prefer deterministic health/status checks before action.
- Keep services VPS-local unless an explicit secured exposure plan exists.
- Do not perform checkout, booking, purchase, payment, login, or passenger/customer PII entry.
- Use curated source collections and known source IDs; never invent arbitrary crawl targets.
- Return partial/degraded status honestly with source diagnostics.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install, configure, upgrade, and verify.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures and unsafe states.
- [`PROMPTS.md`](PROMPTS.md) — safe prompt examples.
