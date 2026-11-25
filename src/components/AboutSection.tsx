import { ArrowRight, Check } from 'lucide-react';
import { ASSETS } from '../data/catalog';
import { BrandLogo } from './BrandLogo';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';
import { Reveal } from './Reveal';

const CRAFT_POINTS = [
  'Orthopedic mattress manufacturing experience spanning six years',
  'Focused selection of durable foams, rebonded cores, and natural latex',
  'Custom sizing, thickness choices, and complementary home furniture',
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Editorial Copy */}
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                ABOUT US
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Six Years of Building Comfort and Trust.
            </h2>

            <p className="mt-6 text-base sm:text-[17px] text-[#222428]/80 leading-[1.75]">
              Reliable Mattresses &amp; Furniture is dedicated to bringing quality, comfort and
              reliability into everyday living. With six years of experience in manufacturing
              orthopedic mattresses, we focus on quality materials, dependable product
              construction and customer satisfaction. Our collection also extends to stylish sofas,
              beds, headboards and wall panelling, offering furniture solutions for modern homes.
              At Reliable, our goal is simple: to create products our customers can feel confident
              choosing.
            </p>

            <ul className="mt-6 pt-6 border-t border-[#222428]/10 space-y-2.5 text-sm text-[#222428]/85">
              {CRAFT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Check
                    className="w-4 h-4 text-[#C8141B] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                productName="Reliable Mattresses & Furniture Team"
                customMessage="Hello Reliable Mattresses & Furniture, I would like to speak with your team about your mattresses and furniture."
                label="Talk to Our Team"
                variant="secondary"
                className="px-6 py-3 min-h-[46px]"
              />
              <a
                href="#contact"
                className="group/link inline-flex items-center gap-2 px-4 py-2.5 min-h-[46px] rounded-lg border border-[#222428]/20 text-sm font-semibold text-[#222428] hover:border-[#C8141B] hover:text-[#C8141B] transition-all duration-200"
              >
                <span>Send a Contact Enquiry</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          {/* Craftsmanship Photograph with Authentic Reliable Mattresses Logo Plaque */}
          <Reveal className="lg:col-span-7 order-1 lg:order-2" delayMs={100}>
            <div className="group relative aspect-[4/3] lg:aspect-[16/11] rounded-2xl overflow-hidden bg-[#F1F2F4] shadow-[0_12px_36px_-12px_rgba(34,36,40,0.14)] border border-[#222428]/10">
              <SafeImage
                src={ASSETS.aboutWorkshop}
                alt="Sunlit luxury diamond-quilted Reliable orthopedic mattress with charcoal piping on an oak bed frame"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#17191C]/50 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3">
                <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-white/70">
                  <BrandLogo variant="dark" className="scale-90 origin-left" />
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6D6E71] mt-1.5">
                    6 Years · Orthopedic Mattress Craft
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
