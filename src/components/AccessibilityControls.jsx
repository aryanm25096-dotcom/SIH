import { useState, useEffect } from 'react';
import { Settings, ZoomIn, ZoomOut, Eye, MonitorOff, Volume2, VolumeX } from 'lucide-react';
import { useNarration } from '../context/NarrationContext.jsx';
import './AccessibilityControls.css';

/**
 * Persistent accessibility control bar — visible on every screen.
 * Controls: text-size increase/decrease, high-contrast toggle, reduce-motion toggle.
 */
export default function AccessibilityControls() {
  const [textScale, setTextScale] = useState(() => {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--text-scale')) || 1;
  });
  const [highContrast, setHighContrast] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'high-contrast'
  );
  const [reduceMotion, setReduceMotion] = useState(
    () => document.documentElement.getAttribute('data-reduce-motion') === 'true'
  );
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--text-scale', textScale);
  }, [textScale]);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      highContrast ? 'high-contrast' : 'default'
    );
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-reduce-motion',
      reduceMotion ? 'true' : 'false'
    );
  }, [reduceMotion]);

  const { isMuted, toggleMute } = useNarration();

  const increaseText = () => {
    setTextScale((prev) => Math.min(prev + 0.25, 2.0)); // max 200%
  };

  const decreaseText = () => {
    setTextScale((prev) => Math.max(prev - 0.25, 0.75)); // min 75%
  };

  return (
    <div className="a11y-controls" role="region" aria-label="Accessibility controls">
      <button
        className="a11y-toggle-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label="Toggle accessibility controls"
        type="button"
      >
        <Settings size={20} aria-hidden="true" />
      </button>

      {expanded && (
        <div className="a11y-panel">
          <div className="a11y-control-group">
            <span className="a11y-label">Text Size</span>
            <button
              onClick={decreaseText}
              aria-label="Decrease text size"
              type="button"
              className="a11y-btn"
            >
              <ZoomOut size={18} aria-hidden="true" />
              <span>A-</span>
            </button>
            <span className="a11y-value">{Math.round(textScale * 100)}%</span>
            <button
              onClick={increaseText}
              aria-label="Increase text size"
              type="button"
              className="a11y-btn"
            >
              <ZoomIn size={18} aria-hidden="true" />
              <span>A+</span>
            </button>
          </div>

          <div className="a11y-control-group">
            <button
              onClick={() => setHighContrast(!highContrast)}
              aria-pressed={highContrast}
              type="button"
              className={`a11y-btn a11y-btn--toggle ${highContrast ? 'active' : ''}`}
            >
              <Eye size={18} aria-hidden="true" />
              <span>High Contrast</span>
            </button>
          </div>

          <div className="a11y-control-group">
            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              aria-pressed={reduceMotion}
              type="button"
              className={`a11y-btn a11y-btn--toggle ${reduceMotion ? 'active' : ''}`}
            >
              <MonitorOff size={18} aria-hidden="true" />
              <span>Reduce Motion</span>
            </button>
          </div>

          <div className="a11y-control-group">
            <button
              onClick={toggleMute}
              aria-pressed={isMuted}
              type="button"
              className={`a11y-btn a11y-btn--toggle ${isMuted ? 'active' : ''}`}
            >
              {isMuted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
              <span>{isMuted ? 'Unmute Audio' : 'Mute Audio'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
