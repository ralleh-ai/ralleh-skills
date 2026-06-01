# OneDrive Doctor

## Purpose

Use this when OneDrive access fails, Microsoft Graph auth is missing, tenant/account selection is wrong, permissions are insufficient, files are not found, sharing is blocked, local sync state is confusing, or throttling interrupts work.

## Fast triage

1. Confirm connection path: Office 365 connector, Graph MCP/API bridge, app registration, local sync folder, or browser.
2. Confirm credential presence without printing the value.
3. Confirm account type: personal Microsoft account, work/school tenant, SharePoint, or Teams files.
4. Confirm target drive ID, item ID, path, shared link, site, or library.
5. Try the smallest safe metadata read.
6. Check delegated vs application permissions and whether admin consent is required.
7. Check whether the requested operation is read-only or needs approval.
8. Report the exact blocker and safe next action.

## Stop conditions

Stop and ask before:

- printing or requesting raw tokens, refresh tokens, client secrets, certificates, cookies, or session headers
- deleting, moving, renaming, restoring, or overwriting files/folders
- creating public/shared links or changing permissions
- downloading private files outside approved storage
- uploading files into OneDrive/SharePoint
- using tenant-wide application permissions
- acting across another user's drive, SharePoint site, or Teams files
- changing retention/sensitivity labels or compliance-controlled files
- changing local files in a OneDrive synced folder when the user has not approved cloud mutation

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Connector missing | Runtime MCP/Graph connector config | Enable approved connector or use browser/local fallback. |
| Auth failed | Token validity, tenant, redirect URI, consent | Reauthorize and store credential securely. |
| Missing credential | Approved secret store/config | Give setup steps from INSTALL.md; do not request token text. |
| Wrong tenant/account | `/me`, tenant ID, account type | Switch account or configure correct tenant. |
| Admin consent required | Permission type and tenant policy | Ask Microsoft 365 admin to approve least-needed scopes. |
| Insufficient scope | Graph permissions | Add least additional scope and reauthorize. |
| File not found | Drive/item/path/site/library | Ask for exact link/path or access. |
| SharePoint file inaccessible | Site permissions and Sites scopes | Confirm site/library access or use Office365Connector. |
| Sharing blocked | Tenant sharing policy, sensitivity label | Ask owner/admin; do not bypass policy. |
| Throttled | Graph retry headers | Back off, batch less, narrow request. |
| Local file mismatch | OneDrive sync status/conflicts | Confirm sync complete and resolve conflicted copies before writes. |

## Credential diagnosis without leaking secrets

Allowed evidence:

- secret reference name such as `env:MS_GRAPH_TOKEN` or `vault:m365/onedrive`
- token type if known: delegated user, application, refresh token
- tenant ID label or domain if approved
- scope names from config/admin UI
- expiration/refresh status if visible

Forbidden evidence:

- full access or refresh token
- client secret or certificate private key
- cookies/session headers
- screenshots showing secrets
- copy/paste requests for credentials

## Recovery fallback

If Graph access is blocked but the user still needs help:

- Ask for a screenshot or file listing if allowed.
- Use a local OneDrive sync folder read-only if available.
- Use browser-assisted inspection only with the user present.
- State clearly when Graph verification is blocked.

## Doctor report format

```text
Status: healthy | degraded | blocked | unsafe
Connection path:
Credential finding:
Tenant/account context:
Target drive/item/path:
Smallest successful read:
Issue:
Risk:
Recommended next action:
```

## Recovery verification

After a fix, verify with a metadata read first, then inspect only the requested item/path. For writes, verify the final path, item ID, version/eTag, and sharing state after the approved action.
