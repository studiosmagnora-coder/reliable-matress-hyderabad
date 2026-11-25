import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { WhatsAppButton } from './WhatsAppButton';

type FaqCategory = 'All' | 'Mattress Care' | 'Warranty' | 'Sofas & Upholstery';

interface FaqItem {
  id: string;
  category: Exclude<FaqCategory, 'All'>;
  question: string;
  answer: string;
}

const FAQ_CATEGORIES: FaqCategory[] = [
  'All',
  'Warranty',
  'Mattress Care',
  'Sofas & Upholstery',
];

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'warranty-coverage',
    category: 'Warranty',
    question: 'What warranty periods apply to Reliable mattresses?',
    answer:
      'Warranty coverage depends on the mattress model as specified in our product brochures: our HR Foam Mattress carries a 15-year warranty, our Natural Latex Mattress carries a 7-year warranty, and our rebonded Orthopedic Mattress carries a 5-year warranty. For model-specific terms or enquiries about our Rebonded Mattress, please connect with our team on WhatsApp.',
  },
  {
    id: 'warranty-claim-care',
    category: 'Warranty',
    question: 'How should I care for my mattress to keep it in great condition during the warranty period?',
    answer:
      'Place your mattress on a flat, supportive, well-ventilated bed base, use a breathable waterproof protector, and avoid folding or bending high-density cores. Keeping the quilted fabric clean and dry helps preserve both comfort layers and structural integrity over years of use.',
  },
  {
    id: 'mattress-rotation',
    category: 'Mattress Care',
    question: 'Should I rotate my mattress regularly, and how often?',
    answer:
      'Yes. Rotating your mattress 180 degrees (head-to-foot) every 3 to 6 months helps distribute body weight evenly across the quilted cover and internal foam or latex layers, supporting balanced comfort over time.',
  },
  {
    id: 'mattress-cleaning',
    category: 'Mattress Care',
    question: 'How do I clean the quilted mattress cover without damaging the foam layers?',
    answer:
      'Vacuum the mattress surface gently with a soft upholstery attachment to remove dust. For minor spots, lightly blot the quilted fabric with a damp cloth and mild soap—never soak the mattress or apply harsh chemical cleaners, and allow it to air dry completely before making the bed.',
  },
  {
    id: 'size-thickness-guidance',
    category: 'Mattress Care',
    question: 'Which mattress thickness (4" to 8") and size should I choose?',
    answer:
      'We manufacture mattresses across standard dimensions from 36 × 72 inches up to 72 × 78 inches, in thicknesses between 4 inches and 8 inches depending on the model. Thinner profiles suit compact frames or loft beds, while 6-inch to 8-inch builds offer deeper cushioning and visual presence—you can test combinations in our Size & Thickness Guide above.',
  },
  {
    id: 'sofa-everyday-care',
    category: 'Sofas & Upholstery',
    question: 'How do I care for fabric and velvet sofas in everyday living?',
    answer:
      'Vacuum your sofa weekly using a soft brush nozzle along seams, cushions, and tufted contours. Rotate and plump removable seat or back cushions periodically so foam settles evenly, and keep upholstery away from harsh direct sunlight to help maintain fabric tone.',
  },
  {
    id: 'sofa-spill-handling',
    category: 'Sofas & Upholstery',
    question: 'What is the best way to handle accidental spills on upholstered sofas?',
    answer:
      'Blot any liquid spill immediately with a clean, dry absorbent cloth—avoid scrubbing, which can push stains deeper into woven or velvet fibers. For stubborn marks, test a gentle fabric-safe upholstery cleaner on a discreet area first or reach out to our team for fabric-specific care advice.',
  },
  {
    id: 'headboard-wall-panelling-care',
    category: 'Sofas & Upholstery',
    question: 'How do I maintain upholstered headboards and bedroom wall panelling?',
    answer:
      'Dust padded headboards and upholstered or fluted wooden wall panelling lightly with a dry microfiber cloth or soft vacuum brush. Avoid excessive moisture on suede, bouclé, and timber finishes, and wipe dry promptly if condensation occurs near windows.',
  },
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleItems =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: FaqCategory) => {
    setActiveCategory(category);
    const nextList =
      category === 'All'
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((item) => item.category === category);
    if (nextList.length > 0 && !nextList.some((item) => item.id === openId)) {
      setOpenId(nextList[0].id);
    }
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#F8F8F9] border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Editorial Intro, Topic Filter & WhatsApp Help Box */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28 space-y-7">
            <div>
              <div className="flex items-center gap-3 mb-3.5">
                <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                  CARE &amp; WARRANTY GUIDE
                </p>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-base text-[#222428]/80 leading-[1.7]">
                Clear answers on mattress maintenance, brochure-specified warranty coverage, and
                caring for upholstered sofas, headboards, and wall panelling.
              </p>
            </div>

            {/* Topic Filter Buttons */}
            <div
              role="tablist"
              aria-label="Filter frequently asked questions"
              className="flex flex-wrap gap-2"
            >
              {FAQ_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === 'All'
                    ? FAQ_ITEMS.length
                    : FAQ_ITEMS.filter((item) => item.category === category).length;

                return (
                  <button
                    key={category}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(category)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                      isActive
                        ? 'bg-[#C8141B] text-white shadow-sm'
                        : 'bg-white text-[#222428]/80 border border-[#222428]/12 hover:border-[#222428]/35 hover:text-[#222428]'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`font-mono text-[10px] tabular-nums ${
                        isActive ? 'text-white/80' : 'text-[#6D6E71]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Direct Product Guidance Card */}
            <div className="bg-white rounded-2xl border border-[#222428]/10 p-6 shadow-[0_4px_20px_-6px_rgba(34,36,40,0.06)]">
              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-[#F8F8F9] border border-[#222428]/10 text-[#C8141B] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-normal text-[#222428]">
                    Need Advice for Your Home?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6D6E71] mt-1 leading-relaxed">
                    Ask our team directly about mattress firmness, custom upholstery fabrics, or
                    model warranty sheets.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <WhatsAppButton
                  productName="Product Care & Warranty Question"
                  customMessage="Hello Reliable Mattresses & Furniture, I have a question regarding mattress care, sizing, or warranty details."
                  label="Ask on WhatsApp"
                  variant="secondary"
                  fullWidth
                />
              </div>
            </div>
          </Reveal>

          {/* Right Accordion Questions */}
          <Reveal className="lg:col-span-7 space-y-3.5" delayMs={80}>
            {visibleItems.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const triggerId = `faq-trigger-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-white border-[#C8141B] shadow-[0_12px_32px_-12px_rgba(200,20,27,0.16)]'
                      : 'bg-white/85 border-[#222428]/10 hover:bg-white hover:border-[#222428]/25'
                  }`}
                >
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B]"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <span
                        className={`w-8 h-8 rounded-lg font-mono text-xs font-semibold tabular-nums flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${
                          isOpen
                            ? 'bg-[#C8141B] text-white'
                            : 'bg-[#F1F2F4] text-[#222428]'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                          {item.category}
                        </p>
                        <h3 className="font-display text-lg sm:text-xl font-normal text-[#222428] mt-1 leading-snug">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-2 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C8141B]' : 'text-[#6D6E71]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="px-6 pb-6 pt-1 pl-[4.5rem]"
                    >
                      <div className="pt-3 border-t border-[#222428]/8 text-sm sm:text-[15px] text-[#222428]/80 leading-[1.72]">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
