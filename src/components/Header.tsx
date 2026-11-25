import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppButton } from './WhatsAppButton';
import { MATTRESS_MODELS, MattressProduct } from '../data/catalog';

interface HeaderProps {
  onSelectMattress: (mattress: MattressProduct) => void;
}

export function Header({ onSelectMattress }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mattressDropdownOpen, setMattressDropdownOpen] = useState(false);
  const [mobileMattressesOpen, setMobileMattressesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMattressDropdownOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMattressDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleMattressChoice = (mattress: MattressProduct) => {
    setMattressDropdownOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById('mattresses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onSelectMattress(mattress);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#222428]/10 shadow-[0_1px_12px_rgba(34,36,40,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[78px] flex items-center justify-between gap-4 xl:gap-6">
        {/* Zone 1: Brand Logo */}
        <a
          href="#home"
          className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8141B] rounded-md shrink-0"
          aria-label="Reliable Mattresses & Furniture Home"
        >
          <BrandLogo variant="dark" />
        </a>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-medium text-[#222428]/85"
        >
          <a
            href="#home"
            className="inline-flex items-center py-1.5 hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C8141B] hover:after:w-full after:transition-all after:duration-200"
          >
            Home
          </a>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setMattressDropdownOpen(true)}
            onMouseLeave={() => setMattressDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMattressDropdownOpen((prev) => !prev)}
              aria-expanded={mattressDropdownOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B] rounded ${
                mattressDropdownOpen ? 'text-[#C8141B]' : 'hover:text-[#C8141B]'
              }`}
            >
              <span>Mattresses</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  mattressDropdownOpen ? 'rotate-180 text-[#C8141B]' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {mattressDropdownOpen && (
              <div className="absolute left-0 top-full pt-2.5 w-76 animate-dropdown-enter">
                <div className="bg-white rounded-2xl shadow-[0_20px_48px_-12px_rgba(34,36,40,0.18)] border border-[#222428]/10 p-2">
                  <a
                    href="#mattresses"
                    onClick={() => setMattressDropdownOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-[0.12em] uppercase text-[#C8141B] hover:bg-[#F8F8F9] transition-colors"
                  >
                    <span>Explore All Mattresses</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <div className="my-1.5 border-t border-[#222428]/8" />
                  <div className="space-y-0.5">
                    {MATTRESS_MODELS.map((model) => (
                      <button
                        key={model.id}
                        type="button"
                        onClick={() => handleMattressChoice(model)}
                        className="group/item w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F8F8F9] transition-colors cursor-pointer flex items-center justify-between gap-3"
                      >
                        <div>
                          <span className="block text-sm font-semibold text-[#222428] group-hover/item:text-[#C8141B] transition-colors">
                            {model.name}
                          </span>
                          <span className="block text-[11px] text-[#6D6E71] mt-0.5">
                            {model.feel}
                          </span>
                        </div>
                        <ArrowRight
                          className="w-3.5 h-3.5 text-[#6D6E71] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#C8141B] transition-all duration-150 shrink-0"
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#sofas"
            className="inline-flex items-center py-1.5 hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C8141B] hover:after:w-full after:transition-all after:duration-200"
          >
            Sofas
          </a>
          <a
            href="#beds-interiors"
            className="inline-flex items-center py-1.5 hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C8141B] hover:after:w-full after:transition-all after:duration-200"
          >
            Beds &amp; Interiors
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center py-1.5 hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C8141B] hover:after:w-full after:transition-all after:duration-200"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="inline-flex items-center py-1.5 hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C8141B] hover:after:w-full after:transition-all after:duration-200"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center py-1.5 hover:text-[#C8141B] transition-colors whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C8141B] hover:after:w-full after:transition-all after:duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Prominent Brand Red WhatsApp Enquiry Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">
            <WhatsAppButton
              productName="Mattress & Furniture Enquiry"
              customMessage="Hello Reliable Mattresses & Furniture, I would like to enquire about your mattresses and furniture."
              label="WhatsApp Enquiry"
              variant="primary"
              className="min-h-[42px]"
            />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#222428]/15 bg-white text-[#222428] hover:bg-[#F1F2F4] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#222428]/10 shadow-xl animate-dropdown-enter">
          <nav aria-label="Mobile navigation" className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <a
              href="#home"
              onClick={closeMobile}
              className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9]"
            >
              Home
            </a>

            <div>
              <button
                type="button"
                onClick={() => setMobileMattressesOpen((prev) => !prev)}
                aria-expanded={mobileMattressesOpen}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9] cursor-pointer"
              >
                <span>Mattresses</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileMattressesOpen ? 'rotate-180 text-[#C8141B]' : ''
                  }`}
                />
              </button>

              {mobileMattressesOpen && (
                <div className="pl-4 mt-1 space-y-1 border-l border-[#222428]/15 ml-4">
                  <a
                    href="#mattresses"
                    onClick={closeMobile}
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#C8141B] hover:bg-[#F8F8F9]"
                  >
                    Explore All Mattresses
                  </a>
                  {MATTRESS_MODELS.map((model) => (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => handleMattressChoice(model)}
                      className="w-full text-left block px-3 py-2 rounded-lg text-sm text-[#222428]/85 hover:bg-[#F8F8F9] hover:text-[#C8141B] cursor-pointer"
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#sofas"
              onClick={closeMobile}
              className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9]"
            >
              Sofas
            </a>
            <a
              href="#beds-interiors"
              onClick={closeMobile}
              className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9]"
            >
              Beds &amp; Interiors
            </a>
            <a
              href="#gallery"
              onClick={closeMobile}
              className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9]"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={closeMobile}
              className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9]"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={closeMobile}
              className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-[#222428] hover:bg-[#F8F8F9]"
            >
              Contact
            </a>

            <div className="pt-3 mt-2 border-t border-[#222428]/10">
              <WhatsAppButton
                productName="Mattress & Furniture Enquiry"
                customMessage="Hello Reliable Mattresses & Furniture, I would like to enquire about your mattresses and furniture."
                label="Chat on WhatsApp"
                variant="primary"
                fullWidth
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
