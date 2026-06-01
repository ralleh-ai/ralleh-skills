# Google Ads Install Guide

## Purpose

Use this file to verify safe Google Ads access.

## Safety and scope

- Read-only by default.
- Do not change budgets, bids, campaign status, ads, assets, audiences, or recommendations without approval.
- Do not print OAuth refresh tokens, developer tokens, client secrets, or customer private data.
- Confirm account/customer id before reporting or changing anything.

## Prerequisites

- Approved access method: Google Ads UI, API client, MCP/server, or reporting connector.
- Auth stored in approved secret store.
- Target customer id/account name.
- Date range and timezone.

## Verify capability

1. Confirm auth/account scope without printing secrets.
2. List accessible accounts or confirm target customer id.
3. Pull a read-only campaign summary for a narrow date range.
4. Confirm metrics currency/timezone.
5. Report read-only capability and blockers.

## Handoff prompt

> Verify Google Ads read-only access for the target account. Pull a narrow campaign summary, confirm date range/timezone/currency, and do not apply changes without explicit approval.
