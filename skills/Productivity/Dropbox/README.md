# Dropbox Skill

## What Dropbox is

Dropbox is a cloud file storage and sharing platform for personal, team, and business files. This skill guides bots through safe Dropbox inspection, file organization, sharing review, upload/download planning, and approved file operations through an approved Dropbox connector, MCP server, API bridge, CLI, or browser workflow.

## What Dropbox does

- Lists folders, files, metadata, revisions, and shared-link state when authorized.
- Searches for files and summarizes allowed file contents.
- Plans safe file organization, naming, deduplication, archive, and migration work.
- Downloads or exports files only when requested and allowed.
- Uploads, moves, renames, shares, restores, or deletes files only after explicit approval.
- Diagnoses Dropbox auth, app scopes, token presence, team access, shared folder permissions, and rate-limit issues.

## When a bot should use it

Use Dropbox when the user asks to find, inspect, summarize, organize, upload, download, share, migrate, archive, restore, or troubleshoot Dropbox files/folders.

For broad cleanup or migration work, start with a read-only inventory and proposed plan. Do not modify files until the user approves the exact operation and target paths.

## Required bot posture

- Read metadata and small samples first.
- Confirm account/team and root scope before acting.
- Prefer app-folder or least-scope access when possible.
- Treat file contents as private user data.
- Do not print, paste, log, or store OAuth tokens, refresh tokens, app secrets, cookies, or shared-link secrets.
- Ask before uploads, downloads to external destinations, moves, renames, shares, permission changes, restores, or deletes.
- Prefer reversible operations: copy before move, archive before delete, record original paths.
- Never create public/shared links without explicit approval.

## Access models a bot may encounter

- Dropbox OAuth app or API connector using scoped OAuth tokens.
- Dropbox Business/team connector with team scopes and member selection.
- Approved MCP server or API bridge wrapping Dropbox API calls.
- Local Dropbox sync folder on a machine where file operations affect synced cloud state.
- Browser session controlled by the user for one-off inspection.

Do not assume local filesystem changes are local-only when the path is inside a synced Dropbox folder.

## If there is no Dropbox key or connection

Do not ask the user to paste a token into chat.

Give setup instructions appropriate to the environment:

1. Ask whether this is personal Dropbox, Dropbox team/business, or a local synced folder workflow.
2. For API access, create or use a Dropbox app in the Dropbox App Console.
3. Choose the smallest content access needed: App Folder when possible, Full Dropbox only when the task needs pre-existing files across the account.
4. Select least-needed scopes, usually read-only metadata/content scopes for inspection and write/share scopes only when approved.
5. Use OAuth for users; use generated test tokens only for short local testing on the user's own account.
6. Store app keys, app secrets, access tokens, and refresh tokens in the approved secret/config store, not in chat, repos, tickets, or logs.
7. Confirm only that the secret exists and what scopes/account it represents.

## Useful outputs

A good Dropbox result should include:

- account or team context, with private data minimized
- path(s) inspected
- file/folder counts and notable metadata
- sharing or permission risks
- proposed operations with source and destination paths
- whether each operation is read-only, reversible, or destructive
- approval needed before any write/share/delete
- verification steps after action

## Stop and ask before

- deleting, permanently deleting, restoring, moving, or renaming files/folders
- creating, changing, or revoking shared links or folder permissions
- downloading private files outside the approved workspace
- uploading files into Dropbox
- using Full Dropbox access when App Folder access is enough
- acting as a Dropbox team member or using team-wide scopes
- exposing Dropbox content to another service or public URL
- storing raw credentials or file exports in a repository

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, token guidance, connection checks, and read-only verification.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, scopes, paths, team access, shared links, sync state, and rate limits.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompts for Dropbox workflows.

## Golden operating rule

Inventory and plan freely when authorized; write, share, move, export, restore, or delete only with explicit approval, exact paths, and verification evidence.
