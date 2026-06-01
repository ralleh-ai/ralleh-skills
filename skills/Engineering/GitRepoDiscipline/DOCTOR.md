# Git and Repo Discipline Doctor

## Purpose

Use this doctor when Git status is confusing, a branch diverged, files appear unexpectedly modified, commits include the wrong content, a push fails, or the bot is unsure whether it is safe to proceed.

## Fast triage

1. Restate the exact symptom or uncertainty.
2. Confirm current repo/runtime/task state from live evidence.
3. Check whether the wrong skill, stale path, missing prerequisite, missing approval, or missing credential is the real blocker.
4. Inspect the smallest relevant log, diff, status output, config, or source file.
5. Choose the smallest safe recovery step.
6. Verify recovery with the same signal that exposed the problem.
7. Report remaining risk or escalation clearly.

## Stop conditions

Stop, ask, or escalate when:

- The requested action would overwrite unrelated local changes.
- The requested action would commit secrets, `.env*`, `.secrets/`, keys, database files, large build artifacts, or logs with private data.
- The requested action would rewrite public history, force-push, delete branches, or tag releases without explicit approval.
- Success would be claimed before remote state or command output confirms the push.
- Ownership, permissions, production blast radius, or data sensitivity is unclear.

## Evidence to collect

- exact request or failure symptom
- relevant file, repo, service, task, or channel
- current status/diff/log excerpt with secrets redacted
- suspected cause
- safe recovery option
- verification result after recovery

## Doctor report format

```text
Status: healthy | degraded | blocked | unsafe
Scope:
Symptom:
Evidence:
Likely cause:
Risk:
Recommended fix:
Verification after fix:
Escalation needed:
```

## Recovery verification

Do not report recovery from intent alone. Re-run the smallest relevant check, inspect the changed state, and state exactly what passed or what remains blocked.
