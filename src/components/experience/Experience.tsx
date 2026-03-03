import { memo, useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from "react-scroll";
import { ExperienceAccordion } from './ExperienceAccordion';
import { WorkExperienceSummary } from './WorkExperienceSummary';
import './experience.css';

interface ExperienceItem {
    period: string;
    company: string;
    companyUrl?: string;
    role: string;
    techStack: string[];
    techPriority?: string[];
    achievements: string[];
}

export const Experience: React.FC = memo(() => {
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

    // Smooth scroll to position the header of a given accordion just below the navbar
    const scrollToHeader = useCallback((index: number) => {
        // Use setTimeout to ensure React has rendered the new expanded state
        setTimeout(() => {
            const el = accordionRefs.current[index];
            if (!el) return;
            const header = el.querySelector('.accordion-header');
            const scrollTarget = header || el;
            const navbarHeight = getNavbarHeight();
            const padding = 42;
            const targetTop = navbarHeight + padding;
            const currentTop = scrollTarget.getBoundingClientRect().top;
            const nudge = currentTop - targetTop;
            if (Math.abs(nudge) > 5) {
                window.scrollTo({
                    top: window.scrollY + nudge,
                    behavior: 'smooth'
                });
            }
        }, 80);
    }, [getNavbarHeight]);

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

        // Compensate scroll by exact pixel difference
        const diff = topAfter - topBefore;
        window.scrollBy(0, diff);

        // Re-enable transition for the opening animation
        requestAnimationFrame(() => {
            panel.style.transition = '';
        });
    }, []);

    const handleToggle = useCallback((index: number) => {
        setExpandedIndex(prevIndex => {
            // Closing the same accordion
            if (prevIndex === index) return null;

            // If a panel above is open, instantly collapse it to prevent scroll jump
            if (prevIndex !== null && prevIndex < index) {
                collapseAndCompensateScroll(prevIndex, index);
            }

            // Always scroll to the header of the newly opened accordion
            scrollToHeader(index);

            return index;
        });
    }, [collapseAndCompensateScroll, scrollToHeader]);
    
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