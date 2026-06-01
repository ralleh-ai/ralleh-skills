# Verification Before Done Skill

## What Verification Before Done is

Verification Before Done is the engineering skill that turns completion claims into evidence-backed reports instead of assumptions.

## What Verification Before Done does

- Chooses the smallest meaningful verification gate for the task.
- Separates build/test/lint evidence from logs that merely suggest success.
- Requires direct inspection of the resulting state when possible.
- Reports blockers honestly with the exact missing input or failing check.
- Prevents premature “done” reports from subagent summaries, generated files, or deployment output alone.

## When a bot should use it

- finishing repo edits, scripts, docs, deployments, generated assets, or configuration
- reviewing another agent's completion claim
- deciding which test, fetch, screenshot, status command, or inspection proves a task
- writing handoff notes or final user updates

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not run destructive verification against production without approval.
- Do not invent test results or treat stale output as current evidence.
- Do not claim full coverage when only a smoke test was run.
- If no meaningful check can run, state why and mark the remaining risk.

## Useful outputs

- current state or requested scope
- actions taken or proposed
- evidence inspected
- risks and unknowns
- approval needed, if any
- verification performed or blocked
- next safe action

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, prerequisite, capability, or readiness checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshooting, unsafe states, stop conditions, and recovery verification.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompt patterns.

## Golden operating rule

Never make “done” a feeling. Name the check, run it when safe, report the result, and mark any unverified claim as risk.
