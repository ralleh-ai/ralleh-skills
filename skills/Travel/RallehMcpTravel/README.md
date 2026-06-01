# Ralleh MCP Travel Skill

## What Ralleh MCP Travel is

Ralleh MCP Travel is the curated flight/travel research skill for `ralleh-mcp-travel`. It searches approved travel collections for flight options, ranks sane itineraries, and warns about fare traps without booking or collecting passenger data.

## What Ralleh MCP Travel does

- Classifies flight intent into approved travel collections such as US domestic, international, or budget flights.
- Prefers API/partner sources and known airline/aggregator source IDs, not arbitrary travel URLs.
- Ranks flights by price, duration, stops, baggage, fare class, layover quality, and risk warnings.
- Keeps booking, payment, account login, passenger PII, and ticket purchase outside v1 scope.

## When a bot should use it

Use Ralleh MCP Travel when a user wants flight research, itinerary comparison, fare-trap explanation, airport suggestions, or price-watch planning without booking.

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

Research travel through approved sources only, warn about fare and itinerary risks, never book/pay/login/collect passenger PII, and present partial or degraded coverage honestly.
