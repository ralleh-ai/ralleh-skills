# Ralleh MCP Shop Prompt Suggestions

## Purpose

Use these prompts for product research and shopping intelligence through `ralleh-mcp-shop`. The service searches curated source collections, ranks sources, coalesces product candidates, and returns affiliate-aware presented URLs. It must not purchase, check out, log in, add to cart, or crawl arbitrary sites.

## Collection selection prompts

- "Classify this shopping request into a Ralleh MCP Shop collection before searching: `cordless drill under $150`."
- "Use the `tools` collection to find cordless drill options and explain why those sources were chosen."
- "Use the `electronics` collection to compare gaming monitors under $300."
- "Use the `home` collection to find compact desks for a small office."
- "Use the `sporting_goods` collection to compare camping tents for a family of four."
- "Use the `farm_rural` collection to research chicken coop heaters."
- "Use the `auto` collection to compare windshield wipers for this vehicle."
- "Use the `collectibles` collection to check current market options for this trading card."
- "Use the `industrial` collection to source nitrile gloves in bulk."
- "Use the `luxury` collection to compare watch options, but do not recommend a purchase without verification."

## Product search prompts

- "Search the tools collection for a brushless 20V cordless drill under $150 and return the top five options."
- "Find the best value laptop docking stations using electronics sources; include caveats about compatibility."
- "Find gift ideas for a 10-year-old who likes science and building things using gifts/toys sources."
- "Find office chairs under $250 and separate ergonomic claims from verified specs."
- "Search marketplaces for used camera lenses, but flag condition, seller, and return-policy risks."
- "Find the cheapest acceptable option and the best overall option for this product."
- "Compare price, availability, shipping/pickup hints, condition, source confidence, and warnings."

## Source ranking prompts

- "Rank the `tools` sources and explain speed, accuracy, usefulness, reliability, and challenge risk."
- "Why did Home Depot and Lowe's rank above broader marketplaces for tools?"
- "Rank the `electronics` collection and identify which sources are best for specs versus prices."
- "Rank the `marketplaces` collection and explain seller/condition risks."
- "Show which sources were accepted, rejected, skipped, degraded, or timed out."

## Affiliate and disclosure prompts

- "Return affiliate-presented URLs when available, but keep canonical URLs for evidence."
- "Include affiliate disclosure once if any result has `affiliate.applied=true`."
- "Do not rank a product higher only because affiliate tagging is available."
- "Verify affiliate tags are not applied to cart, checkout, login, account, or payment URLs."

## Comparison and recommendation prompts

- "Summarize the top product choices as: best overall, cheapest acceptable, premium pick, and avoid."
- "Explain why the top choice is better than the cheapest result."
- "Identify duplicate listings across sources and merge them when model/brand/specs match."
- "Separate factual specs from marketing claims."
- "Flag if the result needs browser verification because price, stock, or seller reliability is uncertain."

## Bad prompts to reject or rewrite

- "Buy this for me."
- "Add the cheapest item to my cart."
- "Log into my Amazon account and check out."
- "Scrape any website you can find."
- "Bypass the captcha and get the price."

Rewrite those into safe product research or manual verification prompts.

## Output concepts

Good shop answers should include:

- collection used
- source plan and ranking rationale
- accepted/rejected sources
- top product candidates
- price/currency/condition/availability when available
- canonical URL and presented URL
- affiliate disclosure if needed
- caveats: marketplace, used/refurbished, shipping, stock, stale data, verification needed

## Bot behavior

The bot should verify first, use known service/collection/source IDs, preserve safety boundaries, disclose affiliate links when present, and never claim live search/install success without health or command evidence.
