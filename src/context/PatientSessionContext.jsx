import { createContext, useContext, useReducer, useEffect } from 'react';

const STORAGE_KEY = 'medikiosk_session';

// ── Initial State ──
const initialState = {
  language: 'en',
  idMethod: null,
  patientId: null,
  patientName: '',
  consents: {
    history: false,
    documents: false,
    hospital: false,
    abdm: false,
  },
  consultationType: null, // 'general' | 'ayush'
  answers: [],            // [{ questionId, questionText, category, answer, term?, timestamp }]
  structuredHistory: null, // populated by mockAISummary
  redFlag: null,           // { triggered: true, ruleId, message, acknowledgedByDoctor: false }
  documents: [],           // [{ id, type, date, extractedFields, confirmed }]
  summaryConfirmed: false,
  reviewedByDoctor: false,
};

// ── Action Types ──
const ActionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_ID_METHOD: 'SET_ID_METHOD',
  SET_PATIENT_ID: 'SET_PATIENT_ID',
  SET_CONSENTS: 'SET_CONSENTS',
  SET_CONSULTATION_TYPE: 'SET_CONSULTATION_TYPE',
  ADD_ANSWER: 'ADD_ANSWER',
  SET_STRUCTURED_HISTORY: 'SET_STRUCTURED_HISTORY',
  SET_RED_FLAG: 'SET_RED_FLAG',
  ADD_DOCUMENT: 'ADD_DOCUMENT',
  CONFIRM_DOCUMENT: 'CONFIRM_DOCUMENT',
  REMOVE_DOCUMENT: 'REMOVE_DOCUMENT',
  CONFIRM_SUMMARY: 'CONFIRM_SUMMARY',
  EDIT_SECTION: 'EDIT_SECTION',
  ACKNOWLEDGE_RED_FLAG: 'ACKNOWLEDGE_RED_FLAG',
  CONFIRM_REVIEW: 'CONFIRM_REVIEW',
  RESET: 'RESET',
};

// ── Reducer ──
function sessionReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload };

    case ActionTypes.SET_ID_METHOD:
      return { ...state, idMethod: action.payload };

    case ActionTypes.SET_PATIENT_ID:
      return {
        ...state,
        patientId: action.payload.id,
        patientName: action.payload.name || state.patientName,
      };

    case ActionTypes.SET_CONSENTS:
      return { ...state, consents: { ...state.consents, ...action.payload } };

    case ActionTypes.SET_CONSULTATION_TYPE:
      return { ...state, consultationType: action.payload };

    case ActionTypes.ADD_ANSWER:
      return {
        ...state,
        answers: [
          ...state.answers,
          { ...action.payload, timestamp: Date.now() },
        ],
      };

    case ActionTypes.SET_STRUCTURED_HISTORY:
      return { ...state, structuredHistory: action.payload };

    case ActionTypes.SET_RED_FLAG:
      return {
        ...state,
        redFlag: {
          triggered: true,
          ruleId: action.payload.id,
          message: action.payload.message,
          acknowledgedByDoctor: false,
        },
      };

    case ActionTypes.ADD_DOCUMENT:
      return { ...state, documents: [...state.documents, action.payload] };

    case ActionTypes.CONFIRM_DOCUMENT:
      return {
        ...state,
        documents: state.documents.map((d) =>
          d.id === action.payload ? { ...d, confirmed: true } : d
        ),
      };

    case ActionTypes.REMOVE_DOCUMENT:
      return {
        ...state,
        documents: state.documents.filter((d) => d.id !== action.payload),
      };

    case ActionTypes.CONFIRM_SUMMARY:
      return { ...state, summaryConfirmed: true };

    case ActionTypes.EDIT_SECTION:
      return {
        ...state,
        structuredHistory: {
          ...state.structuredHistory,
          [action.payload.section]: action.payload.value,
        },
      };

    case ActionTypes.ACKNOWLEDGE_RED_FLAG:
      return {
        ...state,
        redFlag: state.redFlag
          ? { ...state.redFlag, acknowledgedByDoctor: true }
          : null,
      };

    case ActionTypes.CONFIRM_REVIEW:
      return { ...state, reviewedByDoctor: true };

    case ActionTypes.RESET:
      return { ...initialState };

    default:
      return state;
  }
}

// ── Context ──
const PatientSessionContext = createContext(null);

// ── Provider ──
export function PatientSessionProvider({ children }) {
  // Try to restore from localStorage (so physician screen in a separate tab works)
  const savedState = (() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with initialState to fill any missing keys from schema updates
        return { ...initialState, ...parsed };
      }
    } catch {
      // Ignore parse errors
    }
    return initialState;
  })();

  const [state, dispatch] = useReducer(sessionReducer, savedState);

  // Mirror state to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage might be full or disabled
    }
  }, [state]);

  return (
    <PatientSessionContext.Provider value={{ state, dispatch, ActionTypes }}>
      {children}
    </PatientSessionContext.Provider>
  );
}

// ── Hook ──
export function usePatientSession() {
  const ctx = useContext(PatientSessionContext);
  if (!ctx) {
    throw new Error('usePatientSession must be used within PatientSessionProvider');
  }
  return ctx;
}

export { ActionTypes };
export default PatientSessionContext;
