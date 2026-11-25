import { ArrowRight } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';

const HERO_DESKTOP_IMAGE = '/src/assets/images/hero_bedroom_desktop_1795632021235.jpg';
const HERO_MOBILE_IMAGE = '/src/assets/images/hero_bedroom_mobile_clean_1795632042018.jpg';

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#17191C] text-white overflow-hidden border-b border-[#222428]/15"
    >
      {/* Desktop & Tablet Full-Bleed Luxury Bedroom Background Composition */}
      <div className="hidden md:block absolute inset-0 overflow-hidden" aria-hidden="true">
        <SafeImage
          src={HERO_DESKTOP_IMAGE}
          alt="Luxury modern bedroom featuring a thick white diamond-quilted orthopedic mattress on a charcoal upholstered bed bathed in natural morning sunlight"
          loading="eager"
          fallbackTitle="Reliable Orthopedic & Foam Mattresses"
          className="w-full h-full object-cover object-center animate-hero-bg-zoom"
        />

        {/* Measured Brand Contrast Scrims (Charcoal left backdrop fading to luminous bedroom showcase on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17191C]/92 via-[#222428]/68 via-[46%] to-[#222428]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17191C]/65 via-transparent to-[#17191C]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(200,20,27,0.14),transparent_48%)]" />
      </div>

      {/* Mobile Dedicated Cropped Bedroom Showcase (Mattress Clearly Visible Above Copy) */}
      <div className="md:hidden relative aspect-[4/3] w-full bg-[#222428] overflow-hidden">
        <SafeImage
          src={HERO_MOBILE_IMAGE}
          alt="Luxury modern bedroom featuring a crisp white diamond-quilted orthopedic mattress and upholstered charcoal headboard"
          loading="eager"
          fallbackTitle="Reliable Orthopedic & Foam Mattresses"
          className="w-full h-full object-cover object-center animate-hero-bg-zoom"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#17191C] via-[#17191C]/55 to-transparent"
        />
      </div>

      {/* Hero Editorial Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14 md:py-24 lg:py-28 xl:py-32 md:min-h-[650px] lg:min-h-[720px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left Editorial Typography & Actions */}
          <div className="lg:col-span-7 xl:col-span-6 max-w-2xl">
            <div className="animate-hero-enter">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-8 bg-[#C8141B] shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-white/90">
                  RELIABLE MATTRESSES &amp; FURNITURE
                </p>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-normal tracking-[-0.015em] text-white leading-[1.04]">
                Where Better Sleep Begins.
              </h1>

              <p className="mt-6 text-base sm:text-[17px] lg:text-lg text-[#F8F8F9]/88 leading-[1.7] max-w-xl">
                Experience exceptional comfort with thoughtfully crafted mattresses, quality
                materials and six years of manufacturing expertise.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="animate-hero-enter-delay">
              <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#mattresses"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-lg bg-[#C8141B] text-white font-semibold leading-none text-sm hover:bg-[#A30F15] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Explore Mattresses</span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <WhatsAppButton
                  productName="Mattress Consultation"
                  customMessage="Hello Reliable Mattresses & Furniture, I would like guidance on choosing the right mattress for my home."
                  label="Enquire on WhatsApp"
                  variant="light"
                  className="px-7 py-3.5 min-h-[48px] hover:-translate-y-0.5 hover:shadow-lg"
                />
              </div>

              {/* Clean Architectural Highlights Strip */}
              <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-[#F8F8F9]/70 font-semibold">
                    01 · EXPERIENCE
                  </p>
                  <p className="text-sm font-semibold text-white mt-1">
                    Six Years Manufacturing
                  </p>
                  <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                    Orthopedic mattress specialist
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-[#F8F8F9]/70 font-semibold">
                    02 · MATERIALS
                  </p>
                  <p className="text-sm font-semibold text-white mt-1">
                    Thoughtful Layering
                  </p>
                  <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                    HR foam, rebonded &amp; natural latex
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-[#F8F8F9]/70 font-semibold">
                    03 · TAILORED FIT
                  </p>
                  <p className="text-sm font-semibold text-white mt-1">
                    Custom Sizes &amp; Heights
                  </p>
                  <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                    Available in 4&quot; to 8&quot; thickness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bottom Floating Product Highlight Anchor (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end animate-hero-image">
            <a
              href="#construction"
              className="group bg-white/95 backdrop-blur-md text-[#222428] rounded-2xl p-6 shadow-xl border border-white/60 max-w-xs w-full transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#C8141B]">
                  ORTHOPEDIC SIGNATURE
                </span>
                <span className="font-mono text-[11px] text-[#6D6E71] tabular-nums">
                  4&quot; – 8&quot;
                </span>
              </div>

              <p className="font-display text-xl text-[#222428] mt-2 leading-snug">
                Multi-Layer Quilted Support
              </p>

              <p className="text-xs text-[#6D6E71] mt-1.5 leading-relaxed">
                Breathable knitted cover over high-density comfort and orthopedic core layers.
              </p>

              <div className="mt-4 pt-3.5 border-t border-[#222428]/10 flex items-center justify-between text-xs font-semibold text-[#C8141B]">
                <span>Explore Mattress Layers</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
