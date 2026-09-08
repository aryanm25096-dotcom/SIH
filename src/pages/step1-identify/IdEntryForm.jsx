import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientSession, ActionTypes } from '../../context/PatientSessionContext.jsx';
import { useAutoNarration } from '../../hooks/useAutoNarration.js';
import { getLocalizedPrompt } from '../../utils/narrationPrompts.js';
import { useTranslation } from '../../hooks/useTranslation.js';
import { mockABHALookup } from '../../mocks/mockServices.js';
import { ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import './Step1.css';

export default function IdEntryForm() {
  const navigate = useNavigate();
  const { state, dispatch } = usePatientSession();
  const { t } = useTranslation();

  // Screen entry auto-narration
  const narrationText = getLocalizedPrompt('idEntryForm', state.language);
  useAutoNarration(narrationText);

  const [idInput, setIdInput] = useState('91-4521-8890-1234');
  const [nameInput, setNameInput] = useState('Ramesh Kumar');
  const [loading, setLoading] = useState(false);
  const [verifiedData, setVerifiedData] = useState(null);

  const isNewPatient = state.idMethod === 'new_patient';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await mockABHALookup(idInput);
      setVerifiedData(result);
      dispatch({
        type: ActionTypes.SET_PATIENT_ID,
        payload: {
          id: isNewPatient ? `REG-${Date.now().toString().slice(-4)}` : idInput,
          name: isNewPatient ? nameInput : result.name,
        },
      });

      setTimeout(() => {
        navigate('/identify/consent');
      }, 700);
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="step1-page" role="main">
      <div className="step-header">
          <button
          type="button"
          className="back-link-btn"
          onClick={() => navigate('/identify/method')}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span>{t('changeIdMethod')}</span>
        </button>
        <span className="step-indicator">{t('step1of5')}</span>
        <h1 className="step-title">
          {isNewPatient ? t('newPatientOpdTitle') : t('verifyIdentityTitle')}
        </h1>
        <p className="step-desc">
          {isNewPatient ? t('newPatientOpdDesc') : t('verifyIdentityDesc')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="id-entry-form">
        {isNewPatient ? (
          <div className="form-group">
            <label htmlFor="patientName" className="form-label">{t('fullName')}</label>
            <input
              id="patientName"
              type="text"
              className="form-input"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              required
            />
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="idInput" className="form-label">
              {state.idMethod === 'enter_abha' || state.idMethod === 'scan_abha'
                ? t('abhaNumber')
                : t('aadhaarUhid')}
            </label>
            <input
              id="idInput"
              type="text"
              className="form-input"
              value={idInput}
              onChange={(e) => setIdInput(e.target.value)}
              placeholder="e.g. 91-4521-8890-1234"
              required
            />
            <span className="form-help-text">
              {t('demoPresetLoaded')}
            </span>
          </div>
        )}

        {verifiedData && (
          <div className="verified-success-banner" role="status" aria-live="polite">
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>{t('verified')}: {verifiedData.name} (ABHA: {verifiedData.abhaNumber})</span>
          </div>
        )}

        <button
          type="submit"
          className="form-submit-btn"
          disabled={loading || (isNewPatient ? !nameInput.trim() : !idInput.trim())}
        >
          {loading ? (
            <>
              <Loader2 size={20} className="spin-icon" aria-hidden="true" />
              <span>{t('verifying')}</span>
            </>
          ) : (
            <span>{t('verifyAndContinue')}</span>
          )}
        </button>
      </form>
    </div>
  );
}
