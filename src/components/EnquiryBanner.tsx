import { ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { Reveal } from './Reveal';

export function EnquiryBanner() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#C8141B] text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(23,25,28,0.28),transparent_55%)] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-white/75" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-white/85">
                DIRECT MANUFACTURING ENQUIRY
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-0.015em] text-white leading-[1.1]">
              Looking for the Right Mattress?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              Tell us your preferred mattress type, size and thickness. Our team will help you
              with your enquiry.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3.5">
            <WhatsAppButton
              productName="Mattress Enquiry"
              customMessage="Hello Reliable Mattresses & Furniture, I am looking for the right mattress and would like to share my preferred type, size, and thickness."
              label="Enquire on WhatsApp"
              variant="light"
              className="px-7 py-3.5 min-h-[48px] font-bold"
            />

            <a
              href="#size-guide"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg border border-white/40 text-white text-sm font-semibold leading-none hover:bg-white/12 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Size &amp; Thickness Guide</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
