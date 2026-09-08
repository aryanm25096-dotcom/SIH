import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/Users/aryanmudgal/.gemini/antigravity-ide/brain/a38b31e8-fdc9-4bbb-aba6-929e2c224279/screenshots';
const LOCAL_DIR = '/Users/aryanmudgal/Desktop/SIH/screenshots';

[ARTIFACT_DIR, LOCAL_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function saveScreenshot(page, filename, description) {
  const artifactPath = path.join(ARTIFACT_DIR, filename);
  const localPath = path.join(LOCAL_DIR, filename);

  await page.screenshot({ path: artifactPath, fullPage: false });
  fs.copyFileSync(artifactPath, localPath);
  console.log(`[Captured] ${filename} - ${description}`);
}

async function run() {
  console.log('Launching browser to capture MediKiosk screens...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,920'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 920, deviceScaleFactor: 2 });

  try {
    // 1. Step 1: Language Selection
    await page.goto('http://localhost:8081/identify', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '01_step1_language_selection.png', 'Step 1: Language Selection (11 Indian Languages + English)');

    // 2. Select Hindi to demonstrate IndicF5 flow
    const hindiCard = await page.$('button.lang-card-btn:nth-child(1)');
    if (hindiCard) {
      await hindiCard.click();
    } else {
      await page.goto('http://localhost:8081/identify/method', { waitUntil: 'networkidle0' });
    }
    await new Promise((r) => setTimeout(r, 800));
    await saveScreenshot(page, '02_step1_identify_method.png', 'Step 1: Patient Identification Methods (ABHA, Aadhaar, New Patient)');

    // 3. ID Entry Form
    await page.goto('http://localhost:8081/identify/form', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '03_step1_id_verification_form.png', 'Step 1: ID Verification Form with Demo Preset');

    // Click verify to show verified state
    const verifyBtn = await page.$('button.form-submit-btn');
    if (verifyBtn) {
      await verifyBtn.click();
      await new Promise((r) => setTimeout(r, 1000));
    }

    // 4. Informed Consent
    await page.goto('http://localhost:8081/identify/consent', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '04_step1_informed_consent.png', 'Step 1: Granular Informed Consent Clauses with Audio Playback');

    // 5. Step 2: Consultation Stream Choice
    await page.goto('http://localhost:8081/converse/type', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '05_step2_consultation_stream.png', 'Step 2: Consultation Stream (General Medicine vs AYUSH Ayurveda)');

    // 6. Step 2: General Medicine Adaptive Interview
    await page.goto('http://localhost:8081/converse/interview', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '06_step2_interview_chief_complaint.png', 'Step 2: Adaptive Question Card with Voice Waveform and Choice Buttons');

    // Answer chief complaint with "chest pain" to trigger SOCRATES branching
    const freeInput = await page.$('textarea#free-answer');
    if (freeInput) {
      await freeInput.type('chest pain');
      const submitBtn = await page.$('button.submit-btn');
      if (submitBtn) {
        await submitBtn.click();
        await new Promise((r) => setTimeout(r, 600));
      }
    }
    await saveScreenshot(page, '07_step2_socrates_branching.png', 'Step 2: SOCRATES Pain Assessment Branching');

    // Answer with difficulty breathing to trigger RED-FLAG triage
    // Click through SOCRATES to associated symptoms or trigger red flag
    await page.evaluate(() => {
      // Simulate red flag trigger in state for screenshot
      const stored = localStorage.getItem('medikiosk_session');
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.redFlag = {
          triggered: true,
          ruleId: 'rf_chest_pain_breathing',
          message: 'Your combination of symptoms needs immediate medical attention. A healthcare provider has been alerted and will see you as a priority.',
          acknowledgedByDoctor: false,
        };
        localStorage.setItem('medikiosk_session', JSON.stringify(parsed));
      }
    });
    await page.reload({ waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '08_step2_red_flag_emergency_alert.png', 'Step 2: Critical Red-Flag Emergency Triage Overlay');

    // 7. Step 3: Document Scan Dropzone
    await page.goto('http://localhost:8081/scan', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '09_step3_document_scan_dropzone.png', 'Step 3: Document Scan Camera Frame and File Dropzone');

    // Click camera scan to simulate OCR
    const cameraBtn = await page.$('button.scan-action-btn--camera');
    if (cameraBtn) {
      await cameraBtn.click();
      await new Promise((r) => setTimeout(r, 1800)); // wait for mock OCR
    }
    await saveScreenshot(page, '10_step3_ocr_extracted_document.png', 'Step 3: OCR Extracted Fields with Abnormal Lab Value Alert');

    // Confirm document
    const confirmDocBtn = await page.$('button.doc-btn--confirm');
    if (confirmDocBtn) {
      await confirmDocBtn.click();
      await new Promise((r) => setTimeout(r, 600));
    }

    // 8. Step 4: Summary Review
    await page.goto('http://localhost:8081/summary', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '11_step4_summary_review.png', 'Step 4: Accumulated Clinical Summary & Digitized Records Readback');

    // Click confirm to show routed OPD token
    const confirmRouteBtn = await page.$('button.summary-actions-bar .btn-primary');
    if (confirmRouteBtn) {
      await confirmRouteBtn.click();
      await new Promise((r) => setTimeout(r, 800));
    }
    await saveScreenshot(page, '12_step4_routed_opd_token.png', 'Step 4: OPD Token & Transmission Success Confirmation');

    // 9. Step 5: Physician Consult Workspace
    await page.goto('http://localhost:8081/consult', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 800));
    await saveScreenshot(page, '13_step5_physician_consult.png', 'Step 5: Physician Clinical Workspace with 8 Structured Sections and Red-Flag Alert');

    // 10. High-Contrast WCAG AAA Mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'high-contrast');
      document.documentElement.style.setProperty('--text-scale', '1.25');
    });
    await new Promise((r) => setTimeout(r, 600));
    await saveScreenshot(page, '14_accessibility_high_contrast_theme.png', 'Accessibility: High-Contrast AAA Mode & Scaled Typography');

    console.log('All 14 screens successfully captured!');
  } catch (err) {
    console.error('Error capturing screens:', err);
  } finally {
    await browser.close();
  }
}

run();
