import { Award, Layers, HeartHandshake, BedDouble, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const PILLARS = [
  {
    number: '01',
    icon: Award,
    eyebrow: 'Manufacturing Heritage',
    title: 'Six Years of Experience',
    description:
      'Six years of dedicated experience in orthopedic mattress manufacturing, shaping dependable support for everyday rest.',
    note: 'Orthopedic Sleep Speciality',
  },
  {
    number: '02',
    icon: Layers,
    eyebrow: 'Component Selection',
    title: 'Quality Materials',
    description:
      'Focused on selecting high-density rebonded cores, high-resilience foams, natural latex, and breathable quilted covers.',
    note: 'Thoughtful Multi-Layer Construction',
  },
  {
    number: '03',
    icon: HeartHandshake,
    eyebrow: 'Built Around Trust',
    title: 'Customer Satisfaction',
    description:
      'Customer satisfaction sits at the center of our approach—delivering honest guidance and mattresses crafted for years of comfort.',
    note: 'Direct Personal Consultation',
  },
  {
    number: '04',
    icon: BedDouble,
    eyebrow: 'Tailored Sleep Feel',
    title: 'Comfort & Support',
    description:
      'Multiple core architectures—from firm orthopedic stability to buoyant natural latex—so every sleeper finds the right balance.',
    note: 'Custom Sizes & Thicknesses',
  },
];

const WARRANTY_HIGHLIGHTS = [
  {
    model: 'HR Foam Mattress',
    coverage: '15-Year Warranty',
    detail: 'As specified in product brochure',
  },
  {
    model: 'Natural Latex Mattress',
    coverage: '7-Year Warranty',
    detail: 'As specified in product brochure',
  },
  {
    model: 'Rebonded Orthopedic',
    coverage: '5-Year Warranty',
    detail: 'As specified in product brochure',
  },
];

export function WhyReliable() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#222428]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                WHY CHOOSE RELIABLE?
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Quality You Can Feel. Reliability You Can Trust.
            </h2>
          </div>

          <p className="text-base text-[#222428]/78 leading-relaxed max-w-md">
            Every Reliable mattress is shaped by material integrity, thoughtful construction, and a
            practical focus on long-term customer satisfaction.
          </p>
        </Reveal>

        {/* Horizontal Architectural Pillar Cards (Not simple icon-over-heading boxes) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delayMs={idx * 75}
                className="group h-full p-7 sm:p-8 rounded-2xl bg-[#F8F8F9] border border-[#222428]/10 shadow-[0_4px_20px_-6px_rgba(34,36,40,0.05)] flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(34,36,40,0.12)]"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Framed Sculptural Icon Column */}
                  <div className="shrink-0 flex flex-col items-center gap-2.5">
                    <div className="w-14 h-14 rounded-xl bg-white border border-[#222428]/10 text-[#C8141B] flex items-center justify-center shadow-xs transition-all duration-300 group-hover:bg-[#C8141B] group-hover:text-white group-hover:border-[#C8141B]">
                      <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#6D6E71] tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  {/* Editorial Pillar Copy */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                      {item.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-normal text-[#222428] mt-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#222428]/80 leading-[1.68]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222428]/8 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#6D6E71]">{item.note}</span>
                  <span className="w-6 h-[2px] bg-[#222428]/15 group-hover:w-10 group-hover:bg-[#C8141B] transition-all duration-300" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Verified Brochure Warranty & Trust Strip */}
        <Reveal delayMs={140} className="mt-8">
          <div className="rounded-2xl bg-[#222428] text-white p-7 sm:p-8 lg:p-9 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              <div className="lg:col-span-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#C8141B]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/70">
                    PRODUCT WARRANTY &amp; RELIABILITY
                  </p>
                  <h3 className="font-display text-2xl font-normal text-white mt-1 leading-snug">
                    Transparent Model Coverage
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    Warranty terms apply per individual mattress model as outlined in our official
                    product brochures.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {WARRANTY_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.model}
                    className="rounded-xl bg-white/6 border border-white/10 px-4 py-4"
                  >
                    <p className="text-xs text-white/75 font-medium">{item.model}</p>
                    <p className="font-display text-xl text-white mt-1">{item.coverage}</p>
                    <p className="text-[11px] text-white/60 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
