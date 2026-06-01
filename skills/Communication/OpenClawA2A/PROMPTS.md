# OpenClaw A2A Prompt Suggestions

## Purpose

Use these prompts to help users request agent delegation, session handoffs, status checks, and cross-agent coordination safely.

## Delegation prompts

- "Create a task and send this to the right specialist agent."
- "Have Carmack inspect the backend issue and report verification evidence."
- "Ask Picasso to review the UI, but keep changes scoped to CSS/layout."
- "Spawn a clean specialist session with this brief and wait for completion."

## Status prompts

- "What is Carmack working on right now?"
- "Check the live task ledger before answering."
- "Read the target session history and summarize only the current blocker."
- "Find orphaned or stale agent tasks."

## Handoff prompts

- "Prepare a handoff packet for this task."
- "Resume the failed specialist task and preserve the task history."
- "Move this task to the right agent and include the verification gate."

## Guardrail prompts

- "Do not forward secrets or raw internal prompts."
- "Send only the minimum context needed."
- "Treat the agent's done message as a claim; verify the real workspace."

## Good bot behavior

When a user asks for A2A work, the bot should:

1. Use live task/session data instead of memory when available.
2. Pick the correct target or ask one clarifying question.
3. Send bounded context.
4. Preserve task ownership in CORTEX or the deployment ledger.
5. Verify output independently before reporting done.

## Example handoff prompt

> Use OpenClaw A2A to route this work to the correct specialist. Create/resume the task, send a bounded brief with objective, scope, non-goals, safety boundaries, and verification gate. Do not forward secrets. Verify real state before reporting completion.
