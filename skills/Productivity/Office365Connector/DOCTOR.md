# Office365 Connector Doctor

## Purpose

Use this when Microsoft 365 connector auth, tenant access, Graph scopes, throttling, or workload-specific operations fail.

## Fast triage

1. Confirm tenant and account.
2. Confirm connector/tool availability.
3. Confirm scopes for target workload.
4. Run a harmless read-only query.
5. Check throttling or conditional access messages.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Auth failed | account/tenant/token presence | Re-auth through approved flow. |
| Scope denied | Graph permission scopes | Request admin/user consent. |
| Wrong mailbox/site | account/site id | Confirm target identifiers. |
| Throttled | Graph response headers | Back off and reduce calls. |
| Write blocked | role/policy | Ask for permission or use draft-only flow. |

## Doctor report format

Return status, tenant/account, workload, scopes, exact error, read-only check result, and next action.
