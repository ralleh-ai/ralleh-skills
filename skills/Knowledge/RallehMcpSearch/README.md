# Ralleh MCP Search Skill

## What Ralleh MCP Search is

Ralleh MCP Search is the curated content lookup skill for `ralleh-mcp-search`. It searches approved source collections for news, finance, sports, weather, government data, community consensus, reviews, science, research, entertainment, and technology topics.

It is not arbitrary web crawling. Bots choose a known collection or tool intent; the MCP resolves approved sources, ranks them, searches within bounded budgets, coalesces results, and returns LLM-ready evidence for detail, summary, comparison, consensus, or conflict analysis.

## What Ralleh MCP Search does

- Maps content requests to curated collections such as `breaking_news`, `stocks_markets`, `sports`, `weather`, `government`, `community`, `reviews_consensus`, `science`, `research`, and `technology`.
- Supports safe tool intents such as `SearchWeb`, `SearchNews`, `GetBreakingNews`, `GetNewsBrief`, `SearchRSS`, `SearchFinance`, `SearchStocks`, `SearchSports`, `SearchWeather`, `SearchGovernment`, `SearchCommunity`, `GetConsensus`, `SummarizeConsensus`, and `DetectConflicts`.
- Uses ranked known sources instead of random websites.
- Returns source diagnostics, evidence URLs, confidence, and partial/degraded status when sources fail.
- Keeps crawling bounded by timeout, source count, concurrency, and source registry policy.

## When a bot should use it

Use Ralleh MCP Search when a user asks for current information, multi-source lookup, news briefs, market/stock context, sports updates, weather/government data, product-review consensus, community signals, science/research lookup, or conflict detection across sources.

## Golden rules

- Use curated collections or approved tool intents only.
- Do not invent random URLs or crawl arbitrary websites.
- Prefer high-ranked sources for the collection unless the user requests a specific known source.
- Treat search output as evidence for the LLM to summarize, compare, cite, or reason over; do not blindly trust one source.
- Clearly report partial results, source failures, paywalls, stale data, or conflicts.
- Do not bypass paywalls, login walls, captchas, or bot controls.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — install and verify `ralleh-mcp-search`.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot search health, source ranking, and unsafe requests.
- [`PROMPTS.md`](PROMPTS.md) — safe prompt examples for content search.
