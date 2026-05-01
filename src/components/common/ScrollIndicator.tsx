import { memo } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import './ScrollIndicator.css';

export const ScrollIndicator = memo(() => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerTransition = {
    delay: 0.8,
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const wheelTransition = {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  };

  const containerProps = shouldReduceMotion 
    ? {} 
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
        variants: containerVariants,
        transition: containerTransition,
      };

  const wheelProps = shouldReduceMotion 
    ? {} 
    : {
        animate: { y: [0, 6, 0] },
        transition: wheelTransition,
      };

  return (
    <div className="scroll-indicator">
      <m.div className="scroll-indicator-content" {...containerProps}>
        <div className="scroll-mouse" aria-hidden="true">
          <m.div className="scroll-wheel" {...wheelProps} />
        </div>
        <span className="scroll-text">{t('hero.scrollText')}</span>
      </m.div>
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';
