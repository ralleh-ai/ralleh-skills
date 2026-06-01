# Tailscale Skill

## What Tailscale is

Tailscale is the private mesh networking skill for VPS administration, private OpenClaw access, fleet interconnect, tagged auth keys, ACL-aware routing, and node verification.

## What Tailscale does

- Verifies node identity, tags, IPs, routes, and connectivity.
- Plans auth-key and tag usage for provisioned bots/hosts.
- Checks private service reachability over the tailnet.
- Keeps public exposure separate from private admin access.

## When a bot should use it

Use Tailscale when provisioning private admin access, enrolling VPS nodes, checking tailnet connectivity, validating tags/routes, or exposing loopback/private services safely.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
