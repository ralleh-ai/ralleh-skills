# Ralleh Agent Standards

## Purpose

This directory now defines **agent file standards and evaluation guidance**, not role ownership.

Use this section to answer:
- what each agent file is for
- what belongs in each file
- how to audit an agent package for quality, safety, and bloat

## Ownership split

### `ralleh-skills`
Owns:
- file standards
- audit criteria
- reusable guidance about agent structure

### `ralleh-agents`
Owns:
- role definitions
- role overlays
- template composition
- generated agents
- custom agents

## What remains here

- `Definitions/` — canonical meaning and quality bar for agent files
- `Evaluation/` — audit tooling/guidance for reviewing agent packages

## What moved out

The following role-agent baselines are no longer owned here:
- IT
- Sales
- Finance

Those now belong in `ralleh-agents` to avoid duplication between:
- skill library content
- role identity content
- generated/custom agent composition

## Guidance

Use `agents/Definitions/` when:
- designing a new agent file set
- auditing whether an agent package is bloated or incomplete
- deciding where a rule or memory item belongs

Use `ralleh-agents` when:
- creating a role
- composing templates with roles and skills
- generating a new agent
- managing generated/custom agents

## Golden rule

`ralleh-skills` teaches agents **how to work**.
`ralleh-agents` defines **who the agents are**.
