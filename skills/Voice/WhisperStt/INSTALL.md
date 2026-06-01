# Whisper STT Install Guide

## Purpose

Use this file to verify speech-to-text transcription capability.

## Safety and scope

- Do not upload audio to cloud transcription unless the user approved cloud processing or deployment policy allows it.
- Do not store transcripts longer than needed unless retention is clear.
- Do not expose private transcript content in public channels.

## Prerequisites

Local option:

- `whisper` CLI available.
- Model download/cache access.

API option:

- Approved transcription provider.
- API key stored in the approved secret store, not in repo files.

## Verify local Whisper

```bash
whisper /path/audio.mp3 --model medium --output_format txt --output_dir /tmp
```

Expected result: a `.txt` transcript file is created.

## Verify API transcription

Use the deployment-approved wrapper or provider script. Confirm upload limits, model name, and secret source before sending audio.

## Handoff prompt

> Verify STT capability using local Whisper when possible. If using a cloud API, confirm approval and secret source first. Produce a transcript, report audio quality concerns, and do not over-interpret uncertain speech.
