# Diagram Maker Doctor

## Purpose

Use this when a diagram artifact is missing, invalid, unreadable, too dense, visually broken, or not in the requested format.

## Fast triage

1. Confirm requested output format: SVG/HTML or Excalidraw.
2. Confirm artifact path exists.
3. Inspect file for syntax and required structure.
4. Check for remote assets.
5. Check readability: labels, spacing, connector direction, and canvas size.

## SVG/HTML checks

- File is standalone HTML if requested.
- Contains inline `<svg`.
- Contains no remote `http://` or `https://` assets.
- Connectors are behind nodes.
- Directed connectors have arrow markers.
- Text has padding and does not touch borders.
- Labels are short and readable.

## Excalidraw checks

- JSON parses.
- Top-level fields exist: `type`, `version`, `source`, `elements`, `appState`.
- Labels are bound text elements, not fake `label` properties.
- Shapes are large enough for text.
- Elements are not all stacked at the same coordinates.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Artifact missing | Output path and write errors | Regenerate at requested path. |
| Browser shows blank page | HTML/SVG syntax | Fix tags, viewBox, dimensions. |
| Diagram is unreadable | Node count and label length | Reduce elements or split into multiple diagrams. |
| Arrows cover boxes | Element order | Draw connectors before nodes. |
| Excalidraw labels missing | Bound text | Add bound text elements after containers. |

## Doctor report format

Return:

- Status: valid / degraded / broken / missing.
- Artifact path inspected.
- Format detected.
- Problems found.
- Fix applied or recommended.
- Verification performed.
