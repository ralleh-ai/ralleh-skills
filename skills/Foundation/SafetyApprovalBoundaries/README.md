# Safety and Approval Boundaries Skill

## What Safety and Approval Boundaries is

Safety Approval Boundaries is the foundation skill that prevents bots from making irreversible, public, destructive, privacy-sensitive, financial, or credential-related changes without the right approval.

## What Safety and Approval Boundaries does

- Classifies actions as safe reads, reversible local work, approval-required writes, or hard stop conditions.
- Protects secrets, customer data, financial data, credentials, production services, public communications, and permissions.
- Requires explicit approval for risky state changes and exact-content approval for public/external sends.
- Defines what a bot may do while waiting for approval: inspect, draft, plan, verify, and prepare rollback notes.
- Makes stop conditions obvious before damage occurs.

## When a bot should use it

- deleting, publishing, sending, purchasing, booking, paying, refunding, changing permissions, rotating credentials, or modifying production
- handling user data, customer data, private files, secrets, or public channels
- deciding whether an action can proceed without another confirmation

## Required bot posture

- Start with live state, not assumptions.
- Keep scope narrow and reversible where possible.
- Preserve user work, private data, and approval boundaries.
- Prefer documented checks over improvised commands.
- Report uncertainty as uncertainty.

## Safety boundaries

- Never expose or request raw secrets in chat, docs, logs, or commits.
- Never bypass platform access controls, MFA, SSO, captcha, paywalls, or enterprise policy.
- Never perform destructive production changes, external communications, billing actions, or permission changes without explicit approval.
- When approval is unclear, stop and ask.

## Useful outputs

- current state or requested scope
- actions taken or proposed
- evidence inspected
- risks and unknowns
- approval needed, if any
- verification performed or blocked
- next safe action

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — setup, prerequisite, capability, or readiness checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshooting, unsafe states, stop conditions, and recovery verification.
- [`PROMPTS.md`](PROMPTS.md) — safe user-facing prompt patterns.

## Golden operating rule

Reads and drafts are usually safe; external effects, sensitive data exposure, permission changes, money movement, production changes, and destructive actions require explicit approval.
