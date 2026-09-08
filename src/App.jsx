import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import AccessibilityControls from './components/AccessibilityControls.jsx';
import LandingPage from './pages/landing/LandingPage.jsx';
import LanguageSelect from './pages/step1-identify/LanguageSelect.jsx';
import IdentifyMethod from './pages/step1-identify/IdentifyMethod.jsx';
import IdEntryForm from './pages/step1-identify/IdEntryForm.jsx';
import Consent from './pages/step1-identify/Consent.jsx';
import ConsultationType from './pages/step2-converse/ConsultationType.jsx';
import Interview from './pages/step2-converse/Interview.jsx';
import DocumentScan from './pages/step3-scan/DocumentScan.jsx';
import SummaryReview from './pages/step4-summary/SummaryReview.jsx';
import PhysicianConsult from './pages/step5-consult/PhysicianConsult.jsx';
import NarrationBanner from './components/NarrationBanner.jsx';
import { Stethoscope, Activity } from 'lucide-react';
import './App.css';

export default function App() {
  const location = useLocation();
  const isDoctorView = location.pathname.startsWith('/consult');
  // Hide global header on landing page and language-select (both have their own self-contained headers)
  const isLanding = location.pathname === '/';
  const isLanguageSelect = location.pathname === '/identify';
  const hideGlobalHeader = isLanding || isLanguageSelect;

  return (
    <div className="app-shell">
      {/* Top Header / Demo Ribbon: Only shown on non-kiosk screens */}
      {!hideGlobalHeader && (
        <>
          <header className="global-header">
            <div className="header-inner">
              <Link to="/identify" className="brand-logo" aria-label="MediKiosk Home">
                <div className="brand-icon">
                  <Activity size={24} aria-hidden="true" />
                </div>
                <div className="brand-text-block">
                  <span className="brand-name">MediKiosk</span>
                  <span className="brand-tagline">AI Clinical Intake &amp; OPD Digitization</span>
                </div>
              </Link>

              <nav className="header-nav" aria-label="Main workflow navigation">
                <span className="prototype-demo-badge">Smart India Hackathon Prototype</span>
                <Link
                  to="/consult"
                  className={`doctor-switch-link ${isDoctorView ? 'active' : ''}`}
                >
                  <Stethoscope size={16} aria-hidden="true" />
                  <span>Step 5 (Physician Screen)</span>
                </Link>
              </nav>
            </div>
          </header>

          {/* Screen Entry Auto-Narration Bar with Waveform & Controls */}
          <NarrationBanner />
        </>
      )}

      {/* Main Flow Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Step 1: Identify */}
          <Route path="/identify" element={<LanguageSelect />} />
          <Route path="/identify/method" element={<IdentifyMethod />} />
          <Route path="/identify/form" element={<IdEntryForm />} />
          <Route path="/identify/consent" element={<Consent />} />

          {/* Step 2: Converse */}
          <Route path="/converse/type" element={<ConsultationType />} />
          <Route path="/converse/interview" element={<Interview />} />

          {/* Step 3: Scan */}
          <Route path="/scan" element={<DocumentScan />} />

          {/* Step 4: Summarize & Route */}
          <Route path="/summary" element={<SummaryReview />} />

          {/* Step 5: Consult (Physician Screen) */}
          <Route path="/consult" element={<PhysicianConsult />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/identify" replace />} />
        </Routes>
      </main>

      {/* Persistent Accessibility Suite */}
      <AccessibilityControls />
    </div>
  );
}
