# Bookkeeper Install Guide

## Purpose

Use this file to verify safe bookkeeping capability.

## Safety and scope

- Do not expose bank data, card numbers, tax IDs, customer PII, or accounting credentials.
- Do not make tax/legal determinations; flag for accountant review.
- Do not mutate accounting records unless the user explicitly approves the exact change set.
- Keep an audit trail of source files and assumptions.

## Prerequisites

- Approved source data: bank export, card export, Stripe export, accounting system report, or receipts folder.
- Clear period and entity/business scope.
- Approved chart of accounts or categorization rules.
- Accountant/owner review process.

## Verify capability

1. Confirm source file/tool and date range.
2. Confirm columns/fields are understood.
3. Load a small sample or summary without exposing sensitive details.
4. Confirm categorization rules or ask for missing categories.
5. Produce a read-only review summary.

## Handoff prompt

> Verify bookkeeping source data, date range, and chart of accounts. Work read-only unless approved. Flag uncertain categories and missing documents for owner/accountant review.
