/**
 * Vercel Serverless Function for /api/tts
 * 
 * 1. If INDICF5_URL environment variable is set (pointing to a hosted IndicF5 service),
 *    it proxies the TTS request to the remote model.
 * 2. Otherwise, returns { useFallback: true } immediately with 200 OK,
 *    allowing the frontend to seamlessly use high-quality browser SpeechSynthesis.
 */

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { text, language } = req.body || {};

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  // English always uses client speech synthesis
  if (language === 'en') {
    return res.status(200).json({ useFallback: true, language: 'en' });
  }

  const INDICF5_URL = process.env.INDICF5_URL;

  if (INDICF5_URL) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);

      const upstream = await fetch(INDICF5_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (upstream.ok) {
        const data = await upstream.json();
        return res.status(200).json(data);
      }
    } catch (err) {
      console.warn('[Vercel /api/tts] Remote IndicF5 unreachable:', err.message);
    }
  }

  // Graceful instantaneous fallback for Vercel deployment
  return res.status(200).json({ useFallback: true, language });
}
