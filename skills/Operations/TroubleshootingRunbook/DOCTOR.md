# Troubleshooting Runbook Doctor

## Purpose

This skill is the doctor. Use its escalation rules when diagnosis is blocked by missing access, unclear ownership, data-loss risk, production blast radius, or suspected security exposure.

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

- The proposed fix is a shotgun change instead of a diagnosed smallest-safe fix.
- The requested action would remove data, reset services broadly, rotate credentials, or change production config unless explicit approval is recorded.
- The requested action would expose secrets or private logs while collecting evidence.
- The requested action would continue retrying when the failure indicates permission, billing, destructive-risk, or missing-owner issues.
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
