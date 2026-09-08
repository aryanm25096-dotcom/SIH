import { useState } from 'react';
import VoiceButton from './VoiceButton.jsx';
import { useTranslation } from '../hooks/useTranslation.js';
import './QuestionCard.css';

/**
 * Renders a single question with both voice and touch input.
 * Supports 'free' (text/voice) and 'choice' (button selection) types.
 *
 * @param {{ question: Object, lang: string, onAnswer: function }} props
 */
export default function QuestionCard({ question, lang, onAnswer }) {
  const [freeText, setFreeText] = useState('');
  const { t } = useTranslation();

  const handleVoiceTranscript = (transcript) => {
    if (question.type === 'free') {
      setFreeText(transcript);
    } else {
      // For choice questions, voice input auto-submits
      onAnswer(transcript);
    }
  };

  const handleChoiceClick = (choice) => {
    onAnswer(choice);
  };

  const handleFreeSubmit = (e) => {
    e.preventDefault();
    if (freeText.trim()) {
      onAnswer(freeText.trim());
      setFreeText('');
    }
  };

  return (
    <div className="question-card" role="region" aria-label="Current question">
      {/* Ayurvedic term + explanation if present */}
      {question.term && (
        <div className="question-term-block">
          <span className="question-term">{question.term}</span>
          <p className="question-explanation">{question.plainExplanation}</p>
        </div>
      )}

      <h2 className="question-text">{question.text}</h2>

      {/* Voice input — available for all question types */}
      <div className="question-voice-area">
        <VoiceButton lang={lang} onTranscript={handleVoiceTranscript} />
      </div>

      {question.type === 'choice' && question.choices && (
        <div className="question-choices" role="group" aria-label="Answer options">
          {question.choices.map((choice, idx) => (
            <button
              key={idx}
              type="button"
              className="choice-btn"
              onClick={() => handleChoiceClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      )}

      {question.type === 'free' && (
        <form onSubmit={handleFreeSubmit} className="question-free-form">
          <label htmlFor="free-answer" className="sr-only">
            {t('typeAnswerPlaceholder') || 'Type your answer'}
          </label>
          <textarea
            id="free-answer"
            className="free-input"
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder={t('typeAnswerPlaceholder') || 'Type your answer here or use the microphone above...'}
            rows={3}
          />
          <button
            type="submit"
            className="submit-btn"
            disabled={!freeText.trim()}
          >
            {t('continue') || 'Continue'}
          </button>
        </form>
      )}

      <span className="sr-only" aria-live="polite" />
    </div>
  );
}
