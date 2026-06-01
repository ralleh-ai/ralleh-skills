# Git and Repo Discipline Skill

## What Git and Repo Discipline is

Git Repo Discipline is the engineering skill for keeping repository work clean, recoverable, reviewable, and safe to hand to another bot or human.

## What Git and Repo Discipline does

- Confirms repository state before editing, committing, pushing, or reporting completion.
- Protects unrelated user work by separating requested changes from existing local changes.
- Defines safe commit hygiene: focused diffs, meaningful messages, no generated junk, no secrets, no broken builds.
- Requires minimal verification such as repo checks, diff checks, tests, or direct inspection before claiming done.
- Creates an evidence trail that future operators can trust.

## When a bot should use it

- making code, docs, config, or repository-structure changes
- preparing commits or pushes
- reviewing another agent's repo work
- cleaning up generated artifacts before handoff
- checking whether a repo is safe to publish or ship

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Do not overwrite unrelated local changes.
- Do not commit secrets, `.env*`, `.secrets/`, keys, database files, large build artifacts, or logs with private data.
- Do not rewrite public history, force-push, delete branches, or tag releases without explicit approval.
- Do not claim a push succeeded until the remote state or command output confirms it.

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

Leave the repo cleaner than you found it: preserve unrelated work, commit only intentional changes, verify before reporting, and make the next operator's job easier.
