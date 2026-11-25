import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';

interface ProductCardProps {
  indexLabel?: string;
  title: string;
  kicker: string;
  feel?: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  warrantyNote?: string | null;
  onViewDetails: () => void;
  viewDetailsLabel?: string;
  whatsappProductName: string;
}

export function ProductCard({
  indexLabel,
  title,
  kicker,
  feel,
  description,
  features,
  image,
  alt,
  warrantyNote,
  onViewDetails,
  viewDetailsLabel = 'View Details',
  whatsappProductName,
}: ProductCardProps) {
  return (
    <article className="group w-full h-full bg-white rounded-2xl border border-[#222428]/10 overflow-hidden flex flex-col shadow-[0_4px_24px_-6px_rgba(34,36,40,0.06)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-14px_rgba(34,36,40,0.15)]">
      {/* Interactive Photography Showcase Frame */}
      <button
        type="button"
        onClick={onViewDetails}
        aria-label={`View details for ${title}`}
        className="aspect-[16/10] w-full bg-[#F1F2F4] overflow-hidden relative block text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B]"
      >
        <SafeImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />

        {/* Subtle Editorial Scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#17191C]/75 via-[#17191C]/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"
        />

        {/* Top-Left Index & Bottom-Left Category Strip */}
        {indexLabel && (
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#222428] font-mono text-[11px] font-semibold tabular-nums px-2.5 py-1 rounded-md shadow-xs">
            {indexLabel}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/85">
              {kicker}
            </p>
            {feel && <p className="text-sm font-semibold text-white mt-0.5">{feel}</p>}
          </div>

          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/95 text-[#222428] shadow-sm transition-all duration-200 group-hover:bg-[#C8141B] group-hover:text-white shrink-0">
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </button>

      {/* Structured Editorial Content */}
      <div className="p-7 sm:p-8 flex flex-col flex-1">
        <h3 className="font-display text-2xl sm:text-[28px] font-normal tracking-[-0.01em] text-[#222428] leading-snug">
          {title}
        </h3>

        <p className="mt-3 text-[15px] text-[#222428]/80 leading-[1.68] md:min-h-[4.95rem]">
          {description}
        </p>

        {warrantyNote && (
          <div className="mt-4 rounded-xl bg-[#F8F8F9] border border-[#222428]/8 px-4 py-3 flex items-center gap-2.5 md:min-h-[3.75rem]">
            <ShieldCheck className="w-4 h-4 text-[#C8141B] shrink-0" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-wide text-[#222428] leading-snug">
              {warrantyNote}
            </p>
          </div>
        )}

        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#222428]/80 flex-1 content-start">
          {features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check
                className="w-4 h-4 text-[#C8141B] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 pt-5 border-t border-[#222428]/8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
          <button
            type="button"
            onClick={onViewDetails}
            className="w-full h-full inline-flex items-center justify-center px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#222428]/25 bg-white text-[#222428] text-sm font-semibold leading-none hover:bg-[#222428] hover:text-white hover:border-[#222428] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222428]"
          >
            {viewDetailsLabel}
          </button>

          <WhatsAppButton
            productName={whatsappProductName}
            label="WhatsApp Enquiry"
            variant="primary"
            fullWidth
            className="h-full min-h-[44px] px-3.5"
          />
        </div>
      </div>
    </article>
  );
}
