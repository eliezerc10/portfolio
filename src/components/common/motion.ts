import type { Transition, Variants, ViewportOptions } from 'motion/react';

export interface RevealOptions {
  delay?: number;
  distance?: number;
  duration?: number;
}

const revealEase = [0.22, 1, 0.36, 1] as const;

export const revealViewport = {
  once: true,
  margin: '0px 0px -72px 0px',
} satisfies ViewportOptions;

export const createRevealVariants = ({
  distance = 32,
}: RevealOptions = {}): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

export const createRevealTransition = ({
  delay = 0,
  duration = 0.55,
}: RevealOptions = {}): Transition => ({
  delay,
  duration,
  ease: revealEase,
});
