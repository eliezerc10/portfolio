interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  srcSet,
  sizes,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
}) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
    />
  );
};
