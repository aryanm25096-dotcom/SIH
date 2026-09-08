/**
 * useTranslation — Returns translated UI strings based on the current
 * session language from PatientSessionContext.
 *
 * Usage:
 *   const { t, lang } = useTranslation();
 *   <h1>{t('identifyHeading')}</h1>
 */
import { usePatientSession } from '../context/PatientSessionContext.jsx';
import { getTranslations } from '../i18n/translations.js';

export function useTranslation() {
  const { state } = usePatientSession();
  const lang = state.language || 'en';
  const strings = getTranslations(lang);

  /**
   * t(key) — look up a translated string.
   * Falls back to English, then to the raw key if totally missing.
   */
  function t(key) {
    return strings[key] ?? key;
  }

  return { t, lang, strings };
}

export default useTranslation;
