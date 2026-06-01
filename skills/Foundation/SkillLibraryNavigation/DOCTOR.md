# Skill Library Navigation Doctor

## Purpose

Use this doctor when a bot loaded too much context, followed a stale path, missed a companion file, used the wrong skill family, or cannot decide whether the next file should be INSTALL, DOCTOR, PROMPTS, an agent definition, or MCP guidance.

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

- The bot would read the whole repo when one skill is enough.
- The bot would skip a skill’s README and jump straight to commands.
- The bot would treat private overlays as public defaults.
- The bot would invent paths or use non-canonical folder names.
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
