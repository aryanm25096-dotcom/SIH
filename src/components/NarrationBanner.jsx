import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { useNarration } from '../context/NarrationContext.jsx';
import { useTranslation } from '../hooks/useTranslation.js';
import './NarrationBanner.css';

/**
 * Narration banner displaying:
 * 1. "Speaking..." visual indicator with waveform when active
 * 2. Repeat ("Hear Again") manual button
 * 3. Mute/Unmute narration toggle
 * 4. aria-live="polite" region for screen readers
 */
export default function NarrationBanner() {
  const { isSpeaking, isMuted, repeat, toggleMute, lastLanguage } = useNarration();
  const { t } = useTranslation();

  const getLanguageLabel = (code) => {
    const names = {
      hi: 'Hindi (हिन्दी)',
      mr: 'Marathi (मराठी)',
      bn: 'Bengali (বাংলা)',
      ta: 'Tamil (தமிழ்)',
      te: 'Telugu (తెలుగు)',
      gu: 'Gujarati (ગુજરાતી)',
      kn: 'Kannada (ಕನ್ನಡ)',
      ml: 'Malayalam (മലയാളം)',
      pa: 'Punjabi (ਪੰਜਾਬੀ)',
      or: 'Odia (ଓଡ଼ିଆ)',
      as: 'Assamese (অসমীয়া)',
      en: 'English',
    };
    return names[code] || code;
  };

  return (
    <div
      className={`narration-banner ${isSpeaking ? 'narration-banner--active' : ''} ${isMuted ? 'narration-banner--muted' : ''}`}
      role="region"
      aria-label="Audio screen narration"
    >
      <div className="narration-banner-inner">
        <div className="narration-status-block">
          <div className="narration-icon-wrap" aria-hidden="true">
            {isMuted ? (
              <VolumeX size={18} className="icon-muted" />
            ) : (
              <Volume2 size={18} className={isSpeaking ? 'icon-speaking' : ''} />
            )}
          </div>

          <div className="narration-text-block">
            {isMuted ? (
              <span className="narration-status-label">{t('muteVoice')} ({getLanguageLabel(lastLanguage)})</span>
            ) : isSpeaking ? (
              <span className="narration-status-label">
                {t('speakingVia')} ({getLanguageLabel(lastLanguage)})
              </span>
            ) : (
              <span className="narration-status-label">
                {t('screenReaderActive')} ({getLanguageLabel(lastLanguage)})
              </span>
            )}
          </div>

          {isSpeaking && !isMuted && (
            <div className="narration-waveform" aria-hidden="true">
              <span className="wave-stripe" />
              <span className="wave-stripe" />
              <span className="wave-stripe" />
              <span className="wave-stripe" />
            </div>
          )}
        </div>

        <div className="narration-controls-block">
          <button
            type="button"
            className="narration-action-btn"
            onClick={repeat}
            disabled={isMuted}
            aria-label="Repeat screen narration"
            title="Hear instructions again"
          >
            <RotateCcw size={15} aria-hidden="true" />
            <span>{t('hearAgain')}</span>
          </button>

          <button
            type="button"
            className={`narration-action-btn ${isMuted ? 'btn-unmute' : ''}`}
            onClick={toggleMute}
            aria-pressed={isMuted}
            aria-label={isMuted ? 'Unmute automatic narration' : 'Mute automatic narration'}
          >
            {isMuted ? <Volume2 size={15} aria-hidden="true" /> : <VolumeX size={15} aria-hidden="true" />}
            <span>{isMuted ? t('unmuteAudio') : t('muteVoice')}</span>
          </button>
        </div>
      </div>

      {/* Screen reader live announcement */}
      <div className="sr-only" aria-live="polite">
        {isSpeaking ? `Now speaking screen content in ${getLanguageLabel(lastLanguage)}` : ''}
      </div>
    </div>
  );
}
