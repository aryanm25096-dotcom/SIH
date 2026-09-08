import { useEffect } from 'react';
import { useNarration } from '../context/NarrationContext.jsx';
import { usePatientSession } from '../context/PatientSessionContext.jsx';

/**
 * Custom hook to automatically narrate instructional text when a screen or question renders.
 * Automatically runs on mount and cleans up on unmount.
 *
 * @param {string} text — Instructional text to read aloud
 * @param {number} [delay=300] — Delay in ms before starting narration
 */
export function useAutoNarration(text, delay = 300) {
  const { narrate, stop } = useNarration();
  const { state } = usePatientSession();

  useEffect(() => {
    if (!text || !state.language) return;

    const timer = setTimeout(() => {
      narrate(text, state.language);
    }, delay);

    return () => {
      clearTimeout(timer);
      stop();
    };
  }, [text, state.language, delay, narrate, stop]);
}
