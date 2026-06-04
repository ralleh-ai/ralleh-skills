# Ralleh Keys Install Guide

## Safety

- Do not commit stores, `.env` files, keys, or materialized secret output.
- Use `env:` or `file:` key sources from approved secret handling workflows.
- Verify with test refs first.

## Install from source

```bash
git clone https://github.com/ralleh-ai/ralleh-keys.git ~/projects/ralleh-keys
cd ~/projects/ralleh-vault
go test ./...
go build -o bin/ralleh-vault ./cmd/ralleh-vault
```

## Smoke test

```bash
export RALLEH_VAULT_KEY='test-passphrase-outside-git'
export RALLEH_VAULT_TEST_VALUE='test-secret-value'

tmpdir=$(mktemp -d)
bin/ralleh-vault init --store "$tmpdir/store.enc.json"
bin/ralleh-vault set --store "$tmpdir/store.enc.json" --key-source env:RALLEH_VAULT_KEY --ref secret:smoke --value-env RALLEH_VAULT_TEST_VALUE
bin/ralleh-vault check --store "$tmpdir/store.enc.json"
```

Before reporting success, confirm:

- `go test ./...` passed
- build succeeded
- store mode is `0600`
- check output contains ref/fingerprint only, not `test-secret-value`
