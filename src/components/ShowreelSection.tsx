import React, { useState } from 'react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

export const ShowreelSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-[#d4af37]/15">
      {/* Background Image / Cinema Reel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/destination_palace_udaipur_1790667535542.jpg"
          alt="Palace Fireworks Night"
          className="w-full h-full object-cover scale-105 filter brightness-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#120409]/60 to-[#0a0809]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#2b0813]/70 backdrop-blur-md text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-8">
          <span>Cinematography & Soundscapes</span>
        </div>

        <h2 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl font-semibold text-white tracking-tight uppercase leading-[0.95] mb-10">
          SEE THE <br />
          <span className="text-gold-gradient italic font-normal">MOMENT.</span>
        </h2>

        {/* Play Button Trigger */}
        <button
          onClick={() => setModalOpen(true)}
          className="group relative flex items-center gap-4 px-8 py-5 rounded-full border border-[#d4af37] bg-black/60 hover:bg-[#d4af37] text-white hover:text-black transition-all duration-500 shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:scale-105 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#d4af37] group-hover:bg-black text-black group-hover:text-[#d4af37] flex items-center justify-center transition-colors">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-bold">
            PLAY SHOWREEL →
          </span>
        </button>
      </div>

      {/* Fullscreen Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="relative bg-[#11050a] border border-[#d4af37]/40 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-black/50">
              <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-semibold">
                Vilāsa Royal Highlights Reel · 4K Cinema
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Cinema Video Experience */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/images/varmala_moment_fireworks_1790667558554.jpg"
                alt="Cinema Playback"
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-70'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              {/* Central Playing Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-xs font-sans tracking-[0.3em] text-[#d4af37] uppercase mb-2">
                  Umaid Bhawan & Jagmandir Palaces
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium mb-6">
                  Moments That Defy Time
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                >
                  <Play className={`w-6 h-6 fill-current ${isPlaying ? 'opacity-90' : ''}`} />
                </button>
              </div>

              {/* Bottom video control bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans text-neutral-300 bg-black/70 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <span>02:14 / 03:45</span>
                  <span>•</span>
                  <span>Dolby Atmos Master</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-1.5 hover:text-white"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
                    <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
