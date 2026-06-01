# AGENTS.md Standard

## Purpose

`AGENTS.md` defines orchestration: how agents are routed, delegated, supervised, and verified.

It is the operating protocol for multi-agent work, not a place for personality, secrets, or full project docs.

## Target size

- Ideal: 1,000–2,500 words.
- Hard ceiling: 3,500 words.
- If larger, split stable reference material into skills or docs.

## Required sections

1. `# AGENTS.md — Orchestration Protocol`
2. `## Startup Checks`
   - Minimal live checks required at session start.
3. `## Agent Roster`
   - Agent names, specialties, workspaces, and routing rules.
4. `## Delegation Rules`
   - When to handle directly vs delegate.
5. `## Handoff Packet`
   - Objective, scope, constraints, files, verification gate, expected output.
6. `## Task Ledger Protocol`
   - CORTEX or equivalent task creation/update/done rules.
7. `## Verification Protocol`
   - Subagent completion is claim, not proof.
8. `## Memory Curation`
   - Where lessons/patterns go after work completes.
9. `## Safety Boundaries`

## Optimization rules

- Keep routing tables compact.
- Avoid copying each agent's full SOUL/TOOLS content.
- Link to specialist standards instead of embedding them.
- Include exact verification gates for delegated work.
- Keep startup checks minimal and live-state oriented.

## Anti-patterns

- Long biographies or persona content.
- Full task history; use CORTEX.
- Long memory content; use `MEMORY.md` or ENGRAM.
- Vague delegation without verification.

## Evaluation checklist

- A bot can choose the right agent from the roster.
- Handoff packet is explicit.
- Task ledger lifecycle is clear.
- Completion requires independent verification.
- No stale project/task state is hardcoded.
