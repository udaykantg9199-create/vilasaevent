import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Send, Check, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/luxuryEventData';
import { MagneticButton } from '../components/MagneticButton';
import { CinematicHeading } from '../components/CinematicHeading';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Palatial Wedding');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#e5c158', '#2b0813', '#fbf8f2'],
    });

    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Vilāsa Atelier Concierge, I would like to schedule a private wedding consultation.'
  )}`;

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#2b0813]/70 text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Private Commissions Desk</span>
        </div>
        <CinematicHeading
          text="CONNECT WITH\nTHE ATELIER."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="ATELIER"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "We welcome discerning couples and sovereign families to schedule a confidential appointment."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Left: Office Locations & Concierge Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-[#16050e] border border-[#d4af37]/30 shadow-2xl space-y-6">
            <h3 className="font-serif-luxury text-2xl text-white font-medium">
              Atelier Addresses
            </h3>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-neutral-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">New Delhi Atelier:</strong>
                  <span>{BRAND_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Dubai Emirates Suite:</strong>
                  <span>{BRAND_INFO.internationalDesk}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Hours of Consultation:</strong>
                  <span>Monday – Saturday, 10:00 AM – 7:30 PM IST (By Prior Appointment)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-sans text-neutral-200 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Direct: {BRAND_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-sans text-neutral-200 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>Inquiries: {BRAND_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600/30 border border-emerald-500/50 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Appointment Request Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#18050e] border border-[#d4af37]/35 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                    Private Inquiry Dossier
                  </span>
                  <h3 className="font-serif-luxury text-3xl text-white font-medium">
                    Schedule Your Appointment
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maharani Gayatri / Kabir Mehta"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                      Mobile Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98100 12345"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="kabir@familyoffice.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                      Celebration Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#1e0712] border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Palatial Wedding">Palatial Destination Wedding</option>
                      <option value="Multi-Day Sangeet Gala">Multi-Day Sangeet Gala</option>
                      <option value="Royal Varmala & Reception">Royal Varmala & Reception</option>
                      <option value="International Fort Buyout">International Fort Buyout</option>
                      <option value="Private Corporate Leadership Summit">Private Leadership Summit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                    Vision, Preferred Dates & Destinations
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your proposed guest count, preferred palaces (e.g. Udaipur, Jaipur, Dubai), and design aspirations..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Private Appointment Request</span>
                  </button>
                </MagneticButton>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl text-white font-medium">
                  We Have Received Your Dossier
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-md mx-auto">
                  Thank you, {name}. A Senior Creative Director from our New Delhi atelier will connect with you discreetly within 6 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-sans"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
