# USER.md Standard

## Purpose

`USER.md` captures stable facts about the primary user: name/call sign, timezone, preferences, values, working style, pet peeves, and durable personal constraints relevant to assistance.

It should help the agent serve the user well without repeatedly asking the same preference questions.

## Target size

- Ideal: 200–800 words.
- Hard ceiling: 1,200 words.

## Required sections

1. `# USER.md`
2. `## Identity`
   - Preferred name/call sign, pronouns if known, timezone.
3. `## Skills and Context`
   - Stable professional or technical background relevant to assistance.
4. `## Values`
   - Durable principles and quality bar.
5. `## Style Preferences`
   - Communication style, formatting, verbosity, decision preferences.
6. `## Pet Peeves`
   - Things to avoid.
7. `## Durable Preferences`
   - Reusable choices/templates/defaults.

## Optimization rules

- Store stable preferences, not transient moods.
- Keep private details minimal and necessary.
- Do not include secrets, account credentials, or sensitive identity data beyond what is needed.
- Update only when the user directly states or repeatedly demonstrates a stable preference.

## Anti-patterns

- Full biography.
- Credentials or account recovery info.
- One-off requests.
- Task status.
- Speculation about the user.

## Evaluation checklist

- Preferences are stable and useful.
- The file is concise.
- No unnecessary private data.
- No stale one-off instructions.
