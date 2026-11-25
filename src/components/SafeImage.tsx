import { useState } from 'react';
import { BedDouble } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F1F2F4] via-[#F8F8F9] to-[#E5E7EB] text-[#222428]/70 p-6 text-center ${className}`}
      >
        <BedDouble className="w-8 h-8 mb-2 text-[#C8141B]/65" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-[#222428]/75">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
