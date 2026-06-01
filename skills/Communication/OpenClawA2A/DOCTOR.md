# OpenClaw A2A Doctor

## Purpose

Use this when agent-to-agent routing, session discovery, handoffs, completion events, or cross-session status checks are failing or confusing.

## Stop conditions

Stop and ask before:

- Sending private context to an ambiguous or untrusted target.
- Forwarding secrets, prompts, credentials, or raw internal metadata.
- Messaging external/public channels.
- Killing or steering another session without clear user intent.

## Fast triage

1. Confirm the requested target: configured agent, visible session, or task owner.
2. List available agents/sessions through the runtime's first-class tools.
3. Check the task ledger for ownership and status when a task exists.
4. Fetch target session history only if needed for safe routing.
5. Retry once with a smaller, clearer handoff if the first handoff failed.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Target agent not found | Configured agent list/session list | Ask for target or use the routing policy. |
| Wrong session targeted | Session key, label, recent history | Re-target by stable session key or task id. |
| Subagent says done but files unchanged | Real repo git status/log/diff | Treat as failed/blocked and retry with correct workspace. |
| Completion event is vague | Target history and expected output | Ask target for exact evidence or blocker. |
| Too much context sent | Handoff packet size | Resend bounded brief and links/files only. |

## Verification checks

- Task ledger status and session key.
- Target session last response.
- Real file/system state in the actual workspace.
- Test/build/lint/live check evidence.

## Doctor report format

Return:

- Status: healthy / degraded / blocked / unavailable.
- Target agent/session inspected.
- Task id/session key, if any.
- Exact routing or handoff failure.
- Verification performed.
- Recommended next action.
