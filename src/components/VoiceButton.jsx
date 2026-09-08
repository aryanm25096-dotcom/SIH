import { useState, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { startListening } from '../utils/speechApi.js';
import { useTranslation } from '../hooks/useTranslation.js';
import './VoiceButton.css';

/**
 * "Tap and Speak" button with listening/waveform visual state.
 * Uses Web Speech API where available, falls back to mock.
 *
 * @param {{ lang: string, onTranscript: function, disabled?: boolean }} props
 */
export default function VoiceButton({ lang = 'en-IN', onTranscript, disabled = false }) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    recognitionRef.current = startListening({
      lang,
      onResult: (transcript) => {
        onTranscript?.(transcript);
      },
      onStart: () => setListening(true),
      onEnd: () => setListening(false),
      onError: () => setListening(false),
    });
  };

  return (
    <button
      type="button"
      className={`voice-btn ${listening ? 'voice-btn--listening' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={listening ? (t('listening') || 'Listening...') : (t('tapAndSpeak') || 'Tap and speak your answer')}
    >
      {listening ? (
        <>
          <MicOff size={24} aria-hidden="true" />
          <span className="voice-btn-text">{t('listening') || 'Listening...'}</span>
          <span className="voice-waveform" aria-hidden="true">
            <span className="wave-bar" />
            <span className="wave-bar" />
            <span className="wave-bar" />
            <span className="wave-bar" />
            <span className="wave-bar" />
          </span>
        </>
      ) : (
        <>
          <Mic size={24} aria-hidden="true" />
          <span className="voice-btn-text">{t('tapAndSpeak') || 'Tap and Speak'}</span>
        </>
      )}
      <span className="sr-only" aria-live="polite">
        {listening ? (t('listening') || 'Listening for your response') : ''}
      </span>
    </button>
  );
}
