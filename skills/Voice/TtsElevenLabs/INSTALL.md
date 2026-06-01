# TTS ElevenLabs Install Guide

## Purpose

Use this file to verify cloud TTS capability through ElevenLabs or an approved Cartesia overlay.

## Safety and scope

- Store provider keys only in the approved secret store.
- Do not commit keys, voice IDs tied to private accounts, or generated private audio.
- Do not impersonate real people without explicit rights.
- Keep generated speech appropriate for the target channel and audience.

## Prerequisites

- Approved provider: ElevenLabs by default, Cartesia only through deployment overlay.
- Provider API key available from secret store.
- Approved voice/model ID.
- Audio delivery path: file, voice note, call, or stream.

## Verify capability

1. Confirm provider and secret source without printing the key.
2. Generate a short harmless test phrase.
3. Confirm audio file exists and has nonzero size.
4. Optionally play or attach it in the approved channel.
5. Report provider, output path, duration/size, and any delivery blocker.

## Handoff prompt

> Verify TTS provider configuration without exposing keys. Generate a short harmless test audio file, confirm it exists, and report output path and delivery status. Do not impersonate real people or commit generated private audio.
