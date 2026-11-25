interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function BrandLogo({ variant = 'dark', className = '' }: BrandLogoProps) {
  const logoSrc = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_11.13.27_PM_d314bf04.jpeg';

  if (variant === 'light') {
    return (
      <span
        className={`inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-xs shrink-0 select-none ${className}`}
      >
        <img
          src={logoSrc}
          alt="Reliable Mattresses"
          className="h-9 sm:h-10 w-auto object-contain block"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center shrink-0 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Reliable Mattresses"
        className="h-10 sm:h-11 w-auto object-contain block"
      />
    </span>
  );
}
