import React, { useState } from 'react';
import { apps, uiContent, Language } from './data';
import AppCard from './components/AppCard';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');

  const content = uiContent[language];

  return (
    <div className="container">
      <header className="app-header">
        <div className="header-title">
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
        <LanguageSelector 
          currentLang={language} 
          onLanguageChange={setLanguage} 
        />
      </header>

      <main>
        <div className="app-grid">
          {apps.map((app) => (
            <AppCard 
              key={app.id} 
              app={app} 
              lang={language}
              ctaText={content.visit}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;