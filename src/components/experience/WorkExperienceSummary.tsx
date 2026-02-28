import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './WorkExperienceSummary.css';

export const WorkExperienceSummary: React.FC = memo(() => {
  const { t } = useTranslation();
  
  const calculateExperience = useMemo(() => {
    const startDate = new Date(2019, 10, 1); // November 2019 (month is 0-indexed)
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    return { years, months };
  }, []);

  return (
    <div className="work-experience-summary">
      <div className="summary-content">
        
        <div className="summary-text">
          <h3 className="summary-title">
            {t('experience.summary.title', 'Total Work Experience')}
          </h3>
          <div className="summary-duration">
            <span className="duration-value">
              {calculateExperience.years}
            </span>
            <span className="duration-label">
              {calculateExperience.years === 1 
                ? t('experience.summary.year', 'Year') 
                : t('experience.summary.years', 'Years')}
            </span>
            {calculateExperience.months > 0 && (
              <>
                <span className="duration-separator">+</span>
                <span className="duration-value">
                  {calculateExperience.months}
                </span>
                <span className="duration-label">
                  {calculateExperience.months === 1 
                    ? t('experience.summary.month', 'Month') 
                    : t('experience.summary.months', 'Months')}
                </span>
              </>
            )}
          </div>
          <p className="summary-subtitle">
            {t('experience.summary.since', 'Since November 2019')}
          </p>
        </div>
      </div>
    </div>
  );
});

WorkExperienceSummary.displayName = 'WorkExperienceSummary';
