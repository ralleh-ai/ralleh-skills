# Agent File Audit

## Purpose

Use this page to evaluate a current agent `.md` file against the Ralleh golden agent-file standards.

The audit should produce a clear verdict and a safe optimization plan. It should not rewrite the file automatically unless the user explicitly asks for edits.

## Inputs

- File being audited: `SOUL.md`, `TOOLS.md`, `AGENTS.md`, `MEMORY.md`, `USER.md`, or `PATTERNS.md`.
- Relevant definition file from [`../Definitions/`](../Definitions/).
- Whether the file is bootstrap-loaded or on-demand.

## Audit steps

1. Identify the file type and load the matching definition.
2. Count approximate words and note whether it is under target, above target, or above hard ceiling.
3. Check required sections.
4. Identify content that belongs elsewhere.
5. Check for secrets, credentials, private keys, cookies, `.env` values, and raw sensitive data.
6. Check for stale tasks, temporary notes, duplicate rules, and unverified commands.
7. Check whether the file points to skills/docs instead of embedding long runbooks.
8. Produce a verdict and optimization plan.

## Verdict scale

- `golden` — organized, concise, safe, optimized.
- `usable` — safe but could be tightened.
- `bloated` — safe but too large or repetitive.
- `risky` — contains secrets, unsafe instructions, contradictions, or damaging ambiguity.
- `misplaced` — file contains mostly content that belongs in another file.

## Audit output format

```text
Verdict: golden | usable | bloated | risky | misplaced
File type:
Approx size:
Required sections missing:
Content to move elsewhere:
Safety issues:
Optimization opportunities:
Recommended next edit:
Verification after edit:
```

## Optimization rules

- Preserve the agent's useful identity and proven working style.
- Remove duplication before removing important behavior.
- Move, do not delete, durable content that belongs elsewhere.
- Keep startup-loaded files lean.
- Never optimize by hiding safety boundaries.

## Handoff prompt

> Read the relevant definition file under `agents/Definitions/`, then audit the target agent file with `agents/Evaluation/AgentFileAudit.md`. Return the verdict, missing sections, content that belongs elsewhere, safety issues, optimization opportunities, and recommended next edit. Do not rewrite unless explicitly asked.
