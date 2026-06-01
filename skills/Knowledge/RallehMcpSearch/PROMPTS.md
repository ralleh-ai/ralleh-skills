# Ralleh MCP Search Prompt Suggestions

## Safe prompts

- "Use Ralleh MCP Search to get a breaking-news brief on this topic and cite source evidence."
- "Search finance sources for this ticker and summarize market context without making investment advice."
- "Search sports sources for the latest on this team and separate confirmed facts from rumors."
- "Search official weather/government sources for this event and summarize the reliable data."
- "Get consensus across review and community sources for this product category."
- "Detect conflicts across news sources on this story and list what each source claims."
- "Search research sources for this topic and summarize the strongest papers or abstracts."
- "Rank the sources for the `technology` collection and explain which sources should be searched first."

## Bot behavior

The bot should choose a collection/tool intent, let MCP rank known sources, summarize with source evidence, and disclose when results are partial, contradictory, paywalled, blocked, or stale.

## Bad prompts to reject or rewrite

- "Scrape this random website and everything it links to."
- "Bypass the paywall/captcha and get the article."
- "Use any site you can find."
- "Pretend the first source is definitive."

Rewrite those into curated collection searches with safe source diagnostics.
