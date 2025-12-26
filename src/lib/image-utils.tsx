import { ImgHTMLAttributes, useState } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

/**
 * Replacement for Next.js Image component
 * Provides similar API but uses standard img tag
 */
export function OptimizedImage({
  src,
  width,
  height,
  priority,
  fill,
  objectFit,
  objectPosition,
  className = '',
  style,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageStyle: React.CSSProperties = {
    ...style,
    ...(fill && {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }),
    ...(objectFit && { objectFit }),
    ...(objectPosition && { objectPosition }),
  };

  if (imageError) {
    return (
      <div
        className={className}
        style={{ width, height, ...imageStyle }}
      >
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      width={width}
      height={height}
      className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity ${className}`}
      style={imageStyle}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setImageError(true);
        setIsLoading(false);
      }}
      {...props}
    />
  );
}

// Default export for easier migration
export default OptimizedImage;

