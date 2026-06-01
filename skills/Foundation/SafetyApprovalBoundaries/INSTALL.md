# Safety and Approval Boundaries Install and Readiness Guide

## Purpose

Use this file when setting up, verifying, or documenting readiness for the Safety and Approval Boundaries skill.

## Readiness model

No installation is required. Setup means identifying the channel, actor, target system, action type, blast radius, rollback option, and whether the user has already given explicit approval for this exact action.

## Prerequisites to confirm

- Repository or runtime context is known.
- The requested scope is clear.
- Required tools, services, or files are available.
- Approval boundaries are understood before any write or external effect.
- A meaningful verification signal exists.

## Safe setup process

1. Read `README.md` for purpose, boundaries, and expected outputs.
2. Confirm the current workspace, repo, service, or task scope from live state.
3. Identify the smallest safe action that proves readiness.
4. Confirm no secrets or private data will be printed, committed, or sent.
5. Run the readiness check or prepare the exact user-facing instruction needed.
6. Record the evidence and next safe action.

## Do not

- invent commands, config fields, credentials, hosts, file paths, or ownership
- skip verification because the task seems simple
- store secrets in docs, prompts, repos, shell history, logs, or chat
- proceed with destructive, public, privacy-sensitive, or production changes without explicit approval

## Readiness report format

```text
Status: ready | degraded | blocked
Scope:
Prerequisites checked:
Approval needed:
Verification signal:
Evidence:
Next action:
```

## Completion gate

Before saying this skill is ready to use, name the live state checked and the verification signal that proves readiness. If the signal is unavailable, mark the task blocked and state the exact missing input.
