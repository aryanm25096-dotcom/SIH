import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientSession, ActionTypes } from '../../context/PatientSessionContext.jsx';
import { useAutoNarration } from '../../hooks/useAutoNarration.js';
import { getLocalizedPrompt } from '../../utils/narrationPrompts.js';
import { mockOCR } from '../../mocks/mockServices.js';
import DocumentCard from '../../components/DocumentCard.jsx';
import { Camera, Upload, CheckCircle2, ArrowRight, Loader2, FileX } from 'lucide-react';
import './Step3.css';

export default function DocumentScan() {
  const navigate = useNavigate();
  const { state, dispatch } = usePatientSession();

  // Screen entry auto-narration
  const narrationText = getLocalizedPrompt('scanDocs', state.language);
  useAutoNarration(narrationText);

  const fileInputRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeDoc, setActiveDoc] = useState(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      const extractedDoc = await mockOCR(file);
      setActiveDoc(extractedDoc);
      dispatch({
        type: ActionTypes.ADD_DOCUMENT,
        payload: extractedDoc,
      });
    } catch {
      // Error handling
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSimulateCamera = async () => {
    setIsProcessing(true);
    try {
      const fakeFile = new File(['mock content'], 'kiosk_camera_capture.jpg', { type: 'image/jpeg' });
      const extractedDoc = await mockOCR(fakeFile);
      setActiveDoc(extractedDoc);
      dispatch({
        type: ActionTypes.ADD_DOCUMENT,
        payload: extractedDoc,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConfirmDoc = (docId) => {
    dispatch({
      type: ActionTypes.CONFIRM_DOCUMENT,
      payload: docId,
    });
    if (activeDoc?.id === docId) {
      setActiveDoc(null);
    }
  };

  const handleRescanDoc = (docId) => {
    dispatch({
      type: ActionTypes.REMOVE_DOCUMENT,
      payload: docId,
    });
    setActiveDoc(null);
  };

  const handleContinue = () => {
    navigate('/summary');
  };

  const confirmedCount = state.documents.filter((d) => d.confirmed).length;

  return (
    <div className="step3-page" role="main">
      <div className="step-header">
        <span className="step-indicator">Step 3 of 5 — Medical Document Digitization</span>
        <h1 className="step-title">Scan or Upload Medical Documents</h1>
        <p className="step-desc">
          Upload physical prescriptions, lab test reports, or discharge summaries for AI OCR digitization.
        </p>
      </div>

      {/* Hidden file input for real file uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*,.pdf"
        className="sr-only"
        id="doc-file-input"
        aria-label="Upload prescription or medical document file"
      />

      {/* Action Zone */}
      <div className="scan-dropzone-frame">
        <div className="corner-bracket corner-top-left" aria-hidden="true" />
        <div className="corner-bracket corner-top-right" aria-hidden="true" />
        <div className="corner-bracket corner-bottom-left" aria-hidden="true" />
        <div className="corner-bracket corner-bottom-right" aria-hidden="true" />

        {isProcessing ? (
          <div className="ocr-processing-box" role="status" aria-live="polite">
            <Loader2 size={48} className="spin-icon" aria-hidden="true" />
            <h2 className="ocr-processing-title">Running Optical Character Recognition (OCR)...</h2>
            <p className="ocr-processing-sub">
              Extracting medication names, dosage timings, reference ranges, and physician notes.
            </p>
          </div>
        ) : (
          <div className="scan-options-container">
            <div className="scan-prompt-text">
              Place document in the kiosk tray or upload an image/PDF
            </div>

            <div className="scan-buttons-row">
              <button
                type="button"
                className="scan-action-btn scan-action-btn--camera"
                onClick={handleSimulateCamera}
              >
                <Camera size={24} aria-hidden="true" />
                <span>Kiosk Camera Scan</span>
              </button>

              <button
                type="button"
                className="scan-action-btn scan-action-btn--upload"
                onClick={handleTriggerUpload}
              >
                <Upload size={24} aria-hidden="true" />
                <span>Upload File (PDF / Image)</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Extracted Active Document Preview */}
      {activeDoc && !activeDoc.confirmed && (
        <div className="active-extracted-section" aria-live="polite">
          <h2 className="section-subtitle">Verify Extracted Data</h2>
          <DocumentCard
            doc={activeDoc}
            onConfirm={handleConfirmDoc}
            onRescan={handleRescanDoc}
          />
        </div>
      )}

      {/* Confirmed Documents List */}
      {confirmedCount > 0 && (
        <div className="confirmed-docs-section">
          <div className="confirmed-docs-header">
            <CheckCircle2 size={20} className="check-icon" aria-hidden="true" />
            <h2 className="section-subtitle">
              Digitized Documents ({confirmedCount})
            </h2>
          </div>
          <div className="confirmed-docs-grid">
            {state.documents
              .filter((d) => d.confirmed)
              .map((doc) => (
                <DocumentCard
                  key={doc.id}
                  doc={doc}
                  isDoctorView={false}
                />
              ))}
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="scan-footer-row">
        <button
          type="button"
          className="skip-docs-btn"
          onClick={handleContinue}
        >
          <FileX size={18} aria-hidden="true" />
          <span>I don&apos;t have documents</span>
        </button>

        <button
          type="button"
          className="btn-primary"
          onClick={handleContinue}
        >
          <span>Continue to Review &amp; Route</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
