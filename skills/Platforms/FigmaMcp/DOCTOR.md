# Figma MCP Doctor

## Purpose

Use this when Figma MCP cannot connect, auth fails, frames are missing, design data is stale, or asset export is blocked.

## Fast triage

1. Confirm MCP server availability.
2. Confirm Figma credential presence without printing it.
3. Confirm the target file URL/id and frame/component id.
4. Check whether the user/account has access.
5. Try a metadata-only read before detailed frame extraction.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| MCP server missing | runtime MCP config | Enable approved server or ask for overlay. |
| Auth failed | secret presence/scope | Configure valid Figma token. |
| File not found | file URL/id and access | Ask for access or correct URL. |
| Frame missing | page/frame id | Ask for exact frame link. |
| Output too huge | file scope | Narrow to frame/component. |

## Doctor report format

Return status, MCP server inspected, file/frame target, permission finding, exact blocker, and next action.
