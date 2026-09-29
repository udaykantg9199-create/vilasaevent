import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Check, Ticket, ShieldCheck, QrCode, Download, Share2, Sparkles, AlertCircle } from 'lucide-react';
import { TICKET_TIERS, FESTIVAL_INFO } from '../data/festivalData';
import { TicketTier } from '../types/festival';
import { playSuccessChime } from '../utils/audioSynth';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTierId?: string;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  isOpen,
  onClose,
  preselectedTierId,
}) => {
  const [selectedTier, setSelectedTier] = useState<TicketTier>(
    TICKET_TIERS.find((t) => t.id === preselectedTierId) || TICKET_TIERS[1]
  );
  const [quantity, setQuantity] = useState(2);
  const [selectedDay, setSelectedDay] = useState('Day 2 (Sat - Sufi Night)');
  const [includeDrinkVouchers, setIncludeDrinkVouchers] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  // Attendee Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  if (!isOpen) return null;

  const drinkVoucherPrice = 150; // ₹150 for 2 festival drink vouchers
  const baseSubtotal = selectedTier.price * quantity;
  const drinkSubtotal = includeDrinkVouchers ? drinkVoucherPrice * quantity : 0;
  const grandTotal = Math.max(0, baseSubtotal + drinkSubtotal - discountAmount);

  const handleApplyPromo = () => {
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'HOP10') {
      const discount = Math.round(baseSubtotal * 0.1);
      setDiscountAmount(discount);
      setPromoApplied(true);
      playSuccessChime();
    } else if (promoCode.trim().toUpperCase() === 'FEAST') {
      const discount = 100;
      setDiscountAmount(discount);
      setPromoApplied(true);
      playSuccessChime();
    } else {
      setPromoError('Invalid promo code. Try "HOP10" or "FEAST"');
    }
  };

  const validateForm = () => {
    const errors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) errors.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errors.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 10) errors.phone = 'Valid 10-digit mobile number is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff5e36', '#ff2d55', '#ffc700', '#00d2ff', '#10b981'],
    });

    playSuccessChime();
    const generatedId = `HOP-ED14-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-[#121520] border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            {/* Modal Title */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#ff5e36] uppercase tracking-wider block mb-1">
                Official Festival Box Office
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                Book Festival Passes
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                {FESTIVAL_INFO.dates} · {FESTIVAL_INFO.venue}
              </p>
            </div>

            {/* Select Tier */}
            <div className="space-y-3 mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                1. Select Pass Tier:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TICKET_TIERS.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedTier.id === tier.id
                        ? 'bg-amber-500/10 border-amber-400 ring-2 ring-amber-400/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-bold text-white">{tier.name}</span>
                      <span className="text-sm font-black font-display text-amber-300">
                        ₹{tier.price}
                      </span>
                    </div>
                    <span className="block text-[11px] text-neutral-400 mt-1">
                      {tier.tagline}
                    </span>
                    <span className="block text-[10px] text-emerald-400 mt-1">
                      {tier.stockLeft} passes remaining
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day and Quantity Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  2. Select Day:
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#181c2b] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Day 1 (Fri - Indie & Chill)">Day 1 (Fri) - When Chai Met Toast</option>
                  <option value="Day 2 (Sat - Sufi Night)">Day 2 (Sat) - Bismil Ki Mehfil & Kayan</option>
                  <option value="Day 3 (Sun - Finale Night)">Day 3 (Sun) - Parmish Verma & Pop</option>
                  <option value="All 3 Days (Weekend Pass)">All 3 Days (Full Weekend Access)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  3. Quantity:
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-lg font-black text-white w-8 text-center tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                  <span className="text-xs text-neutral-400">
                    Max 10 passes per user
                  </span>
                </div>
              </div>
            </div>

            {/* Add-ons: Beverage coupon voucher */}
            <div className="mb-6 p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="drinkVoucher"
                  checked={includeDrinkVouchers}
                  onChange={(e) => setIncludeDrinkVouchers(e.target.checked)}
                  className="w-4 h-4 rounded text-[#ff5e36] focus:ring-[#ff5e36] cursor-pointer"
                />
                <label htmlFor="drinkVoucher" className="text-xs text-neutral-200 cursor-pointer">
                  <span className="font-bold text-white">Add Festival Drink Vouchers</span>
                  <span className="block text-[11px] text-neutral-400">
                    Includes 2 mocktail/beverage tokens per attendee (Save 25%)
                  </span>
                </label>
              </div>
              <span className="text-xs font-bold text-amber-300 whitespace-nowrap">
                +₹{drinkVoucherPrice * quantity}
              </span>
            </div>

            {/* Promo Code Input */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                4. Discount Code:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Try 'HOP10' or 'FEAST'"
                  className="flex-1 px-3 py-2 bg-[#181c2b] border border-white/15 rounded-xl text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <span className="text-[11px] text-emerald-400 font-semibold mt-1 block">
                  ✓ Code applied! You saved ₹{discountAmount}
                </span>
              )}
              {promoError && (
                <span className="text-[11px] text-rose-400 mt-1 block">
                  {promoError}
                </span>
              )}
            </div>

            {/* Attendee Form */}
            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-neutral-300 mb-1 font-semibold">
                    Primary Attendee Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aditya Sharma"
                    className="w-full px-3 py-2 bg-[#181c2b] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                  {formErrors.name && (
                    <span className="text-[10px] text-rose-400">{formErrors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-300 mb-1 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aditya@gmail.com"
                    className="w-full px-3 py-2 bg-[#181c2b] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-rose-400">{formErrors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-300 mb-1 font-semibold">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 bg-[#181c2b] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-rose-400">{formErrors.phone}</span>
                  )}
                </div>
              </div>

              {/* Price Summary & Submit */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-neutral-400">Total Payable:</div>
                  <div className="text-2xl font-black font-display text-white">
                    ₹{grandTotal}{' '}
                    <span className="text-xs font-normal text-neutral-400">
                      ({quantity} Passes)
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(255,94,54,0.4)] hover:brightness-110 active:scale-95 transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm & Get Digital Pass</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Booked State - Digital Festival E-Pass */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              🎉 Booking Confirmed!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
              See You at Horn OK Please!
            </h3>
            <p className="text-xs text-neutral-300 max-w-md mx-auto mb-6">
              Your passes have been issued. Present this digital pass or SMS confirmation at Gate No. 2 Box Office for your festival wristband.
            </p>

            {/* Pass Ticket Card */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-[#1a1e2f] to-[#121520] border-2 border-amber-400/50 rounded-3xl p-6 text-left shadow-2xl relative overflow-hidden mb-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                    Horn OK Please · Ed. 14
                  </span>
                  <span className="text-lg font-black text-white">{selectedTier.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 block">Pass Count</span>
                  <span className="text-sm font-bold text-white">{quantity} Attendees</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300 mb-4">
                <div>
                  <span className="text-[10px] text-neutral-400 block">Attendee</span>
                  <span className="font-bold text-white">{name}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">Booking Reference</span>
                  <span className="font-mono font-bold text-amber-300">{bookingId}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">Date & Venue</span>
                  <span className="font-medium text-white">{FESTIVAL_INFO.dates}</span>
                  <span className="block text-[10px] text-neutral-400">JLN Stadium, Gate 2</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">Entry Day</span>
                  <span className="font-medium text-white">{selectedDay}</span>
                </div>
              </div>

              {/* QR Code Simulation */}
              <div className="p-3 bg-white rounded-xl flex items-center justify-between text-black">
                <div className="flex items-center gap-2">
                  <QrCode className="w-10 h-10 text-black" />
                  <div>
                    <span className="block text-[11px] font-black uppercase">
                      Fast-Track Gate 2 Scan
                    </span>
                    <span className="block text-[9px] text-neutral-600">
                      Scan at entry turnstile for RFID wristband
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold bg-neutral-100 px-2 py-1 rounded">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save Pass</span>
              </button>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
