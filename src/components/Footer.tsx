import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  BUSINESS_INFO,
  MATTRESS_MODELS,
  SOFA_CATEGORIES,
  BED_INTERIOR_CATEGORIES,
  buildWhatsAppEnquiryUrl,
} from '../data/catalog';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17191C] text-white pt-16 pb-10 border-t-4 border-[#C8141B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Orthopedic mattress manufacturing specialist with six years of manufacturing
              experience, dedicated to comfort, durable materials, and customer satisfaction.
            </p>
            <p className="text-xs font-semibold tracking-wide text-white/95">
              {BUSINESS_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-white/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#mattresses" className="hover:text-white transition-colors">
                  Mattresses
                </a>
              </li>
              <li>
                <a href="#construction" className="hover:text-white transition-colors">
                  Layer Construction
                </a>
              </li>
              <li>
                <a href="#size-guide" className="hover:text-white transition-colors">
                  Size &amp; Thickness Guide
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Product Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Care &amp; Warranty FAQ
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mattress Categories */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-white/60 mb-4">
              Mattresses
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {MATTRESS_MODELS.map((m) => (
                <li key={m.id}>
                  <a href="#mattresses" className="hover:text-white transition-colors">
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sofas & Bedroom Interiors */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-white/60 mb-4">
              Furniture &amp; Interiors
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {SOFA_CATEGORIES.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a href="#sofas" className="hover:text-white transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
              {BED_INTERIOR_CATEGORIES.slice(0, 3).map((b) => (
                <li key={b.id}>
                  <a href="#beds-interiors" className="hover:text-white transition-colors">
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-white/60 mb-4">
              Connect
            </h4>
            <a
              href={BUSINESS_INFO.whatsappTelHref}
              className="flex items-center gap-2.5 text-sm text-white/85 hover:text-white transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#C8141B] shrink-0" aria-hidden="true" />
              <span>{BUSINESS_INFO.whatsappDisplay}</span>
            </a>

            <a
              href={buildWhatsAppEnquiryUrl({
                productName: 'Reliable Mattresses & Furniture',
                customMessage:
                  'Hello Reliable Mattresses & Furniture, I would like to enquire about your products.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-white/85 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C8141B] shrink-0" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-white/85 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C8141B] shrink-0" aria-hidden="true" />
              <span>Instagram</span>
            </a>

            <a
              href={BUSINESS_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors pt-1"
            >
              <MapPin className="w-4 h-4 text-[#C8141B] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{BUSINESS_INFO.address}</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <p>{BUSINESS_INFO.footerTagline}</p>
          <p>
            &copy; {currentYear} {BUSINESS_INFO.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
