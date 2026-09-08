import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { speakWithIndicF5 } from '../utils/speechApi.js';
import { usePatientSession } from './PatientSessionContext.jsx';

const NarrationContext = createContext(null);

export function NarrationProvider({ children }) {
  const { state: patientState } = usePatientSession();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [lastSpokenText, setLastSpokenText] = useState('');
  const [lastLanguage, setLastLanguage] = useState(patientState?.language || 'en');

  const activeControllerRef = useRef(null);

  // Sync mute state to localStorage
  useEffect(() => {
    localStorage.setItem('medikiosk_narration_muted', isMuted ? 'true' : 'false');
    if (isMuted && activeControllerRef.current) {
      activeControllerRef.current.cancel();
      setIsSpeaking(false);
    }
  }, [isMuted]);

  // Stop narration on unmount
  useEffect(() => {
    return () => {
      activeControllerRef.current?.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    if (activeControllerRef.current) {
      activeControllerRef.current.cancel();
      activeControllerRef.current = null;
    }
    setIsSpeaking(false);
  }, []);

  const narrate = useCallback(
    (text, overrideLang) => {
      if (!text || isMuted) return;

      const lang = overrideLang || patientState?.language || 'en';

      // Cancel any ongoing audio
      stop();

      setLastSpokenText(text);
      setLastLanguage(lang);

      activeControllerRef.current = speakWithIndicF5({
        text,
        language: lang,
        onStart: () => setIsSpeaking(true),
        onEnd: () => {
          setIsSpeaking(false);
          activeControllerRef.current = null;
        },
        onError: () => {
          setIsSpeaking(false);
          activeControllerRef.current = null;
        },
      });
    },
    [isMuted, patientState?.language, stop]
  );

  const repeat = useCallback(() => {
    if (lastSpokenText) {
      if (isMuted) {
        setIsMuted(false);
      }
      narrate(lastSpokenText, lastLanguage);
    }
  }, [lastSpokenText, lastLanguage, isMuted, narrate]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <NarrationContext.Provider
      value={{
        isSpeaking,
        isMuted,
        narrate,
        stop,
        repeat,
        toggleMute,
        lastSpokenText,
        lastLanguage,
      }}
    >
      {children}
    </NarrationContext.Provider>
  );
}

export function useNarration() {
  const ctx = useContext(NarrationContext);
  if (!ctx) {
    throw new Error('useNarration must be used within a NarrationProvider');
  }
  return ctx;
}
