/**
 * MOCK SERVICES
 *
 * All functions in this file simulate backend/AI calls with artificial delays
 * and return canned responses. Each is clearly marked for replacement.
 *
 * Replace these with real API integrations:
 *   - mockSTT → real speech-to-text API (Google Cloud Speech, Azure, etc.)
 *   - mockOCR → real OCR service (Google Vision, Azure Form Recognizer, etc.)
 *   - mockAISummary → real LLM summarization endpoint
 *   - mockABHALookup → real ABDM/ABHA verification API
 */

import { mockTranscripts, mockOCRResults } from '../data/mockResponses.js';

let transcriptIndex = 0;

/**
 * MOCK: Simulates speech-to-text transcription.
 * Returns a canned transcript string after a delay.
 * @returns {Promise<string>}
 */
export function mockSTT() {
  return new Promise((resolve) => {
    const delay = 500 + Math.random() * 1000; // 500ms–1500ms
    setTimeout(() => {
      const transcript = mockTranscripts[transcriptIndex % mockTranscripts.length];
      transcriptIndex++;
      resolve(transcript);
    }, delay);
  });
}

/**
 * MOCK: Simulates OCR document extraction.
 * Returns a structured object with document type, date, and extracted fields.
 * @param {File} _file — unused in mock, kept for API signature
 * @returns {Promise<Object>}
 */
export function mockOCR(_file) {
  return new Promise((resolve) => {
    const delay = 800 + Math.random() * 700; // 800ms–1500ms
    const types = ['prescription', 'labReport', 'discharge'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    setTimeout(() => {
      resolve({
        id: `doc_${Date.now()}`,
        ...mockOCRResults[randomType],
        confirmed: false,
      });
    }, delay);
  });
}

/**
 * MOCK: Generates an AI-summarized structured history from collected answers.
 * In production, this would call an LLM with the raw answer data.
 * @param {Array} answers — array of { questionId, category, answer }
 * @returns {Promise<Object>}
 */
export function mockAISummary(answers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const history = {
        chiefComplaint: '',
        hpiNarrative: '',
        pastMedical: [],
        pastSurgical: [],
        drugHistory: [],
        allergies: [],
        familyHistory: [],
        personalHistory: {},
        reviewOfSystems: {},
        ayush: {},
      };

      for (const a of answers) {
        switch (a.category) {
          case 'chiefComplaint':
            history.chiefComplaint = a.answer;
            break;
          case 'hpiOnset':
          case 'hpiLocation':
          case 'hpiCharacter':
          case 'hpiRadiation':
          case 'hpiDuration':
          case 'hpiSeverity':
          case 'hpiAggravating':
          case 'hpiRelieving':
          case 'hpiAssociated':
            history.hpiNarrative += `${a.questionText}: ${a.answer}. `;
            break;
          case 'pastMedical':
            if (a.answer && a.answer.toLowerCase() !== 'no' && a.answer.toLowerCase() !== 'none') {
              history.pastMedical.push(a.answer);
            }
            break;
          case 'pastSurgical':
            if (a.answer && !a.answer.toLowerCase().startsWith('no')) {
              history.pastSurgical.push(a.answer);
            }
            break;
          case 'drugHistory':
            if (a.answer && a.answer.toLowerCase() !== 'no' && a.answer.toLowerCase() !== 'none') {
              history.drugHistory.push(a.answer);
            }
            break;
          case 'allergies':
            if (a.answer && a.answer.toLowerCase() !== 'no' && a.answer.toLowerCase() !== 'none') {
              history.allergies.push(a.answer);
            }
            break;
          case 'familyHistory':
            if (a.answer && a.answer.toLowerCase() !== 'no' && a.answer.toLowerCase() !== 'none') {
              history.familyHistory.push(a.answer);
            }
            break;
          case 'personalHistory':
            history.personalHistory[a.questionId] = a.answer;
            break;
          case 'reviewOfSystems':
            history.reviewOfSystems[a.questionId] = a.answer;
            break;
          case 'ayush':
            history.ayush[a.questionId] = {
              term: a.term || a.questionId,
              answer: a.answer,
            };
            break;
          default:
            break;
        }
      }

      resolve(history);
    }, 800);
  });
}

/**
 * MOCK: Simulates ABHA/Aadhaar ID verification lookup.
 * @param {string} _id — unused in mock
 * @returns {Promise<Object>}
 */
export function mockABHALookup(_id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        verified: true,
        name: 'Demo Patient',
        gender: 'Male',
        age: 45,
        abhaNumber: '91-1234-5678-9012',
      });
    }, 600);
  });
}
