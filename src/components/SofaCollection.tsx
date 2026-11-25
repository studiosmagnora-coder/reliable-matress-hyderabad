import { ArrowUpRight, Check } from 'lucide-react';
import { SOFA_CATEGORIES, SofaCategoryItem } from '../data/catalog';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';
import { Reveal } from './Reveal';

interface SofaCollectionProps {
  onSelectSofa: (sofa: SofaCategoryItem) => void;
}

export function SofaCollection({ onSelectSofa }: SofaCollectionProps) {
  return (
    <section
      id="sofas"
      className="py-20 lg:py-28 bg-[#F8F8F9] border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                FURNITURE DIVISION · SOFAS
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Beyond Sleep. Designed for Living.
            </h2>
            <p className="mt-4 text-base text-[#222428]/80 leading-relaxed max-w-xl">
              Explore our furniture collection and bring comfort, style and functionality into
              every corner of your home.
            </p>
          </div>

          <p className="text-xs font-medium text-[#6D6E71] max-w-xs">
            Custom upholstery shades and seating configurations available on enquiry.
          </p>
        </Reveal>

        {/* Curated 3-row Showroom Grid: Row 1 (2+1), Row 2 (1+1+1), Row 3 (1+2) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {SOFA_CATEGORIES.map((sofa, index) => {
            const isWideCard = index === 0 || index === 6;

            return (
              <Reveal
                key={sofa.id}
                delayMs={(index % 3) * 80}
                className={`flex ${isWideCard ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <article
                  className={`group w-full h-full bg-white rounded-2xl border border-[#222428]/10 overflow-hidden flex flex-col shadow-[0_4px_24px_-6px_rgba(34,36,40,0.06)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-14px_rgba(34,36,40,0.14)] ${
                    isWideCard ? 'lg:grid lg:grid-cols-12' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectSofa(sofa)}
                    aria-label={`Explore ${sofa.name}`}
                    className={`bg-[#F1F2F4] overflow-hidden relative block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                      isWideCard
                        ? 'aspect-[16/10] lg:aspect-auto lg:col-span-6 lg:h-full lg:min-h-[360px]'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <SafeImage
                      src={sofa.image}
                      alt={sofa.alt}
                      className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#17191C]/70 via-[#17191C]/10 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#222428] font-mono text-[11px] font-semibold tabular-nums px-2.5 py-1 rounded-md shadow-xs">
                      0{index + 1}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/95">
                        {sofa.categoryLabel}
                      </span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/95 text-[#222428] shadow-xs transition-colors duration-200 group-hover:bg-[#C8141B] group-hover:text-white shrink-0">
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </button>

                  <div
                    className={`p-7 flex flex-col justify-between flex-1 ${
                      isWideCard ? 'lg:col-span-6 lg:p-8' : ''
                    }`}
                  >
                    <div>
                      <h3 className="font-display text-2xl sm:text-[26px] font-normal tracking-[-0.01em] text-[#222428] leading-snug">
                        {sofa.name}
                      </h3>
                      <p className="mt-2.5 text-[15px] text-[#222428]/80 leading-[1.65]">
                        {sofa.shortDescription}
                      </p>

                      <ul className="mt-4 pt-4 border-t border-[#222428]/8 space-y-2 text-xs sm:text-[13px] text-[#222428]/78">
                        {sofa.highlights.slice(0, 2).map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <Check
                              className="w-3.5 h-3.5 text-[#C8141B] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`mt-7 pt-5 border-t border-[#222428]/8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch ${
                        isWideCard
                          ? 'md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'
                          : 'md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectSofa(sofa)}
                        className="w-full h-full inline-flex items-center justify-center px-3 py-2.5 min-h-[44px] rounded-lg border border-[#222428]/25 bg-white text-[#222428] text-[13px] font-semibold leading-none hover:bg-[#222428] hover:text-white hover:border-[#222428] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222428]"
                      >
                        Explore Collection
                      </button>

                      <WhatsAppButton
                        productName={sofa.name}
                        label="WhatsApp Enquiry"
                        variant="primary"
                        fullWidth
                        className="h-full min-h-[44px] px-3 text-[13px]"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
