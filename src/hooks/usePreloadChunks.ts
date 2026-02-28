import { useEffect } from 'react';

/**
 * Preload critical chunks for better performance
 * This hook dynamically preloads JavaScript chunks that will be needed soon
 */
export const usePreloadChunks = () => {
  useEffect(() => {
    // Preload critical components after initial render
    const preloadChunks = () => {
      // Preload Navbar chunk (critical, above the fold)
      const navbarLink = document.createElement('link');
      navbarLink.rel = 'prefetch';
      navbarLink.as = 'script';
      navbarLink.href = '/portfolio/assets/navbar.js';
      
      // Preload About chunk (first section, high priority)
      const aboutLink = document.createElement('link');
      aboutLink.rel = 'prefetch';
      aboutLink.as = 'script';
      aboutLink.href = '/portfolio/assets/about.js';
      
      // Check if links already exist before appending
      if (!document.querySelector('link[href*="navbar"]')) {
        document.head.appendChild(navbarLink);
      }
      if (!document.querySelector('link[href*="about"]')) {
        document.head.appendChild(aboutLink);
      }
    };

    // Preload after a short delay to not block initial render
    const timeoutId = setTimeout(preloadChunks, 100);

    return () => clearTimeout(timeoutId);
  }, []);
};
