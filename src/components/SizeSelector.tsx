import { useState, useEffect } from 'react';
import { Ruler, Layers, Info, Check } from 'lucide-react';
import {
  MATTRESS_MODELS,
  MATTRESS_SIZES,
  MATTRESS_THICKNESSES,
  MattressProduct,
} from '../data/catalog';
import { WhatsAppButton } from './WhatsAppButton';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

interface SizeSelectorProps {
  selectedModelId?: string;
}

export function SizeSelector({ selectedModelId }: SizeSelectorProps) {
  const [modelId, setModelId] = useState<string>(
    selectedModelId || MATTRESS_MODELS[0].id
  );
  const [selectedSize, setSelectedSize] = useState<string>(MATTRESS_SIZES[4]);
  const [selectedThickness, setSelectedThickness] = useState<string>('6 inches');

  useEffect(() => {
    if (selectedModelId) {
      setModelId(selectedModelId);
    }
  }, [selectedModelId]);

  const activeModel: MattressProduct =
    MATTRESS_MODELS.find((m) => m.id === modelId) ?? MATTRESS_MODELS[0];

  useEffect(() => {
    if (!activeModel.availableThicknesses.includes(selectedThickness)) {
      setSelectedThickness(activeModel.availableThicknesses[0]);
    }
  }, [activeModel, selectedThickness]);

  return (
    <section
      id="size-guide"
      className="py-20 lg:py-28 bg-white border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                MATTRESS SIZE &amp; THICKNESS GUIDE
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Choose the Right Size for Your Comfort
            </h2>
          </div>

          <p className="text-base text-[#222428]/80 leading-relaxed max-w-md">
            Select your preferred mattress model, dimensions, and thickness below to send a
            direct specification enquiry to our team.
          </p>
        </Reveal>

        <Reveal
          delayMs={80}
          className="mt-12 bg-[#F8F8F9] rounded-2xl border border-[#222428]/10 p-6 sm:p-9 lg:p-12 shadow-[0_8px_32px_-12px_rgba(34,36,40,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Configuration Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Select Mattress Model */}
              <div>
                <span className="block text-xs font-semibold tracking-[0.14em] text-[#222428] mb-3.5">
                  01 · SELECT MATTRESS MODEL
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MATTRESS_MODELS.map((model) => {
                    const isSelected = model.id === activeModel.id;
                    return (
                      <button
                        key={model.id}
                        type="button"
                        onClick={() => setModelId(model.id)}
                        aria-pressed={isSelected}
                        className={`text-left px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222428] ${
                          isSelected
                            ? 'bg-[#222428] text-white border-[#222428] shadow-md'
                            : 'bg-white text-[#222428] border-[#222428]/12 hover:border-[#222428]/40 hover:-translate-y-0.5'
                        }`}
                      >
                        <div>
                          <div className="font-sans text-sm font-bold">{model.name}</div>
                          <div
                            className={`text-xs mt-0.5 ${
                              isSelected ? 'text-white/75' : 'text-[#6D6E71]'
                            }`}
                          >
                            {model.feel}
                          </div>
                        </div>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-md bg-[#C8141B] text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Dimensions */}
              <div className="pt-2 border-t border-[#222428]/8">
                <div className="flex items-center gap-2 mb-3.5">
                  <Ruler className="w-4 h-4 text-[#C8141B]" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#222428]">
                    02 · SELECT SIZE (INCHES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {MATTRESS_SIZES.map((size) => {
                    const isAvailable = activeModel.availableSizes.includes(size);
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        disabled={!isAvailable}
                        onClick={() => setSelectedSize(size)}
                        aria-pressed={isSelected}
                        className={`px-2 sm:px-3 py-2.5 min-h-[44px] rounded-lg border text-xs sm:text-sm font-medium tabular-nums whitespace-nowrap flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                          isSelected
                            ? 'bg-[#C8141B] text-white border-[#C8141B] shadow-sm'
                            : 'bg-white text-[#222428] border-[#222428]/12 hover:border-[#C8141B]/50 hover:-translate-y-0.5'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Select Thickness */}
              <div className="pt-2 border-t border-[#222428]/8">
                <div className="flex items-center gap-2 mb-3.5">
                  <Layers className="w-4 h-4 text-[#C8141B]" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#222428]">
                    03 · SELECT THICKNESS
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {MATTRESS_THICKNESSES.map((thickness) => {
                    const isAvailable = activeModel.availableThicknesses.includes(thickness);
                    const isSelected = selectedThickness === thickness;
                    return (
                      <button
                        key={thickness}
                        type="button"
                        disabled={!isAvailable}
                        onClick={() => setSelectedThickness(thickness)}
                        aria-pressed={isSelected}
                        className={`px-3 py-2.5 min-h-[44px] rounded-lg border text-sm font-medium tabular-nums whitespace-nowrap flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                          isSelected
                            ? 'bg-[#C8141B] text-white border-[#C8141B] shadow-sm'
                            : 'bg-white text-[#222428] border-[#222428]/12 hover:border-[#C8141B]/50 hover:-translate-y-0.5'
                        }`}
                      >
                        {thickness}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-[#6D6E71] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#222428] shrink-0" aria-hidden="true" />
                  <span>
                    Available thicknesses shown reflect options for {activeModel.name}.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="group bg-white rounded-2xl border border-[#222428]/10 overflow-hidden shadow-[0_12px_32px_-12px_rgba(34,36,40,0.12)] flex flex-col flex-1 h-full">
                <div className="aspect-[16/10] bg-[#F1F2F4] overflow-hidden relative">
                  <SafeImage
                    src={activeModel.image}
                    alt={activeModel.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#17191C]/45 via-transparent to-transparent"
                  />
                  <span className="absolute bottom-3.5 left-4 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/95">
                    {activeModel.feel}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#C8141B]">
                      Your Selected Configuration
                    </p>
                    <h3 className="font-display text-2xl sm:text-[28px] font-normal text-[#222428] mt-1.5">
                      {activeModel.name}
                    </h3>

                    <dl className="mt-4 space-y-2.5 text-sm border-t border-b border-[#222428]/10 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[#6D6E71]">Preferred Size</dt>
                        <dd className="font-semibold text-[#222428] tabular-nums">
                          {selectedSize}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[#6D6E71]">Preferred Thickness</dt>
                        <dd className="font-semibold text-[#222428] tabular-nums">
                          {selectedThickness}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[#6D6E71]">Pricing</dt>
                        <dd className="font-semibold text-[#C8141B]">
                          {activeModel.priceDisplay}
                        </dd>
                      </div>
                      {activeModel.warranty && (
                        <div className="flex items-start justify-between gap-4 pt-1">
                          <dt className="text-[#6D6E71] shrink-0">Brochure Note</dt>
                          <dd className="text-xs font-medium text-[#222428]/80 text-right">
                            {activeModel.warranty}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  <div className="mt-5">
                    <WhatsAppButton
                      productName={activeModel.name}
                      size={selectedSize}
                      thickness={selectedThickness}
                      label="Enquire Size & Price on WhatsApp"
                      variant="primary"
                      fullWidth
                      className="min-h-[46px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
