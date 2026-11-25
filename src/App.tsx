import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { MattressCollection } from './components/MattressCollection';
import { WhyReliable } from './components/WhyReliable';
import { MattressConstruction } from './components/MattressConstruction';
import { SizeSelector } from './components/SizeSelector';
import { SofaCollection } from './components/SofaCollection';
import { BedsInteriors } from './components/BedsInteriors';
import { FurnitureGallery } from './components/FurnitureGallery';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { EnquiryBanner } from './components/EnquiryBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetails, SelectedDetailItem } from './components/ProductDetails';
import { FloatingWhatsAppButton } from './components/WhatsAppButton';
import { MattressProduct } from './data/catalog';

export default function App() {
  const [selectedDetail, setSelectedDetail] = useState<SelectedDetailItem>(null);
  const [activeSizeModelId, setActiveSizeModelId] = useState<string>('hr-foam-mattress');

  const handleSelectMattress = (mattress: MattressProduct) => {
    setActiveSizeModelId(mattress.id);
    setSelectedDetail({ kind: 'mattress', item: mattress });
  };

  const handleJumpToSizeGuide = (mattressId: string) => {
    setActiveSizeModelId(mattressId);
    const el = document.getElementById('size-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F9] text-[#222428]">
      <Header onSelectMattress={handleSelectMattress} />

      <main className="flex-1">
        {/* Section 1: Hero Section - Mattress First */}
        <Hero />

        {/* Section 2: Introduction to Reliable */}
        <IntroSection />

        {/* Section 3: Explore Our Mattress Collection */}
        <MattressCollection onSelectMattress={handleSelectMattress} />

        {/* Section 4: Why Choose Reliable? */}
        <WhyReliable />

        {/* Section 5: Understand Our Mattress Construction */}
        <MattressConstruction />

        {/* Section 6: Mattress Size & Thickness Guide */}
        <SizeSelector selectedModelId={activeSizeModelId} />

        {/* Section 7: Sofa Collection */}
        <SofaCollection
          onSelectSofa={(sofa) => setSelectedDetail({ kind: 'sofa', item: sofa })}
        />

        {/* Section 8: Beds & Bedroom Interiors */}
        <BedsInteriors
          onSelectItem={(item) => setSelectedDetail({ kind: 'bedInterior', item })}
        />

        {/* Section 9: Our Work / Product Gallery */}
        <FurnitureGallery />

        {/* Section 10: About Us */}
        <AboutSection />

        {/* Section 11: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 12: Customer Enquiry / WhatsApp CTA */}
        <EnquiryBanner />

        {/* Section 12: Contact Section */}
        <ContactSection />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetails
        selected={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        onConfigureSize={handleJumpToSizeGuide}
      />

      {/* Mobile Sticky WhatsApp Action */}
      <FloatingWhatsAppButton />
    </div>
  );
}
