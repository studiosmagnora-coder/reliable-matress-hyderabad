import { MATTRESS_MODELS, MattressProduct } from '../data/catalog';
import { ProductCard } from './ProductCard';
import { Reveal } from './Reveal';

interface MattressCollectionProps {
  onSelectMattress: (mattress: MattressProduct) => void;
}

export function MattressCollection({ onSelectMattress }: MattressCollectionProps) {
  return (
    <section
      id="mattresses"
      className="py-20 lg:py-28 bg-[#F8F8F9] border-b border-[#222428]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                CORE MANUFACTURING COLLECTION
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Find Your Perfect Mattress
            </h2>
          </div>

          <p className="text-base text-[#222428]/78 leading-relaxed max-w-md">
            Explore our core mattress range, thoughtfully crafted for distinct comfort, posture
            support, and lasting everyday performance.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {MATTRESS_MODELS.map((mattress, idx) => (
            <Reveal key={mattress.id} delayMs={(idx % 2) * 90} className="flex">
              <ProductCard
                indexLabel={`0${idx + 1}`}
                title={mattress.name}
                kicker={mattress.categoryLabel}
                feel={mattress.feel}
                description={mattress.shortDescription}
                features={mattress.features}
                image={mattress.image}
                alt={mattress.alt}
                warrantyNote={mattress.warranty}
                onViewDetails={() => onSelectMattress(mattress)}
                viewDetailsLabel="View Details"
                whatsappProductName={mattress.name}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
