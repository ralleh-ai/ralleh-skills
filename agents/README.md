# Ralleh Agent Standards

## Purpose

Ralleh agents are department-grade AI workers: focused roles with durable identity, bounded authority, approved skills, memory discipline, verification habits, and a model/tool profile matched to the job.

This section defines how to design, configure, optimize, personalize, audit, and operate those agents without turning them into bloated prompt dumps or unsafe autonomous actors.

A golden agent should answer these questions before it acts:

1. What role am I serving?
2. What am I allowed to do?
3. Which skills and tools should I use?
4. What sources of truth should I trust?
5. What requires approval?
6. What evidence proves the work is done?

## What an agent is

An agent is not just a model and a clever prompt. A production-ready agent is an operating package:

```text
Agent = role + identity + responsibilities + skills + tools + memory + permissions + model strategy + verification loop
```

The model supplies reasoning and language. The agent files supply role clarity. The skills supply operating procedures. Tools supply controlled access to systems. Memory supplies continuity. The task ledger supplies present-state accountability.

When these pieces are separated cleanly, the agent becomes easier to improve, cheaper to run, safer to trust, and more useful across real business work.

## What agents do for Ralleh

Ralleh agents exist to make business operations repeatable, source-backed, and auditable.

Use agents to:

- own a department role such as finance, sales, IT, support, marketing, operations, or legal coordination
- perform read-only analysis from approved sources
- draft work products for review
- coordinate multi-step workflows through a task ledger
- route specialist work to the right agent or human
- remember durable lessons without stuffing every session with history
- protect approvals, secrets, customer data, and platform boundaries
- verify results before claiming completion

Do not use agents to bypass approval, hide uncertainty, invent source data, ignore platform rules, or replace accountable human judgment where legal, financial, security, employment, medical, or contractual decisions require a human owner.

## How agents are configured

A Ralleh agent is configured through a small set of Markdown files plus deployment-specific runtime settings.

The Markdown files define stable behavior:

- identity and voice
- role scope and non-scope
- approved skills
- tool notes and local caveats
- workflows and verification gates
- durable memory and shared patterns
- escalation and approval boundaries

The runtime defines execution capability:

- model choice
- tool access
- environment variables and secret references
- workspace paths
- network/API permissions
- task ledger and memory service availability
- public/private channel access

Keep public golden templates generic and reusable. Put customer-specific hosts, secrets, credentials, internal URLs, private procedures, and sensitive data in private overlays or approved secret stores.

## The standard agent files

Each file has a job. Do not blur them together.

- [`SOUL.md`](Definitions/SOUL.md) — who the agent is when it wakes up: identity, role, values, tone, boundaries, continuity.
- [`IDENTITY.md`](Definitions/IDENTITY.md) — role mission, responsibilities, stakeholders, success measures, escalation.
- [`AGENTS.md`](Definitions/AGENTS.md) — orchestration: routing, delegation, handoffs, task ledger protocol, verification.
- [`SKILLS.md`](Definitions/SKILLS.md) — approved skills and when to load each one.
- [`TOOLS.md`](Definitions/TOOLS.md) — local operating cheat sheet: tool notes, paths, commands, caveats, safe workflows.
- [`DOCTOR.md`](Definitions/DOCTOR.md) — role-agent health check and failure diagnosis.
- [`guidelines.md`](Definitions/guidelines.md) — role-specific principles, source-of-truth rules, quality bar, review checklist.
- [`workflows.md`](Definitions/workflows.md) — repeatable role processes with inputs, steps, outputs, verification, escalation.
- [`MEMORY.md`](Definitions/MEMORY.md) — curated long-term lessons that should change future behavior.
- [`USER.md`](Definitions/USER.md) — stable user profile, values, preferences, and durable working style.
- [`PATTERNS.md`](Definitions/PATTERNS.md) — cross-agent patterns and recurring lessons that apply beyond one role.

Use [`Evaluation/AgentFileAudit.md`](Evaluation/AgentFileAudit.md) to evaluate whether a current file is golden, usable, bloated, risky, or misplaced.

## Relationship between agent files and skills

Agent files define the worker. Skills define the work.

Agent files should stay lean because many are loaded at startup or are read frequently. They should point the agent toward the right behavior and the right skill, not copy entire runbooks.

Skills live under [`../skills/`](../skills/) and provide on-demand operating instructions:

```text
skills/<Family>/<Skill>/
├── README.md      # what it is, when to use it, safety boundaries
├── INSTALL.md     # setup, verification, upgrade, operation
├── DOCTOR.md      # troubleshooting, unsafe states, stop conditions
└── PROMPTS.md     # safe user-facing prompt examples
```

Use this separation:

- Put role identity in `SOUL.md` and `IDENTITY.md`.
- Put skill routing in `SKILLS.md`.
- Put stable role rules in `guidelines.md`.
- Put repeatable role processes in `workflows.md`.
- Put tool-specific setup and troubleshooting in skill `INSTALL.md` and `DOCTOR.md`.
- Put durable lessons in `MEMORY.md` or `PATTERNS.md`.
- Put active tasks in CORTEX or the approved task ledger, not in agent files.

This is how agents stay sharp: the agent wakes with role clarity, then loads only the skill it needs for the current job.

## Model strategy

Agents should not all use the biggest model by default. Model choice is part of agent design.

A good model strategy balances:

- task risk
- reasoning depth
- tool complexity
- latency
- context size
- cost
- privacy and deployment constraints
- need for code, writing, research, planning, or extraction

Use cheaper/faster models for:

- classification
- routing
- summarization
- checklist execution
- status reports
- simple extraction
- routine read-only monitoring
- deterministic workflows with strong schemas

Use stronger models for:

- architecture decisions
- complex debugging
- high-stakes writing
- ambiguous strategy
- security-sensitive review
- multi-step tool planning
- code generation or refactoring
- final review before risky external action

Use specialist models when the job benefits from them:

- coding models for implementation and debugging
- fast models for triage and monitoring
- long-context models for large document review
- vision-capable models for screenshots, diagrams, UI review, and design work
- local/private models for sensitive summarization when quality is sufficient

A golden deployment can assign each agent a default model and still allow escalation. For example, a monitoring agent may run on a cheap fast model, while an IT architecture review or production incident can escalate to a stronger reasoning model.

The rule is simple: match the model to the work, not the ego of the agent.

## Optimization and personalization

Personalization is useful when it improves results. Bloat is harmful when it wastes context or hides the current job.

Personalize agents with:

- role-specific mission and success measures
- the owner's stable preferences and quality bar
- approved source-of-truth systems
- communication tone and output formats
- durable domain lessons
- escalation rules and approval boundaries
- the exact skills that role should use

Optimize agents by:

- moving long procedures out of bootstrap files and into skills/workflows
- removing duplicate instructions
- replacing stale task history with CORTEX references
- replacing raw memory dumps with curated lessons
- storing secrets only as secret references, never values
- trimming tool docs to local caveats and verified commands
- adding verification gates to every risky or user-impacting workflow

Enhance agents through:

- better skills
- better tool access with least privilege
- clearer source-of-truth rules
- stronger verification checks
- role-specific examples
- memory curation from real failures and wins
- model routing tuned by cost, quality, and risk

## Current role-agent templates

These are the current golden role templates in this repo.

### [`finance`](finance/README.md)

Finance is the conservative, source-backed finance operations agent.

Use it for:

- bookkeeping review queues
- expense evidence and missing receipt tracking
- Stripe revenue reconciliation
- financial reporting drafts
- monthly close preparation
- budget and variance summaries

Core posture:

- read-only by default
- source, period, currency, assumptions, and confidence named in reports
- no final tax/legal/accounting-policy advice
- no money movement, refunds, subscription changes, invoice sends, or accounting writes without approval

Best model fit:

- cheaper models for extraction, categorization drafts, and routine summaries
- stronger models for reconciliation ambiguity, report synthesis, anomaly explanation, and policy-sensitive review

### [`sales`](sales/README.md)

Sales is the ethical sales operations and enablement agent.

Use it for:

- lead qualification
- pipeline hygiene
- outreach and follow-up drafts
- discovery-call briefs
- proposal follow-up
- sales signal summaries

Core posture:

- draft-first, send-after-approval
- no invented claims, pricing, scarcity, guarantees, or social proof
- pipeline data must name source, stage, owner, next action, and confidence
- no external messages, invites, CRM writes, or proposal sends without approval

Best model fit:

- cheaper models for pipeline classification, stale lead detection, and simple drafts
- stronger writing/reasoning models for nuanced positioning, proposal follow-up, objection handling, and executive summaries

### [`it`](it/README.md)

IT is the full-stack systems, infrastructure, architecture, and reliability agent.

Use it for:

- software and infrastructure debugging
- architecture review
- deployment hardening
- incident response
- database/storage/network/proxy diagnosis
- repo, CI, and production readiness review

Core posture:

- inspect before changing
- backups and rollback before risky work
- verify user-facing behavior, not just command success
- no destructive production changes, DNS/proxy changes, credential rotation, migrations, or security-sensitive actions without approval

Best model fit:

- fast models for status checks, logs, simple triage, and checklist verification
- coding/reasoning models for debugging, architecture, migrations, incident analysis, and implementation briefs

## Designing a new agent

Create a new role agent when the work has durable ownership, recurring workflows, specific approval boundaries, and a skill set distinct enough to justify its own files.

Do not create an agent just because a task happened once. Use a skill, workflow, or CORTEX task instead.

A new role template should include:

```text
agents/<role>/
  README.md
  SOUL.md
  IDENTITY.md
  AGENTS.md
  SKILLS.md
  TOOLS.md
  DOCTOR.md
  guidelines.md
  workflows.md
  examples/
```

The role folder name should be lowercase. The content should be public-safe, generic, and reusable unless it belongs in a private overlay.

## First-run protocol for a role agent

A role agent should start by reading the files that define its role and boundaries:

1. `README.md`
2. `IDENTITY.md`
3. `SOUL.md`
4. `SKILLS.md`
5. `guidelines.md`
6. `workflows.md`
7. private overlay files, if configured and approved

Then it should identify:

- the user's objective
- whether the task is read-only, draft-only, write, external, or destructive
- which skill applies
- what source of truth must be checked
- what approval is needed
- what evidence will prove completion

## Golden quality bar

A Ralleh agent is golden when it is:

- clear about its mission
- honest about its authority
- lean enough to load without waste
- skilled enough to act without guessing
- safe enough to trust with real workflows
- personalized enough to match the owner and domain
- bounded enough to stop before harm
- verified enough to prove its work

## Evaluation

Use [`Evaluation/AgentFileAudit.md`](Evaluation/AgentFileAudit.md) when auditing or improving agent files.

Audit for:

- missing required sections
- misplaced content
- bootstrap bloat
- stale task state
- duplicated rules
- missing source-of-truth rules
- missing approval boundaries
- missing verification gates
- secrets or private data
- bad skill routing
- model/tool mismatch

## Golden rule

Agents are not personalities wearing tool belts. They are operational workers with role clarity, skill discipline, memory hygiene, least-privilege access, model-fit economics, and evidence-backed completion.

Make them useful. Make them safe. Make them excellent.
