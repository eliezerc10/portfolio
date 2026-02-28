import { AdvancedImage } from '@cloudinary/react';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { cld, isCloudinaryEnabled } from '../../config/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  localSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * Smart Image Component
 * - Uses Cloudinary when enabled (automatic optimization, responsive images)
 * - Falls back to local images when Cloudinary is disabled
 */
export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  publicId,
  localSrc,
  alt,
  width,
  className,
  loading = 'lazy',
  fetchPriority,
}) => {
  if (isCloudinaryEnabled()) {
    // Use Cloudinary with automatic optimization
    const img = cld
      .image(publicId)
      .format('auto') // Auto-format (WebP, AVIF based on browser)
      .quality('auto'); // Auto-quality optimization

    // Apply responsive resize based on display dimensions
    // Use scale to maintain aspect ratio without cropping
    if (width) {
      // Scale to max width (2x for retina displays)
      img.resize(scale().width(width * 2));
    }

    return (
      <AdvancedImage 
        cldImg={img} 
        alt={alt} 
        className={className}
        {...(fetchPriority && { fetchpriority: fetchPriority })}
      />
    );
  }

  // Fallback to local image
  // Note: width/height are omitted to let CSS handle sizing and prevent deformation
  return (
    <img
      src={localSrc}
      alt={alt}
      className={className}
      loading={loading}
      {...(fetchPriority && { fetchpriority: fetchPriority })}
    />
  );
};
