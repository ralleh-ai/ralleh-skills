# Ralleh MCP Brand Install Guide

## Purpose

Install and verify `ralleh-mcp-brand`, the stateful brand memory service in the Ralleh MCP family.

## Prerequisites

- Ralleh MCP repo installed from `ralleh-ai/ralleh-mcp`.
- `ralleh-mcp-brand` binary built and installed.
- SQLite storage path selected and included in backups.
- Health endpoint remains loopback-only by default.

## Standard checks

```bash
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-brand --db /opt/ralleh/ralleh-mcp/data/brand.db --health
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-brand --db /opt/ralleh/ralleh-mcp/data/brand.db --create-brand --org org_demo --brand brand_demo --name "Demo Brand" --description "Demo brand memory"
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-brand --db /opt/ralleh/ralleh-mcp/data/brand.db --update-voice --org org_demo --brand brand_demo --tone "direct,clear" --forbidden "magical,fully autonomous" --preferred "verification before done"
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-brand --db /opt/ralleh/ralleh-mcp/data/brand.db --validate-content --org org_demo --brand brand_demo --content "Our magical AI is fully autonomous" --rewrite
/opt/ralleh/ralleh-mcp/bin/ralleh-mcp-brand --db /opt/ralleh/ralleh-mcp/data/brand.db --audit-log --org org_demo --brand brand_demo
```

## Expected capabilities

```json
{
  "canStoreBrandMemory": true,
  "canValidateContent": true,
  "canAuditWrites": true,
  "canManageMultipleBrands": true
}
```

## Verification gate

Before reporting success, include:

- database path
- service health output
- brand create/update evidence
- validation score/violations
- audit event count
- backup inclusion status for the SQLite DB
