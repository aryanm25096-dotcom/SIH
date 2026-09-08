import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientSession, ActionTypes } from '../../context/PatientSessionContext.jsx';
import { useAutoNarration } from '../../hooks/useAutoNarration.js';
import { getLocalizedPrompt } from '../../utils/narrationPrompts.js';
import { useTranslation } from '../../hooks/useTranslation.js';
import ConsentToggle from '../../components/ConsentToggle.jsx';
import { speakText } from '../../utils/speechApi.js';
import { ShieldCheck, Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import './Step1.css';

export default function Consent() {
  const navigate = useNavigate();
  const { state, dispatch } = usePatientSession();
  const { t } = useTranslation();

  // Screen entry auto-narration
  const narrationText = getLocalizedPrompt('consent', state.language);
  useAutoNarration(narrationText);

  const [toggles, setToggles] = useState({
    history: state.consents.history || true,
    documents: state.consents.documents || true,
    hospital: state.consents.hospital || true,
    abdm: state.consents.abdm || false,
  });

  const [isReadingOverview, setIsReadingOverview] = useState(false);

  // Both history and documents are required to proceed
  const canProceed = toggles.history && toggles.documents;

  const handleToggle = (key, val) => {
    setToggles((prev) => ({ ...prev, [key]: val }));
  };

  const handleReadOverview = () => {
    if (isReadingOverview) {
      window.speechSynthesis?.cancel();
      setIsReadingOverview(false);
      return;
    }

    const text = `Patient Privacy and Informed Consent. MediKiosk records your health symptoms, medical documents, and personal history exclusively to prepare an accurate clinical brief for your attending doctor. Your information is encrypted and protected under national digital health standards.`;

    speakText(
      text,
      state.language === 'hi' ? 'hi-IN' : 'en-IN',
      () => setIsReadingOverview(true),
      () => setIsReadingOverview(false)
    );
  };

  const handleAccept = () => {
    if (!canProceed) return;
    dispatch({
      type: ActionTypes.SET_CONSENTS,
      payload: toggles,
    });
    navigate('/converse/type');
  };

  const handleNotNow = () => {
    navigate('/identify');
  };

  return (
    <div className="step1-page" role="main">
      <div className="step-header">
        <button
          type="button"
          className="back-link-btn"
          onClick={() => navigate('/identify/form')}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span>{t('backToIdentification')}</span>
        </button>
        <span className="step-indicator">{t('step1of5')}</span>
        <h1 className="step-title">{t('consentHeading')}</h1>
        <p className="step-desc">{t('consentSubheading')}</p>
      </div>

      <div className="consent-overview-card">
        <div className="overview-icon-title">
          <ShieldCheck size={28} className="shield-icon" aria-hidden="true" />
          <div>
            <h2 className="overview-title">{t('consentOverviewTitle')}</h2>
            <p className="overview-sub">{t('consentOverviewBadge')}</p>
          </div>
        </div>
        <p className="overview-body">
          {t('consentOverviewBody')}
        </p>
        <button
          type="button"
          className="read-overview-btn"
          onClick={handleReadOverview}
        >
          {isReadingOverview ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
          <span>{isReadingOverview ? t('stopReading') : t('listenConsent')}</span>
        </button>
      </div>

      <div className="consent-toggle-list" role="group" aria-label="Consent permissions">
        <ConsentToggle
          id="consent-history"
          title={t('consentHistory')}
          description={t('consentHistoryDesc')}
          checked={toggles.history}
          onChange={(val) => handleToggle('history', val)}
          required
          lang={state.language === 'hi' ? 'hi-IN' : 'en-IN'}
        />

        <ConsentToggle
          id="consent-documents"
          title={t('consentDocuments')}
          description={t('consentDocumentsDesc')}
          checked={toggles.documents}
          onChange={(val) => handleToggle('documents', val)}
          required
          lang={state.language === 'hi' ? 'hi-IN' : 'en-IN'}
        />

        <ConsentToggle
          id="consent-hospital"
          title={t('consentHospital')}
          description={t('consentHospitalDesc')}
          checked={toggles.hospital}
          onChange={(val) => handleToggle('hospital', val)}
          lang={state.language === 'hi' ? 'hi-IN' : 'en-IN'}
        />

        <ConsentToggle
          id="consent-abdm"
          title={t('consentAbdm')}
          description={t('consentAbdmDesc')}
          checked={toggles.abdm}
          onChange={(val) => handleToggle('abdm', val)}
          lang={state.language === 'hi' ? 'hi-IN' : 'en-IN'}
        />
      </div>

      <div className="consent-actions-row">
        <button type="button" className="btn-secondary" onClick={handleNotNow}>
          {t('notNow')}
        </button>

        <button
          type="button"
          className="btn-primary"
          onClick={handleAccept}
          disabled={!canProceed}
          title={!canProceed ? 'Required consent toggles must be enabled to proceed' : ''}
        >
          {t('acceptAndStart')}
        </button>
      </div>
    </div>
  );
}
