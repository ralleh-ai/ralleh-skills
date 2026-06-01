# Verification Before Done

## Purpose

Make “done” mean verified, not assumed.

## Verification ladder

Use the smallest meaningful check that proves the claim:

1. Static inspection for documentation/config.
2. Syntax check for scripts.
3. Unit test for isolated code.
4. Integration smoke test for services.
5. Live fetch/screenshot/status check for deployed work.

## Reporting format

State:

- What changed.
- What was verified.
- Any remaining blocker or risk.

Do not claim success from a subagent, script, or deployment log alone; verify the resulting state directly.
