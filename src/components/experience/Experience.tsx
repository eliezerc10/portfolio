import { memo, useState, useCallback, useRef } from 'react';
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
    
    // Refs to track accordion DOM elements
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Get navbar height dynamically
    const getNavbarHeight = useCallback(() => {
        const navbar = document.querySelector('.navbar-nav');
        return navbar instanceof HTMLElement ? navbar.offsetHeight : 70;
    }, []);

    // Instantly collapse previous panel and compensate scroll so the clicked accordion stays in place
    const collapseAndCompensateScroll = useCallback((prevIndex: number, clickedIndex: number) => {
        const prevEl = accordionRefs.current[prevIndex];
        const clickedEl = accordionRefs.current[clickedIndex];
        if (!prevEl || !clickedEl) return;

        const panel = prevEl.querySelector('.accordion-panel.expanded');
        if (!panel || !(panel instanceof HTMLElement)) return;

        // Measure clicked accordion position BEFORE collapse
        const topBefore = clickedEl.getBoundingClientRect().top;

        // Instantly collapse: disable transition, remove expanded class, force reflow
        panel.style.transition = 'none';
        panel.classList.remove('expanded');
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        panel.offsetHeight; // Force reflow

        // Measure clicked accordion position AFTER collapse
        const topAfter = clickedEl.getBoundingClientRect().top;

        // Compensate scroll by exact pixel difference to keep accordion in same visual spot
        const diff = topAfter - topBefore;
        window.scrollBy(0, diff);

        // Re-enable transition for the opening animation
        requestAnimationFrame(() => {
            panel.style.transition = '';

            // After compensation, smooth scroll to position accordion just below navbar
            const navbarHeight = getNavbarHeight();
            const padding = 72;
            const targetTop = navbarHeight + padding;
            const currentTop = clickedEl.getBoundingClientRect().top;
            const nudge = currentTop - targetTop;
            if (Math.abs(nudge) > 5) {
                window.scrollBy({ top: nudge, behavior: 'smooth' });
            }
        });
    }, [getNavbarHeight]);

    const handleToggle = useCallback((index: number) => {
        setExpandedIndex(prevIndex => {
            // Closing the same accordion
            if (prevIndex === index) return null;

            // Switching: collapse previous panel above the clicked one to prevent scroll jump
            if (prevIndex !== null && prevIndex < index) {
                collapseAndCompensateScroll(prevIndex, index);
            } else if (prevIndex !== null) {
                // Clicking an accordion ABOVE the open one - smooth scroll to it
                requestAnimationFrame(() => {
                    const el = accordionRefs.current[index];
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const navbarHeight = getNavbarHeight();
                    const padding = 16;
                    const targetTop = navbarHeight + padding;
                    const diff = rect.top - targetTop;
                    if (Math.abs(diff) > 10) {
                        window.scrollBy({ top: diff, behavior: 'smooth' });
                    }
                });
            }

            return index;
        });
    }, [collapseAndCompensateScroll, getNavbarHeight]);
    
    return (
        <Element className='experience-container' name="experience">
            <section className='exp-section'>
                <h1>{t('experience.title')}</h1>
                <div className='experiences-div'>
                    {experiencesData.map((experience: ExperienceItem, idx: number) => (
                        <div key={`exp-${idx}`} ref={(el) => { accordionRefs.current[idx] = el; }}>
                            <ExperienceAccordion
                                experience={experience}
                                index={idx}
                                isExpanded={expandedIndex === idx}
                                onToggle={handleToggle}
                            />
                        </div>
                    ))}
                    <WorkExperienceSummary />
                </div>
            </section>
        </Element>
    )
});