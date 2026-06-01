# Voice Stream Skill

## What Voice Stream is

Voice Stream is the skill for realtime or near-realtime voice pipelines: audio input, speech detection, streaming STT, partial transcripts, agent responses, and streamed TTS output.

It coordinates the pipeline without turning it into uncontrolled background listening.

## What Voice Stream does

- Defines voice-stream lifecycle: start, listen, transcribe, respond, pause, stop.
- Handles partial transcripts and confirmation gates.
- Coordinates STT, reasoning, and TTS components.
- Reports latency, dropped audio, and provider failures.

## When a bot should use it

Use Voice Stream for live voice conversations, calls, meetings, dictation sessions, or hands-free command streams.

Do not use it for ambient monitoring or hidden recording.

## Files in this skill

- [`INSTALL.md`](INSTALL.md) — verify streaming audio input/output and provider/tool readiness.
- [`DOCTOR.md`](DOCTOR.md) — troubleshoot latency, dropped audio, partial transcript errors, and stream lifecycle bugs.
- [`PROMPTS.md`](PROMPTS.md) — user-facing prompts for live voice sessions.

## Golden operating rule

A voice stream must have a clear start, visible/known active state, and clear stop condition.
