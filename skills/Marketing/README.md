# Marketing Skills

## Purpose

This family contains golden skills for analytics, ads, brand, professional social workflows, and campaign review.

It exists to help bots choose the right capability quickly, load only the files needed for the task, and keep safety, verification, and resource use explicit.

## Before using this family

- Use these skills for read-first reporting and drafts. Publishing, spend changes, audience changes, and public posts require explicit approval.
- Start with the specific skill `README.md`; load `INSTALL.md`, `DOCTOR.md`, or `PROMPTS.md` only when the task needs setup, troubleshooting, or user-facing examples.
- Prefer read-only inspection until a write, external effect, destructive action, permission change, or sensitive-data operation is explicitly approved.
- Verify the result with the smallest meaningful check before reporting completion.

## Available skills

- [`GoogleAds`](GoogleAds/README.md) — safe Google Ads campaign inspection, reporting, and change-planning workflows.
- [`GoogleAnalytics`](GoogleAnalytics/README.md) — safe GA4 analytics reporting, interpretation, and instrumentation checks.
- [`LinkedInManager`](LinkedInManager/README.md) — safe LinkedIn profile/page/content management workflows.

## Selection rule

Choose the narrowest skill that matches the user request. If two skills could apply, prefer the one closest to the target system or workflow, then pull in adjacent skills only when they are needed for setup, safety, memory, task tracking, or verification.

## Completion standard

A bot using this family should report:

- which skill files were used
- what scope was inspected or changed
- what approval was required or not required
- what verification was performed
- any blocker, risk, or next safe action
