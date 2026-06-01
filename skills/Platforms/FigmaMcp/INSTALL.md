# Figma MCP Install Guide

## Purpose

Use this file to help a bot verify or guide setup for Figma MCP capability. The default target is safe, read-only design inspection. Do not mutate Figma files, export assets, or expose secrets during setup.

## Safety and scope

- Prefer read-only access for design inspection.
- Use the official remote or desktop Figma MCP server when available for the user's MCP client.
- If using a Figma API-backed MCP bridge, store credentials only in the approved secret/config store.
- Do not print, paste, log, commit, or echo Figma tokens, OAuth secrets, cookies, or private keys.
- Do not ask the user to paste a token into chat. Ask them to store it securely and confirm it exists.
- Respect Figma team permissions, file visibility, enterprise policies, and design ownership.
- Ask before asset export, commenting, file edits, write-to-canvas, sharing design content, or permission changes.

## Choose the connection path

Use the first approved path that fits the environment:

1. Official remote Figma MCP server — preferred when the MCP client supports it.
2. Official desktop Figma MCP server — useful when Figma desktop is installed and local editor workflows are expected.
3. Existing organization MCP bridge — use the configured server and secret references already approved by the workspace.
4. Figma REST API MCP bridge — acceptable for read-only inspection when backed by OAuth, a plan access token, or a personal access token stored securely.

Do not invent a new server, package, or command if the runtime already has an approved Figma MCP integration.

## Prerequisites

- MCP-capable client or agent runtime.
- Approved Figma MCP server or Figma API-backed MCP bridge.
- Figma account with access to the target file/team/project.
- Credential stored in the approved secret store when the selected integration needs one.
- Target Figma file URL, file key, or frame/node link.
- Clear scope for large files: page, frame, component, variable collection, or node ID.

## Credential options

Use the least risky option available:

- OAuth app: best for apps acting on behalf of users or shared integrations that need user-scoped access.
- Organization/plan access token: best for organization-managed automation when available.
- Personal access token: acceptable for individual/local tooling, but it is tied to one user's account and may expose broad access depending on scopes.

For normal inspection, prefer read-only file/design scopes. Do not request write scopes unless the user explicitly asks for write-to-canvas or design mutation and approval is recorded.

## If no Figma key or credential exists

Give the user/admin these instructions; do not collect the token in chat:

1. Open Figma in a browser and go to the file browser.
2. Open the account menu in the top-left corner.
3. Choose Settings.
4. Open the Security tab.
5. Find Personal access tokens.
6. Select Generate new token.
7. Name it for one integration, for example `ralleh-figma-mcp-readonly`.
8. Choose the minimum scopes needed, normally read-only file/content access for inspection.
9. Generate and copy the token immediately; Figma shows it once.
10. Store it in the approved secret/config store as a secret reference such as `env:FIGMA_TOKEN`, `vault:figma/mcp`, or the platform's configured secret name.
11. Confirm only that the secret exists. Never paste the token into chat, docs, tickets, repos, or logs.

If the integration is for a team, CI, or long-lived shared bot, recommend OAuth or organization/plan token governance instead of one person's personal token.

## Verify capability

1. Confirm which Figma MCP server or bridge is configured.
2. Confirm credential presence without printing the value.
3. Confirm the target file URL/key and requested page/frame/node.
4. Perform the smallest safe read first, such as metadata or file info.
5. Read only the requested frame/component/node.
6. If the result is too large, narrow scope before retrying.
7. Report the source inspected, scope, permission result, and any missing access.

## Safe verification output

Return a concise report:

```text
Status: ready | degraded | blocked
Connection path:
Credential: present | missing | not required | invalid
Target:
Scope inspected:
Read-only check:
Permission finding:
Next action:
```

## Handoff prompt

> Verify Figma MCP server access and read-only capability. If credentials are missing, explain how the user/admin can create and store the key without pasting it into chat. Inspect only the requested Figma file/frame/component, extract implementation-relevant facts, and ask before exporting assets, commenting, editing designs, or writing to canvas.

## Completion gate

Before saying setup works, provide evidence:

- configured server or connection path
- credential presence check without secret value
- target file/frame metadata or successful narrow read
- read-only scope confirmation when applicable
- exact blocker if access is missing
- next safe action
