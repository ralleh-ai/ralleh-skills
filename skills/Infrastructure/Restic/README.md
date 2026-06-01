# Restic Skill

## What Restic is

Restic is the backup skill for encrypted repositories, snapshots, restore testing, retention, and VPS data protection.

## What Restic does

- Verifies restic binary, repository access, snapshots, and retention policy.
- Plans backup sets for web roots, configs, databases, vaults, and app data.
- Runs restore checks before trusting backups.
- Keeps repository passwords and backend secrets private.

## When a bot should use it

Use Restic when provisioning backup capability, checking backup health, restoring files, or designing backup/retention policy.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify setup, access, safe operations, and baseline checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures, unsafe state, and provisioning blockers.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for this workflow.

## Golden operating rule

Inspect and verify before mutating. Risky changes require approval, backup or rollback where applicable, and a named verification gate.
