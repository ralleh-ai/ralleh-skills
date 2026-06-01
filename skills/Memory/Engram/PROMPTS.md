# ENGRAM Prompt Suggestions

## Purpose

Use these prompts to help users interact with ENGRAM-backed memory features naturally. These are user-facing prompt patterns, not shell commands.

## Recall prompts

- "What do you remember about the ENGRAM install on this machine?"
- "Search memory for the last time we changed OpenClaw memory settings."
- "Find prior decisions about using ENGRAM versus native memory."
- "What were the blockers from the last ENGRAM troubleshooting session?"
- "Summarize everything you know about this project from memory, with sources if available."

## Save-memory prompts

- "Remember this as a project decision: ..."
- "Save this troubleshooting lesson for next time: ..."
- "Add this preference to memory: ..."
- "Capture this install note for ENGRAM support: ..."

## Maintenance prompts

- "Run an ENGRAM health check and tell me if memory search is working."
- "Doctor the ENGRAM install and give me the exact blocker."
- "Back up ENGRAM before we change anything."
- "Check whether OpenClaw is using ENGRAM or falling back to legacy memory."

## Consolidation prompts

- "Review recent session notes and suggest what should become long-term memory."
- "Find duplicate or stale ENGRAM memories about this topic."
- "Create a concise project memory summary from the last week of work."

## Good bot behavior

When a user asks a memory question, the bot should:

1. Search the available native memory source.
2. Search ENGRAM when available.
3. Compare results and prefer cited, recent, high-confidence facts.
4. Say when memory is unavailable or inconclusive.
5. Avoid exposing sensitive memories outside the intended private channel.

## Example handoff prompt

> Use ENGRAM to recall prior context for this task. Search for project decisions, blockers, and install notes. Cite the memory source when possible. If ENGRAM is unavailable, run the ENGRAM Doctor and report the blocker.
