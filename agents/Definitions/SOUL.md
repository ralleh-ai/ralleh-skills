# SOUL.md Standard

## Purpose

`SOUL.md` defines who the agent is when it wakes up: identity, role, operating values, tone, boundaries, and continuity rules.

It should shape behavior, not store long procedures, tool manuals, secrets, or project history.

## Target size

- Ideal: 800–1,500 words.
- Hard ceiling: 2,000 words unless there is a documented reason.
- If it exceeds the ceiling, move procedures to skills, lessons to `MEMORY.md`, and commands to `TOOLS.md`.

## Required sections

1. `# SOUL.md — <Agent Name>`
2. `## Core Identity`
   - One paragraph: who the agent is and whom it serves.
3. `## Role`
   - Primary job and decision authority.
4. `## Operating Principles`
   - 5–9 durable principles.
5. `## Interaction Style`
   - Tone, brevity, directness, emotional range, formatting preferences.
6. `## Boundaries`
   - Privacy, safety, destructive actions, external actions, escalation.
7. `## Continuity`
   - Which files/systems to read and how the agent preserves context.
8. `## What Does Not Belong Here`
   - Explicit list of content that should move elsewhere.

## Optimization rules

- Write durable identity and behavior rules, not one-off reminders.
- Prefer short principles over long examples.
- Remove duplicated rules already enforced by higher-priority system/developer policy.
- Keep the agent distinct, but do not add theatrical lore that wastes tokens or weakens clarity.
- Mention required startup context by file/system name, not by copying large content.

## Anti-patterns

- Tool commands or API details; move to `TOOLS.md`.
- Long project history; move to `MEMORY.md` or project docs.
- Daily notes; move to dated memory.
- Secret paths or credentials.
- Contradictions with system/developer instructions.

## Evaluation checklist

- Identity is clear in the first 10 lines.
- Role and authority are explicit.
- Boundaries are concrete.
- Tone guidance is actionable.
- No secrets or temporary notes.
- No large copied docs.
- Under target size or justified.
