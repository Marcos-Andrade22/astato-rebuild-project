import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  width,
  height,
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f3f4f6' viewBox='0 0 100 100'%3E%3Crect width='100' height='100'/%3E%3C/svg%3E",
  fetchPriority = 'auto',
  loading = 'lazy',
  onLoad,
  onError
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Se eager, já está em view — sem necessidade de observer
    if (loading === 'eager') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '200px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        ref={imgRef}
        src={isInView ? src : placeholder}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        // @ts-expect-error fetchpriority não está nos tipos do React ainda
        fetchpriority={fetchPriority}
        className={cn(
          'transition-opacity duration-300 w-full h-full',
          isLoaded ? 'opacity-100' : 'opacity-0',
          hasError && 'opacity-50',
          imgClassName
        )}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
          <span className="text-sm">Erro ao carregar imagem</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
