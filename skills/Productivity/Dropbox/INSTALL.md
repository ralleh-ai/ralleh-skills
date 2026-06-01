# Dropbox Install Guide

## Purpose

Use this file to help a bot verify or guide setup for Dropbox access. The default target is safe, read-only file inspection. Do not mutate Dropbox files, create shared links, or expose secrets during setup.

## Safety and scope

- Prefer read-only access until a specific write/share task is approved.
- Prefer App Folder access when the bot only needs its own managed area.
- Use Full Dropbox access only when the task requires pre-existing files across the user's Dropbox.
- Do not print, paste, log, commit, or echo Dropbox access tokens, refresh tokens, app secrets, cookies, or shared-link secrets.
- Do not ask the user to paste secrets into chat.
- Ask before uploads, moves, renames, deletes, restores, shared links, permission changes, or team-wide operations.

## Choose the connection path

Use the first approved path that fits the environment:

1. Existing Dropbox MCP/API connector configured in the runtime.
2. Existing organization Dropbox app with OAuth and stored secret refs.
3. Dropbox Business/team connector when team-level operations are explicitly required.
4. Local Dropbox sync folder for filesystem-level read-only inspection, with caution that file writes sync to cloud.
5. Browser-assisted inspection when API access is not available and the user is present.

## Prerequisites

- Approved Dropbox connector, MCP server, CLI, API bridge, browser session, or local sync folder.
- Account/team access to the target file or folder.
- Credential stored in the approved secret/config store when API access is used.
- Clear target path, shared link, file ID, folder ID, or search criteria.
- Explicit approval for any write, share, move, restore, or delete.

## Credential options

Use the least risky option available:

- OAuth authorization code with refresh token: normal production path for user-connected Dropbox access.
- Dropbox Business/team OAuth: only for approved team administration or team file workflows.
- Generated token from the App Console: acceptable only for short testing against the user's own account.
- Local sync folder: may avoid API credentials, but writes can still mutate cloud files.

## If no Dropbox key or credential exists

Give the user/admin these instructions; do not collect the token in chat:

1. Go to the Dropbox App Console.
2. Create a new app or choose the approved existing integration.
3. Select the API type and content access:
   - App Folder for limited bot-managed storage.
   - Full Dropbox only when broad account file access is required.
4. Open the Permissions tab and select the minimum scopes needed.
   - Start with read-only file metadata/content scopes for inspection.
   - Add write/share scopes only when the approved workflow needs them.
5. Configure OAuth redirect URIs if the connector uses an OAuth web flow.
6. For short personal testing only, use the app settings OAuth section to generate a token for the user's own account.
7. Store app key, app secret, access token, and refresh token in the approved secret/config store.
8. Confirm only that the secret exists and which scopes/account it represents; never paste token values into chat.

## Verify capability

1. Confirm which Dropbox connector/path is configured.
2. Confirm credential presence without printing the value.
3. Confirm account/team identity at a high level.
4. Perform the smallest safe read first, such as current account or target folder metadata.
5. Read only the requested path or file sample.
6. Report scope, permissions, and missing access.

## Safe verification output

```text
Status: ready | degraded | blocked
Connection path:
Credential: present | missing | not required | invalid
Account/team context:
Target path/id:
Read-only check:
Scopes/permissions:
Next action:
```

## Completion gate

Before saying setup works, provide evidence:

- configured connector/path
- credential presence check without secret value
- smallest successful metadata read
- account/team context
- exact target path/id if provided
- read/write/share capability status
- blocker if access is missing
