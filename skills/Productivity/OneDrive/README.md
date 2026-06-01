# OneDrive Skill

## What OneDrive is

OneDrive is Microsoft's cloud file storage platform for personal Microsoft accounts and Microsoft 365 work/school tenants. This skill guides bots through safe OneDrive inspection, file organization, sharing review, upload/download planning, and approved file operations through Microsoft Graph, an approved MCP connector, Office 365 connector, CLI, browser workflow, or local sync folder.

## What OneDrive does

- Lists drives, folders, files, metadata, versions, and sharing state when authorized.
- Searches and summarizes allowed OneDrive files.
- Plans file cleanup, migration, archive, naming, and deduplication workflows.
- Reads or downloads files only when requested and permitted.
- Uploads, moves, renames, shares, restores, or deletes files only after explicit approval.
- Diagnoses Microsoft Graph auth, tenant/account selection, OneDrive permissions, SharePoint-backed files, throttling, and sync issues.

## When a bot should use it

Use OneDrive when the user asks to find, inspect, summarize, organize, upload, download, share, migrate, archive, restore, or troubleshoot files in OneDrive or OneDrive-backed Microsoft 365 storage.

For SharePoint document libraries, Teams files, or Excel workbook automation, coordinate with `Office365Connector` when broader Microsoft 365 context is needed.

## Required bot posture

- Verify tenant/account and drive context before acting.
- Prefer delegated read-only file scopes for inspection.
- Treat files as private workplace or personal data.
- Do not print, paste, log, or store OAuth tokens, refresh tokens, client secrets, cookies, or Graph access tokens.
- Ask before uploads, downloads to external destinations, moves, renames, shares, permission changes, restores, or deletes.
- Distinguish personal OneDrive, work/school OneDrive, SharePoint document libraries, and Teams files.
- Respect Microsoft 365 tenant policies, retention, DLP, labels, and admin consent boundaries.

## Access models a bot may encounter

- Microsoft Graph connector using delegated OAuth permissions.
- Microsoft Graph application permission with admin consent for approved service workflows.
- Existing Office 365 connector that exposes OneDrive/SharePoint file operations.
- Approved MCP server wrapping Graph file APIs.
- Local OneDrive sync folder on a machine where file operations affect synced cloud state.
- Browser session controlled by the user for one-off inspection.

Do not assume local filesystem changes are local-only when the path is inside a synced OneDrive folder.

## If there is no OneDrive key or connection

Do not ask the user to paste a token or client secret into chat.

Give setup instructions appropriate to the environment:

1. Ask whether this is personal OneDrive, Microsoft 365 work/school OneDrive, SharePoint, or Teams files.
2. Prefer an existing approved Microsoft 365/Graph connector if available.
3. For a new Graph integration, create an app registration in Microsoft Entra admin center or Azure portal.
4. Configure supported account type and redirect URI for the connector's OAuth flow.
5. Add least-needed Microsoft Graph permissions:
   - `Files.Read` for reading the signed-in user's files.
   - `Files.Read.All` only when the workflow must read all files the signed-in user can access.
   - `Files.ReadWrite` or stronger write scopes only when approved.
   - Application permissions such as `Files.Read.All` or `Files.ReadWrite.All` require admin consent and should be avoided unless truly needed.
6. Store client ID, tenant ID, client secret/certificate, refresh token, and access tokens only in the approved secret/config store.
7. Confirm only that the secret exists and what tenant/scopes it represents.

## Useful outputs

A good OneDrive result should include:

- account/tenant and drive context, minimized for privacy
- path, drive ID, item ID, or shared link inspected
- file/folder counts and metadata
- sharing/permission or retention risks
- proposed operations with exact source and destination paths
- whether each operation is read-only, reversible, or destructive
- approval needed before writes/shares/deletes
- verification steps after action

## Stop and ask before

- deleting, permanently deleting, restoring, moving, or renaming files/folders
- creating, changing, or revoking sharing links or permissions
- downloading private files outside the approved workspace
- uploading files into OneDrive/SharePoint
- using application permissions or tenant-wide scopes
- changing retention labels, sensitivity labels, or compliance-controlled files
- acting across another user's drive or SharePoint site
- exposing OneDrive content to another service or public URL
- storing raw credentials or file exports in a repository

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, Graph permission guidance, connection checks, and read-only verification.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, tenant, Graph scopes, paths, sharing, SharePoint-backed files, sync, and throttling.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompts for OneDrive workflows.

## Golden operating rule

Read and inventory with least-privilege access; write, share, move, export, restore, or delete only with explicit approval, exact target paths, and verification evidence.
