# Financial Reporter Install Guide

## Purpose

Use this file to verify safe financial reporting capability.

## Safety and scope

- Read-only by default.
- Do not expose sensitive transaction/customer/payroll details unless requested and channel is private.
- Do not make tax/legal/investment advice claims.
- Do not send reports externally without approval.

## Prerequisites

- Approved data sources: accounting export, Stripe, bank/card exports, spreadsheet, or BI tool.
- Reporting period and comparison period.
- Currency and timezone/date treatment.
- Metric definitions.

## Verify capability

1. Confirm source(s), period, comparison period, and currency.
2. Pull or inspect a small read-only summary.
3. Confirm metric definitions.
4. Produce a draft report with assumptions and missing data.
5. State verification performed.

## Handoff prompt

> Verify financial sources, reporting period, comparison period, currency, and metrics. Produce a read-only report that separates facts, assumptions, estimates, and recommendations.
