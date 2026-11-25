import { useState, useEffect, useCallback } from 'react';
import {
  ArrowUpRight,
  Check,
  Expand,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  BED_INTERIOR_CATEGORIES,
  BedInteriorItem,
  HEADBOARDS_GALLERY,
  WALL_PANELLING_GALLERY,
  InteriorShowcaseItem,
} from '../data/catalog';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';
import { Reveal } from './Reveal';

interface BedsInteriorsProps {
  onSelectItem: (item: BedInteriorItem) => void;
}

type ActiveLightboxGallery = {
  sectionLabel: string;
  items: InteriorShowcaseItem[];
  index: number;
};

function getHeadboardSpan(index: number): string {
  // 7 items: Row 1 (7+5) | Row 2 (4+4+4) | Row 3 (6+6)
  const spans = [
    'lg:col-span-7',
    'lg:col-span-5',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-6',
  ];
  return spans[index] ?? 'lg:col-span-4';
}

function getWallPanellingSpan(index: number): string {
  // 5 items: Row 1 (7+5) | Row 2 (4+4+4)
  const spans = [
    'lg:col-span-7',
    'lg:col-span-5',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-4',
  ];
  return spans[index] ?? 'lg:col-span-4';
}

export function BedsInteriors({ onSelectItem }: BedsInteriorsProps) {
  const [lightbox, setLightbox] = useState<ActiveLightboxGallery | null>(null);

  const currentSlide =
    lightbox && lightbox.items[lightbox.index] ? lightbox.items[lightbox.index] : null;

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevSlide = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index - 1 + prev.items.length) % prev.items.length,
          }
        : null
    );
  }, []);

  const nextSlide = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index + 1) % prev.items.length,
          }
        : null
    );
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox, closeLightbox, prevSlide, nextSlide]);

  return (
    <section
      id="beds-interiors"
      className="py-20 lg:py-28 bg-white border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Existing Core Beds & Interiors Cards */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                BEDS &amp; BEDROOM INTERIORS
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Create a Bedroom That Feels Like Home.
            </h2>
          </div>

          <p className="text-base text-[#222428]/80 leading-relaxed max-w-md">
            Pair your Reliable mattress with bespoke beds, cushioned headboards, and decorative
            upholstered wall panelling tailored to modern bedrooms.
          </p>
        </Reveal>

        {/* Editorial Showroom Grid: 2 featured larger cards + 3 secondary cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 lg:gap-8">
          {BED_INTERIOR_CATEGORIES.map((item, idx) => {
            const isFeatured = idx < 2;
            return (
              <Reveal
                key={item.id}
                delayMs={(idx % 3) * 80}
                className={`flex ${
                  isFeatured
                    ? 'lg:col-span-3'
                    : idx === 4
                      ? 'md:col-span-2 lg:col-span-2'
                      : 'lg:col-span-2'
                }`}
              >
                <article className="group w-full h-full bg-[#F8F8F9] rounded-2xl border border-[#222428]/10 overflow-hidden flex flex-col shadow-[0_4px_24px_-6px_rgba(34,36,40,0.06)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-14px_rgba(34,36,40,0.14)]">
                  <button
                    type="button"
                    onClick={() => onSelectItem(item)}
                    aria-label={`View details for ${item.name}`}
                    className={`bg-[#F1F2F4] overflow-hidden relative block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                      isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'
                    }`}
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#17191C]/70 via-[#17191C]/10 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/95">
                        {item.categoryGroup}
                      </span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/95 text-[#222428] shadow-xs transition-colors duration-200 group-hover:bg-[#C8141B] group-hover:text-white shrink-0">
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </button>

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-display text-2xl sm:text-[26px] font-normal tracking-[-0.01em] text-[#222428] leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-2.5 text-[15px] text-[#222428]/80 leading-[1.65]">
                        {item.shortDescription}
                      </p>

                      <ul className="mt-4 pt-4 border-t border-[#222428]/8 space-y-2 text-xs sm:text-[13px] text-[#222428]/78">
                        {item.highlights.slice(0, 2).map((highlight) => (
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
                      className={`mt-7 pt-5 border-t border-[#222428]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch ${
                        isFeatured
                          ? 'md:grid-cols-1 lg:grid-cols-2'
                          : idx === 4
                            ? 'md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'
                            : 'md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectItem(item)}
                        className="w-full h-full inline-flex items-center justify-center px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#222428]/25 bg-white text-[#222428] text-sm font-semibold leading-none hover:bg-[#222428] hover:text-white hover:border-[#222428] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222428]"
                      >
                        View Details
                      </button>

                      <WhatsAppButton
                        productName={item.name}
                        label="Enquire Now"
                        variant="primary"
                        fullWidth
                        className="h-full min-h-[44px] px-3.5"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Dedicated Headboards Design Gallery */}
        <div id="headboards-gallery" className="mt-20 lg:mt-24 pt-16 border-t border-[#222428]/10">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                  HEADBOARDS GALLERY
                </p>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#222428] tracking-[-0.015em] leading-[1.12]">
                Signature Headboard Designs
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm text-[#6D6E71] max-w-sm">
                From tall channel-tufted statements to minimalist woven fabric and solid timber
                profiles—click any photograph to inspect full detail.
              </p>
            </div>
          </Reveal>

          <Reveal
            delayMs={80}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7"
          >
            {HEADBOARDS_GALLERY.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setLightbox({
                    sectionLabel: 'Headboards Gallery',
                    items: HEADBOARDS_GALLERY,
                    index: idx,
                  })
                }
                className={`group relative flex flex-col w-full h-full text-left bg-[#F8F8F9] rounded-2xl border border-[#222428]/10 overflow-hidden shadow-[0_4px_20px_-6px_rgba(34,36,40,0.06)] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-14px_rgba(34,36,40,0.14)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${getHeadboardSpan(
                  idx
                )}`}
              >
                <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[330px] bg-[#F1F2F4] overflow-hidden relative shrink-0">
                  <SafeImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#17191C]/70 via-[#17191C]/10 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"
                  />

                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#222428] font-mono text-[11px] font-semibold tabular-nums px-2.5 py-1 rounded-md shadow-xs">
                    0{idx + 1}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#222428] px-4 py-2 rounded-lg text-xs font-semibold shadow-md">
                      <Expand className="w-3.5 h-3.5 text-[#C8141B]" aria-hidden="true" />
                      <span>View Photo</span>
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90">
                      {item.styleTag}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-xl sm:text-[22px] font-normal text-[#222428] leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#222428]/78 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#222428]/8 flex items-center justify-between text-xs font-semibold text-[#C8141B]">
                    <span>Inspect Headboard Style</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>
            ))}
          </Reveal>
        </div>

        {/* Dedicated Wall Panelling Design Gallery */}
        <div
          id="wall-panelling-gallery"
          className="mt-20 lg:mt-24 pt-16 border-t border-[#222428]/10"
        >
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                  WALL PANELLING GALLERY
                </p>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#222428] tracking-[-0.015em] leading-[1.12]">
                Architectural Wall Panelling &amp; Accent Walls
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm text-[#6D6E71] max-w-sm">
                Bespoke upholstered, fluted timber, geometric, and full-wall bedroom panelling
                made to fit your space.
              </p>
            </div>
          </Reveal>

          <Reveal
            delayMs={80}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7"
          >
            {WALL_PANELLING_GALLERY.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setLightbox({
                    sectionLabel: 'Wall Panelling Gallery',
                    items: WALL_PANELLING_GALLERY,
                    index: idx,
                  })
                }
                className={`group relative flex flex-col w-full h-full text-left bg-[#F8F8F9] rounded-2xl border border-[#222428]/10 overflow-hidden shadow-[0_4px_20px_-6px_rgba(34,36,40,0.06)] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-14px_rgba(34,36,40,0.14)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${getWallPanellingSpan(
                  idx
                )}`}
              >
                <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[330px] bg-[#F1F2F4] overflow-hidden relative shrink-0">
                  <SafeImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#17191C]/70 via-[#17191C]/10 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"
                  />

                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#222428] font-mono text-[11px] font-semibold tabular-nums px-2.5 py-1 rounded-md shadow-xs">
                    0{idx + 1}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#222428] px-4 py-2 rounded-lg text-xs font-semibold shadow-md">
                      <Expand className="w-3.5 h-3.5 text-[#C8141B]" aria-hidden="true" />
                      <span>View Photo</span>
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90">
                      {item.styleTag}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-xl sm:text-[22px] font-normal text-[#222428] leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#222428]/78 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#222428]/8 flex items-center justify-between text-xs font-semibold text-[#C8141B]">
                    <span>Inspect Wall Panelling</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Shared Lightbox Modal for Headboards & Wall Panelling Galleries */}
      {lightbox && currentSlide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentSlide.title}
          className="fixed inset-0 z-50 bg-[#17191C]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-dropdown-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#222428]/10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                  {lightbox.sectionLabel}
                  <span className="text-[#6D6E71] ml-2 font-mono tabular-nums">
                    · {String(lightbox.index + 1).padStart(2, '0')} /{' '}
                    {String(lightbox.items.length).padStart(2, '0')}
                  </span>
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-[#222428] mt-0.5">
                  {currentSlide.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="w-10 h-10 rounded-xl border border-[#222428]/15 flex items-center justify-center text-[#222428] hover:bg-[#F1F2F4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#17191C]/5 aspect-[16/10] max-h-[65vh] w-full">
              <SafeImage
                src={currentSlide.image}
                alt={currentSlide.alt}
                loading="eager"
                className="w-full h-full object-contain"
              />

              {lightbox.items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/95 text-[#222428] shadow-md border border-[#222428]/10 flex items-center justify-center hover:bg-[#C8141B] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/95 text-[#222428] shadow-md border border-[#222428]/10 flex items-center justify-center hover:bg-[#C8141B] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-6 py-4 bg-white border-t border-[#222428]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="max-w-lg">
                <p className="text-xs font-semibold text-[#222428]">{currentSlide.styleTag}</p>
                <p className="text-xs text-[#6D6E71] mt-0.5">{currentSlide.description}</p>
              </div>
              <WhatsAppButton
                productName={currentSlide.enquiryProductName}
                label="Enquire About This Design"
                variant="primary"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
