# Figma MCP Prompt Suggestions

## Purpose

Use these prompts to help users request Figma/design work safely and with enough scope for the bot to act without wandering through private design files.

## Setup and access prompts

- "Check whether Figma MCP is configured. Do not print any token values."
- "If Figma access is missing, explain how I can create and store the needed key securely. Do not ask me to paste the key here."
- "Verify read-only access to this Figma file, then inspect only the linked frame."
- "Use the official Figma MCP connection if available; otherwise report what setup is missing."
- "Diagnose why this Figma frame cannot be read and give me the exact blocker and next step."

## Design inspection prompts

- "Read this Figma frame and summarize implementation requirements."
- "Inspect only this component and list its variants, states, props, spacing, colors, and typography."
- "Extract colors, typography, spacing, grid, and component states from this design."
- "Create a frontend handoff checklist from this frame."
- "Identify reusable components and design tokens from this Figma section."
- "Summarize the responsive behavior implied by this frame and its constraints."
- "Extract the copy and UI labels from this selected frame."
- "List assets that appear needed, but do not export them without approval."

## Implementation prompts

- "Use this Figma frame as design guidance, then inspect the actual code before changing anything."
- "Implement this frame, but verify the rendered UI against the Figma source before claiming parity."
- "Compare the current UI screenshot against this Figma frame and list visible differences."
- "Generate a component implementation plan from this Figma component, including states and accessibility notes."
- "Map Figma variables/tokens to the closest existing CSS/design-system tokens. Do not invent token names as facts."

## Review prompts

- "Review this implementation against the Figma frame and report gaps by severity."
- "Check whether spacing, typography, color, and component states match the design."
- "Find where the implementation intentionally differs from Figma and whether those differences are acceptable."
- "Use Figma as source material, but verify the browser-rendered UI before saying the design is done."

## Write/export approval prompts

- "Prepare an asset export plan for this frame, but do not export until I approve."
- "I approve exporting the listed SVG icons from this file into the project asset folder. Record what was exported."
- "Draft a Figma comment for this design issue, but ask me before posting it."
- "I approve posting this exact comment to the linked Figma frame."

## Bad prompts to avoid

- "Read the whole design system and implement everything." Too broad; narrow to a page, frame, or component.
- "Use whatever token you find." Unsafe; credentials must stay in approved secret storage.
- "Export all assets." Too broad and may leak private design data.
- "Make changes in Figma without asking." Design writes require explicit approval.
- "Assume the app matches Figma." Always verify the actual UI.

## Good bot behavior

The bot should:

- narrow scope to the requested frame/component/node
- check access without leaking credentials
- extract concrete design facts, not vague impressions
- separate facts from interpretation
- flag missing permissions or stale data honestly
- ask before export, comment, write-to-canvas, sharing, or permission changes
- verify implementation against a real rendered UI before claiming completion

## Suggested response shape

```text
Figma source:
Scope inspected:
Access status:
Implementation facts:
Design tokens/components:
Assets needed:
Accessibility notes:
Risks/unknowns:
Next action:
Verification needed:
```
