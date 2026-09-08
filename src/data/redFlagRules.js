/**
 * Red-Flag Detection Rules
 *
 * Each rule defines a set of conditions that, when ALL matched,
 * trigger an immediate red-flag alert.
 *
 * conditions: array of { field, contains } objects
 *   - field: the category in structuredHistory or a specific answer category
 *   - contains: substring to match (case-insensitive)
 *
 * message: plain-language explanation (no diagnosis language)
 * severity: 'critical' — always critical for red flags
 */

export const redFlagRules = [
  {
    id: 'rf_chest_pain_breathing',
    conditions: [
      { field: 'chiefComplaint', contains: 'chest' },
      { field: 'hpiAssociated', contains: 'breathing' },
    ],
    message: 'Your combination of symptoms needs immediate medical attention. A healthcare provider has been alerted and will see you as a priority.',
    severity: 'critical',
  },
  {
    id: 'rf_chest_pain_sweating',
    conditions: [
      { field: 'chiefComplaint', contains: 'chest' },
      { field: 'hpiAssociated', contains: 'sweating' },
    ],
    message: 'Your combination of symptoms requires urgent medical evaluation. Please remain calm — a healthcare provider is being notified immediately.',
    severity: 'critical',
  },
  {
    id: 'rf_chest_pain_arm',
    conditions: [
      { field: 'chiefComplaint', contains: 'chest' },
      { field: 'hpiRadiation', contains: 'arm' },
    ],
    message: 'Your symptoms need immediate medical attention. A healthcare provider has been alerted and will see you on priority.',
    severity: 'critical',
  },
  {
    id: 'rf_severe_headache_vision',
    conditions: [
      { field: 'chiefComplaint', contains: 'headache' },
      { field: 'hpiSeverity', contains: '10' },
    ],
    message: 'The severity of your headache requires immediate evaluation. A healthcare provider is being notified.',
    severity: 'critical',
  },
  {
    id: 'rf_breathing_difficulty',
    conditions: [
      { field: 'chiefComplaint', contains: 'breathing' },
    ],
    message: 'Difficulty breathing requires prompt medical attention. A healthcare provider has been alerted.',
    severity: 'critical',
  },
];

/**
 * Checks all answers so far against red-flag rules.
 * Returns the first matched rule or null.
 *
 * @param {Object} answersByCategory - { category: 'answer text', ... }
 * @returns {Object|null} matched rule or null
 */
export function checkRedFlags(answersByCategory) {
  for (const rule of redFlagRules) {
    const allMatch = rule.conditions.every(({ field, contains }) => {
      const answer = answersByCategory[field];
      if (!answer) return false;
      return answer.toLowerCase().includes(contains.toLowerCase());
    });
    if (allMatch) return rule;
  }
  return null;
}
