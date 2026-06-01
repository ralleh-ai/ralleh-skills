# Google Analytics Install Guide

## Purpose

Use this file to verify safe Google Analytics/GA4 access.

## Safety and scope

- Read-only by default.
- Do not change conversions, audiences, data streams, property settings, links, or user permissions without approval.
- Do not print OAuth tokens, client secrets, or private user-level data.

## Prerequisites

- Approved access method: GA UI, API client, MCP/server, or reporting connector.
- Auth stored in approved secret store.
- Target property id and timezone.
- Date range and requested dimensions/metrics.

## Verify capability

1. Confirm auth and property access without printing secrets.
2. Pull a narrow read-only report such as users/sessions by source/medium.
3. Confirm date range, timezone, and property id.
4. Report capability and blockers.

## Handoff prompt

> Verify GA4 read-only access for the target property. Pull a narrow report, confirm property/date range/timezone, and do not mutate analytics settings without explicit approval.
