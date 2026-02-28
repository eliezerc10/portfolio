import { AdvancedImage } from '@cloudinary/react';
import { cld, isCloudinaryEnabled } from '../../config/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  localSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
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
  className,
  loading = 'lazy',
}) => {
  if (isCloudinaryEnabled()) {
    // Use Cloudinary with automatic optimization
    // Only apply format and quality, let CSS handle sizing
    const img = cld
      .image(publicId)
      .format('auto') // Auto-format (WebP, AVIF based on browser)
      .quality('auto'); // Auto-quality optimization

    return <AdvancedImage cldImg={img} alt={alt} className={className} />;
  }

  // Fallback to local image
  // Note: width/height are omitted to let CSS handle sizing and prevent deformation
  return (
    <img
      src={localSrc}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
};
