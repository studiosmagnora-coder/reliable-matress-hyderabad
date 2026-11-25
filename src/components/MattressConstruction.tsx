import { useState } from 'react';
import { ASSETS, MATTRESS_LAYERS } from '../data/catalog';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

interface LayerAnnotation {
  id: string;
  number: string;
  label: string;
  side: 'left' | 'right';
  layerEdgePercent: number;
  yPercent: number;
}

const LAYER_ANNOTATIONS: LayerAnnotation[] = [
  {
    id: 'quilted-cover',
    number: '01',
    label: 'Quilted Cover',
    side: 'left',
    layerEdgePercent: 25.5,
    yPercent: 24,
  },
  {
    id: 'natural-latex',
    number: '02',
    label: 'Natural Latex',
    side: 'right',
    layerEdgePercent: 74.5,
    yPercent: 38.5,
  },
  {
    id: 'hr-foam',
    number: '03',
    label: 'HR Foam Layer',
    side: 'left',
    layerEdgePercent: 25.5,
    yPercent: 50,
  },
  {
    id: 'rebonded-core',
    number: '04',
    label: 'Rebonded Core',
    side: 'right',
    layerEdgePercent: 74.5,
    yPercent: 60.5,
  },
  {
    id: 'support-base',
    number: '05',
    label: 'Support Base',
    side: 'left',
    layerEdgePercent: 25.5,
    yPercent: 73.5,
  },
];

export function MattressConstruction() {
  const [activeLayerId, setActiveLayerId] = useState<string>(MATTRESS_LAYERS[0].id);

  const activeLayer =
    MATTRESS_LAYERS.find((layer) => layer.id === activeLayerId) ?? MATTRESS_LAYERS[0];

  return (
    <section
      id="construction"
      className="py-20 lg:py-28 bg-[#F1F2F4] border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                MATTRESS CONSTRUCTION
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Designed with Thoughtful Layers
            </h2>
          </div>

          <p className="text-base text-[#222428]/80 leading-relaxed max-w-lg">
            Each Reliable mattress is assembled using distinct comfort and support layers tailored
            to its intended feel. Layer configurations vary by product model—inspect each layer
            below to see how different constructions work.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Labeled Exploded Cutaway Technical Illustration */}
          <Reveal className="lg:col-span-7">
            <div className="relative bg-white rounded-2xl border border-[#222428]/10 overflow-hidden shadow-[0_8px_32px_-10px_rgba(34,36,40,0.08)]">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#F3ECE0] overflow-hidden flex items-center justify-center sm:px-[16%]">
                <SafeImage
                  src={ASSETS.mattressCutaway}
                  alt="Exploded mattress construction diagram showing Quilted Mattress Cover, Natural Latex Layer, HR Foam Layer, Rebonded Foam Core, and Support Foam Base"
                  className="w-full h-full object-contain sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                />

                {/* Desktop & Tablet Precision-Aligned Leader Callouts */}
                <div className="hidden sm:block absolute inset-0 pointer-events-none">
                  {LAYER_ANNOTATIONS.map((part) => {
                    const isActive = part.id === activeLayerId;
                    const isLeft = part.side === 'left';

                    return (
                      <div
                        key={part.id}
                        style={{
                          top: `${part.yPercent}%`,
                          ...(isLeft
                            ? { left: '12px', width: `calc(${part.layerEdgePercent}% - 12px)` }
                            : {
                                right: '12px',
                                width: `calc(${100 - part.layerEdgePercent}% - 12px)`,
                              }),
                        }}
                        className={`absolute -translate-y-1/2 flex items-center ${
                          isLeft ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveLayerId(part.id)}
                          className={`pointer-events-auto inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold leading-none shadow-xs border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] ${
                            isActive
                              ? 'bg-[#C8141B] text-white border-[#C8141B] shadow-sm'
                              : 'bg-white/95 backdrop-blur-xs text-[#222428] border-[#222428]/15 hover:border-[#C8141B]/60'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] tabular-nums ${
                              isActive ? 'text-white/90' : 'text-[#C8141B]'
                            }`}
                          >
                            {part.number}
                          </span>
                          <span>{part.label}</span>
                        </button>

                        <span
                          aria-hidden="true"
                          className={`flex-1 h-[1.5px] transition-colors duration-200 ${
                            isActive ? 'bg-[#C8141B]' : 'bg-[#222428]/35'
                          }`}
                        />

                        <span
                          aria-hidden="true"
                          className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs shrink-0 transition-transform duration-200 ${
                            isActive ? 'bg-[#C8141B] scale-125' : 'bg-[#222428]'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Compact Numbered Layer Pins */}
                <div className="sm:hidden absolute inset-0 pointer-events-none">
                  {LAYER_ANNOTATIONS.map((part) => {
                    const isActive = part.id === activeLayerId;
                    return (
                      <button
                        key={part.id}
                        type="button"
                        onClick={() => setActiveLayerId(part.id)}
                        aria-label={`${part.number} ${part.label}`}
                        style={{
                          top: `${part.yPercent}%`,
                          left: part.side === 'left' ? '11%' : '89%',
                        }}
                        className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full text-[10px] font-mono font-bold tabular-nums flex items-center justify-center shadow-sm border transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#C8141B] text-white border-white'
                            : 'bg-white/95 text-[#222428] border-[#222428]/25'
                        }`}
                      >
                        {part.number}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Readable Label Legend */}
              <div className="sm:hidden px-4 py-3 bg-[#F8F8F9] border-t border-[#222428]/8 flex flex-wrap gap-2">
                {LAYER_ANNOTATIONS.map((part) => {
                  const isActive = part.id === activeLayerId;
                  return (
                    <button
                      key={part.id}
                      type="button"
                      onClick={() => setActiveLayerId(part.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border cursor-pointer ${
                        isActive
                          ? 'bg-[#C8141B] text-white border-[#C8141B]'
                          : 'bg-white text-[#222428] border-[#222428]/12'
                      }`}
                    >
                      <span className="font-mono text-[10px] tabular-nums">{part.number}</span>
                      <span>{part.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Clean Technical Callout Bar */}
              <div className="px-6 py-4 bg-white border-t border-[#222428]/8 flex flex-wrap items-center justify-between gap-2 text-xs text-[#6D6E71]">
                <span className="font-semibold text-[#222428]">
                  Reference Layer Architecture (Top to Base)
                </span>
                <span>Layer combinations vary by mattress model</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Interactive Layer Callout Selector */}
          <Reveal className="lg:col-span-5 space-y-3" delayMs={100}>
            {MATTRESS_LAYERS.map((layer, index) => {
              const isActive = layer.id === activeLayer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayerId(layer.id)}
                  aria-pressed={isActive}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222428] ${
                    isActive
                      ? 'bg-white border-[#C8141B] shadow-[0_10px_28px_-10px_rgba(200,20,27,0.2)]'
                      : 'bg-white/80 border-[#222428]/10 hover:bg-white hover:border-[#222428]/25 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-9 h-9 rounded-xl text-xs font-mono font-semibold flex items-center justify-center tabular-nums shrink-0 transition-colors duration-200 ${
                          isActive
                            ? 'bg-[#C8141B] text-white shadow-xs'
                            : 'bg-[#F1F2F4] text-[#222428]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div>
                        <h4 className="font-sans text-base font-bold text-[#222428]">
                          {layer.name}
                        </h4>
                        <p className="text-xs text-[#C8141B] font-semibold mt-0.5">
                          {layer.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-3.5 pt-3.5 border-t border-[#222428]/8 text-sm text-[#222428]/80 space-y-2">
                      <p className="leading-[1.68]">{layer.description}</p>
                      <p className="text-xs text-[#6D6E71]">
                        <span className="font-semibold text-[#222428]">Featured in:</span>{' '}
                        {layer.usedInModels.join(' · ')}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
