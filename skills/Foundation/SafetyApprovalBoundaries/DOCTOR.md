# Safety and Approval Boundaries Doctor

## Purpose

Use this doctor when action risk is unclear, approval language is ambiguous, a request touches sensitive data, an operation could affect production or the public, or a bot has already taken a risky step without enough authorization.

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

- Raw secrets would be exposed or requested in chat, docs, logs, or commits.
- The action would bypass platform access controls, MFA, SSO, captcha, paywalls, or enterprise policy.
- The action would perform destructive production changes, external communications, billing actions, or permission changes without explicit approval.
- Approval is unclear or does not cover the exact action.
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
