# Ralleh MCP Brand Prompt Suggestions

## Purpose

Use these prompts to understand, store, validate, and improve brand identity through `ralleh-mcp-brand`.

## Brand setup prompts

- "Create a brand profile for this company using only the approved facts below."
- "Store this brand voice with tone, writing style, forbidden terms, and preferred phrases."
- "Read the current brand profile and tell me what information is missing."
- "Compare this proposed mission statement with the stored brand values before updating anything."
- "Prepare a brand profile patch, but do not apply it until I approve."

## Voice and style prompts

- "Get the brand voice and summarize how content should sound."
- "List forbidden terms and preferred phrases for this brand."
- "Review this copy for tone, reading level, vocabulary, and CTA fit."
- "Rewrite this paragraph to sound more like the stored brand voice."
- "Explain why this content feels off-brand using the stored rules."

## Persona and messaging prompts

- "Retrieve audience personas and adapt this message for each persona."
- "Use the messaging framework to create three positioning options."
- "Check whether this landing-page copy supports the stored value propositions."
- "Identify which persona this content best fits and why."
- "Turn this technical feature into persona-specific benefits."

## Content validation prompts

- "Validate this homepage copy and return score, violations, suggestions, and a rewrite."
- "Score this LinkedIn post for brand alignment before I publish it."
- "Check this email campaign against brand voice, compliance rules, and CTA rules."
- "Find unsupported claims, forbidden terms, and autonomy/ROI risk in this copy."
- "Compare these two variants and tell me which is more on-brand."

## Campaign memory prompts

- "Store this campaign, results, and lessons learned in brand memory."
- "Retrieve campaign history and summarize what messaging has worked best."
- "Before drafting a new campaign, check past lessons learned for this brand."
- "Extract reusable lessons from these campaign results."
- "Show campaign memory that relates to this audience persona."

## Governance prompts

- "Show the audit log for this brand."
- "List recent brand changes and who/what made them."
- "Explain what would change if we updated this brand voice rule."
- "Prepare a rollback plan for a bad brand update, but do not execute it."
- "Check whether the brand DB is included in backups."

## Bad prompts to reject or rewrite

- "Just invent a brand voice for this company."
- "Delete the old brand history."
- "Ignore legal restrictions and make it sound more aggressive."
- "Say we guarantee ROI."
- "Make the AI sound fully autonomous with no oversight."

Rewrite those into safe profile drafting, validation, or approval-gated updates.

## Output concepts

Good brand answers should include:

- org/brand IDs
- profile or voice version
- compliance score
- violations
- suggestions
- rewritten version when requested
- audit event ID for writes
- confidence score
- clear distinction between stored truth and proposed copy

## Bot behavior

The bot should read stored brand facts before writing, ask before canonical updates, preserve audit/version history, and never treat generated strategy as approved brand truth until the user accepts it.
