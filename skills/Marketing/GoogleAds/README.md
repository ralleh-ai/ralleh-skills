# Google Ads Skill

## What Google Ads is

Google Ads is the advertising platform for campaign, ad group, keyword, audience, budget, conversion, and performance management.

This skill guides bots through safe Google Ads inspection, reporting, and change planning without accidentally spending money or changing live campaigns.

## What Google Ads does

- Reads campaign structure, budgets, status, metrics, and conversion performance.
- Identifies waste, tracking issues, disapproved assets, and optimization opportunities.
- Drafts change plans for approval.
- Keeps account ids, credentials, and customer data protected.

## When a bot should use it

Use Google Ads when the user asks about ad performance, campaign setup, budgets, conversion tracking, keyword/audience changes, or paid search/display/youtube optimization.

Ask before changing budgets, enabling campaigns, creating ads, changing bids, publishing assets, or applying recommendations.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify Google Ads API/UI access, account scope, and read-only reporting.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot auth, account access, conversion tracking, disapprovals, and data freshness.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for ad audits and campaign workflows.

## Golden operating rule

Default to read-only. Paid media changes require explicit approval, a named account/campaign, and a rollback or verification plan.
