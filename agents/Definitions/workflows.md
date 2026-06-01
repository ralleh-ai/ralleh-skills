# workflows.md Standard

## Purpose

`workflows.md` defines repeatable role processes: inputs, steps, outputs, verification, and escalation.

It should make the role operational without stuffing every example into the bootstrap file.

## Target size

- Ideal: 800–2,000 words.
- Hard ceiling: 3,000 words.

## Required sections

1. `# <Role> Workflows`
2. `## Workflow Index`
3. One section per workflow with:
   - Purpose
   - Inputs
   - Steps
   - Outputs
   - Verification
   - Escalation
4. `## What Belongs in examples/`

## Optimization rules

- Keep each workflow short and complete.
- Link deep examples instead of embedding them.
- Include stop conditions.
- Name verification evidence.

## Anti-patterns

- Open-ended loops.
- Missing approval gates.
- Copying tool manuals.
- Workflows with no output format.

## Evaluation checklist

- Each workflow has inputs and outputs.
- Verification is named.
- Risky steps require approval.
- Examples are linked.
