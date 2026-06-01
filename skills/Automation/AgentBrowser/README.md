# Agent Browser Skill

## What Agent Browser is

Agent Browser is the browser-control skill for bots that need to inspect or operate web pages. It gives a bot a disciplined way to open pages, read visible UI state, click controls, fill forms, verify results, and stop when a human login, captcha, permission, or approval is required.

Agent Browser is not a license to wander the web or perform external actions without approval. It is a controlled inspection and interaction workflow.

## What Agent Browser does

- Opens and navigates browser tabs with stable labels.
- Captures page snapshots before acting.
- Uses visible UI references instead of blind coordinate clicks whenever possible.
- Maintains tab hygiene so retries do not create confusing duplicate tabs.
- Recovers once from stale references by taking a fresh snapshot.
- Verifies results with screenshots, snapshots, URLs, or page state before claiming success.

## When a bot should use it

Use Agent Browser when the task requires web UI inspection or interaction: checking a page, navigating a dashboard, verifying a deployed page, filling a known form, reviewing account state, or completing a user-requested web workflow.

Ask first before public posting, purchases, irreversible account changes, sending messages, deleting data, or submitting forms that create external effects.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — browser capability prerequisites, setup expectations, and verification checks.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot browser availability, login/session issues, stale refs, tab confusion, and permission blockers.
- [`PROMPTS.md`](PROMPTS.md) — suggested user-facing prompts for browser-based work.

## Common workflows

### Inspect a page

Open the page, snapshot it, summarize only visible state, and include the URL checked.

### Interact with a page

Read before every click. Use stable tab labels and fresh snapshots after navigation or UI changes.

### Verify a result

Use the smallest proof that supports the claim: current URL, visible text, screenshot, HTTP status, or final page snapshot.

## Golden operating rule

Never let the browser workflow become open-ended wandering. Every browser action must serve the user's current objective, and every blocker must be reported plainly.

## Handoff prompt

> Read `README.md` first to understand Agent Browser. If setting up or verifying browser capability, continue with `INSTALL.md`. If troubleshooting browser automation, continue with `DOCTOR.md`. If helping the user request browser tasks, continue with `PROMPTS.md`. Read before clicking, verify before claiming, and stop for login, captcha, permission, or external-effect approval.
