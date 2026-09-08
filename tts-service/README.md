# IndicF5 TTS Service for MediKiosk

This service provides Indian-language text-to-speech synthesis using **AI4Bharat's IndicF5** model for MediKiosk's accessibility narration.

---

## Supported Indian Languages (11 Languages)
- Hindi (`hi`)
- Marathi (`mr`)
- Bengali (`bn`)
- Tamil (`ta`)
- Telugu (`te`)
- Gujarati (`gu`)
- Kannada (`kn`)
- Malayalam (`ml`)
- Punjabi (`pa`)
- Odia (`or`)
- Assamese (`as`)

*(Note: English (`en`) is intentionally handled by the frontend's Web Speech API fallback, as IndicF5 is specialized for Indian languages).*

---

## 🛠️ Environment Setup

### 1. Create and Activate Conda Environment
```bash
conda create -n indicf5 python=3.10 -y
conda activate indicf5
```

### 2. Install Dependencies
```bash
# Install IndicF5 from AI4Bharat GitHub repository
pip install git+https://github.com/ai4bharat/IndicF5.git

# Install API and audio processing packages
pip install fastapi uvicorn soundfile numpy pydantic transformers torch
```

---

## 🎙️ Reference Voices Setup

IndicF5 requires a short (5–10 second) reference audio clip and transcript for each language to clone prosody and speaker characteristics:

1. Record or place clean audio clips (.wav format) inside `tts-service/reference_clips/`.
2. Update `tts-service/reference_voices.json` with the file paths and exact transcripts.

---

## 🚀 Running the Service

Start the FastAPI server on port **8001**:
```bash
cd tts-service
uvicorn main:app --host 0.0.0.0 --port 8001
```

Once running, the service is accessible at:
- Health Check: `http://localhost:8001/`
- TTS Endpoint: `http://localhost:8001/tts`

### Testing the Endpoint
```bash
curl -X POST http://localhost:8001/tts \
  -H "Content-Type: application/json" \
  -d '{"text": "नमस्ते, अपना स्वास्थ्य विवरण दर्ज करें।", "language": "hi"}'
```
Response:
```json
{
  "audioBase64": "<base64-encoded WAV audio>",
  "language": "hi",
  "cached": false,
  "model": "IndicF5"
}
```

---

## ⚡ Performance Optimizations
- **Single Model Load**: Loaded once during FastAPI startup.
- **In-Memory Cache**: Repeated phrases (e.g. "Tap and speak" or common instructions) are cached in memory by `(text, language)` to eliminate redundant inference latency.
- **Resilient Fallback**: If GPU/weights are still downloading or the service is running in demo mode, an acoustic healthcare chime is returned to keep the kiosk interface responsive.
