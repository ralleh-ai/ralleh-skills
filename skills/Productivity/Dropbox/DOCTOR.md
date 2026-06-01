# Dropbox Doctor

## Purpose

Use this when Dropbox access fails, auth is missing, scopes are insufficient, files/folders are not found, shared links are blocked, local sync state is confusing, or rate limits/errors interrupt work.

## Fast triage

1. Confirm the connection path: MCP/API connector, Dropbox app, team connector, local sync folder, or browser.
2. Confirm credential presence without printing the value.
3. Confirm account/team context and whether the target is personal, team, shared folder, or app folder.
4. Confirm the target path, file ID, folder ID, or shared link.
5. Try the smallest safe metadata read.
6. Check scopes and content access: App Folder versus Full Dropbox.
7. Check whether the operation is read-only or requires approval.
8. Report the exact blocker and safe next action.

## Stop conditions

Stop and ask before:

- printing or requesting raw tokens, refresh tokens, app secrets, cookies, or shared-link secrets
- deleting, moving, renaming, restoring, or overwriting files/folders
- creating public/shared links or changing permissions
- downloading private files outside approved storage
- uploading files into Dropbox
- using Dropbox Business team scopes or acting as another team member
- switching from App Folder to Full Dropbox access
- changing local files in a Dropbox synced folder when the user has not approved cloud mutation

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Connector missing | Runtime MCP/API config | Enable approved Dropbox connector or use browser/local fallback. |
| Auth failed | Secret exists, token valid, refresh flow works | Reauthorize via OAuth and store new secret securely. |
| Missing token | Approved secret store/config | Give setup steps from INSTALL.md; do not request token text. |
| Insufficient scope | App permissions and granted scopes | Reauthorize with least additional required scope. |
| File not found | Path, file ID, account, shared folder membership | Ask for exact path/link or access. |
| App folder cannot see file | Content access mode | Use correct app folder path or approve Full Dropbox app when required. |
| Shared link blocked | Link permission, password, expiration, team policy | Ask owner to grant access or provide approved alternate path. |
| Team file inaccessible | Team/member scope and selected user | Confirm team approval and target member/folder. |
| Rate limited | Retry-After/header/backoff | Wait, batch less, or narrow operation. |
| Local file mismatch | Dropbox sync status/conflicts | Confirm sync complete and resolve conflicted copies before writes. |

## Credential diagnosis without leaking secrets

Allowed evidence:

- secret reference name such as `env:DROPBOX_TOKEN` or `vault:dropbox/oauth`
- token type if known: OAuth user, refresh token, team token, generated test token
- scopes listed by config/admin UI
- account/team label with sensitive data minimized
- expiration/refresh status if visible

Forbidden evidence:

- full access token or refresh token
- app secret
- cookies/session headers
- shared-link passwords
- screenshots showing secrets
- copy/paste requests for credentials

## Recovery fallback

If API access is blocked but the user still needs help:

- Ask for a file/folder listing exported by the user if allowed.
- Use a local Dropbox sync folder read-only if available.
- Use browser-assisted inspection only with the user present.
- State clearly when Dropbox API verification is blocked.

## Doctor report format

```text
Status: healthy | degraded | blocked | unsafe
Connection path:
Credential finding:
Account/team context:
Target path/id:
Smallest successful read:
Issue:
Risk:
Recommended next action:
```

## Recovery verification

After a fix, verify with a metadata read first, then inspect only the requested path/file. For writes, verify the final path, revision/version, and sharing state after the approved action.
