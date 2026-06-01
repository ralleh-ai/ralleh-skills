# Google Drive Install Guide

## Purpose

Use this file to help a bot verify or guide setup for Google Drive access. The default target is safe, read-only file inspection through an approved Google Workspace connector, GOG CLI, MCP/API bridge, or Drive API client.

## Safety and scope

- Prefer read-only Drive scopes for inspection.
- Use broader Drive, write, sharing, or domain-wide delegation scopes only when the workflow requires them and approval/admin consent exists.
- Do not print, paste, log, commit, or echo OAuth tokens, refresh tokens, client secrets, service-account JSON, private keys, cookies, or API keys.
- Do not ask the user to paste secrets into chat.
- Ask before uploads, moves, renames, deletes, restores, exports/downloads, sharing links, permission changes, ownership changes, or domain-wide operations.

## Choose the connection path

Use the first approved path that fits the environment:

1. Existing GOG or Google Workspace connector with Drive access.
2. Approved Google Drive MCP/API bridge.
3. OAuth client ID with delegated user consent.
4. Service account for app-owned files or admin-approved Workspace domain-wide delegation.
5. Local Google Drive sync folder for read-only inspection, with caution that writes sync to cloud.
6. Browser-assisted inspection when API access is unavailable and the user is present.

## Prerequisites

- Google account or Google Workspace account with access to the target files.
- Approved connector, MCP server, GOG setup, Drive API client, browser session, or local sync folder.
- Google Drive API enabled when using a custom API client.
- Credential stored in the approved secret/config store when API access is used.
- Clear target file ID, folder ID, shared drive, path, URL, or search criteria.
- Explicit approval for any write, share, move, restore, delete, export, or permission change.

## Credential guidance

Use the least risky option available:

- OAuth client ID: normal path for accessing user Drive data with consent.
- Service account: useful for app-owned files; for user files it usually requires explicit sharing to the service account or Workspace domain-wide delegation.
- Domain-wide delegation: high-risk Workspace admin configuration; use only for approved organization workflows.
- API key: only for public data when supported; not suitable for private Drive files.

## If no Google Drive credential exists

Give the user/admin these instructions; do not collect secrets in chat:

1. Confirm whether the target is personal Drive, Workspace My Drive, shared drive, or app-owned storage.
2. In Google Cloud Console, create or select a project.
3. Enable the Google Drive API.
4. Configure the OAuth consent screen if using delegated user OAuth.
5. Create credentials:
   - OAuth client ID for user-authorized access.
   - Service account for app-owned files or approved Workspace automation.
6. Choose least-needed Drive scopes, starting with read-only/metadata scopes for inspection.
7. If using a service account for user/Workspace files, share the target folder with the service account or have an admin configure domain-wide delegation.
8. Store client secrets, refresh tokens, service-account JSON, and private keys in the approved secret store.
9. Confirm only that the credential exists and which account/scopes it represents.

## Verify capability

1. Confirm which Google Drive connector/path is configured.
2. Confirm credential presence without printing the value.
3. Confirm account/workspace context and whether shared drives are involved.
4. Perform the smallest safe read first, such as about/drive metadata or target file metadata.
5. Read only the requested file/folder sample.
6. Report scopes, drive context, and missing access.

## Safe verification output

```text
Status: ready | degraded | blocked
Connection path:
Credential: present | missing | not required | invalid
Account/workspace context:
Target file/folder/drive:
Read-only check:
Scopes/permissions:
Next action:
```

## Completion gate

Before saying setup works, provide evidence:

- configured connector/path
- credential presence check without secret value
- smallest successful metadata read
- account/workspace/drive context
- exact target file/folder if provided
- read/write/share/export capability status
- blocker if access is missing
