# Voice Stream Doctor

## Purpose

Use this when streaming audio fails, transcript chunks are missing, latency is too high, TTS overlaps, or the stream does not stop cleanly.

## Fast triage

1. Confirm stream state: idle, starting, active, paused, stopping, or stopped.
2. Confirm audio packets/chunks are arriving.
3. Confirm STT partial and final transcript events.
4. Confirm TTS does not talk over user speech unless intended.
5. Confirm stop command ends all processing.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| No transcript | Audio chunks and STT provider | Check input route and STT credentials/tooling. |
| High latency | chunk size, model, network | Reduce chunk size or use faster model. |
| Overlapping speech | turn-taking state | Add pause/barge-in handling. |
| Stream keeps running | lifecycle state | Force stop and report blocker. |

## Doctor report format

Return status, stream state, audio input result, STT result, TTS result if used, latency estimate, and next action.
