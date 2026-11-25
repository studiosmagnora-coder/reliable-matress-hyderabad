import { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  GALLERY_ITEMS,
  GalleryFilterCategory,
  GalleryItem,
} from '../data/catalog';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';
import { Reveal } from './Reveal';

const FILTER_CATEGORIES: GalleryFilterCategory[] = [
  'All',
  'Mattresses',
  'Orthopedic Mattresses',
  'Sofas',
  'Beds',
  'Headboards',
  'Wall Panelling',
];

function getAsymmetricColSpan(index: number): string {
  // 12-item curated editorial cadence summing to 12 cols per row on lg+:
  // Row 1: 7 + 5 | Row 2: 4 + 4 + 4 | Row 3: 5 + 7 | Row 4: 4 + 4 + 4 | Row 5: 6 + 6
  const pattern = [
    'lg:col-span-7',
    'lg:col-span-5',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-5',
    'lg:col-span-7',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-6',
  ];
  return pattern[index % pattern.length];
}

export function FurnitureGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryFilterCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  const isAllView = activeCategory === 'All';

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#F8F8F9] border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                OUR WORK &amp; PRODUCT GALLERY
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Explore the Reliable Collection
            </h2>
          </div>

          <p className="text-sm text-[#6D6E71]">
            Select any photograph to inspect craftsmanship details in full view.
          </p>
        </Reveal>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter product gallery"
          className="mt-9 flex flex-wrap items-center gap-2.5"
        >
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === category).length;

            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 min-h-[42px] rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                  isActive
                    ? 'bg-[#C8141B] text-white shadow-sm'
                    : 'bg-white text-[#222428]/80 border border-[#222428]/12 hover:border-[#222428]/40 hover:text-[#222428] hover:-translate-y-0.5'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-white/80' : 'text-[#6D6E71]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Gallery Grid (balanced 12-col cadence on "All", clean 3-col when filtered) */}
        <Reveal
          delayMs={80}
          className={`mt-10 grid gap-6 lg:gap-7 ${
            isAllView
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-12'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className={`group relative flex flex-col w-full h-full text-left bg-white rounded-2xl border border-[#222428]/10 overflow-hidden shadow-[0_4px_20px_-6px_rgba(34,36,40,0.06)] hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-14px_rgba(34,36,40,0.14)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                isAllView ? getAsymmetricColSpan(idx) : ''
              }`}
            >
              <div
                className={`w-full bg-[#F1F2F4] overflow-hidden relative shrink-0 ${
                  isAllView ? 'aspect-[4/3] lg:aspect-auto lg:h-[310px]' : 'aspect-[4/3]'
                }`}
              >
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#17191C]/55 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#222428] px-4 py-2 rounded-lg text-xs font-semibold shadow-md">
                    <Expand className="w-3.5 h-3.5 text-[#C8141B]" aria-hidden="true" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                    {item.category}
                  </p>
                  <h3 className="font-display text-xl sm:text-[22px] font-normal text-[#222428] mt-1.5 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#6D6E71] mt-2">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-[#17191C]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-dropdown-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#222428]/10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                  {currentItem.category}
                  <span className="text-[#6D6E71] ml-2 font-mono tabular-nums">
                    · {String((lightboxIndex ?? 0) + 1).padStart(2, '0')} /{' '}
                    {String(filteredItems.length).padStart(2, '0')}
                  </span>
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-[#222428] mt-0.5">
                  {currentItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close lightbox"
                className="w-10 h-10 rounded-xl border border-[#222428]/15 flex items-center justify-center text-[#222428] hover:bg-[#F1F2F4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#17191C]/5 aspect-[16/10] max-h-[65vh] w-full">
              <SafeImage
                src={currentItem.image}
                alt={currentItem.alt}
                loading="eager"
                className="w-full h-full object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/95 text-[#222428] shadow-md border border-[#222428]/10 flex items-center justify-center hover:bg-[#C8141B] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/95 text-[#222428] shadow-md border border-[#222428]/10 flex items-center justify-center hover:bg-[#C8141B] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-6 py-4 bg-white border-t border-[#222428]/10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[#6D6E71]">{currentItem.subtitle}</p>
              <WhatsAppButton
                productName={currentItem.enquiryProductName}
                label="Enquire About This Piece"
                variant="primary"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
