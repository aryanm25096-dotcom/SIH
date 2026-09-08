/**
 * AYUSH Question Bank — Dashavidha Pariksha + Ahara/Vihara
 *
 * Each question includes the Ayurvedic term AND a plain-language explanation
 * so non-specialist users understand what is being asked.
 */

export const ayushQuestions = [
  // ── Chief Complaint (same start point) ──
  {
    id: 'ayush_cc',
    category: 'chiefComplaint',
    text: 'What is your main health concern today?',
    type: 'free',
    next: 'prakriti',
  },

  // ── Dashavidha Pariksha (10-fold examination) ──
  {
    id: 'prakriti',
    category: 'ayush',
    term: 'Prakriti',
    plainExplanation: 'Your natural body constitution — the inherent balance of Vata, Pitta, and Kapha you were born with.',
    text: 'How would you describe your natural body type?',
    type: 'choice',
    choices: [
      'Thin build, dry skin, active mind (Vata-predominant)',
      'Medium build, warm body, sharp intellect (Pitta-predominant)',
      'Heavy build, oily skin, calm temperament (Kapha-predominant)',
      'Mixed / I am not sure',
    ],
    next: 'vikriti',
  },
  {
    id: 'vikriti',
    category: 'ayush',
    term: 'Vikriti',
    plainExplanation: 'Your current state of imbalance — how your body deviates from your natural constitution right now.',
    text: 'What changes have you noticed in your body recently?',
    type: 'choice',
    choices: [
      'Increased dryness, gas, anxiety, or joint pain (Vata aggravation)',
      'Increased heat, acidity, irritability, or skin rashes (Pitta aggravation)',
      'Increased heaviness, congestion, lethargy, or swelling (Kapha aggravation)',
      'No major change',
    ],
    next: 'sara',
  },
  {
    id: 'sara',
    category: 'ayush',
    term: 'Sara',
    plainExplanation: 'The quality and purity of your body tissues — assessed through skin texture, hair, bone strength, etc.',
    text: 'How would you describe your skin, hair, and overall tissue quality?',
    type: 'choice',
    choices: [
      'Smooth skin, thick hair, strong nails',
      'Soft skin, fine hair, moderate strength',
      'Rough or dry skin, thin or brittle hair',
      'Mixed characteristics',
    ],
    next: 'samhanana',
  },
  {
    id: 'samhanana',
    category: 'ayush',
    term: 'Samhanana',
    plainExplanation: 'Your body compactness and structural build — how well-proportioned and sturdy your frame is.',
    text: 'How would you describe your physical build and structure?',
    type: 'choice',
    choices: [
      'Well-built and compact',
      'Average build',
      'Thin or fragile frame',
      'Overweight or heavy frame',
    ],
    next: 'pramana',
  },
  {
    id: 'pramana',
    category: 'ayush',
    term: 'Pramana',
    plainExplanation: 'Your body proportions and measurements — height, limb length, overall symmetry.',
    text: 'How would you describe your body proportions?',
    type: 'choice',
    choices: [
      'Well-proportioned height and limbs',
      'Tall with long limbs',
      'Short with compact limbs',
      'Not sure / average',
    ],
    next: 'satmya',
  },
  {
    id: 'satmya',
    category: 'ayush',
    term: 'Satmya',
    plainExplanation: 'Your body\'s adaptability and tolerance — what foods, climates, and substances suit you naturally.',
    text: 'How does your body react to changes in diet, weather, or routine?',
    type: 'choice',
    choices: [
      'Adapts well to most changes',
      'Sensitive to certain foods or weather',
      'Frequently disturbed by changes',
      'Very sensitive — many intolerances',
    ],
    next: 'sattva',
  },
  {
    id: 'sattva',
    category: 'ayush',
    term: 'Sattva',
    plainExplanation: 'Your mental strength and emotional resilience — how you handle stress, pain, and adversity.',
    text: 'How do you generally handle stress or pain?',
    type: 'choice',
    choices: [
      'Calm and composed even under pressure',
      'Manage reasonably well with some difficulty',
      'Get easily upset, anxious, or overwhelmed',
    ],
    next: 'ahara_shakti',
  },
  {
    id: 'ahara_shakti',
    category: 'ayush',
    term: 'Ahara Shakti',
    plainExplanation: 'Your digestive power — appetite strength, digestion speed, and how well you process food.',
    text: 'How is your appetite and digestion?',
    type: 'choice',
    choices: [
      'Strong appetite, digests everything well',
      'Variable appetite, occasional indigestion',
      'Weak appetite, frequent bloating or heaviness',
      'Very irregular — sometimes hungry, sometimes not',
    ],
    next: 'vyayama_shakti',
  },
  {
    id: 'vyayama_shakti',
    category: 'ayush',
    term: 'Vyayama Shakti',
    plainExplanation: 'Your exercise capacity — physical endurance, stamina, and tolerance for exertion.',
    text: 'How would you describe your physical stamina?',
    type: 'choice',
    choices: [
      'High — can do prolonged physical work',
      'Moderate — tire after some time',
      'Low — get fatigued quickly',
    ],
    next: 'vaya',
  },
  {
    id: 'vaya',
    category: 'ayush',
    term: 'Vaya',
    plainExplanation: 'Your age group — important because dosha balance shifts naturally with age.',
    text: 'Which age group do you belong to?',
    type: 'choice',
    choices: [
      'Child or adolescent (up to 16)',
      'Young adult (17-30)',
      'Middle-aged (31-60)',
      'Senior (60+)',
    ],
    next: 'ahara',
  },

  // ── Ahara (Diet) ──
  {
    id: 'ahara',
    category: 'ayush',
    term: 'Ahara',
    plainExplanation: 'Your dietary habits — what you eat, how much, meal timings, and food preferences.',
    text: 'Describe your typical daily diet and meal pattern.',
    type: 'free',
    next: 'vihara',
  },

  // ── Vihara (Lifestyle) ──
  {
    id: 'vihara',
    category: 'ayush',
    term: 'Vihara',
    plainExplanation: 'Your daily lifestyle routine — sleep patterns, physical activity, daily schedule, and habits.',
    text: 'Describe your daily routine, sleep pattern, and physical activity level.',
    type: 'free',
    next: 'ayush_ros',
  },

  // ── Brief Review ──
  {
    id: 'ayush_ros',
    category: 'reviewOfSystems',
    text: 'Any other symptoms or concerns you would like to mention?',
    type: 'free',
    next: null, // End
  },
];
