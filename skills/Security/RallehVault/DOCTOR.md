# Ralleh Keys Doctor

Use this when `ralleh-vault` install, store access, key resolution, rotation, or check output is failing.

## Fast triage

```bash
which ralleh-vault || true
ralleh-vault version || true
ls -lah <store-path>
stat -c '%a %n' <store-path>
ralleh-vault check --store <store-path> --json
```

## Common issues

| Symptom | Likely cause | Safe fix |
|---|---|---|
| key source env is empty | Missing env var | Export approved env var in current process. |
| decrypt failed | Wrong key source | Verify key source, do not print key material. |
| store mode too open | Unsafe permissions | `chmod 600 <store-path>`. |
| get refused | Missing explicit approval | Add `--allow-stdout` only for approved consuming workflow. |

## Stop conditions

Stop and ask before:

- printing real secret values
- deleting or rotating production stores
- changing key source on a live host
- copying stores off-host
