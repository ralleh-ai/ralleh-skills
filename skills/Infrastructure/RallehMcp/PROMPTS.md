# Ralleh MCP Prompt Suggestions

## Purpose

Use these prompts to operate the shared Ralleh MCP runtime safely on a VPS. This skill is for the runtime itself: install, upgrade, backup, health, local-only binding, source registry sanity, and smoke validation.

## Installation and first-run prompts

- "Install Ralleh MCP on this VPS from the approved repo, then run the full smoke test."
- "Build Ralleh MCP with version metadata and show the shop, travel, and search health outputs."
- "Install Ralleh MCP under `/opt/ralleh/ralleh-mcp`, verify all binaries exist, and run health checks."
- "Set up the Ralleh MCP local health services, but keep them bound to `127.0.0.1` only."
- "Verify this VPS has the Go runtime needed to build Ralleh MCP; if not, report the missing toolchain without installing anything."

## Upgrade and backup prompts

- "Upgrade Ralleh MCP safely: back up the current install, build, install, run health checks, then report version/commit."
- "Before changing Ralleh MCP, create a backup archive and list what it contains."
- "Run the Ralleh MCP upgrade script with a temporary prefix first and report any failures."
- "Compare the deployed Ralleh MCP commit with the GitHub main branch and tell me if it is behind."
- "Rollback planning only: explain how we would restore the last Ralleh MCP backup if an upgrade failed."

## Health and smoke prompts

- "Run `scripts/smoke.sh` for Ralleh MCP and summarize each gate: tests, build, health, bind guard, install, backup, fake search."
- "Check `ralleh-mcp-shop`, `ralleh-mcp-travel`, and `ralleh-mcp-search` health and readiness."
- "Start the local health server for Ralleh MCP Search and verify `/healthz`, `/readyz`, and `/version`."
- "Verify non-loopback binding is rejected for Ralleh MCP health endpoints."
- "Show the collection counts for shop, travel, and search from their health output."

## Source registry and ranking prompts

- "List all Ralleh MCP collections and the top ranked sources for each."
- "Rank the sources for `tools`, `electronics`, `us_domestic_flights`, `hotels`, `breaking_news`, and `research`."
- "Explain why a browser-only source ranks lower than an API-capable source."
- "Check whether any configured source has no search template and explain whether that is expected."
- "Audit the source ranking heuristic for speed, accuracy, usefulness, reliability, and challenge risk."

## Security prompts

- "Confirm Ralleh MCP is local-only on this VPS and not exposed publicly."
- "Audit Ralleh MCP systemd unit hardening and report any missing restrictions."
- "Check whether Ralleh MCP exposes checkout, booking, payment, passenger PII, or arbitrary crawling capability."
- "Verify Ralleh MCP refuses unknown/random source IDs in fake searches."
- "Review the Ralleh MCP affiliate URL logic for unsafe paths like checkout, cart, login, account, and payment."

## Debug prompts

- "Diagnose why `ralleh-mcp-shop --health` is failing."
- "Diagnose why `scripts/smoke.sh` failed and identify the first failing gate."
- "Find source registry errors that would make a collection fail readiness."
- "Explain why a fake search returned partial or empty results."
- "Check whether the deployed binary has the expected version/commit metadata."

## Output concepts

Good runtime answers should include:

- host/path inspected
- command evidence
- service version/commit/build date
- health/readiness status
- collection counts
- local-only bind evidence
- backup path when relevant
- exact blocker when unsafe or degraded

## Bot behavior

The bot should verify first, use known service/collection/source IDs, preserve safety boundaries, disclose affiliate links when present, and never claim live search/install success without health or command evidence.
