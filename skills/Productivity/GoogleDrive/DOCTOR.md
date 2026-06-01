# Google Drive Doctor

## Purpose

Use this when Google Drive access fails, OAuth/service-account auth is missing, scopes are insufficient, files/folders are not found, shared drives are inaccessible, exports fail, local sync state is confusing, or quota/rate limits interrupt work.

## Fast triage

1. Confirm connection path: GOG, Google Workspace connector, MCP/API bridge, OAuth client, service account, local sync folder, or browser.
2. Confirm credential presence without printing the value.
3. Confirm account/workspace context and whether the target is My Drive, shared drive, shared-with-me, shortcut, or app-owned storage.
4. Confirm target file ID, folder ID, URL, shared drive, path, or search criteria.
5. Try the smallest safe metadata read.
6. Check scopes, sharing, service-account access, and Workspace admin policy.
7. Check whether the requested operation is read-only or needs approval.
8. Report the exact blocker and safe next action.

## Stop conditions

Stop and ask before:

- printing or requesting raw tokens, refresh tokens, client secrets, service-account JSON, private keys, cookies, or API keys
- deleting, trashing, permanently deleting, restoring, moving, renaming, or overwriting files/folders
- creating public/shared links or changing permissions
- downloading/exporting private files outside approved storage
- uploading files into Drive
- using broad Drive scopes or domain-wide delegation
- acting across shared drives or another user's files without approval
- changing ownership, labels, retention, or compliance-controlled files
- changing local files in a Google Drive synced folder when the user has not approved cloud mutation

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Connector missing | Runtime/GOG/MCP config | Enable approved connector or use browser/local fallback. |
| Drive API disabled | Google Cloud project APIs | Enable Google Drive API in the selected project. |
| Auth failed | Token validity, OAuth consent, redirect URI | Reauthorize and store credential securely. |
| Missing credential | Approved secret store/config | Give setup steps from INSTALL.md; do not request token text. |
| Insufficient scope | OAuth scopes | Add least additional scope and reauthorize. |
| Service account cannot see file | Sharing/domain delegation | Share target folder with service account or configure approved delegation. |
| File not found | File ID, folder ID, shortcut, account | Ask for exact link or access; resolve shortcut target. |
| Shared drive inaccessible | Shared drive membership/support flags | Confirm membership and shared-drive capable query. |
| Export failed | Google-native file type and export MIME | Choose supported export format and destination. |
| Sharing blocked | Workspace policy, DLP, label | Ask owner/admin; do not bypass policy. |
| Quota/rate limited | Retry headers/backoff | Wait, batch less, narrow request. |
| Local file mismatch | Drive sync status/conflicts | Confirm sync complete and resolve conflicts before writes. |

## Credential diagnosis without leaking secrets

Allowed evidence:

- secret reference name such as `env:GOOGLE_DRIVE_TOKEN` or `vault:google/drive`
- credential type: OAuth client, refresh token, service account, domain-wide delegation
- account/workspace label if approved
- scope names from config/admin UI
- expiration/refresh status if visible

Forbidden evidence:

- full access or refresh token
- client secret
- service-account JSON or private key
- cookies/session headers
- API key value
- screenshots showing secrets
- copy/paste requests for credentials

## Recovery fallback

If API access is blocked but the user still needs help:

- Ask for a screenshot, file listing, or exported file if allowed.
- Use a local Google Drive sync folder read-only if available.
- Use browser-assisted inspection only with the user present.
- State clearly when Drive API verification is blocked.

## Doctor report format

```text
Status: healthy | degraded | blocked | unsafe
Connection path:
Credential finding:
Account/workspace context:
Target file/folder/drive:
Smallest successful read:
Issue:
Risk:
Recommended next action:
```

## Recovery verification

After a fix, verify with a metadata read first, then inspect only the requested item/folder. For writes, verify final file ID/path, revision/version, and sharing state after the approved action.
