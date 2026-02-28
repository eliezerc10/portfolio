import { memo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const USFlag = () => (
  <svg className="flag-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" fill="#B22234"/>
    <path d="M0 0h32v2.46H0zm0 4.92h32v2.46H0zm0 4.93h32v2.46H0zm0 4.92h32v2.46H0zm0 4.93h32v2.46H0zm0 4.92h32v2.46H0zm0 4.93h32V32H0z" fill="#FFF"/>
    <rect width="12.8" height="17.23" fill="#3C3B6E"/>
    <g fill="#FFF">
      <circle cx="2.13" cy="2.13" r="0.8"/><circle cx="6.4" cy="2.13" r="0.8"/><circle cx="10.67" cy="2.13" r="0.8"/>
      <circle cx="4.27" cy="4.27" r="0.8"/><circle cx="8.53" cy="4.27" r="0.8"/>
      <circle cx="2.13" cy="6.4" r="0.8"/><circle cx="6.4" cy="6.4" r="0.8"/><circle cx="10.67" cy="6.4" r="0.8"/>
      <circle cx="4.27" cy="8.53" r="0.8"/><circle cx="8.53" cy="8.53" r="0.8"/>
      <circle cx="2.13" cy="10.67" r="0.8"/><circle cx="6.4" cy="10.67" r="0.8"/><circle cx="10.67" cy="10.67" r="0.8"/>
      <circle cx="4.27" cy="12.8" r="0.8"/><circle cx="8.53" cy="12.8" r="0.8"/>
      <circle cx="2.13" cy="14.93" r="0.8"/><circle cx="6.4" cy="14.93" r="0.8"/><circle cx="10.67" cy="14.93" r="0.8"/>
    </g>
  </svg>
);

const SpainFlag = () => (
  <svg className="flag-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="8" fill="#AA151B"/>
    <rect y="8" width="32" height="16" fill="#F1BF00"/>
    <rect y="24" width="32" height="8" fill="#AA151B"/>
  </svg>
);

export const LanguageToggle: React.FC = memo(() => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    setCurrentLang(i18n.language);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const newLang = i18n.language === 'en' ? 'es' : 'en';
      i18n.changeLanguage(newLang);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <button 
      className={`language-toggle ${isAnimating ? 'animating' : ''}`}
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLang === 'en' ? 'Spanish' : 'English'}`}
      title={currentLang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <div className="flag-slider">
        <div className={`flag-container ${currentLang === 'en' ? 'slide-right' : 'slide-left'}`}>
          <div className="flag-wrapper">
            <SpainFlag />
          </div>
          <div className="flag-wrapper">
            <USFlag />
          </div>
        </div>
      </div>
    </button>
  );
});
