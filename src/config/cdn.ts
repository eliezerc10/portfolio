/**
 * CDN Configuration
 * 
 * This file contains configuration for image CDN services.
 * Currently supports Cloudinary for automatic image optimization and responsive images.
 * 
 * To enable CDN:
 * 1. Sign up for a free Cloudinary account at https://cloudinary.com
 * 2. Upload your images to Cloudinary
 * 3. Set VITE_CLOUDINARY_CLOUD_NAME in your .env file
 * 4. Set USE_CDN to true
 */

export const CDN_CONFIG = {
  USE_CDN: import.meta.env.VITE_USE_CDN === 'true',
  CLOUDINARY_CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_BASE_URL: 'https://res.cloudinary.com',
};

/**
 * Generates Cloudinary URL with transformations
 */
export const getCloudinaryUrl = (
  publicId: string,
  transformations: {
    width?: number;
    height?: number;
    quality?: 'auto' | number;
    format?: 'auto' | 'webp' | 'avif';
    crop?: 'fill' | 'fit' | 'scale';
  } = {}
): string => {
  if (!CDN_CONFIG.USE_CDN || !CDN_CONFIG.CLOUDINARY_CLOUD_NAME) {
    return publicId; // Return original path if CDN not configured
  }

  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'scale',
  } = transformations;

  const transforms: string[] = [];
  
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (quality) transforms.push(`q_${quality}`);
  if (format) transforms.push(`f_${format}`);
  if (crop) transforms.push(`c_${crop}`);

  const transformString = transforms.join(',');
  
  return `${CDN_CONFIG.CLOUDINARY_BASE_URL}/${CDN_CONFIG.CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${publicId}`;
};

/**
 * Generates responsive srcSet for Cloudinary images
 */
export const getCloudinarySrcSet = (
  publicId: string,
  widths: number[],
  options: { quality?: 'auto' | number; format?: 'auto' | 'webp' | 'avif' } = {}
): string => {
  if (!CDN_CONFIG.USE_CDN) {
    return ''; // Return empty if CDN not configured
  }

  return widths
    .map((width) => {
      const url = getCloudinaryUrl(publicId, { width, ...options });
      return `${url} ${width}w`;
    })
    .join(', ');
};

/**
 * Local fallback: generates srcSet for local images
 * Assumes you have created responsive versions with naming convention: image-320w.webp, image-640w.webp, etc.
 */
export const getLocalSrcSet = (
  basePath: string,
  widths: number[],
  extension: string = 'webp'
): string => {
  // Remove extension from basePath if present
  const baseWithoutExt = basePath.replace(/\.(webp|png|jpg|jpeg)$/, '');
  
  return widths
    .map((width) => `${baseWithoutExt}-${width}w.${extension} ${width}w`)
    .join(', ');
};

/**
 * Smart image URL generator - uses CDN if available, falls back to local
 */
export const getImageUrl = (
  localPath: string,
  cloudinaryId?: string,
  transformations?: Parameters<typeof getCloudinaryUrl>[1]
): string => {
  if (CDN_CONFIG.USE_CDN && cloudinaryId) {
    return getCloudinaryUrl(cloudinaryId, transformations);
  }
  return localPath;
};

/**
 * Smart srcSet generator - uses CDN if available, falls back to local
 * Note: Without CDN, returns empty string to use single src image
 * To use local srcSet, you need to create multiple image sizes manually
 */
export const getImageSrcSet = (
  _localPath: string,
  widths: number[],
  cloudinaryId?: string,
  options?: { quality?: 'auto' | number; format?: 'auto' | 'webp' | 'avif' }
): string => {
  if (CDN_CONFIG.USE_CDN && cloudinaryId) {
    return getCloudinarySrcSet(cloudinaryId, widths, options);
  }
  // Return empty string when CDN is not configured
  // Browser will use the src attribute instead
  return '';
};
