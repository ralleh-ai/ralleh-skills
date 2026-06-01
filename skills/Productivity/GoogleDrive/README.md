# Google Drive Skill

## What Google Drive is

Google Drive is Google's cloud file storage and collaboration platform for personal Google accounts and Google Workspace organizations. This skill guides bots through safe Drive inspection, file organization, sharing review, upload/download planning, and approved file operations through Google Workspace connectors, Drive API, MCP bridges, CLI tools, browser workflow, or local sync folders.

## What Google Drive does

- Lists Drive files, folders, metadata, revisions, shortcuts, and sharing state when authorized.
- Searches and summarizes allowed Drive files, Google Docs, Sheets, Slides, PDFs, and uploaded files.
- Plans cleanup, migration, archive, naming, deduplication, and shared-drive workflows.
- Reads, exports, or downloads files only when requested and permitted.
- Uploads, moves, renames, shares, restores, or deletes files only after explicit approval.
- Diagnoses Google OAuth, service accounts, Drive scopes, shared drives, file permissions, shortcuts, quotas, and sync issues.

## When a bot should use it

Use Google Drive when the user asks to find, inspect, summarize, organize, upload, download, export, share, migrate, archive, restore, or troubleshoot files in Google Drive.

For spreadsheets, use `GoogleSheets` for range/formula/data-specific work. For broader Gmail/Calendar/Docs/Drive CLI workflows, coordinate with `Gog`.

## Required bot posture

- Verify Google account/workspace and Drive context before acting.
- Prefer read-only scopes for inspection.
- Treat Drive contents as private user or business data.
- Do not print, paste, log, or store OAuth tokens, refresh tokens, service-account keys, client secrets, cookies, or API keys.
- Ask before uploads, exports/downloads to external destinations, moves, renames, shares, permission changes, restores, or deletes.
- Distinguish My Drive, shared drives, shared-with-me files, shortcuts, Google-native files, and binary uploads.
- Respect Google Workspace admin policies, DLP, retention, labels, and domain sharing restrictions.

## Access models a bot may encounter

- Existing Google Workspace connector or GOG CLI with Drive scopes.
- Approved Google Drive MCP/API bridge.
- OAuth client with delegated user consent.
- Service account for app-owned files or Workspace domain-wide delegation when admin-approved.
- Local Google Drive sync folder on a machine where file operations affect synced cloud state.
- Browser session controlled by the user for one-off inspection.

Do not assume local filesystem changes are local-only when the path is inside a synced Google Drive folder.

## If there is no Google Drive key or connection

Do not ask the user to paste a token, client secret, service account JSON, or API key into chat.

Give setup instructions appropriate to the environment:

1. Ask whether this is personal Google Drive, Google Workspace My Drive, shared drive, or app-owned storage.
2. Prefer an existing approved Google Workspace connector or GOG setup if available.
3. In Google Cloud Console, create or select a project and enable the Google Drive API.
4. Choose the least risky credential type:
   - OAuth client ID for user files with consent.
   - Service account for app-owned files or approved Workspace domain-wide delegation.
   - API key only for public data where the API supports it; not for private user Drive files.
5. Configure OAuth consent screen and least-needed scopes.
6. Start with read-only scopes for inspection, such as Drive metadata/read-only access. Add write/share scopes only for approved workflows.
7. Store client IDs, client secrets, refresh tokens, service account JSON, and keys only in the approved secret/config store.
8. Confirm only that the secret exists and what account/scopes it represents.

## Useful outputs

A good Google Drive result should include:

- account/workspace and drive context, minimized for privacy
- file ID, folder ID, path, shared drive, or search query inspected
- file/folder counts and metadata
- sharing/permission or domain exposure risks
- proposed operations with exact source and destination IDs/paths
- whether each operation is read-only, reversible, or destructive
- approval needed before writes/shares/deletes/exports
- verification steps after action

## Stop and ask before

- deleting, trashing, permanently deleting, restoring, moving, or renaming files/folders
- creating, changing, or revoking sharing links or permissions
- downloading/exporting private files outside the approved workspace
- uploading files into Drive
- using broad Drive scopes when file-specific or read-only scopes are enough
- using service-account domain-wide delegation
- changing ownership, labels, retention, or compliance-controlled files
- exposing Drive content to another service or public URL
- storing raw credentials or file exports in a repository

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, credential guidance, Drive API scope checks, and read-only verification.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, scopes, shared drives, file IDs, permissions, exports, quotas, and sync state.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompts for Google Drive workflows.

## Golden operating rule

Read and inventory with least-privilege access; write, share, move, export, restore, or delete only with explicit approval, exact file/folder IDs or paths, and verification evidence.
