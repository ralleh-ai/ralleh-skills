# Ralleh MCP Shop Skill

## What Ralleh MCP Shop is

Ralleh MCP Shop is the curated shopping/product research skill for `ralleh-mcp-shop`. It uses known product collections and source IDs instead of arbitrary websites, normalizes results, and presents affiliate-safe URLs.

## What Ralleh MCP Shop does

- Classifies shopping intent into approved collections such as tools, toys, gifts, and electronics.
- Uses known source IDs only; rejects random website searches.
- Returns product options with evidence, source diagnostics, confidence, and affiliate-aware presented URLs.
- Keeps checkout, cart actions, login, payment, and purchases outside v1 scope.

## When a bot should use it

Use Ralleh MCP Shop when a user wants product research, price comparison, gift ideas, tool/electronics/toy shopping options, or affiliate-ready product links without purchasing.

## Operating rules

- Prefer deterministic health/status checks before action.
- Keep services VPS-local unless an explicit secured exposure plan exists.
- Do not perform checkout, booking, purchase, payment, login, or passenger/customer PII entry.
- Use curated source collections and known source IDs; never invent arbitrary crawl targets.
- Return partial/degraded status honestly with source diagnostics.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install, configure, upgrade, and verify.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot failures and unsafe states.
- [`PROMPTS.md`](PROMPTS.md) — safe prompt examples.

## Golden operating rule

Use curated source collections only, present affiliate-aware product research with source diagnostics, never perform checkout/payment/login, and report partial/degraded product coverage honestly.
