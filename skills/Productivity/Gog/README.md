# GOG Skill

## What GOG is

GOG is a Google Workspace command-line interface for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.

This skill guides bots through safe Google Workspace operations with clear read/write boundaries and explicit approval for external effects.

## What GOG does

- Searches and reads Gmail, Calendar, Drive, Contacts, Sheets, and Docs through approved OAuth access.
- Creates drafts, events, and sheet updates when explicitly approved.
- Exports or reads Docs/Drive files when requested.
- Uses JSON/no-input modes for scripts when available.

## When a bot should use it

Use GOG when the user asks for Google Workspace CLI work: Gmail search/drafts, Calendar events, Drive/Docs lookup, Contacts, or Sheets operations.

Ask before sending mail, sending drafts, creating/updating/deleting calendar events, changing files, changing sharing, or writing sheets.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify GOG install, OAuth account, services, and safe command patterns.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, account selection, service scopes, command errors, and no-input scripting.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for Google Workspace CLI workflows.

## Golden operating rule

Search/read freely when authorized. Sending, scheduling, sharing, deleting, and writing require explicit approval and exact target confirmation.
