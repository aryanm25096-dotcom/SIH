/**
 * Mock Lab Reference Ranges
 *
 * Used on the physician screen to flag lab values outside normal range.
 * Each entry: { label, min, max, unit }
 * Values are approximate adult reference ranges for demo purposes.
 *
 * MOCK: Replace with a proper clinical reference database in production.
 */

export const labRanges = {
  Hemoglobin: { min: 12.0, max: 17.5, unit: 'g/dL' },
  'WBC Count': { min: 4000, max: 11000, unit: '/mcL' },
  'Platelet Count': { min: 150000, max: 400000, unit: '/mcL' },
  'Fasting Blood Sugar': { min: 70, max: 110, unit: 'mg/dL' },
  HbA1c: { min: 4.0, max: 5.7, unit: '%' },
  Creatinine: { min: 0.6, max: 1.2, unit: 'mg/dL' },
  'Total Cholesterol': { min: 0, max: 200, unit: 'mg/dL' },
  Triglycerides: { min: 0, max: 150, unit: 'mg/dL' },
  'HDL Cholesterol': { min: 40, max: 200, unit: 'mg/dL' },
  'LDL Cholesterol': { min: 0, max: 100, unit: 'mg/dL' },
  TSH: { min: 0.4, max: 4.0, unit: 'mIU/L' },
  ALT: { min: 7, max: 56, unit: 'U/L' },
  AST: { min: 10, max: 40, unit: 'U/L' },
};

/**
 * Checks if a lab value is outside the reference range.
 * @param {string} label — the field label (e.g. 'Hemoglobin')
 * @param {number} value — the numeric value
 * @returns {'normal'|'high'|'low'|'unknown'}
 */
export function checkLabValue(label, value) {
  const range = labRanges[label];
  if (!range || typeof value !== 'number') return 'unknown';
  if (value < range.min) return 'low';
  if (value > range.max) return 'high';
  return 'normal';
}
