'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'eager' | 'lazy';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Fallback image for errors
  const fallbackSrc = '/assets/placeholder.jpg';

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  // Add responsive sizes if not provided
  const defaultSizes = fill
    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    : undefined;

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {isLoading && !hasError && (
        <div className={`absolute inset-0 bg-slate-100 animate-pulse rounded-lg ${className}`} />
      )}
      
      <Image
        src={hasError ? fallbackSrc : src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        sizes={sizes || defaultSizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: objectFit,
        }}
      />
    </div>
  );
}