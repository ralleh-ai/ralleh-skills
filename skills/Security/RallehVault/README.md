# Ralleh Vault Skill

## What Ralleh Vault is

Ralleh Vault is the standalone optional Go CLI for local encrypted SecretRef storage on RALLEH-managed hosts.

Current RALLEH source repository: `https://github.com/ralleh-ai/ralleh-vault`

It is separate from `ralleh-provision`: provisioning may install or integrate with it, but the vault owns encrypted local storage, key rotation, and explicit secret resolution.

## What it does

- Initializes local encrypted stores.
- Writes SecretRef values from env/file sources without printing plaintext.
- Lists refs and fingerprints without values.
- Rotates store key material with 0600 backups.
- Prints secret values only when `get --allow-stdout` is explicit.

## When to use it

Use this skill when installing, verifying, troubleshooting, or operating `ralleh-vault` on a managed host.

Do not use it to dump secrets into chat, logs, docs, evidence, or shell history.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install, build, and verify `ralleh-vault`.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot store/key/permission issues.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing request patterns.

## Golden operating rule

Treat every vault read as sensitive. Prefer `check`/fingerprints for verification. Use `get --allow-stdout` only inside an approved consuming workflow, never for casual inspection.
