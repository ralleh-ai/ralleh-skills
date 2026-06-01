# Office365 Connector Install Guide

## Purpose

Use this file to verify Microsoft 365 connector capability.

## Safety and scope

- Do not print OAuth tokens, refresh tokens, client secrets, tenant secrets, or private message bodies unnecessarily.
- Sending messages, creating/updating meetings, sharing files, deleting content, changing permissions, or writing Excel data requires explicit approval.
- Confirm tenant, account, and scope before acting.

## Prerequisites

- Approved connector: Microsoft Graph client, MCP/server, integration tool, or manual export.
- Auth stored in approved secret store.
- Tenant/account and target workload: Outlook, Calendar, OneDrive, SharePoint, Teams, or Excel.
- Required scopes granted.

## Verify capability

1. Confirm connector is available.
2. Confirm account/tenant without printing secrets.
3. Run a harmless read-only query for the target workload.
4. Confirm scopes and blockers.
5. Report capability.

## Handoff prompt

> Verify Office365 connector, tenant, account, and scopes. Use read-only queries first. Ask before sends, meeting changes, file sharing/deletion, permission changes, or Excel writes.
