# GOG Install Guide

## Purpose

Use this file to verify GOG CLI capability for Google Workspace workflows.

## Safety and scope

- Do not print OAuth credentials or client secrets.
- Do not send email, send drafts, create/update events, share files, delete content, or update sheets without explicit approval.
- Set or confirm the active account before acting.
- Prefer `--json` and `--no-input` for automation-safe reads.

## Prerequisites

- `gog` CLI installed.
- OAuth credentials configured.
- Account authorized for required services: gmail, calendar, drive, contacts, docs, sheets.

## Verify capability

```bash
gog auth list
```

Safe read checks:

```bash
gog gmail search 'newer_than:7d' --max 5
GOG_ACCOUNT=<approved-account-email> gog calendar events primary --from <iso-start> --to <iso-end>
gog drive search "name contains 'test'" --max 5
```

## Handoff prompt

> Verify GOG auth and active account. Use read-only commands first. Ask before sending mail, scheduling/updating events, sharing files, deleting content, or writing sheets.
