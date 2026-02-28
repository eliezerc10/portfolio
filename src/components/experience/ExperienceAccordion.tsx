import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceAccordion.css';

interface ExperienceAccordionProps {
  experience: {
    period: string;
    company: string;
    companyUrl?: string;
    role: string;
    techStack: string[];
    techPriority?: string[];
    achievements: string[];
  };
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const ExperienceAccordion: React.FC<ExperienceAccordionProps> = memo(({ 
  experience, 
  index, 
  isExpanded, 
  onToggle 
}) => {
  const { t } = useTranslation();
  
  const handleToggle = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  }, [handleToggle]);

  // Calculate tech stack importance based on priority list
  const getTechImportance = (tech: string): 'primary' | 'secondary' | 'tertiary' => {
    if (!experience.techPriority) {
      // Fallback to position-based if no priority list
      const idx = experience.techStack.indexOf(tech);
      if (idx < 2) return 'primary';
      if (idx < 4) return 'secondary';
      return 'tertiary';
    }
    
    const priorityIndex = experience.techPriority.indexOf(tech);
    if (priorityIndex !== -1 && priorityIndex < 3) return 'primary';
    if (priorityIndex !== -1 && priorityIndex < 6) return 'secondary';
    return 'tertiary';
  };

  return (
    <article className="experience-accordion">
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
        <div className="timeline-line"></div>
      </div>
      
      <div className="accordion-content">
        <button
          className={`accordion-header ${isExpanded ? 'expanded' : ''}`}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isExpanded}
          aria-controls={`experience-panel-${index}`}
          type="button"
        >
          <div className="header-main">
            <div className="header-info">
              <h3 className="role-title">{experience.role}</h3>
              <div className="meta-info">
                {experience.companyUrl ? (
                  <a 
                    href={experience.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="company-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="company-name">{experience.company}</span>
                    <ExternalLinkIcon className="external-icon" />
                  </a>
                ) : (
                  <span className="company-name">{experience.company}</span>
                )}
                <span className="period-badge">{experience.period}</span>
              </div>
            </div>
            
            <div className="tech-pills-container">
              {experience.techStack.slice(0, 5).map((tech, idx) => (
                <span 
                  key={`${experience.company}-tech-${idx}`}
                  className={`tech-pill ${getTechImportance(tech)}`}
                  title={tech}
                >
                  {tech}
                </span>
              ))}
              {experience.techStack.length > 5 && (
                <span className="tech-pill more">+{experience.techStack.length - 5}</span>
              )}
            </div>
          </div>
          
          <div className="accordion-toggle">
            
            <span className="toggle-text">
              {isExpanded ? t('experience.accordion.showLess') : t('experience.accordion.readMore')}
            </span>
            <ChevronIcon 
              className={`chevron-icon ${isExpanded ? 'rotated' : ''}`}
            />
          </div>
        </button>

        <div
          id={`experience-panel-${index}`}
          className={`accordion-panel ${isExpanded ? 'expanded' : ''}`}
          role="region"
          aria-labelledby={`experience-header-${index}`}
        >
          <div className="panel-content">
            <h4 className="achievements-title">{t('experience.accordion.achievementsTitle')}</h4>
            <ul className="achievements-list">
              {experience.achievements.map((achievement, achIdx) => (
                <li key={`${experience.company}-achievement-${achIdx}`}>
                  <span className="achievement-bullet">▸</span>
                  {achievement}
                </li>
              ))}
            </ul>
            
            {experience.techStack.length > 5 && (
              <div className="full-tech-stack">
                <h5>{t('experience.accordion.completeTechStack')}</h5>
                <div className="tech-pills-full">
                  {experience.techStack.map((tech, idx) => (
                    <span 
                      key={`${experience.company}-tech-full-${idx}`}
                      className={`tech-pill ${getTechImportance(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

ExperienceAccordion.displayName = 'ExperienceAccordion';
