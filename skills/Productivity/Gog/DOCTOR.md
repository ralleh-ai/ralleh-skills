# GOG Doctor

## Purpose

Use this when GOG is missing, OAuth is broken, account selection is wrong, service scopes are missing, or commands fail.

## Fast triage

1. Check `gog` is installed.
2. Run `gog auth list`.
3. Confirm intended account and `GOG_ACCOUNT`.
4. Confirm service scope: gmail, calendar, drive, contacts, docs, or sheets.
5. Run a harmless read-only command for the target service.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| `gog` missing | PATH/install | Install approved GOG CLI. |
| Wrong account | `gog auth list`, `GOG_ACCOUNT` | Set intended account. |
| Scope denied | authorized services | Re-auth with needed service. |
| Gmail thread mismatch | search vs messages search | Use messages search for per-email rows. |
| Newlines broken in email | body vs body-file | Use body file/stdin. |

## Doctor report format

Return status, active account, service scope, failing command/error, safe read check, and next action.
