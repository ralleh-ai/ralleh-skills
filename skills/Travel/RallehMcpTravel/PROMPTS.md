# Ralleh MCP Travel Prompt Suggestions

## Purpose

Use these prompts for travel research through `ralleh-mcp-travel`. The service searches curated travel collections, ranks sources, compares itinerary/lodging/activity options, and warns about traps. It must not book, pay, log in, enter passenger PII, reserve, or bypass travel-site controls.

## Flight prompts

- "Find the best sane flight from Orlando to Las Vegas next weekend; no booking."
- "Search `us_domestic_flights` for MCO to LAS on this date and rank by least painful, not just cheapest."
- "Compare nonstop versus one-stop options and explain the tradeoff."
- "Find budget flight options but flag basic economy, bag fees, seat fees, self-transfer, and overnight layovers."
- "Use `international_flights` for this route and warn about connection, visa, airport-change, and baggage risks."
- "Suggest nearby airports, then search the best travel collection."
- "Explain why a flight result is suspiciously cheap."

## Hotel and lodging prompts

- "Search the `hotels` collection for downtown Chicago hotels for these dates; no booking."
- "Compare hotels by location, cancellation terms, fees, and review confidence."
- "Find family-friendly lodging near this attraction and flag resort/cleaning/parking fees."
- "Use hotel sources to find options, then tell me which need manual browser verification."

## Camping, RV, and outdoor travel prompts

- "Search `camping_outdoors` for campsites near Zion in September."
- "Compare Recreation.gov, Hipcamp, The Dyrt, and Campendium style results and explain reliability differences."
- "Use `rv_van_travel` to research RV rentals near Denver; no booking or contact."
- "Find outdoor stays, but separate official campground availability from private listings."

## Tours and activities prompts

- "Use `tours_activities` to find top-rated tours in Rome and summarize cancellation/meeting-point caveats."
- "Compare Viator, GetYourGuide, and Klook style options for this city."
- "Find family-friendly activities under $100 and flag duration, accessibility, and weather risks."

## Cruise prompts

- "Use the `cruises` collection to research Alaska cruise options, but do not book or request passenger details."
- "Explain which cruise sources are browser-verify or interface-driven and why results may be partial."

## Source ranking prompts

- "Rank the `us_domestic_flights` sources by speed, accuracy, usefulness, reliability, and challenge risk."
- "Rank the `hotels` collection and explain which sources are best for broad coverage versus booking-page verification."
- "Show why API-capable flight sources should rank ahead of browser-only aggregators."
- "Report source failures, paywalls, bot challenges, or degraded results."

## Safety prompts

- "Do not book anything; provide manual booking links only."
- "Do not ask for passenger names, dates of birth, passport numbers, loyalty numbers, or payment details."
- "If a site requires login or captcha, report that manual verification is needed."
- "Separate facts from assumptions for baggage, cancellation, and fare class."

## Bad prompts to reject or rewrite

- "Book the cheapest flight for me."
- "Use my credit card to reserve this hotel."
- "Enter passenger info and finish checkout."
- "Bypass the airline captcha."
- "Log into my travel account."

Rewrite those into safe research, comparison, or manual-verification prompts.

## Output concepts

Good travel answers should include:

- collection used
- source plan and ranking rationale
- top options by best overall, cheapest sane, fastest/least painful
- fare/lodging/activity caveats
- baggage/fees/cancellation assumptions
- warning flags
- manual verification links
- clear no-booking boundary

## Bot behavior

The bot should verify first, use known service/collection/source IDs, preserve safety boundaries, disclose affiliate links when present, and never claim live search/install success without health or command evidence.
