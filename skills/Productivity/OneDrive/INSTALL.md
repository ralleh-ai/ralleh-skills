# OneDrive Install Guide

## Purpose

Use this file to help a bot verify or guide setup for OneDrive access. The default target is safe, read-only file inspection through Microsoft Graph or an approved Microsoft 365 connector.

## Safety and scope

- Prefer read-only delegated permissions for inspection.
- Use stronger read-all, write, SharePoint, or application permissions only when the workflow requires them and approval/admin consent exists.
- Do not print, paste, log, commit, or echo Graph access tokens, refresh tokens, client secrets, certificates, cookies, or session data.
- Do not ask the user to paste secrets into chat.
- Ask before uploads, moves, renames, deletes, restores, shared links, permission changes, tenant-wide access, or compliance-affecting actions.

## Choose the connection path

Use the first approved path that fits the environment:

1. Existing Office 365 or Microsoft Graph connector configured in the runtime.
2. Approved OneDrive MCP/API bridge using Microsoft Graph.
3. Microsoft Graph OAuth app registration with delegated permissions.
4. Application permission/service principal only for approved admin/service workflows.
5. Local OneDrive sync folder for read-only inspection, with caution that writes sync to cloud.
6. Browser-assisted inspection when API access is unavailable and the user is present.

## Prerequisites

- Microsoft account or Microsoft 365 work/school account with file access.
- Approved connector, MCP server, Graph app registration, browser session, or local sync folder.
- Credential stored in the approved secret/config store when API access is used.
- Clear target path, drive ID, item ID, shared link, site/library, or search criteria.
- Explicit approval for any write, share, move, restore, delete, or permission change.

## Permission guidance

Use the smallest Microsoft Graph permission that fits:

- `Files.Read`: read signed-in user's files.
- `Files.Read.All`: read all files the signed-in user can access.
- `Files.ReadWrite`: read/write signed-in user's files.
- `Files.ReadWrite.All`: read/write all files the signed-in user can access.
- `Files.ReadWrite.AppFolder`: app folder access for personal accounts where supported.
- `Sites.Read.All` or `Sites.ReadWrite.All`: SharePoint document library workflows; use carefully.
- Application permissions require admin consent and can be tenant-wide. Treat them as high risk.

## If no OneDrive credential exists

Give the user/admin these instructions; do not collect secrets in chat:

1. Confirm whether the target is personal OneDrive, work/school OneDrive, SharePoint, or Teams files.
2. In Microsoft Entra admin center or Azure portal, create or select an app registration.
3. Record the tenant ID and client ID in the approved config store.
4. Add a redirect URI matching the connector's OAuth callback if using delegated auth.
5. Add least-needed Microsoft Graph API permissions, starting with `Files.Read` for inspection.
6. Ask an admin to grant consent if the tenant requires it or if application permissions are used.
7. Create a client secret or certificate only if the connector requires confidential-client auth.
8. Store secrets/tokens/certificates in the approved secret store.
9. Confirm only that the credential exists and which tenant/scopes it represents.

## Verify capability

1. Confirm which OneDrive/Graph connector/path is configured.
2. Confirm credential presence without printing the value.
3. Confirm tenant/account type: personal, work/school, SharePoint, or Teams-backed.
4. Perform the smallest safe read first, such as `/me/drive` or target item metadata.
5. Read only the requested path/item sample.
6. Report scopes, tenant/account context, and missing access.

## Safe verification output

```text
Status: ready | degraded | blocked
Connection path:
Credential: present | missing | not required | invalid
Tenant/account context:
Target drive/item/path:
Read-only check:
Scopes/permissions:
Next action:
```

## Completion gate

Before saying setup works, provide evidence:

- configured connector/path
- credential presence check without secret value
- smallest successful metadata read
- tenant/account/drive context
- exact target path/item if provided
- read/write/share capability status
- blocker if access is missing
