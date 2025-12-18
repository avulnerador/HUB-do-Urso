import React from 'react';
import { Language } from '../data';

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <div className="lang-selector" role="group" aria-label="Language Selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${currentLang === lang.code ? 'active' : ''}`}
          onClick={() => onLanguageChange(lang.code)}
          aria-pressed={currentLang === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;