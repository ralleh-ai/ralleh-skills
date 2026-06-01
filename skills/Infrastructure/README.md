# Infrastructure Skills

## Purpose

This family contains golden skills for VPS, networking, web serving, containers, backups, runtimes, hosting, and Ralleh MCP runtime operations.

It exists to help bots choose the right capability quickly, load only the files needed for the task, and keep safety, verification, and resource use explicit.

## Before using this family

- Use these skills with production caution. Confirm ownership, rollback, secrets, health checks, and approval boundaries before state-changing operations.
- Start with the specific skill `README.md`; load `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task needs setup, troubleshooting, or user-facing examples.
- Prefer read-only inspection until a write, external effect, destructive action, permission change, or sensitive-data operation is explicitly approved.
- Verify the result with the smallest meaningful check before reporting completion.

## Available skills

- [`Caddy`](Caddy/README.md) — Caddy web server, HTTPS, reverse proxy, headers, logs, HTTP/3, and hardening.
- [`Tailscale`](Tailscale/README.md) — private mesh networking, tags, auth keys, routes, and node verification.
- [`Docker`](Docker/README.md) — Docker Engine/Compose operations for isolated app/tool deployment.
- [`Restic`](Restic/README.md) — backup, restore, snapshots, retention, and repository health.
- [`GoRuntime`](GoRuntime/README.md) — Go toolchain verification for build/test/provisioner workflows.
- [`HostingerVps`](HostingerVps/README.md) — Hostinger VPS/DNS provisioning and verification boundaries.

## Selection rule

Choose the narrowest skill that matches the user request. If two skills could apply, prefer the one closest to the target system or workflow, then pull in adjacent skills only when they are needed for setup, safety, memory, task tracking, or verification.

## Completion standard

A bot using this family should report:

- which skill files were used
- what scope was inspected or changed
- what approval was required or not required
- what verification was performed
- any blocker, risk, or next safe action
