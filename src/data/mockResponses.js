/**
 * MOCK: Canned responses for demo purposes.
 * All data here is DEMO DATA — not real patient information.
 * Clearly labeled for later replacement with real API responses.
 */

// MOCK: Canned STT (Speech-to-Text) transcripts
export const mockTranscripts = [
  'I have been having chest pain for the last two days',
  'The pain is sharp and comes and goes',
  'I feel it mostly in the center of my chest',
  'Sometimes the pain goes to my left arm',
  'I also feel short of breath when it happens',
  'I have diabetes and take Metformin 500mg twice daily',
  'No known allergies',
  'My father had a heart attack at age 55',
  'I do not smoke or drink alcohol',
  'I have been feeling very tired lately',
  'My appetite has decreased over the past week',
];

// MOCK: Canned OCR extraction results
export const mockOCRResults = {
  prescription: {
    type: 'Prescription',
    date: '2025-08-15',
    extractedFields: [
      { label: 'Doctor', value: 'Dr. Priya Sharma, MD (Internal Medicine)' },
      { label: 'Medicine', value: 'Metformin 500mg' },
      { label: 'Dosage', value: 'Twice daily after meals' },
      { label: 'Medicine', value: 'Amlodipine 5mg' },
      { label: 'Dosage', value: 'Once daily in the morning' },
      { label: 'Duration', value: '3 months' },
    ],
  },
  labReport: {
    type: 'Lab Report',
    date: '2025-09-01',
    extractedFields: [
      { label: 'Test', value: 'Complete Blood Count (CBC)' },
      { label: 'Hemoglobin', value: '11.2 g/dL', numericValue: 11.2, unit: 'g/dL' },
      { label: 'WBC Count', value: '8,500 /mcL', numericValue: 8500, unit: '/mcL' },
      { label: 'Platelet Count', value: '2,10,000 /mcL', numericValue: 210000, unit: '/mcL' },
      { label: 'Fasting Blood Sugar', value: '142 mg/dL', numericValue: 142, unit: 'mg/dL' },
      { label: 'HbA1c', value: '7.8%', numericValue: 7.8, unit: '%' },
      { label: 'Creatinine', value: '1.1 mg/dL', numericValue: 1.1, unit: 'mg/dL' },
    ],
  },
  discharge: {
    type: 'Discharge Summary',
    date: '2025-07-20',
    extractedFields: [
      { label: 'Hospital', value: 'City General Hospital, Delhi' },
      { label: 'Admission Date', value: '2025-07-15' },
      { label: 'Discharge Date', value: '2025-07-20' },
      { label: 'Diagnosis', value: 'Acute gastritis with dehydration' },
      { label: 'Procedure', value: 'IV fluid resuscitation, endoscopy' },
      { label: 'Follow-up', value: 'Review in 2 weeks with repeat endoscopy' },
    ],
  },
};
