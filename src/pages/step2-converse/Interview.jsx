import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientSession, ActionTypes } from '../../context/PatientSessionContext.jsx';
import { useAutoNarration } from '../../hooks/useAutoNarration.js';
import { useTranslation } from '../../hooks/useTranslation.js';
import { generalQuestions, getNextQuestion } from '../../data/questionBank.js';
import { ayushQuestions } from '../../data/ayushQuestions.js';
import { getLocalizedQuestion } from '../../data/questionTranslations.js';
import { getBCP47Tag } from '../../utils/speechApi.js';
import { checkRedFlags } from '../../data/redFlagRules.js';
import { mockAISummary } from '../../mocks/mockServices.js';
import QuestionCard from '../../components/QuestionCard.jsx';
import ProgressBar from '../../components/ProgressBar.jsx';
import RedFlagBanner from '../../components/RedFlagBanner.jsx';
import { Loader2 } from 'lucide-react';
import './Step2.css';

export default function Interview() {
  const navigate = useNavigate();
  const { state, dispatch } = usePatientSession();
  const { t, lang } = useTranslation();

  const isAyush = state.consultationType === 'ayush';
  const questionBank = isAyush ? ayushQuestions : generalQuestions;

  // Track current question by object
  const [currentQuestion, setCurrentQuestion] = useState(() => questionBank[0]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isProcessingSummary, setIsProcessingSummary] = useState(false);
  const [showRedFlagModal, setShowRedFlagModal] = useState(false);

  // Localize current question into the patient's chosen language (text, choices, explanation, narration)
  const localizedQuestion = useMemo(() => {
    return getLocalizedQuestion(currentQuestion, lang || state.language);
  }, [currentQuestion, lang, state.language]);

  // Auto-narrate localized question in patient's selected language
  const questionNarrationText = useMemo(() => {
    if (!localizedQuestion) return '';
    return localizedQuestion.narrationText || localizedQuestion.text;
  }, [localizedQuestion]);

  useAutoNarration(questionNarrationText);

  // Approximate total questions for progress indicator
  const estimatedTotal = useMemo(() => {
    return isAyush ? 13 : 11;
  }, [isAyush]);

  const handleAnswer = async (answerText) => {
    const newAnswerObj = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      category: currentQuestion.category,
      term: currentQuestion.term,
      answer: answerText,
    };

    dispatch({
      type: ActionTypes.ADD_ANSWER,
      payload: newAnswerObj,
    });

    const nextCount = answeredCount + 1;
    setAnsweredCount(nextCount);

    // Build accumulated category map to evaluate red-flags
    const updatedAnswers = [...state.answers, newAnswerObj];
    const categoryMap = {};
    for (const a of updatedAnswers) {
      categoryMap[a.category] = (categoryMap[a.category] ? categoryMap[a.category] + ' ' : '') + a.answer;
    }

    // Check for Red Flags
    const flaggedRule = checkRedFlags(categoryMap);
    if (flaggedRule && (!state.redFlag || !state.redFlag.triggered)) {
      dispatch({
        type: ActionTypes.SET_RED_FLAG,
        payload: flaggedRule,
      });
      setShowRedFlagModal(true);
    }

    // Determine next question via branching logic
    const nextQ = getNextQuestion(currentQuestion, answerText, questionBank);

    if (nextQ) {
      setCurrentQuestion(nextQ);
    } else {
      // Completed interview — generate AI structured summary and transition to Step 3
      setIsProcessingSummary(true);
      try {
        const summary = await mockAISummary(updatedAnswers);
        dispatch({
          type: ActionTypes.SET_STRUCTURED_HISTORY,
          payload: summary,
        });
        setTimeout(() => {
          navigate('/scan');
        }, 600);
      } catch {
        navigate('/scan');
      }
    }
  };

  return (
    <div className="interview-page" role="main">
      <div className="interview-top-bar">
        <span className="step-indicator">
          {lang === 'hi' ? 'चरण 2 / 5 — क्लिनिकल साक्षात्कार' : `Step 2 of 5 — ${isAyush ? 'AYUSH Holistic Assessment' : 'Adaptive Clinical Interview'}`}
        </span>
        <ProgressBar
          current={Math.min(answeredCount, estimatedTotal)}
          total={estimatedTotal}
          label={lang === 'hi' ? 'साक्षात्कार प्रगति' : `${isAyush ? 'AYUSH Pariksha' : 'Health History'} Progress`}
        />
      </div>

      {isProcessingSummary ? (
        <div className="processing-summary-view" role="status" aria-live="polite">
          <Loader2 size={48} className="spin-icon" aria-hidden="true" />
          <h2 className="processing-title">
            {lang === 'hi' ? 'क्लिनिकल इनटेक तैयार किया जा रहा है...' : 'Synthesizing Clinical Intake...'}
          </h2>
          <p className="processing-desc">
            {lang === 'hi'
              ? 'इतिहास अनुभागों का संरचनात्मक विश्लेषण, लक्षणों का मूल्यांकन और दस्तावेज़ इनटेक की तैयारी।'
              : 'Structuring history sections, analyzing symptom associations, and preparing document intake.'}
          </p>
        </div>
      ) : (
        <div className="interview-card-container">
          <QuestionCard
            question={localizedQuestion || currentQuestion}
            lang={getBCP47Tag(lang || state.language)}
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {/* Red-Flag full-screen alert if triggered */}
      {showRedFlagModal && state.redFlag && (
        <RedFlagBanner
          message={state.redFlag.message}
          onAcknowledge={() => setShowRedFlagModal(false)}
        />
      )}
    </div>
  );
}
