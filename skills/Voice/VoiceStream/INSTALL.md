# Voice Stream Install Guide

## Purpose

Use this file to verify live or near-realtime voice stream capability.

## Safety and scope

- No ambient listening without explicit start and stop.
- No hidden recording.
- Do not store stream audio unless retention is approved.
- Confirm before external-effect actions derived from speech.

## Prerequisites

- Audio input stream or call/meeting source.
- Streaming or chunked STT capability.
- Optional streaming TTS output.
- Clear session lifecycle controls: start, pause, resume, stop.

## Verify capability

1. Start a test stream with a harmless phrase.
2. Confirm partial/final transcript delivery.
3. Measure rough latency.
4. Confirm stop command ends processing.
5. Confirm no audio persists beyond approved retention.

## Handoff prompt

> Verify voice stream start/stop, transcript flow, optional TTS output, and latency. Do not enable ambient listening or store audio without approval.
