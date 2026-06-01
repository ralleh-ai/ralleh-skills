# DOCTOR.md Standard

## Purpose

`DOCTOR.md` defines how to diagnose a broken role agent: missing context, wrong permissions, stale tools, bad outputs, unsafe behavior, or unclear ownership.

It is for role health checks, not tool-specific troubleshooting. Tool-specific troubleshooting belongs in each skill's `DOCTOR.md`.

## Target size

- Ideal: 400–1,200 words.
- Hard ceiling: 1,800 words.

## Required sections

1. `# DOCTOR.md — <Role> Agent`
2. `## Purpose`
3. `## Fast Triage`
4. `## Common Failure Modes`
5. `## Escalation`
6. `## Doctor Report Format`

## Optimization rules

- Diagnose role behavior first, then route to specific skill doctors.
- Include stop conditions for safety-critical domains.
- Keep report format consistent.

## Anti-patterns

- Repeating every tool doctor.
- Mutating data during diagnosis.
- Hiding uncertainty.
- Providing domain advice outside approved role boundaries.

## Evaluation checklist

- Triage is ordered and safe.
- Failure modes are role-specific.
- Escalation is clear.
- Report format is usable.
