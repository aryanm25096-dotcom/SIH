/**
 * Web Speech API & IndicF5 TTS Wrapper
 *
 * Integrates:
 * 1. Web Speech API SpeechRecognition for speech-to-text with mock fallback
 * 2. AI4Bharat IndicF5 TTS via /api/tts proxy for 11 Indian languages
 * 3. Browser SpeechSynthesis as a reliable fallback for English ('en') and offline resilience
 */

import { mockSTT } from '../mocks/mockServices.js';

const SpeechRecognition =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

/**
 * Start speech recognition.
 */
export function startListening({ lang = 'en-IN', onResult, onStart, onEnd, onError }) {
  if (!SpeechRecognition) {
    onStart?.();
    const timeout = setTimeout(async () => {
      try {
        const transcript = await mockSTT();
        onResult?.(transcript);
      } catch {
        onError?.('Mock STT failed');
      } finally {
        onEnd?.();
      }
    }, 1500);

    return {
      stop: () => {
        clearTimeout(timeout);
        onEnd?.();
      },
    };
  }

  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => onStart?.();
  recognition.onend = () => onEnd?.();
  recognition.onerror = (e) => {
    if (e.error === 'not-allowed' || e.error === 'no-speech') {
      mockSTT().then((t) => onResult?.(t));
    } else {
      onError?.(e.error);
    }
    onEnd?.();
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript || '';
    onResult?.(transcript);
  };

  recognition.start();

  return {
    stop: () => {
      try {
        recognition.stop();
      } catch {
        // already stopped
      }
    },
  };
}

/**
 * Text-to-speech using the browser's native speechSynthesis API.
 * Used for English ('en') and as the primary offline/error fallback.
 */
export function speakText(text, lang = 'en-IN', onStart, onEnd) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    onStart?.();
    setTimeout(() => onEnd?.(), 100);
    return { cancel: () => {} };
  }

  // Cancel any ongoing speech synthesis
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.92;
  utterance.onstart = () => onStart?.();
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);

  return {
    cancel: () => {
      window.speechSynthesis.cancel();
      onEnd?.();
    },
  };
}

/**
 * Maps ISO language code to BCP-47 tag for browser SpeechSynthesis fallback
 */
export function getBCP47Tag(lang) {
  const map = {
    en: 'en-IN',
    hi: 'hi-IN',
    mr: 'mr-IN',
    bn: 'bn-IN',
    ta: 'ta-IN',
    te: 'te-IN',
    gu: 'gu-IN',
    kn: 'kn-IN',
    ml: 'ml-IN',
    pa: 'pa-IN',
    or: 'or-IN',
    as: 'as-IN',
  };
  return map[lang] || 'en-IN';
}

/**
 * Speaks text using AI4Bharat's IndicF5 model over /api/tts.
 * Automatically falls back to browser SpeechSynthesis if:
 * 1. Language is English ('en')
 * 2. IndicF5 backend returns useFallback: true
 * 3. IndicF5 backend is unreachable or errors out
 *
 * @param {Object} options
 * @param {string} options.text — Text to synthesize
 * @param {string} options.language — ISO code ('hi', 'mr', 'bn', 'en', etc.)
 * @param {function} [options.onStart]
 * @param {function} [options.onEnd]
 * @param {function} [options.onError]
 * @returns {{ cancel: function }}
 */
export function speakWithIndicF5({ text, language = 'en', onStart, onEnd, onError }) {
  let isCancelled = false;
  let currentAudio = null;
  let fallbackController = null;

  const bcp47 = getBCP47Tag(language);

  // If language is English, immediately use browser SpeechSynthesis
  if (language === 'en') {
    return speakText(text, 'en-IN', onStart, onEnd);
  }

  onStart?.();

  // Call /api/tts proxy
  fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, language }),
  })
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      if (isCancelled) return;

      if (data.audioBase64) {
        // Detect MIME type (mp3 vs wav)
        const mime = data.mimeType || (data.audioBase64.startsWith('//') ? 'audio/mp3' : 'audio/wav');
        const audioSrc = `data:${mime};base64,${data.audioBase64}`;
        currentAudio = new Audio(audioSrc);

        currentAudio.onended = () => {
          if (!isCancelled) onEnd?.();
        };

        currentAudio.onerror = (e) => {
          console.warn('[IndicF5 Audio] Playback error, using browser TTS fallback:', e);
          if (!isCancelled) {
            fallbackController = speakText(text, bcp47, undefined, onEnd);
          }
        };

        const playPromise = currentAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('[IndicF5 Audio] Autoplay blocked or gesture required, falling back to speech synthesis:', err);
            if (!isCancelled) {
              fallbackController = speakText(text, bcp47, undefined, onEnd);
            }
          });
        }
      } else {
        // useFallback or missing audio -> fallback to browser SpeechSynthesis
        if (!isCancelled) {
          fallbackController = speakText(text, bcp47, undefined, onEnd);
        }
      }
    })
    .catch((err) => {
      console.warn('[IndicF5 TTS] Backend request failed, falling back to browser SpeechSynthesis:', err.message);
      if (!isCancelled) {
        fallbackController = speakText(text, bcp47, undefined, onEnd);
      }
    });

  return {
    cancel: () => {
      isCancelled = true;
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      if (fallbackController) {
        fallbackController.cancel();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      onEnd?.();
    },
  };
}
