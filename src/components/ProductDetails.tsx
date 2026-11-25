import { useState, useEffect } from 'react';
import { X, Check, Layers, Ruler } from 'lucide-react';
import {
  MattressProduct,
  SofaCategoryItem,
  BedInteriorItem,
} from '../data/catalog';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';

export type SelectedDetailItem =
  | { kind: 'mattress'; item: MattressProduct }
  | { kind: 'sofa'; item: SofaCategoryItem }
  | { kind: 'bedInterior'; item: BedInteriorItem }
  | null;

interface ProductDetailsProps {
  selected: SelectedDetailItem;
  onClose: () => void;
  onConfigureSize: (mattressId: string) => void;
}

export function ProductDetails({
  selected,
  onClose,
  onConfigureSize,
}: ProductDetailsProps) {
  const [size, setSize] = useState<string>('60 × 72 inches');
  const [thickness, setThickness] = useState<string>('6 inches');

  useEffect(() => {
    if (selected?.kind === 'mattress') {
      setSize(selected.item.availableSizes[4] ?? selected.item.availableSizes[0]);
      setThickness(
        selected.item.availableThicknesses.includes('6 inches')
          ? '6 inches'
          : selected.item.availableThicknesses[0]
      );
    }
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, onClose]);

  if (!selected) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={selected.item.name}
      className="fixed inset-0 z-50 bg-[#17191C]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl my-auto animate-dropdown-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/95 border border-[#222428]/15 flex items-center justify-center text-[#222428] hover:bg-[#F1F2F4] cursor-pointer shadow-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Image */}
          <div className="lg:col-span-5 bg-[#F1F2F4] min-h-[260px] lg:min-h-full relative">
            <SafeImage
              src={selected.item.image}
              alt={selected.item.alt}
              loading="eager"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          {/* Right Contiguous Detail Module */}
          <div className="lg:col-span-7 p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
            {selected.kind === 'mattress' ? (
              <>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                  {selected.item.categoryLabel} · {selected.item.feel}
                </p>
                <h2 className="font-display text-3xl sm:text-[34px] font-normal text-[#222428] mt-1.5 leading-tight">
                  {selected.item.name}
                </h2>
                <p className="mt-3.5 text-sm sm:text-base text-[#222428]/80 leading-[1.7]">
                  {selected.item.fullDescription}
                </p>

                {selected.item.warranty && (
                  <p className="mt-4 text-xs font-semibold text-[#222428] py-2.5 border-t border-b border-[#222428]/10">
                    {selected.item.warranty}
                  </p>
                )}

                {/* Construction Layers */}
                <div className="mt-5">
                  <h4 className="font-sans text-xs font-semibold tracking-wider text-[#222428] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#C8141B]" aria-hidden="true" />
                    <span>CONSTRUCTION LAYERS</span>
                  </h4>
                  <p className="mt-1.5 text-sm text-[#222428]/80">
                    {selected.item.constructionLayers.join(' → ')}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mt-5">
                  <h4 className="font-sans text-xs font-semibold tracking-wider text-[#222428] mb-2">
                    KEY SPECIFICATIONS
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[#222428]/80">
                    {selected.item.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C8141B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Size & Thickness Selector inside Modal */}
                <div className="mt-6 pt-5 border-t border-[#222428]/10 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="modal-size"
                        className="text-xs font-semibold text-[#222428] mb-1.5 flex items-center gap-1"
                      >
                        <Ruler className="w-3.5 h-3.5 text-[#C8141B]" aria-hidden="true" />
                        <span>Preferred Size</span>
                      </label>
                      <select
                        id="modal-size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#222428]/15 text-sm tabular-nums bg-[#F8F8F9]"
                      >
                        {selected.item.availableSizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="modal-thickness"
                        className="block text-xs font-semibold text-[#222428] mb-1.5"
                      >
                        Preferred Thickness
                      </label>
                      <select
                        id="modal-thickness"
                        value={thickness}
                        onChange={(e) => setThickness(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#222428]/15 text-sm tabular-nums bg-[#F8F8F9]"
                      >
                        {selected.item.availableThicknesses.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="text-[#6D6E71]">Pricing</span>
                    <span className="font-bold text-[#C8141B]">
                      {selected.item.priceDisplay}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                    <WhatsAppButton
                      productName={selected.item.name}
                      size={size}
                      thickness={thickness}
                      label="Enquire on WhatsApp"
                      variant="primary"
                      fullWidth
                      className="h-full min-h-[44px]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const id = selected.item.id;
                        onClose();
                        onConfigureSize(id);
                      }}
                      className="w-full h-full inline-flex items-center justify-center px-4 py-2.5 min-h-[44px] rounded-lg border border-[#222428]/25 text-[#222428] text-sm font-semibold leading-none hover:bg-[#222428] hover:text-white hover:border-[#222428] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      Open Full Size Guide
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C8141B]">
                  {selected.kind === 'sofa'
                    ? selected.item.categoryLabel
                    : selected.item.categoryGroup}
                </p>
                <h2 className="font-display text-3xl sm:text-[34px] font-normal text-[#222428] mt-1.5 leading-tight">
                  {selected.item.name}
                </h2>
                <p className="mt-3.5 text-sm sm:text-base text-[#222428]/80 leading-[1.7]">
                  {selected.item.fullDescription}
                </p>

                <div className="mt-5">
                  <h4 className="font-sans text-xs font-semibold tracking-wider text-[#222428] mb-2.5">
                    COLLECTION HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2 text-sm text-[#222428]/80">
                    {selected.item.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C8141B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[#222428]/10 flex items-center justify-between text-sm">
                  <span className="text-[#6D6E71]">Pricing &amp; Custom Options</span>
                  <span className="font-bold text-[#C8141B]">Contact for Price</span>
                </div>

                <div className="mt-5">
                  <WhatsAppButton
                    productName={selected.item.name}
                    label="Enquire on WhatsApp"
                    variant="primary"
                    fullWidth
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
