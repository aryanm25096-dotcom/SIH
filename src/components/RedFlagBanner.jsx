import { AlertTriangle, BellRing, CheckSquare } from 'lucide-react';
import './RedFlagBanner.css';

/**
 * Red Flag Component — strictly follows constraints:
 * - Visually distinguished by layout, shape, and text (never color alone)
 * - Uses red ONLY for this critical state
 * - Plain language, no diagnosis
 * - Accessible aria-live region
 *
 * Can render as:
 * 1. Fullscreen / standalone alert in Step 2 Kiosk
 * 2. Persistent top banner in Step 5 Physician screen with Acknowledge button
 */
export default function RedFlagBanner({
  message,
  isDoctorView = false,
  onAcknowledge,
  acknowledged = false,
}) {
  if (isDoctorView) {
    if (acknowledged) return null;

    return (
      <div
        className="rf-doctor-banner"
        role="alert"
        aria-live="assertive"
      >
        <div className="rf-banner-content">
          <div className="rf-icon-wrapper">
            <AlertTriangle size={24} aria-hidden="true" />
          </div>
          <div className="rf-text-group">
            <span className="rf-badge-title">CRITICAL RED-FLAG ALERT</span>
            <p className="rf-message">{message}</p>
          </div>
        </div>
        <button
          type="button"
          className="rf-ack-btn"
          onClick={onAcknowledge}
          aria-label="Acknowledge critical red flag alert"
        >
          <CheckSquare size={18} aria-hidden="true" />
          <span>Acknowledge Priority Alert</span>
        </button>
      </div>
    );
  }

  // Kiosk Fullscreen / Highlight Alert View
  return (
    <div
      className="rf-kiosk-overlay"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="rf-title"
      aria-describedby="rf-desc"
    >
      <div className="rf-kiosk-box">
        <div className="rf-kiosk-header">
          <div className="rf-kiosk-icon">
            <BellRing size={36} aria-hidden="true" />
          </div>
          <h2 id="rf-title" className="rf-kiosk-heading">
            Immediate Priority Care Notice
          </h2>
          <span className="rf-kiosk-sublabel">
            TRIAGE ESCALATION: HEALTHCARE TEAM NOTIFIED
          </span>
        </div>

        <div className="rf-kiosk-body">
          <p id="rf-desc" className="rf-kiosk-text">
            {message}
          </p>
          <div className="rf-instruction-list">
            <div className="rf-instruction-item">
              <span className="rf-step-num">1</span>
              <span>Please remain seated at the intake kiosk or notify OPD desk staff.</span>
            </div>
            <div className="rf-instruction-item">
              <span className="rf-step-num">2</span>
              <span>Your assessment details have been pushed directly to the attending physician.</span>
            </div>
            <div className="rf-instruction-item">
              <span className="rf-step-num">3</span>
              <span>A nurse or physician will assist you directly.</span>
            </div>
          </div>
        </div>

        <div className="rf-kiosk-footer">
          <button
            type="button"
            className="rf-continue-btn"
            onClick={onAcknowledge}
          >
            <span>Proceed with Intake / Document Upload</span>
          </button>
        </div>
      </div>
    </div>
  );
}
