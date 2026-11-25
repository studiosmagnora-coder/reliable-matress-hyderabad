import { useState, FormEvent } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppEnquiryUrl } from '../data/catalog';
import { Reveal } from './Reveal';

const PRODUCT_INTEREST_OPTIONS = [
  'HR Foam Mattress',
  'Orthopedic Mattress',
  'Rebonded Mattress',
  'Natural Latex Mattress',
  'Sofas & Sectionals',
  'Designer / Upholstered Beds',
  'Headboards & Wall Panelling',
  'General Enquiry',
];

interface FormState {
  name: string;
  phone: string;
  productInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    productInterest: PRODUCT_INTEREST_OPTIONS[1],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    const cleanedPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8) {
      nextErrors.phone = 'Please enter a valid contact phone or WhatsApp number.';
    }
    if (!form.message.trim() || form.message.trim().length < 8) {
      nextErrors.message =
        'Please share a brief note about the size, thickness, or product you need.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    setSubmittedData({ ...form });
  };

  const buildSubmittedWhatsAppLink = (data: FormState) => {
    const text = `Hello Reliable Mattresses & Furniture, my name is ${data.name.trim()} (${data.phone.trim()}). I am interested in ${data.productInterest}. Details: ${data.message.trim()}`;
    return buildWhatsAppEnquiryUrl({
      productName: data.productInterest,
      customMessage: text,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F8F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] bg-[#C8141B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C8141B]">
                CONTACT RELIABLE
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#222428] tracking-[-0.015em] leading-[1.1]">
              Let&apos;s Find the Right Comfort for Your Home.
            </h2>
          </div>

          <p className="text-base text-[#222428]/80 leading-relaxed max-w-md">
            Reach out directly via phone, WhatsApp, Instagram, or prepare your specification using
            the enquiry form below.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive Contact Channel Cards & Showroom Info */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-white rounded-2xl border border-[#222428]/10 p-7 shadow-[0_4px_24px_-6px_rgba(34,36,40,0.06)] space-y-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-[#C8141B]">
                  DIRECT CHANNELS
                </p>
                <h3 className="font-display text-2xl sm:text-[26px] font-normal text-[#222428] mt-1.5">
                  {BUSINESS_INFO.brandName}
                </h3>
                <p className="text-sm text-[#6D6E71] mt-1">
                  {BUSINESS_INFO.supportingMessage}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#222428]/8">
                {/* Click-to-call Phone Card */}
                <a
                  href={BUSINESS_INFO.whatsappTelHref}
                  className="flex items-center justify-between gap-3.5 p-3.5 rounded-xl bg-[#F8F8F9] border border-[#222428]/8 hover:border-[#222428]/25 hover:bg-white transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 h-11 rounded-xl bg-white border border-[#222428]/10 text-[#222428] flex items-center justify-center shrink-0 group-hover:bg-[#222428] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#6D6E71]">
                        Call / WhatsApp Number
                      </p>
                      <p className="text-sm font-bold text-[#222428] tabular-nums group-hover:text-[#C8141B] transition-colors">
                        {BUSINESS_INFO.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#6D6E71] group-hover:text-[#C8141B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>

                {/* Direct WhatsApp Chat Card */}
                <a
                  href={buildWhatsAppEnquiryUrl({
                    productName: 'Reliable Mattresses & Furniture',
                    customMessage:
                      'Hello Reliable Mattresses & Furniture, I would like to connect regarding your products.',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3.5 p-3.5 rounded-xl bg-[#F8F8F9] border border-[#C8141B]/20 hover:border-[#C8141B] hover:bg-white transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 h-11 rounded-xl bg-[#C8141B] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#6D6E71]">WhatsApp Enquiry</p>
                      <p className="text-sm font-bold text-[#C8141B]">
                        Chat directly on WhatsApp
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#C8141B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>

                {/* Instagram Profile Card */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3.5 p-3.5 rounded-xl bg-[#F8F8F9] border border-[#222428]/8 hover:border-[#222428]/25 hover:bg-white transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 h-11 rounded-xl bg-white border border-[#222428]/10 text-[#222428] flex items-center justify-center shrink-0 group-hover:bg-[#C8141B] group-hover:text-white group-hover:border-[#C8141B] transition-colors">
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#6D6E71]">Instagram</p>
                      <p className="text-sm font-bold text-[#222428] group-hover:text-[#C8141B] transition-colors">
                        {BUSINESS_INFO.instagramHandle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#6D6E71] group-hover:text-[#C8141B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Showroom Address Card */}
            <div className="bg-white rounded-2xl border border-[#222428]/10 p-7 shadow-[0_4px_24px_-6px_rgba(34,36,40,0.06)] flex-1 flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-[#F8F8F9] border border-[#222428]/10 text-[#C8141B] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C8141B]">
                    SHOWROOM ADDRESS
                  </p>
                  <h4 className="font-display text-xl font-normal text-[#222428] mt-1 leading-snug">
                    {BUSINESS_INFO.address}
                  </h4>
                  <p className="text-xs text-[#6D6E71] mt-1.5 leading-relaxed">
                    {BUSINESS_INFO.hoursNote}.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-[#F8F8F9] border border-[#222428]/10 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-[#222428]/80 leading-relaxed">
                  Need landmarks or visiting hours before stopping by?
                </p>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={BUSINESS_INFO.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#222428] hover:text-[#C8141B] transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="text-[#222428]/20" aria-hidden="true">
                    |
                  </span>
                  <a
                    href={buildWhatsAppEnquiryUrl({
                      productName: 'Showroom Directions',
                      customMessage:
                        'Hello Reliable Mattresses & Furniture, please share directions to your Santosh Nagar, Hyderabad showroom.',
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8141B] hover:underline"
                  >
                    <span>Ask on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Validated Contact Enquiry Form */}
          <Reveal className="lg:col-span-7 flex" delayMs={100}>
            <div className="w-full bg-white rounded-2xl border border-[#222428]/10 p-7 sm:p-9 lg:p-11 shadow-[0_8px_32px_-12px_rgba(34,36,40,0.08)] flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C8141B]">
                  PRODUCT SPECIFICATION FORM
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#222428] mt-1.5">
                  Send an Enquiry
                </h3>
                <p className="mt-1.5 text-sm text-[#6D6E71]">
                  Share your requirements and our team will assist with product specifications and
                  pricing.
                </p>
              </div>

              {submittedData ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl bg-[#F8F8F9] border border-[#222428]/15 p-6 space-y-4 my-auto"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-[#C8141B] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-display text-xl font-normal text-[#222428]">
                        Enquiry Ready to Send
                      </h4>
                      <p className="text-sm text-[#222428]/80 mt-1 leading-relaxed">
                        Thank you, <span className="font-semibold">{submittedData.name}</span>.
                        Your details for{' '}
                        <span className="font-semibold">{submittedData.productInterest}</span> have
                        been prepared. Click below to send this enquiry straight to our WhatsApp
                        team for the fastest response.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildSubmittedWhatsAppLink(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-lg bg-[#C8141B] text-white text-sm font-semibold hover:bg-[#A30F15] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Send Enquiry via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setForm({
                          name: '',
                          phone: '',
                          productInterest: PRODUCT_INTEREST_OPTIONS[1],
                          message: '',
                        });
                      }}
                      className="inline-flex items-center justify-center px-4 py-3 min-h-[46px] rounded-lg border border-[#222428]/20 bg-white text-sm font-semibold text-[#222428] hover:bg-[#F1F2F4] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#222428] mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="Enter your full name"
                          aria-invalid={Boolean(errors.name)}
                          className={`w-full px-4 py-3 min-h-[46px] rounded-lg border text-sm bg-[#F8F8F9] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8141B]/25 focus:border-[#C8141B] ${
                            errors.name ? 'border-[#C8141B]' : 'border-[#222428]/15'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-[#C8141B] flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#222428] mb-2"
                        >
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, phone: e.target.value }));
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                          }}
                          placeholder="+91 XXXXX XXXXX"
                          aria-invalid={Boolean(errors.phone)}
                          className={`w-full px-4 py-3 min-h-[46px] rounded-lg border text-sm bg-[#F8F8F9] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8141B]/25 focus:border-[#C8141B] ${
                            errors.phone ? 'border-[#C8141B]' : 'border-[#222428]/15'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-[#C8141B] flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-interest"
                        className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#222428] mb-2"
                      >
                        Product Interest
                      </label>
                      <select
                        id="contact-interest"
                        value={form.productInterest}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, productInterest: e.target.value }))
                        }
                        className="w-full px-4 py-3 min-h-[46px] rounded-lg border border-[#222428]/15 text-sm bg-[#F8F8F9] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8141B]/25 focus:border-[#C8141B]"
                      >
                        {PRODUCT_INTEREST_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold tracking-[0.08em] uppercase text-[#222428] mb-2"
                      >
                        Message / Preferred Size &amp; Thickness *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, message: e.target.value }));
                          if (errors.message)
                            setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        placeholder="Share preferred mattress size, thickness, sofa category, or any questions..."
                        aria-invalid={Boolean(errors.message)}
                        className={`w-full px-4 py-3 rounded-lg border text-sm bg-[#F8F8F9] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8141B]/25 focus:border-[#C8141B] ${
                          errors.message ? 'border-[#C8141B]' : 'border-[#222428]/15'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-[#C8141B] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#222428]/8 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-7 py-3.5 min-h-[48px] rounded-lg bg-[#C8141B] text-white text-sm font-semibold leading-none hover:bg-[#A30F15] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8141B]"
                    >
                      Prepare &amp; Submit Enquiry
                    </button>

                    <span className="text-xs text-[#6D6E71]">
                      Direct support at{' '}
                      <span className="font-semibold text-[#222428] tabular-nums">
                        {BUSINESS_INFO.whatsappDisplay}
                      </span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
