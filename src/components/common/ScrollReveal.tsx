import type { HTMLMotionProps } from 'motion/react';
import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import {
  createRevealTransition,
  createRevealVariants,
  revealViewport,
} from './motion';

type ScrollRevealElement = 'article' | 'div' | 'section';

const motionElements = {
  article: m.article,
  div: m.div,
  section: m.section,
} as const;

interface ScrollRevealProps extends Omit<HTMLMotionProps<'section'>, 'children' | 'ref'> {
  as?: ScrollRevealElement;
  children: ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
}

export function ScrollReveal({
  as = 'section',
  children,
  className,
  delay = 0,
  distance = 24,
  duration = 0.45,
  viewport = revealViewport,
  ...rest
}: Readonly<ScrollRevealProps>) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motionElements[as];

  if (shouldReduceMotion) {
    return (
      <MotionComponent className={className} {...rest}>
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={createRevealVariants({ distance })}
      transition={createRevealTransition({ delay, duration })}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
