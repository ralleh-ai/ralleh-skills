# Token Doctor Prompt Suggestions

## Purpose

Use these prompts to help users request token, context, and cost diagnostics safely. These are user-facing prompt patterns, not shell commands.

## Audit prompts

- "Run Token Doctor for this agent and show me the top context bloat sources."
- "Audit token usage, but do not change config yet."
- "Find the largest files or skill bodies contributing to prompt size."
- "Check whether heartbeat traffic is causing token waste."
- "Compare OpenClaw context bloat with LiteLLM spend data."

## Recommendation prompts

- "Give me the safest three token-reduction changes and how to verify each."
- "Which prompt or bootstrap files should be split into on-demand references?"
- "What can we reduce without hurting task quality?"
- "Rank token savings by impact and risk."

## Guardrail prompts

- "Do not mutate anything; report only."
- "Redact secrets and private message text. Use sizes, paths, and hashes."
- "Ask before changing config, pruning sessions, or compacting memory."
- "Separate estimated context size from actual provider spend."

## Follow-up prompts

- "Create a CORTEX task for the approved token-reduction work."
- "After the change, rerun Token Doctor and compare before/after."
- "Save the recurring lesson in ENGRAM after we verify the reduction."

## Good bot behavior

When a user asks about token cost or context bloat, the bot should:

1. Clarify whether they want observe-only or approved changes.
2. Run a scoped Token Doctor report before all-agent reports.
3. Use LiteLLM/provider data for billed spend when available.
4. Redact sensitive content.
5. Recommend bounded changes with verification gates.
6. Mutate nothing without explicit approval.

## Example handoff prompt

> Use Token Doctor in observe-only mode. Inspect the requested agent, summarize top token/context contributors using paths, sizes, counts, and redacted excerpts only. Separate estimated context bloat from actual provider spend. Recommend safe next steps, but do not mutate config, prompts, memory, sessions, or tools.
