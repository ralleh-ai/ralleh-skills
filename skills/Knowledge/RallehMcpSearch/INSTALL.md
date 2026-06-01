# Ralleh MCP Search Install Guide

## Purpose

Use this file to install or verify the `ralleh-mcp-search` service as part of the Ralleh MCP runtime.

## Prerequisites

- Shared Ralleh MCP repo installed from `ralleh-ai/ralleh-mcp`.
- `ralleh-mcp-search` binary present under the install prefix.
- Health endpoint bound to loopback only unless a secured exposure plan is explicitly approved.
- Source registries are curated; no arbitrary website mode should be enabled.

## Standard checks

```bash
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-search --health
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-search --rank-sources --rank-collection breaking_news
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-search --rank-sources --rank-collection research
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-search --search-query "ai chips" --search-collection technology --search-sources hacker_news,random_blog
curl -fsS http://127.0.0.1:8624/healthz
curl -fsS http://127.0.0.1:8624/readyz
curl -fsS http://127.0.0.1:8624/version
```

## Expected capabilities

The service should report:

```json
{
  "canSearchContent": true,
  "canSummarize": true,
  "canCrawlArbitraryWebsites": false
}
```

## Verification gate

Before reporting success, include:

- service version/commit
- health/readiness output
- collection count
- local-only health endpoint evidence
- one ranked collection output
- one deterministic search output with unknown-source rejection
