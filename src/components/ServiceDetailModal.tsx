import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types/luxuryEvent';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onPlanEvent: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onPlanEvent,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-[#14060d] border border-[#d4af37]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="font-serif-luxury text-xl text-[#d4af37] font-bold">
            {service.number}
          </span>
          <span className="text-xs font-sans tracking-[0.2em] text-neutral-400 uppercase">
            {service.subtitle}
          </span>
        </div>

        <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium mb-4">
          {service.title}
        </h3>

        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-sm font-sans text-neutral-300 font-light leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2 mb-8">
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-400 block">
            Scope & Deliverables:
          </span>
          {service.deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-sans text-neutral-200">
              <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-[#d4af37]/20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-white/10 text-xs font-sans uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onPlanEvent();
            }}
            className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-bold text-xs font-sans uppercase tracking-wider flex items-center gap-2 hover:brightness-110"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
