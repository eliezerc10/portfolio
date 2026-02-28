import { Cloudinary } from '@cloudinary/url-gen';

/**
 * Cloudinary Configuration
 * 
 * Cloud name: diooqe7ta (from your setup)
 * 
 * To use Cloudinary:
 * 1. Upload your images to Cloudinary in the 'portfolio' folder
 * 2. Images will be automatically optimized with format and quality auto
 * 3. Responsive images are generated on-the-fly
 */

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'diooqe7ta'
  }
});

/**
 * Check if Cloudinary is enabled
 */
export const isCloudinaryEnabled = (): boolean => {
  return import.meta.env.VITE_USE_CLOUDINARY === 'true';
};
