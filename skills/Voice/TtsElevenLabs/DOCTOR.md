# TTS ElevenLabs Doctor

## Purpose

Use this when TTS generation fails, credentials are missing, voice/model settings are invalid, audio output is empty, or delivery fails.

## Fast triage

1. Confirm provider: ElevenLabs or approved Cartesia overlay.
2. Confirm secret exists without printing it.
3. Confirm voice/model ID is configured.
4. Generate a short harmless test phrase.
5. Check output file size and format.
6. Check delivery channel if attachment/voice note is required.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| Missing API key | secret store path/env name | Configure secret in approved store. |
| Unauthorized | key scope/account | Use valid provider key. |
| Invalid voice | voice/model ID | Use approved voice from overlay. |
| Empty audio | provider response/output path | Inspect provider error and write permissions. |
| Delivery fails | channel attachment limits | Use supported format or send as file. |

## Doctor report format

Return status, provider, secret presence without value, voice/model config, output path/size, delivery result, and next action.
