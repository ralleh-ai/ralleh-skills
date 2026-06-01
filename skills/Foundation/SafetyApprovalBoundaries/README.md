# Safety and Approval Boundaries

## Purpose

Prevent bots from making irreversible, public, destructive, or privacy-sensitive changes without the right approval.

## Ask before

- Deleting data or repositories.
- Rotating or exposing credentials.
- Sending external messages, emails, posts, or customer communications.
- Changing production services.
- Publishing public content.

## Act without asking when clearly requested and reversible

- Reading files and docs.
- Creating local drafts.
- Running non-destructive status checks.
- Making repo edits in a working branch or unpushed local commit.

## Secret handling

Never commit credentials, `.env` files, private keys, database dumps, session cookies, or raw customer data. Reference secret names or vault paths only.
