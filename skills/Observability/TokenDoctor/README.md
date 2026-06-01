# Token Doctor Skill

## What Token Doctor is

Token Doctor is a diagnostic skill for finding token waste, oversized context, expensive sessions, bloated bootstrap files, large skill bodies, noisy heartbeats, and tool-output inflation.

It helps a bot answer: “Where are tokens being spent, what is causing context bloat, and what safe changes would reduce cost or latency?”

Token Doctor is observe-first. It reports and recommends. It does not rewrite prompts, prune sessions, mutate config, or enforce budgets unless the user explicitly asks for a separate change.

## What Token Doctor does

- Inspects OpenClaw-side context surfaces: visible transcripts, session files, workspace/bootstrap files, loaded skills, heartbeat traffic, and large tool outputs.
- Separates context bloat analysis from provider spend reporting.
- Points bots to LiteLLM or the configured provider ledger for source-of-truth spend and virtual-key budgets.
- Produces safe recommendations with expected impact and verification steps.
- Avoids printing secrets or private content; it should prefer sizes, paths, hashes, counts, and redacted excerpts.

## When a bot should use it

Use Token Doctor when the user asks about token usage, context size, slow or expensive sessions, unexpectedly large prompts, heartbeat cost, model spend, skill bloat, or budget optimization.

Do not use Token Doctor as a reason to silently compress, delete, summarize, or remove context. Recommend first; mutate only after explicit approval.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install or verify Token Doctor capability and run the first report safely.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot missing scripts, bad paths, broken reports, unsafe output, and provider-spend confusion.
- [`PROMPTS.md`](PROMPTS.md) — suggested user-facing prompts for token audits and cost optimization requests.

## Common workflows

### Audit context bloat

Run a read-only Token Doctor report. Summarize top offenders and recommend safe reductions.

### Explain cost drivers

Use Token Doctor for OpenClaw-side context surfaces and LiteLLM/provider reports for actual spend. Do not blend estimates with billing facts.

### Prepare a reduction plan

List recommended changes in priority order, state expected impact, and name the verification command or report that will prove improvement.

## Golden operating rule

Token Doctor is diagnostic by default. No prompt rewriting, config changes, session pruning, compaction, or enforcement without explicit user approval.

## Handoff prompt

> Read `README.md` first to understand Token Doctor. If installing or verifying capability, continue with `INSTALL.md`. If troubleshooting a broken report or confusing spend data, continue with `DOCTOR.md`. If helping the user request token/cost audits, continue with `PROMPTS.md`. Report findings with paths, sizes, counts, hashes, and recommendations; do not expose secrets or mutate state without approval.
