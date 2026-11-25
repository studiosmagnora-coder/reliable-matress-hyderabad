import { ArrowUpRight, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';
import { Reveal } from './Reveal';

interface CustomerReview {
  id: string;
  name: string;
  quote: string;
}

const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'erigi-ashwini',
    name: 'Erigi Ashwini',
    quote:
      'Good quality mattresses at affordable prices. Very happy with the quality and pricing!',
  },
  {
    id: 'abdur',
    name: 'Abdur',
    quote:
      'A very comfortable and affordable mattress destination with different varieties, including spring, foam and coir mattresses. Highly recommended!',
  },
  {
    id: 'sifathur-rahman',
    name: 'Sifathur Rahman',
    quote:
      'The material and quality are wonderful. I got a good mattress within my budget, even better than some branded mattresses.',
  },
  {
    id: 'syed-ali',
    name: 'Syed Ali',
    quote:
      'As the name says, Reliable is truly reliable. They offer a wide range of mattresses to suit different comfort needs and requirements.',
  },
  {
    id: 'zohaib-hussain',
    name: 'Zohaib Hussain',
    quote: 'The best service!',
  },
  {
    id: 'syeda-humaira',
    name: 'Syeda Humaira',
    quote:
      'I purchased a mattress three years ago, and it is still in use and in good condition. Very satisfied with its durability.',
  },
  {
    id: 'mohd-mukarram',
    name: 'Mohd Mukarram',
    quote: 'Amazing mattresses with excellent quality.',
  },
  {
    id: 'shaik-saleem',
    name: 'Shaik Saleem',
    quote: 'Good quality products at reasonable prices.',
  },
  {
    id: 'obedus-salam-naveed',
    name: 'Obedus Salam Naveed',
    quote: 'Good quality and nice service.',
  },
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function CustomerReviews() {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-white border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                GOOGLE REVIEWS
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1] text-balance">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-base text-[#222428]/80 leading-[1.7] max-w-xl">
              Real experiences from customers who trust Reliable Mattresses &amp; Furniture for
              quality, comfort and value.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start lg:self-end px-4 py-2.5 min-h-[42px] rounded-lg border border-[#222428]/15 bg-[#F8F8F9] text-xs sm:text-sm font-semibold text-[#222428] hover:border-[#C8141B] hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0"
          >
            <span>View Showroom on Google Maps</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </Reveal>

        {/* 9 Customer Review Cards in a 3-column desktop grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {CUSTOMER_REVIEWS.map((review, index) => (
            <Reveal key={review.id} delayMs={(index % 3) * 60} className="flex">
              <article className="w-full rounded-2xl bg-[#F8F8F9] border border-[#222428]/10 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:bg-white hover:border-[#222428]/25 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(34,36,40,0.1)]">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono tabular-nums text-[#6D6E71]">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans font-medium">Google Review</span>
                    </div>
                    <Quote
                      className="w-4 h-4 text-[#C8141B]/70 shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  <blockquote className="mt-5 text-[15px] text-[#222428]/90 leading-[1.72]">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <footer className="mt-6 pt-4 border-t border-[#222428]/8 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 rounded-lg bg-white border border-[#222428]/12 text-[#222428] font-display text-sm flex items-center justify-center shrink-0"
                  >
                    {getInitials(review.name)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-normal text-[#222428] leading-snug truncate">
                      {review.name}
                    </h3>
                    <p className="text-xs text-[#6D6E71]">Reliable Customer</p>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Our Promise Editorial Statement */}
        <Reveal className="mt-12" delayMs={80}>
          <div className="rounded-2xl bg-[#17191C] text-white p-7 sm:p-9 lg:p-10 border border-[#222428] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                  OUR PROMISE
                </p>
              </div>
              <p className="font-display text-xl sm:text-2xl lg:text-[26px] font-normal text-white leading-[1.35]">
                At Reliable Mattresses &amp; Furniture, we believe that good sleep should be
                comfortable and affordable. Your trust and satisfaction inspire us to deliver
                quality products every day.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#mattresses"
                className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] rounded-lg border border-white/25 bg-white/5 text-sm font-semibold text-white hover:bg-white/12 hover:border-white/45 transition-colors whitespace-nowrap"
              >
                Explore Mattresses
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
