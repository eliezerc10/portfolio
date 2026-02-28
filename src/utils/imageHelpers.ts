/**
 * Generates srcSet string for responsive images
 * @param basePath - Base path of the image without extension
 * @param sizes - Array of widths (e.g., [320, 640, 1024])
 * @param extension - Image extension (default: 'webp')
 */
export const generateSrcSet = (
  basePath: string,
  sizes: number[],
  extension: string = 'webp'
): string => {
  return sizes
    .map((size) => `${basePath}-${size}w.${extension} ${size}w`)
    .join(', ');
};

/**
 * Generates sizes attribute for responsive images
 * @param breakpoints - Array of breakpoint objects with maxWidth and size
 */
export const generateSizes = (
  breakpoints: Array<{ maxWidth?: number; size: string }>
): string => {
  return breakpoints
    .map((bp) => (bp.maxWidth ? `(max-width: ${bp.maxWidth}px) ${bp.size}` : bp.size))
    .join(', ');
};

/**
 * Common responsive image configurations
 */
export const imageConfigs = {
  profilePic: {
    srcSet: (basePath: string) => generateSrcSet(basePath, [320, 640, 1024]),
    sizes: generateSizes([
      { maxWidth: 480, size: '320px' },
      { maxWidth: 768, size: '640px' },
      { size: '1024px' },
    ]),
  },
  skillLogo: {
    srcSet: (basePath: string) => generateSrcSet(basePath, [64, 128, 256]),
    sizes: generateSizes([
      { maxWidth: 768, size: '64px' },
      { maxWidth: 1024, size: '128px' },
      { size: '256px' },
    ]),
  },
  socialIcon: {
    srcSet: (basePath: string) => generateSrcSet(basePath, [32, 64, 128]),
    sizes: generateSizes([
      { maxWidth: 768, size: '32px' },
      { size: '64px' },
    ]),
  },
};
