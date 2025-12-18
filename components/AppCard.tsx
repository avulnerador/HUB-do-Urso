import React from 'react';
import { AppData, Language } from '../data';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface AppCardProps {
  app: AppData;
  lang: Language;
  ctaText: string;
}

const AppCard: React.FC<AppCardProps> = ({ app, lang, ctaText }) => {
  const Icon = app.icon;

  return (
    <a 
      href={app.link} 
      className="app-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${app.title[lang]} - ${app.description[lang]}`}
    >
      <div className="card-icon">
        <Icon />
      </div>
      <div className="card-content">
        <h2>{app.title[lang]}</h2>
        <p>{app.description[lang]}</p>
      </div>
      <div className="card-footer">
        {ctaText} <FaExternalLinkAlt style={{ marginLeft: '8px', fontSize: '0.8em' }} />
      </div>
    </a>
  );
};

export default AppCard;