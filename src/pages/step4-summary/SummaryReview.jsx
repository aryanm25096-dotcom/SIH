import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientSession, ActionTypes } from '../../context/PatientSessionContext.jsx';
import { useAutoNarration } from '../../hooks/useAutoNarration.js';
import { getLocalizedPrompt } from '../../utils/narrationPrompts.js';
import SummarySection from '../../components/SummarySection.jsx';
import DocumentCard from '../../components/DocumentCard.jsx';
import { CheckCircle2, RotateCcw, ArrowRight, UserCheck, Shield, ExternalLink } from 'lucide-react';
import './Step4.css';

export default function SummaryReview() {
  const navigate = useNavigate();
  const { state, dispatch } = usePatientSession();

  // Screen entry auto-narration
  const narrationText = getLocalizedPrompt('summaryReview', state.language);
  useAutoNarration(narrationText);

  const [confirmedSuccess, setConfirmedSuccess] = useState(false);

  const history = state.structuredHistory || {};
  const isAyush = state.consultationType === 'ayush';

  const handleConfirmAndRoute = () => {
    dispatch({ type: ActionTypes.CONFIRM_SUMMARY });
    setConfirmedSuccess(true);
  };

  const handleGoBackToConverse = () => {
    navigate('/converse/interview');
  };

  const handleGoBackToScan = () => {
    navigate('/scan');
  };

  const handleOpenPhysicianScreen = () => {
    navigate('/consult');
  };

  if (confirmedSuccess) {
    return (
      <div className="step4-page" role="main">
        <div className="success-route-card" role="status" aria-live="polite">
          <div className="success-check-circle">
            <CheckCircle2 size={48} aria-hidden="true" />
          </div>
          <h1 className="success-title">Intake Verified &amp; Routed Successfully!</h1>
          <p className="success-desc">
            Your clinical history summary and digitized documents have been encrypted and transmitted to the outpatient consulting room queue.
          </p>

          <div className="queue-token-box">
            <span className="token-label">OPD Session Token</span>
            <span className="token-value">TOKEN-MK-{state.patientId ? state.patientId.slice(-4) : '1042'}</span>
            <span className="token-sub">Patient: {state.patientName || 'Verified Citizen'}</span>
          </div>

          <div className="physician-route-box">
            <h2 className="route-heading">Physician Workspace Ready</h2>
            <p className="route-text">
              The attending OPD doctor can now review this AI-structured intake draft with your clinical history and lab documents.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={handleOpenPhysicianScreen}
            >
              <span>Open Step 5 — Physician Consult Screen</span>
              <ExternalLink size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="step4-page" role="main">
      <div className="step-header">
        <span className="step-indicator">Step 4 of 5 — Review &amp; Route</span>
        <h1 className="step-title">Review Your Health Intake Summary</h1>
        <p className="step-desc">
          Verify that everything captured during your interview and document scan is accurate before routing to the physician.
        </p>
      </div>

      {/* Patient identity bar */}
      <div className="patient-banner">
        <div className="patient-meta-item">
          <UserCheck size={20} className="meta-icon" aria-hidden="true" />
          <div>
            <span className="meta-label">Patient ID / Name</span>
            <span className="meta-value">{state.patientName || 'Patient'} ({state.patientId || 'N/A'})</span>
          </div>
        </div>
        <div className="patient-meta-item">
          <Shield size={20} className="meta-icon" aria-hidden="true" />
          <div>
            <span className="meta-label">Consultation Stream</span>
            <span className="meta-value">
              {isAyush ? 'AYUSH Ayurvedic Stream' : 'General & Modern Medicine'}
            </span>
          </div>
        </div>
      </div>

      {/* Structured history sections */}
      <div className="summary-sections-grid">
        <SummarySection
          title="1. Chief Complaint"
          content={history.chiefComplaint || 'Not specified'}
          sectionKey="chiefComplaint"
          isDoctorView={false}
        />

        <SummarySection
          title="2. History of Present Illness (HPI)"
          content={history.hpiNarrative || 'No specific timeline recorded.'}
          sectionKey="hpiNarrative"
          isDoctorView={false}
        />

        {isAyush && (
          <SummarySection
            title="3. Ayurvedic Dashavidha Pariksha &amp; Ahara/Vihara"
            content={history.ayush}
            sectionKey="ayush"
            isDoctorView={false}
          />
        )}

        <SummarySection
          title={isAyush ? '4. Past Medical History' : '3. Past Medical & Surgical History'}
          content={[
            ...(history.pastMedical || []),
            ...(history.pastSurgical ? history.pastSurgical.map((s) => `Surgery: ${s}`) : []),
          ]}
          sectionKey="pastMedical"
          isDoctorView={false}
        />

        <SummarySection
          title={isAyush ? '5. Drug & Allergy History' : '4. Drug & Allergy History'}
          content={[
            ...(history.drugHistory ? history.drugHistory.map((d) => `Medication: ${d}`) : []),
            ...(history.allergies ? history.allergies.map((a) => `Allergy: ${a}`) : []),
          ]}
          sectionKey="drugHistory"
          isDoctorView={false}
        />

        <SummarySection
          title={isAyush ? '6. Family & Personal History' : '5. Family & Personal History'}
          content={history.personalHistory}
          sectionKey="personalHistory"
          isDoctorView={false}
        />

        <SummarySection
          title={isAyush ? '7. Review of Systems' : '6. Review of Systems'}
          content={history.reviewOfSystems}
          sectionKey="reviewOfSystems"
          isDoctorView={false}
        />
      </div>

      {/* Uploaded / Digitized documents */}
      <div className="summary-docs-section">
        <h2 className="section-subtitle">
          Digitized Medical Documents ({state.documents.length})
        </h2>
        {state.documents.length === 0 ? (
          <p className="no-docs-text">No documents uploaded for this session.</p>
        ) : (
          <div className="summary-docs-grid">
            {state.documents.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} isDoctorView />
            ))}
          </div>
        )}
      </div>

      {/* Review Actions */}
      <div className="summary-actions-bar">
        <div className="modify-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleGoBackToConverse}
          >
            <RotateCcw size={16} aria-hidden="true" />
            <span>Add / Edit Symptoms (Step 2)</span>
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={handleGoBackToScan}
          >
            <RotateCcw size={16} aria-hidden="true" />
            <span>Add Documents (Step 3)</span>
          </button>
        </div>

        <button
          type="button"
          className="btn-primary"
          onClick={handleConfirmAndRoute}
        >
          <span>Confirm &amp; Route to OPD Physician</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
