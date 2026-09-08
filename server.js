// Standalone Node/Express server for MediKiosk production deployment
// Handles /api/tts proxying to IndicF5 Python service

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const INDICF5_URL = process.env.INDICF5_URL || 'http://localhost:8001/tts';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/tts', async (req, res) => {
  const { text, language } = req.body;

  if (language === 'en') {
    // English fallback path — use browser SpeechSynthesis
    return res.json({ useFallback: true, language: 'en' });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(INDICF5_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, language }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`IndicF5 returned HTTP ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.warn('[Proxy /api/tts] Failed to reach IndicF5 service, returning fallback:', err.message);
    res.json({ useFallback: true, error: err.message });
  }
});

// SPA catch-all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`MediKiosk server running on http://localhost:${PORT}`);
});
