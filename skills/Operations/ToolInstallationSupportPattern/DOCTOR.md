# Tool Installation Support Pattern Doctor

## Purpose

Use this doctor when install commands fail, dependencies are missing, versions conflict, auth/config is unclear, a service fails to start, or smoke tests do not prove the capability.

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

- The requested action would run pipe-to-shell installers unless the source has been reviewed, checksum/signature checks are used where available, and the user approves the risk.
- The requested action would invent config fields, ports, service names, or package names.
- The requested action would place secrets in shell history, repo files, docs, tickets, or chat.
- The requested action would claim install success until the tool’s smoke test passes.
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
