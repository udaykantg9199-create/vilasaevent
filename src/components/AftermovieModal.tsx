import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Ticket } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface AftermovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTickets: () => void;
}

export const AftermovieModal: React.FC<AftermovieModalProps> = ({
  isOpen,
  onClose,
  onOpenTickets,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative bg-[#111420] border border-white/20 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Official Aftermovie · {FESTIVAL_INFO.edition} Recap
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Teaser Reel */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/src/assets/images/hero_festival_carnival_1790667108784.jpg"
            alt="Festival Atmosphere"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105 filter brightness-110' : 'scale-100 filter brightness-75'
            }`}
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

          {/* Simulated Festival Highlights Reel Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {isPlaying && (
              <div className="space-y-3 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/80 text-white text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>100,000+ Happy Foodies Every Edition</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight max-w-2xl">
                  Delhi's Biggest Food & Music Celebration
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                  Over 150 mouthwatering food popups, stellar indie live acts, carnival thrills, and unforgettable memories.
                </p>
              </div>
            )}

            {/* Play/Pause Center Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="mt-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
            </button>
          </div>

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-white"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <span>01:42 / 02:30</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-white flex items-center gap-1"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? 'Unmute' : 'Audio On'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="p-4 sm:p-6 bg-[#0c0e15] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div>
            <h4 className="text-base font-bold text-white">Experience it live this November</h4>
            <p className="text-xs text-neutral-400">Phase 1 Early Bird tickets starting at just ₹249</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenTickets();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Ticket className="w-4 h-4" />
            <span>Book Your Passes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
