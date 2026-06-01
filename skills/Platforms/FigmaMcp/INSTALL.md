# Figma MCP Install Guide

## Purpose

Use this file to verify Figma MCP capability for design inspection.

## Safety and scope

- Prefer read-only access.
- Do not export assets, comment, edit, or share private design data unless requested.
- Do not print Figma tokens or OAuth secrets.
- Respect team permissions and file visibility.

## Prerequisites

- Approved Figma MCP server configured in the runtime.
- Figma auth/token stored in approved secret/config store.
- Access to the target Figma file or URL.
- Clear frame/page/component target when the file is large.

## Verify capability

1. Confirm MCP server is listed and reachable.
2. Confirm Figma auth is present without printing secrets.
3. Read a harmless metadata view for the target file.
4. Read the requested frame/component only.
5. Report design source URL/id, scope inspected, and any missing permissions.

## Handoff prompt

> Verify Figma MCP server and read-only access. Inspect only the requested file/frame/component, extract implementation-relevant design facts, and ask before exporting assets, commenting, or editing designs.
