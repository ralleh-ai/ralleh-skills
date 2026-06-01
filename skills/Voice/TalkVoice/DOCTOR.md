# Talk Voice Doctor

## Purpose

Use this when voice interaction fails, transcription is wrong, audio replies are missing, latency is high, or consent is unclear.

## Stop conditions

Stop and ask before recording, storing, calling, speaking to third parties, or performing external actions from uncertain spoken intent.

## Fast triage

1. Confirm the audio source and channel.
2. Confirm STT is available and produced a transcript.
3. Confirm the transcript matches the user's likely intent.
4. Confirm TTS is available if spoken output is required.
5. Check whether the task needs explicit approval.

## Common failure modes

| Symptom | Check | Likely fix |
| --- | --- | --- |
| No transcript | Audio file/path and STT tool | Use WhisperStt doctor. |
| Bad transcript | Audio quality/language/model | Ask user to repeat or use a larger STT model. |
| No spoken reply | TTS provider/key/output path | Use TTS doctor. |
| Bot acts on wrong intent | Confirmation step | Ask a concise clarification. |
| Privacy concern | Retention and audience | Stop and ask. |

## Doctor report format

Return status, audio source, STT result, TTS result if needed, blocker, and next action.
