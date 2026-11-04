import React, { useState } from 'react';
import { SunMedium } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackText = 'Renerr Clean Energy Initiative',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-brand-light/60 ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-brand-light/80 animate-pulse flex items-center justify-center">
          <SunMedium className="w-8 h-8 text-brand-primary/40 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-brand-dark to-brand-primary text-white text-center">
          <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center mb-3 text-brand-accent">
            <SunMedium className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-brand-cream">{fallbackText}</p>
          <p className="text-xs text-brand-accent/80 mt-1">Solar Electricity Access for Africa</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
