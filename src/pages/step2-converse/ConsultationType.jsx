import { useNavigate } from 'react-router-dom';
import { usePatientSession, ActionTypes } from '../../context/PatientSessionContext.jsx';
import { useAutoNarration } from '../../hooks/useAutoNarration.js';
import { useTranslation } from '../../hooks/useTranslation.js';
import { getLocalizedPrompt } from '../../utils/narrationPrompts.js';
import { Stethoscope, Sparkles } from 'lucide-react';
import './Step2.css';

export default function ConsultationType() {
  const navigate = useNavigate();
  const { state, dispatch } = usePatientSession();
  const { t, lang } = useTranslation();

  // Screen entry auto-narration
  const narrationText = getLocalizedPrompt('consultationType', state.language);
  useAutoNarration(narrationText);

  const handleSelect = (type) => {
    dispatch({ type: ActionTypes.SET_CONSULTATION_TYPE, payload: type });
    navigate('/converse/interview');
  };

  const isHindi = lang === 'hi';

  return (
    <div className="step2-page" role="main">
      <div className="step-header">
        <span className="step-indicator">
          {isHindi ? 'चरण 2 / 5 — क्लिनिकल इतिहास इनटेक' : 'Step 2 of 5 — Clinical History Intake'}
        </span>
        <h1 className="step-title">
          {isHindi ? 'परामर्श विभाग चुनें' : 'Select Consultation Stream'}
        </h1>
        <p className="step-desc">
          {isHindi
            ? 'आज अपने बाह्य रोगी परामर्श के लिए उपयुक्त क्लिनिकल विभाग चुनें।'
            : 'Choose the clinical department for your outpatient consultation today.'}
        </p>
      </div>

      <div className="stream-grid" role="group" aria-label="Consultation stream options">
        <button
          type="button"
          className="stream-card stream-card--modern"
          onClick={() => handleSelect('general')}
        >
          <div className="stream-icon-badge">
            <Stethoscope size={36} aria-hidden="true" />
          </div>
          <div className="stream-details">
            <span className="stream-tag">{isHindi ? 'मानक OPD' : 'Standard OPD'}</span>
            <h2 className="stream-heading">
              {isHindi ? 'सामान्य एवं आधुनिक चिकित्सा' : 'General & Modern Medicine'}
            </h2>
            <p className="stream-text">
              {isHindi
                ? 'लक्षण समयरेखा, पूर्व सर्जरी पृष्ठभूमि, दवा समीक्षा और आपातकालीन ट्राइएज।'
                : 'Evidence-based clinical history taking, symptom timeline, past surgical background, medication review, and red-flag triage.'}
            </p>
          </div>
        </button>

        <button
          type="button"
          className="stream-card stream-card--ayush"
          onClick={() => handleSelect('ayush')}
        >
          <div className="stream-icon-badge">
            <Sparkles size={36} aria-hidden="true" />
          </div>
          <div className="stream-details">
            <span className="stream-tag stream-tag--ayush">
              {isHindi ? 'पारंपरिक स्वास्थ्य सेवा' : 'Traditional Healthcare'}
            </span>
            <h2 className="stream-heading">
              {isHindi ? 'आयुष एवं आयुर्वेद विभाग' : 'AYUSH & Ayurveda Stream'}
            </h2>
            <p className="stream-text">
              {isHindi
                ? 'समग्र दशविध परीक्षा, प्रकृति/विकृति मूल्यांकन, आहार एवं जीवनशैली परीक्षण।'
                : 'Holistic Dashavidha Pariksha (10-fold examination), Prakriti/Vikriti constitution assessment, Ahara (dietary) and Vihara (lifestyle) evaluation.'}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
