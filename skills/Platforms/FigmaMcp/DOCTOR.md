# Figma MCP Doctor

## Purpose

Use this when Figma MCP cannot connect, authentication fails, file/frame data is missing, the output is too large, design data appears stale, asset export is blocked, or the bot is unsure what access path is configured.

## Fast triage

1. Confirm the MCP client/runtime supports MCP servers.
2. Confirm which Figma connection path is intended: remote MCP, desktop MCP, organization bridge, or API-backed bridge.
3. Confirm the Figma MCP server is configured and reachable.
4. Confirm credential presence without printing the value.
5. Confirm the target file URL/key and frame/page/component/node ID.
6. Confirm the account has access to the file/team/project.
7. Try a metadata-only or file-info read before detailed frame extraction.
8. Narrow to a specific node when output is too large.
9. Report the exact blocker and safe next action.

## Stop conditions

Stop and ask before:

- printing or requesting a raw token, OAuth secret, cookie, or private key
- storing credentials in a repository, issue, prompt, chat, design note, or log
- exporting assets or design files
- writing to canvas, editing a file, creating components, or updating variables
- commenting in Figma or notifying collaborators
- changing Figma permissions, teams, projects, or sharing links
- bypassing enterprise policy, SSO, 2FA, or access controls
- broad-reading a large private design system when the task only needs one frame
- using a personal token for team automation when an organization-managed option is required

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| MCP server missing | Runtime MCP server list/config | Enable the approved Figma MCP server or ask for the correct overlay. |
| Client does not support MCP | Editor/agent capability | Use an MCP-capable client or supported connector. |
| Remote MCP unavailable | Network, client support, Figma status | Use desktop MCP or approved API bridge if allowed. |
| Desktop MCP unavailable | Figma desktop app running and signed in | Open/sign in to Figma desktop or use remote MCP. |
| Auth failed | Secret exists, token valid, scopes sufficient | Create/store a new credential; never paste it into chat. |
| Missing token | Approved secret store/config | Give key creation/storage instructions from INSTALL.md. |
| File not found | File key/URL, team access, branch/version | Ask for correct link or access to the file. |
| Frame/node missing | Node ID encoded in frame link | Ask user to select the exact frame/layer and copy its link. |
| Output too huge | Scope too broad | Narrow to page/frame/component/node; request component list before details. |
| Stale design data | Branch, version history, selected frame | Ask whether the design has changed; re-read target metadata. |
| Variables/tokens missing | Design system/library permissions | Ask for library access or inspect published variable collections only. |
| Asset export blocked | Permission or policy | Ask for approval and confirm export destination before retrying. |
| Write-to-canvas blocked | Remote MCP feature, scopes, approval | Confirm explicit user request, write capability, and rollback/safety plan. |

## Credential diagnosis without leaking secrets

Allowed evidence:

- `FIGMA_TOKEN present: yes/no`
- secret reference name such as `env:FIGMA_TOKEN` or `vault:figma/mcp`
- token type if known: OAuth, plan token, personal token
- scope names if visible from config or admin UI
- expiration date if visible
- last four characters only if local policy permits fingerprints

Forbidden evidence:

- full token value
- OAuth client secret
- cookies
- session headers
- screenshots showing tokens
- copy/paste requests for credentials

## How to help when no key exists

Give the user/admin setup steps instead of asking for the secret:

1. Open Figma file browser.
2. Account menu → Settings → Security.
3. Personal access tokens → Generate new token.
4. Name it for this integration only.
5. Select least-needed read scopes.
6. Copy it once and save it into the approved secret store.
7. Confirm the secret exists; do not share the token text.

For organization/shared automation, recommend OAuth or organization/plan token governance when available.

## Design inspection fallback

If MCP is blocked but the user still needs help:

- Ask for a screenshot, exported spec, or copied design values if allowed.
- Use the screenshot/spec as untrusted source material.
- State that MCP verification is blocked.
- Avoid claiming exact measurements unless provided by Figma or measured from source.

## Doctor report format

```text
Status: healthy | degraded | blocked | unsafe
Connection path:
MCP server inspected:
Credential finding:
Target file/frame/node:
Permission finding:
Smallest successful read:
Issue:
Risk:
Recommended next action:
```

## Recovery verification

After any fix, verify with the smallest safe read first, then the requested frame/component only. Report the inspected scope and remaining limitations before proceeding to implementation guidance.
