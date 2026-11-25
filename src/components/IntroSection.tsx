import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function IntroSection() {
  return (
    <section className="py-18 lg:py-26 bg-white border-b border-[#222428]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Architectural Brand Pillar Callout */}
          <Reveal className="lg:col-span-4">
            <div className="rounded-2xl bg-[#F8F8F9] border border-[#222428]/10 p-7 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#C8141B]" aria-hidden="true" />
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#C8141B]">
                  SPECIALIST FOCUS
                </p>
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-5xl sm:text-6xl text-[#222428] leading-none tabular-nums">
                  6
                </span>
                <span className="text-sm font-semibold text-[#6D6E71] uppercase tracking-[0.12em]">
                  Years Crafting Sleep
                </span>
              </div>

              <p className="mt-4 text-sm text-[#222428]/80 leading-relaxed">
                Dedicated orthopedic &amp; high-resilience mattress manufacturing with reliable
                upholstery craftsmanship.
              </p>

              <div className="mt-6 pt-5 border-t border-[#222428]/10 flex items-center justify-between text-xs font-medium text-[#6D6E71]">
                <span>Primary Craft</span>
                <span className="font-semibold text-[#222428]">Orthopedic &amp; Foam</span>
              </div>
            </div>
          </Reveal>

          {/* Right Editorial Brand Introduction */}
          <Reveal className="lg:col-span-8 lg:pl-4" delayMs={80}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                INTRODUCTION TO RELIABLE
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Comfort Begins with Quality.
            </h2>

            <p className="mt-6 text-base sm:text-[17px] text-[#222428]/80 leading-[1.78] max-w-3xl">
              At Reliable Mattresses &amp; Furniture, we believe quality sleep starts with the right
              mattress. With six years of experience in orthopedic mattress manufacturing, we focus
              on carefully selected materials, dependable construction and customer satisfaction.
              Alongside our mattress collection, we also offer stylish sofas, beds and bedroom
              interior solutions to complement modern homes.
            </p>

            <div className="mt-9 pt-7 border-t border-[#222428]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#6D6E71]">
                <span>
                  <strong className="font-semibold text-[#222428]">Mattresses:</strong> Primary
                  Manufacturing Focus
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-[#222428]/25">
                  ·
                </span>
                <span>
                  <strong className="font-semibold text-[#222428]">Interiors:</strong> Sofas, Beds
                  &amp; Panelling
                </span>
              </div>

              <a
                href="#about"
                className="group/link inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-lg border border-[#222428]/20 text-sm font-semibold text-[#222428] hover:border-[#C8141B] hover:text-[#C8141B] transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Discover Our Story</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
