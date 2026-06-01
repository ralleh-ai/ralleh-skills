# Hostinger VPS Skill

## What Hostinger VPS is

Hostinger VPS is the hosting-provider skill for RALLEH provisioning targets: VPS discovery, DNS, instance metadata, Hostinger MCP/API boundaries, and post-provision verification.

## What Hostinger VPS does

- Verifies VPS identity, IP, OS image, region/datacenter, and DNS records.
- Separates historical hosts from authoritative deploy targets.
- Guides read-only discovery and evidence capture before apply.
- Keeps provider credentials private.

## When a bot should use it

Use Hostinger VPS when provisioning or verifying Hostinger VPS instances, DNS records, public web roots, or provider metadata for RALLEH-managed hosts.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
