import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppEnquiryUrl } from '../data/catalog';

interface WhatsAppButtonProps {
  productName?: string;
  size?: string;
  thickness?: string;
  customMessage?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
  className?: string;
  fullWidth?: boolean;
}

export function WhatsAppButton({
  productName = 'Reliable Mattresses & Furniture',
  size,
  thickness,
  customMessage,
  label = 'WhatsApp Enquiry',
  variant = 'primary',
  className = '',
  fullWidth = false,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppEnquiryUrl({
    productName,
    size,
    thickness,
    customMessage,
  });

  const baseClasses =
    'group/btn inline-flex items-center justify-center gap-2 font-semibold leading-none text-sm rounded-lg px-4 py-2.5 min-h-[44px] whitespace-nowrap shrink-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B]';

  const variantClasses: Record<NonNullable<WhatsAppButtonProps['variant']>, string> = {
    primary:
      'bg-[#C8141B] text-white hover:bg-[#A30F15] shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'bg-[#222428] text-white hover:bg-[#17191C] shadow-sm hover:shadow-md hover:-translate-y-0.5',
    outline:
      'border border-[#C8141B]/35 text-[#C8141B] bg-white hover:bg-[#C8141B] hover:text-white hover:border-[#C8141B] hover:-translate-y-0.5',
    light:
      'bg-white text-[#C8141B] hover:bg-[#F8F8F9] shadow-sm hover:shadow-md hover:-translate-y-0.5',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle
        className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:scale-110"
        aria-hidden="true"
      />
      <span>{label}</span>
    </a>
  );
}

export function FloatingWhatsAppButton() {
  const href = buildWhatsAppEnquiryUrl({
    productName: 'Mattress & Furniture Enquiry',
    customMessage:
      'Hello Reliable Mattresses & Furniture, I would like to enquire about your mattresses and furniture.',
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp with ${BUSINESS_INFO.brandName}`}
      className="fixed bottom-4 right-4 z-40 md:hidden inline-flex items-center gap-2 bg-[#C8141B] text-white px-4 py-2.5 rounded-lg shadow-lg border border-white/15 text-sm font-semibold min-h-[44px] hover:bg-[#A30F15] transition-transform duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B]"
    >
      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
