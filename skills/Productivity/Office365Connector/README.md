# Office365 Connector Skill

## What Office365 Connector is

Office365 Connector is the productivity skill for Microsoft 365 and Microsoft Graph workflows: Outlook, Calendar, OneDrive, SharePoint, Teams, Excel, and related account data.

It provides safe read/report/update patterns for Microsoft workplace data.

## What Office365 Connector does

- Reads mail, calendar, files, Teams/channel context, SharePoint/OneDrive metadata, and Excel workbook data through approved connectors.
- Drafts replies, events, file summaries, and spreadsheet updates.
- Requires approval for sends, scheduling, sharing, deletion, permissions, and writes.

## When a bot should use it

Use Office365 Connector when the user asks for Outlook, Microsoft Calendar, Teams, OneDrive, SharePoint, or Excel automation.

Ask before sending email/chat, creating/updating meetings, sharing files, changing permissions, deleting content, or writing workbook data.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify connector/API access, tenant/account, scopes, and safe read operations.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot tenant/auth/scope errors, Graph permissions, throttling, and data mismatch.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for Office 365 workflows.

## Golden operating rule

Microsoft 365 actions often affect workplaces. Default to read/draft, verify tenant/account, and ask before any external or permission-changing action.
