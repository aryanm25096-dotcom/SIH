import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { speakText } from '../utils/speechApi.js';
import './ConsentToggle.css';

/**
 * Consent toggle with accessible switch semantics and read-aloud option.
 */
export default function ConsentToggle({
  id,
  title,
  description,
  checked,
  onChange,
  required = false,
  lang = 'en-IN',
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      return;
    }
    const fullText = `${title}. ${description}`;
    speakText(
      fullText,
      lang,
      () => setIsPlaying(true),
      () => setIsPlaying(false)
    );
  };

  return (
    <div className={`consent-toggle-card ${checked ? 'consent-toggle-card--checked' : ''}`}>
      <div className="consent-toggle-info">
        <div className="consent-toggle-title-row">
          <label htmlFor={id} className="consent-toggle-title">
            {title}
            {required && <span className="consent-required-badge">Required</span>}
          </label>
          <button
            type="button"
            className={`consent-audio-btn ${isPlaying ? 'consent-audio-btn--active' : ''}`}
            onClick={handleAudioPlay}
            aria-label={`Read aloud: ${title}`}
            title="Listen to this consent clause"
          >
            {isPlaying ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
            <span className="consent-audio-text">{isPlaying ? 'Stop' : 'Listen'}</span>
          </button>
        </div>
        <p className="consent-toggle-desc">{description}</p>
      </div>

      <div className="consent-switch-wrapper">
        <input
          type="checkbox"
          id={id}
          className="consent-switch-input"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={`${id}-desc`}
        />
        <label htmlFor={id} className="consent-switch-label">
          <span className="consent-switch-slider" />
          <span className="sr-only">{title}</span>
        </label>
      </div>
    </div>
  );
}
