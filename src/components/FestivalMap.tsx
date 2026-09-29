import React, { useState } from 'react';
import { MapPin, Navigation, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { FESTIVAL_ZONES } from '../data/festivalData';
import { FestivalZone } from '../types/festival';

export const FestivalMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<FestivalZone>(FESTIVAL_ZONES[0]);

  return (
    <section id="map" className="py-24 relative bg-[#0c0d12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Grounds Map</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Explore Jawaharlal <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nehru Stadium</span>
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-neutral-400 max-w-md">
            Click any zone pin on the interactive stadium layout to check out featured popups, stages, and carnival thrills.
          </p>
        </div>

        {/* Map & Zone Inspector Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Main: Interactive SVG Stadium Map */}
          <div className="lg:col-span-8 bg-[#121520] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white">Live Stadium Layout · Gate No. 2 Entry</span>
              </div>
              <span className="hidden sm:inline">Click pin to focus zone</span>
            </div>

            {/* Stadium Visual Layout */}
            <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#090b10] border border-white/5 overflow-hidden flex items-center justify-center p-4">
              {/* Stadium Track & Field SVG Backdrop */}
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.8))' }}
              >
                {/* Stadium Outer Ring */}
                <ellipse
                  cx="400"
                  cy="250"
                  rx="370"
                  ry="220"
                  fill="#151928"
                  stroke="#ffffff15"
                  strokeWidth="3"
                />
                {/* Running Track Ring */}
                <ellipse
                  cx="400"
                  cy="250"
                  rx="330"
                  ry="190"
                  fill="#191e30"
                  stroke="#ff5e3630"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Central Festival Lawn */}
                <ellipse
                  cx="400"
                  cy="250"
                  rx="280"
                  ry="155"
                  fill="#0e111a"
                  stroke="#ffffff10"
                  strokeWidth="2"
                />

                {/* Festival Grounds Zones Outline */}
                {/* Food Boulevard (Left side) */}
                <path
                  d="M 170 180 Q 240 160 260 260 Q 240 340 180 320 Z"
                  fill="#ff5e3615"
                  stroke="#ff5e3650"
                  strokeWidth="1.5"
                />
                <text x="210" y="250" fill="#ff5e36" fontSize="12" fontWeight="bold" textAnchor="middle">
                  FOOD BOULEVARD
                </text>

                {/* Main Concert Arena (Right side) */}
                <path
                  d="M 520 160 Q 640 180 620 320 Q 520 340 500 240 Z"
                  fill="#ff2d5515"
                  stroke="#ff2d5550"
                  strokeWidth="1.5"
                />
                <text x="565" y="245" fill="#ff2d55" fontSize="12" fontWeight="bold" textAnchor="middle">
                  MAIN ARENA STAGE
                </text>

                {/* Acoustic Sunset Lawn (Top middle) */}
                <ellipse cx="400" cy="140" rx="90" ry="35" fill="#10b98115" stroke="#10b98150" strokeWidth="1.5" />
                <text x="400" y="144" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">
                  ACOUSTIC SUNSET
                </text>

                {/* Quirk Bazaar (Bottom left) */}
                <ellipse cx="280" cy="350" rx="80" ry="32" fill="#ffaa0015" stroke="#ffaa0050" strokeWidth="1.5" />
                <text x="280" y="354" fill="#ffaa00" fontSize="11" fontWeight="bold" textAnchor="middle">
                  QUIRK BAZAAR
                </text>

                {/* Ferris Wheel & Carnival (Center) */}
                <circle cx="400" cy="275" r="45" fill="#00d2ff15" stroke="#00d2ff50" strokeWidth="1.5" />
                <text x="400" y="278" fill="#00d2ff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  CARNIVAL & FERRIS WHEEL
                </text>

                {/* Beer Garden (Bottom right) */}
                <ellipse cx="560" cy="350" rx="70" ry="32" fill="#a855f715" stroke="#a855f750" strokeWidth="1.5" />
                <text x="560" y="354" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">
                  BEER GARDEN
                </text>

                {/* Gate 2 Main Entry Marker */}
                <rect x="360" y="445" width="80" height="26" rx="6" fill="#ff5e36" />
                <text x="400" y="462" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  GATE 2 ENTRY
                </text>
              </svg>

              {/* Clickable Zone Interactive Pins */}
              {FESTIVAL_ZONES.map((zone) => {
                const isSelected = activeZone.id === zone.id;

                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone)}
                    style={{ left: `${zone.coords.x}%`, top: `${zone.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer transition-all duration-300 z-20 group ${
                      isSelected
                        ? 'scale-125 ring-4 ring-white/60 shadow-[0_0_25px_rgba(255,255,255,0.8)]'
                        : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      style={{ backgroundColor: zone.color }}
                    >
                      <MapPin className="w-4 h-4 fill-white" />
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-black/90 backdrop-blur-md rounded-lg text-[10px] text-white font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/20">
                      {zone.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stadium Quick Legend */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5e36]" /> Food Stalls
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff2d55]" /> Main Arena
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ffaa00]" /> Quirk Bazaar
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#00d2ff]" /> Carnival & Rides
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#a855f7]" /> Beer Garden
              </span>
            </div>
          </div>

          {/* Right: Zone Detail Card */}
          <div className="lg:col-span-4 bg-[#121520] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-black"
                  style={{ backgroundColor: activeZone.color }}
                >
                  Zone Selected
                </span>
                <span className="text-xs text-neutral-400">JLN Stadium East Lawn</span>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-2">
                {activeZone.name}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {activeZone.description}
              </p>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                  Featured Stalls & Attractions:
                </span>
                {activeZone.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Distance from Gate 2:</span>
                <span className="font-bold text-white">~3 mins walk</span>
              </div>
              <a
                href="#food"
                className="w-full block py-3 text-center rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Browse Stalls In This Zone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
