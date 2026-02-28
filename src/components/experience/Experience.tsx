import { memo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from "react-scroll";
import { ExperienceAccordion } from './ExperienceAccordion';
import { WorkExperienceSummary } from './WorkExperienceSummary';
import '../experience/experience.css';

interface ExperienceItem {
    period: string;
    company: string;
    companyUrl?: string;
    role: string;
    techStack: string[];
    techPriority?: string[];
    achievements: string[];
}

interface ExperienceProps {
}

export const Experience: React.FC<ExperienceProps> = memo(() => {
    const { t } = useTranslation();
    const experiencesData = t('experience.experiences', { returnObjects: true }) as ExperienceItem[];
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const handleToggle = useCallback((index: number) => {
        setExpandedIndex(prevIndex => prevIndex === index ? null : index);
    }, []);
    
    return (
        <Element className='experience-container' name="experience">
            <section className='exp-section'>
                <h1>{t('experience.title')}</h1>
                <div className='experiences-div'>
                    {experiencesData.map((experience: ExperienceItem, idx: number) => (
                        <ExperienceAccordion
                            key={`exp-${idx}`}
                            experience={experience}
                            index={idx}
                            isExpanded={expandedIndex === idx}
                            onToggle={handleToggle}
                        />
                    ))}
                    <WorkExperienceSummary />
                </div>
            </section>
        </Element>
    )
});