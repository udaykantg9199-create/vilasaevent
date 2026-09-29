import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, ArrowRight, MessageCircle, Send, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';
import { MagneticButton } from './MagneticButton';

export const InteractiveEventPlanner: React.FC = () => {
  const [selectedEventType, setSelectedEventType] = useState('Wedding');
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([
    'Décor',
    'Stage',
    'Entry',
    'Entertainment',
  ]);
  const [selectedGuestCount, setSelectedGuestCount] = useState('300–500 Guests');
  const [selectedBudget, setSelectedBudget] = useState('₹50L – ₹1.5 Cr');

  // Contact modal state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const eventTypes = ['Wedding', 'Engagement', 'Birthday Gala', 'Corporate Summit', 'Destination Palace'];
  const experienceOptions = [
    'Décor & Mandap',
    'Grand Stage',
    'Entertainment & Artists',
    'Royal Entry',
    'Lighting & Laser FX',
    'Cinematography',
    'Celebrity DJ & Sound',
    '7-Star Guest Hospitality',
  ];
  const guestRanges = ['50–100 Guests', '100–300 Guests', '300–500 Guests', '500+ Royalty'];
  const budgetRanges = ['₹25L – ₹50L', '₹50L – ₹1.5 Cr', '₹1.5 Cr – ₹3 Cr', '₹3 Cr+ Palatial'];

  const toggleExperience = (item: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleStartConversation = () => {
    setDialogOpen(true);
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#e5c158', '#2b0813', '#fbf8f2'],
    });

    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Vilāsa Atelier, I would like to consult about our upcoming ${selectedEventType} celebration for ${selectedGuestCount} with budget range ${selectedBudget}.`
  )}`;

  return (
    <section id="planner" className="py-20 sm:py-32 relative bg-[#0f070b] border-t border-[#d4af37]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#2b0813]/60 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4">
            <span>Interactive Atelier Configurator</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05]">
            Plan Your <span className="text-gold-gradient italic font-normal">Celebration</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-sans max-w-xl mx-auto font-light">
            Select your celebration parameters below to visualize your production blueprint.
          </p>
        </div>

        {/* Configurator Card */}
        <div className="bg-[#15050e] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-12">
          {/* Step 1: Choose Event */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold">
                Step 01 // Choose Event Category
              </span>
              <span className="text-xs text-neutral-400">Selected: {selectedEventType}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedEventType(type)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedEventType === type
                      ? 'bg-[#d4af37] text-black font-bold border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30'
                  }`}
                >
                  <span className="text-xs font-sans tracking-wider uppercase block">
                    {type}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Experience Elements */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold">
                Step 02 // Choose Experience Modules
              </span>
              <span className="text-xs text-neutral-400">
                {selectedExperiences.length} Modules Selected
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {experienceOptions.map((exp) => {
                const isChecked = selectedExperiences.includes(exp);

                return (
                  <button
                    key={exp}
                    onClick={() => toggleExperience(exp)}
                    className={`p-4 rounded-2xl border text-left flex items-start justify-between gap-2 transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-[#2b0813] border-[#d4af37] text-white'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-sans tracking-wide leading-snug">{exp}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked
                          ? 'border-[#d4af37] bg-[#d4af37] text-black'
                          : 'border-white/20'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Guests */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold">
                Step 03 // Guest Count
              </span>
              <span className="text-xs text-neutral-400">{selectedGuestCount}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {guestRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedGuestCount(range)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedGuestCount === range
                      ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30'
                  }`}
                >
                  <span className="text-xs font-sans tracking-wider block">{range}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Budget */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold">
                Step 04 // Indicative Production Scale
              </span>
              <span className="text-xs text-neutral-400">{selectedBudget}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {budgetRanges.map((budget) => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedBudget === budget
                      ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30'
                  }`}
                >
                  <span className="text-xs font-sans tracking-wider block">{budget}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Final Shape Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2b0813] to-[#14050b] border border-[#d4af37]/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-1">
                Atelier Dossier Generated
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
                YOUR EXPERIENCE IS TAKING SHAPE.
              </h3>
              <p className="text-xs text-neutral-300 font-sans mt-1">
                {selectedEventType} • {selectedGuestCount} • {selectedExperiences.length} Custom Modules
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton strength={0.42}>
                <button
                  onClick={handleStartConversation}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>START A CONVERSATION →</span>
                </button>
              </MagneticButton>

              <MagneticButton strength={0.35}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-4 rounded-full bg-emerald-600/30 border border-emerald-500/50 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                  title="Direct WhatsApp Consultation"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal Dialog */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setDialogOpen(false)}
        >
          <div
            className="relative bg-[#14060d] border border-[#d4af37]/50 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <form onSubmit={handleSubmitLead} className="space-y-6">
                <div>
                  <span className="text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase block mb-1">
                    Private Commission Inquiry
                  </span>
                  <h3 className="font-serif-luxury text-3xl text-white font-medium">
                    Begin Your Dialogue
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">
                    Configured: {selectedEventType} for {selectedGuestCount} ({selectedBudget})
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Radhika Kapoor"
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
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-neutral-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="radhika@familyoffice.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <MagneticButton strength={0.25} className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#d4af37] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Atelier Proposal</span>
                  </button>
                </MagneticButton>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl text-white font-medium">
                  We Have Received Your Dossier
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  Thank you, {contactName}. A Senior Creative Director from our New Delhi atelier will connect with you discreetly within 6 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setDialogOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-sans"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
