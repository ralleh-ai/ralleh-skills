# Ralleh MCP Search Prompt Suggestions

## Purpose

Use these prompts for curated content lookup through `ralleh-mcp-search`. The service searches ranked source collections, coalesces evidence, and gives the LLM material to summarize, brief, compare, build consensus, or detect conflicts.

This is not arbitrary web crawling. The bot should choose a collection or approved tool intent, let the MCP resolve ranked sources, and report source diagnostics honestly.

## Tool-intent prompts

- "Use `SearchWeb` for a broad curated web lookup on this topic."
- "Use `SearchNews` to find current news coverage and summarize the strongest evidence."
- "Use `GetBreakingNews` for a fast breaking-news pass and mark unconfirmed claims."
- "Use `GetNewsBrief` to build a balanced news brief from multiple source families."
- "Use `SearchRSS` for a feed-first scan."
- "Use `SearchFinance` or `SearchStocks` for ticker/company context."
- "Use `SearchSports` for current sports updates."
- "Use `SearchWeather` for official weather and NOAA/NWS-backed information."
- "Use `SearchGovernment` for official datasets and government sources."
- "Use `SearchCommunity` for Reddit, Stack Overflow, Hacker News, forums, and XDA-style user signals."
- "Use `GetConsensus` to compare review/community/lab-test sources."
- "Use `SummarizeConsensus` to summarize agreement and disagreement across sources."
- "Use `DetectConflicts` to identify contradictions across news sources."

## Collection prompts

- "Search `breaking_news` for this story and separate confirmed facts from early reports."
- "Search `news_brief` and produce a five-bullet brief with citations and uncertainty notes."
- "Search `stocks_markets` for this ticker and summarize price-moving news, filings, and analyst context without investment advice."
- "Search `sports` for injury updates, roster news, and confirmed game information."
- "Search `weather` for this storm and prefer official NWS/NOAA sources."
- "Search `government` for official data on this economic topic."
- "Search `community` for user-reported issues, but label anecdotal claims clearly."
- "Search `reviews_consensus` to compare Wirecutter, Consumer Reports, RTINGS, Tom's Hardware, Reddit, and Stack Overflow style evidence."
- "Search `science` for public science reporting on this discovery."
- "Search `research` for papers and summarize abstracts, methods, and limitations."
- "Search `technology` for AI chip news and separate product rumors from confirmed releases."

## Briefing prompts

- "Create an executive brief: what happened, why it matters, source confidence, conflicts, and what to watch next."
- "Give me a source-backed timeline of this story."
- "Summarize this topic for a nontechnical executive, then list technical caveats."
- "Show the strongest three sources and the weakest three sources for this claim."
- "Build a decision memo from search results: options, evidence, risks, and recommendation."

## Consensus and conflict prompts

- "Get consensus across community and review sources for this product category."
- "Detect conflicts across news sources on this story and list what each source claims."
- "Summarize where sources agree, where they disagree, and what remains unknown."
- "Flag claims that appear in only one source."
- "Separate official-source evidence from commentary, opinion, or community anecdotes."

## Finance and stocks prompts

- "Search finance sources for this ticker and summarize market context without financial advice."
- "Search SEC EDGAR and market sources for recent filings or material updates."
- "Compare Reuters/CNBC/Yahoo Finance/MarketWatch coverage of this company."
- "Identify price-moving claims and mark whether they come from filings, news, analysts, or social chatter."

## Research prompts

- "Search research sources for this topic and summarize the strongest papers or abstracts."
- "Compare arXiv, PubMed, Semantic Scholar, and Nature-style sources for this research question."
- "Summarize methods, sample size, limitations, and whether claims are peer-reviewed."
- "Find whether this claim is supported by research or only by popular articles."

## Source ranking prompts

- "Rank the sources for `technology` and explain which should be searched first."
- "Rank `breaking_news` sources by speed, accuracy, usefulness, reliability, and challenge risk."
- "Rank `community` sources and explain why they are useful but lower-confidence."
- "Rank `reviews_consensus` sources for product decision quality."
- "Explain why paywalled or browser-only sources may rank lower despite high editorial quality."

## Bad prompts to reject or rewrite

- "Scrape this random website and everything it links to."
- "Bypass the paywall/captcha and get the article."
- "Use any site you can find."
- "Pretend the first source is definitive."
- "Summarize social media rumors as facts."
- "Make investment advice from search results."

Rewrite those into curated collection searches with source diagnostics and clear uncertainty.

## Output concepts

Good search answers should include:

- tool intent or collection used
- ranked sources searched
- source diagnostics
- evidence URLs
- concise summary
- confidence/uncertainty
- conflicts and missing context
- distinction between official sources, news reporting, opinion, and community anecdotes
- next verification step if data is sensitive or high-impact

## Bot behavior

The bot should choose a collection/tool intent, let MCP rank known sources, summarize with source evidence, and disclose when results are partial, contradictory, paywalled, blocked, or stale.
