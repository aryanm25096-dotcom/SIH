/**
 * General Medicine Question Bank
 *
 * Each question: { id, category, text, type, choices?, branchOn?, next? }
 * - type: 'free' (open text/voice) | 'choice' (touch buttons)
 * - branchOn: object mapping answer keywords to next question IDs
 * - next: default next question ID (if no branch match)
 *
 * Categories map to structured history sections:
 *   chiefComplaint, hpiOnset, hpiLocation, hpiCharacter, hpiRadiation,
 *   hpiDuration, hpiSeverity, hpiAggravating, hpiRelieving, hpiAssociated,
 *   pastMedical, pastSurgical, drugHistory, allergies, familyHistory,
 *   personalHistory, reviewOfSystems
 */

export const generalQuestions = [
  // ── Chief Complaint ──
  {
    id: 'cc1',
    category: 'chiefComplaint',
    text: 'What is your main health concern today?',
    type: 'free',
    next: 'hpi_onset',
    branchOn: {
      'chest pain': 'socrates_onset',
      'chest': 'socrates_onset',
      'headache': 'socrates_onset',
      'pain': 'socrates_onset',
      'abdominal pain': 'socrates_onset',
      'stomach pain': 'socrates_onset',
      // Indic language keywords for pain triage
      'दर्द': 'socrates_onset',
      'सीने': 'socrates_onset',
      'छाती': 'socrates_onset',
      'सिरदर्द': 'socrates_onset',
      'पेट': 'socrates_onset',
      'वेदना': 'socrates_onset',
      'व्यथा': 'socrates_onset',
      'বুক': 'socrates_onset',
      'வலி': 'socrates_onset',
      'నొప్పి': 'socrates_onset',
      'દુખાવો': 'socrates_onset',
    },
  },

  // ── Generic HPI (non-pain) ──
  {
    id: 'hpi_onset',
    category: 'hpiOnset',
    text: 'When did this problem start?',
    type: 'choice',
    choices: ['Today', 'A few days ago', 'About a week ago', 'More than a month ago', 'Other'],
    next: 'hpi_severity_generic',
  },
  {
    id: 'hpi_severity_generic',
    category: 'hpiSeverity',
    text: 'How severe is the problem on a scale of 1 to 10?',
    type: 'choice',
    choices: ['1-3 (Mild)', '4-6 (Moderate)', '7-9 (Severe)', '10 (Worst possible)'],
    next: 'hpi_associated_generic',
  },
  {
    id: 'hpi_associated_generic',
    category: 'hpiAssociated',
    text: 'Do you have any other symptoms along with this? (e.g., fever, nausea, weakness)',
    type: 'free',
    next: 'pmh1',
  },

  // ── SOCRATES Pain Assessment ──
  {
    id: 'socrates_onset',
    category: 'hpiOnset',
    text: 'When did the pain start?',
    type: 'choice',
    choices: ['Sudden onset', 'Gradual onset', 'Today', 'A few days ago', 'More than a week ago'],
    next: 'socrates_location',
  },
  {
    id: 'socrates_location',
    category: 'hpiLocation',
    text: 'Where exactly is the pain located?',
    type: 'free',
    next: 'socrates_character',
  },
  {
    id: 'socrates_character',
    category: 'hpiCharacter',
    text: 'How would you describe the pain?',
    type: 'choice',
    choices: ['Sharp/Stabbing', 'Dull/Aching', 'Burning', 'Cramping', 'Pressure/Tightness', 'Throbbing'],
    next: 'socrates_radiation',
  },
  {
    id: 'socrates_radiation',
    category: 'hpiRadiation',
    text: 'Does the pain spread to any other part of your body?',
    type: 'choice',
    choices: ['No', 'Left arm or shoulder', 'Jaw or neck', 'Back', 'Other area'],
    next: 'socrates_duration',
  },
  {
    id: 'socrates_duration',
    category: 'hpiDuration',
    text: 'How long does each episode of pain last?',
    type: 'choice',
    choices: ['Seconds', 'Minutes', 'Hours', 'Constant / does not stop'],
    next: 'socrates_severity',
  },
  {
    id: 'socrates_severity',
    category: 'hpiSeverity',
    text: 'On a scale of 1 to 10, how severe is the pain?',
    type: 'choice',
    choices: ['1-3 (Mild)', '4-6 (Moderate)', '7-9 (Severe)', '10 (Worst possible)'],
    next: 'socrates_aggravating',
  },
  {
    id: 'socrates_aggravating',
    category: 'hpiAggravating',
    text: 'What makes the pain worse?',
    type: 'choice',
    choices: ['Physical exertion', 'Eating or drinking', 'Lying down', 'Deep breathing', 'Nothing specific', 'Other'],
    next: 'socrates_relieving',
  },
  {
    id: 'socrates_relieving',
    category: 'hpiRelieving',
    text: 'What makes the pain better?',
    type: 'choice',
    choices: ['Rest', 'Medication', 'Change of position', 'Nothing helps', 'Other'],
    next: 'socrates_associated',
  },
  {
    id: 'socrates_associated',
    category: 'hpiAssociated',
    text: 'Do you have any of these symptoms along with the pain?',
    type: 'choice',
    choices: [
      'Difficulty breathing',
      'Nausea or vomiting',
      'Sweating',
      'Dizziness',
      'Fever',
      'None of these',
    ],
    next: 'pmh1',
  },

  // ── Past Medical History ──
  {
    id: 'pmh1',
    category: 'pastMedical',
    text: 'Do you have any ongoing medical conditions? (e.g., diabetes, hypertension, asthma)',
    type: 'free',
    next: 'psh1',
  },

  // ── Past Surgical History ──
  {
    id: 'psh1',
    category: 'pastSurgical',
    text: 'Have you had any surgeries in the past?',
    type: 'choice',
    choices: ['No', 'Yes — I will describe'],
    branchOn: {
      'Yes': 'psh2',
      'yes': 'psh2',
      'हाँ': 'psh2',
      'हां': 'psh2',
      'हो': 'psh2',
      'হ্যাঁ': 'psh2',
      'ஆம்': 'psh2',
      'అవును': 'psh2',
      'હા': 'psh2',
    },
    next: 'drug1',
  },
  {
    id: 'psh2',
    category: 'pastSurgical',
    text: 'Please describe any past surgeries (type, approximate year).',
    type: 'free',
    next: 'drug1',
  },

  // ── Drug History ──
  {
    id: 'drug1',
    category: 'drugHistory',
    text: 'Are you currently taking any medications? If yes, please list them.',
    type: 'free',
    next: 'allergy1',
  },

  // ── Allergies ──
  {
    id: 'allergy1',
    category: 'allergies',
    text: 'Do you have any known allergies to medications, food, or other substances?',
    type: 'free',
    next: 'fhx1',
  },

  // ── Family History ──
  {
    id: 'fhx1',
    category: 'familyHistory',
    text: 'Do any of your close family members (parents, siblings) have any major medical conditions?',
    type: 'free',
    next: 'phx1',
  },

  // ── Personal History ──
  {
    id: 'phx1',
    category: 'personalHistory',
    text: 'Do you smoke, consume alcohol, or use tobacco in any form?',
    type: 'choice',
    choices: ['None', 'Smoking', 'Alcohol', 'Tobacco (chewing)', 'Multiple — I will describe'],
    next: 'phx2',
  },
  {
    id: 'phx2',
    category: 'personalHistory',
    text: 'How would you describe your diet and sleep pattern?',
    type: 'free',
    next: 'ros1',
  },

  // ── Review of Systems ──
  {
    id: 'ros1',
    category: 'reviewOfSystems',
    text: 'In the last few weeks, have you experienced any of these?',
    type: 'choice',
    choices: [
      'Unexplained weight loss',
      'Persistent fatigue',
      'Fever or night sweats',
      'Changes in appetite',
      'None of the above',
    ],
    next: null, // End of questionnaire
  },
];

/**
 * Returns the total number of unique questions a patient might encounter
 * (used for progress calculation — counts unique IDs).
 */
export function getQuestionCount(questions) {
  return questions.length;
}

/**
 * Finds the next question based on the current answer.
 * Uses branchOn keyword matching first, then falls back to next.
 */
export function getNextQuestion(currentQuestion, answer, allQuestions) {
  if (currentQuestion.branchOn && answer) {
    const lowerAnswer = answer.toLowerCase();
    for (const [keyword, nextId] of Object.entries(currentQuestion.branchOn)) {
      if (lowerAnswer.includes(keyword.toLowerCase())) {
        return allQuestions.find((q) => q.id === nextId) || null;
      }
    }
  }
  if (currentQuestion.next) {
    return allQuestions.find((q) => q.id === currentQuestion.next) || null;
  }
  return null;
}
