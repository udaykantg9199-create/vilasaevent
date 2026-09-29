import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Play, Pause, Bookmark, BookmarkCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { ARTISTS_DATA } from '../data/festivalData';
import { Artist } from '../types/festival';
import { playArtistPreview, playSuccessChime } from '../utils/audioSynth';

interface LineupSectionProps {
  savedScheduleIds: string[];
  onToggleSchedule: (artistId: string) => void;
  onOpenTickets: () => void;
}

export const LineupSection: React.FC<LineupSectionProps> = ({
  savedScheduleIds,
  onToggleSchedule,
  onOpenTickets,
}) => {
  const [selectedDay, setSelectedDay] = useState<'All' | 'Day 1 (Fri)' | 'Day 2 (Sat)' | 'Day 3 (Sun)'>('All');
  const [selectedStage, setSelectedStage] = useState<'All' | 'Main Arena' | 'Acoustic Sunset Stage'>('All');
  const [playingArtistId, setPlayingArtistId] = useState<string | null>(null);
  const stopAudioRef = useRef<(() => void) | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Filter artists
  const filteredArtists = ARTISTS_DATA.filter((artist) => {
    const matchDay = selectedDay === 'All' || artist.day === selectedDay;
    const matchStage = selectedStage === 'All' || artist.stage === selectedStage;
    return matchDay && matchStage;
  });

  // GSAP stagger transition when filters change
  useEffect(() => {
    if (cardsContainerRef.current) {
      gsap.fromTo(
        cardsContainerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [selectedDay, selectedStage]);

  // Audio preview handler
  const handlePlayPreview = (artist: Artist) => {
    if (playingArtistId === artist.id) {
      if (stopAudioRef.current) stopAudioRef.current();
      setPlayingArtistId(null);
      return;
    }

    if (stopAudioRef.current) {
      stopAudioRef.current();
    }

    setPlayingArtistId(artist.id);
    const stopFn = playArtistPreview(() => {
      setPlayingArtistId(null);
    });
    stopAudioRef.current = stopFn;
  };

  const handleToggleSchedule = (artistId: string) => {
    playSuccessChime();
    onToggleSchedule(artistId);
  };

  return (
    <section id="lineup" className="py-24 relative bg-[#0c0e14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff2d55] uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Music Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Artist Lineup & <span className="bg-gradient-to-r from-[#ff2d55] to-amber-400 bg-clip-text text-transparent">Stage Schedules</span>
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-neutral-400 max-w-md">
            Groove to high-octane Punjabi beats, soulful Sufi qawwali nights, and cheerful indie-folk under the golden Delhi sunset.
          </p>
        </div>

        {/* Filter Controls: Days (Interactive Segmented Bar) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-2xl border border-white/10 overflow-x-auto max-w-full">
            {(['All', 'Day 1 (Fri)', 'Day 2 (Sat)', 'Day 3 (Sun)'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  selectedDay === day
                    ? 'bg-[#ff2d55] text-white shadow-lg'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Stage Filter */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Stage:</span>
            <div className="flex items-center gap-1">
              {(['All', 'Main Arena', 'Acoustic Sunset Stage'] as const).map((stage) => (
                <button
                  key={stage}
                  onClick={() => setSelectedStage(stage)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedStage === stage
                      ? 'bg-white/15 text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Artist Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => {
            const isSaved = savedScheduleIds.includes(artist.id);
            const isPlaying = playingArtistId === artist.id;

            return (
              <div
                key={artist.id}
                className="group relative rounded-3xl bg-[#131622] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                {/* Artist Photo Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131622] via-[#131622]/40 to-transparent" />

                  {/* Day and Stage clean metadata kicker */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      {artist.day}
                    </div>

                    <button
                      onClick={() => handleToggleSchedule(artist.id)}
                      className={`p-2 rounded-xl backdrop-blur-md border transition-all cursor-pointer ${
                        isSaved
                          ? 'bg-[#ff5e36] text-white border-[#ff5e36]'
                          : 'bg-black/60 text-neutral-300 hover:text-white border-white/20'
                      }`}
                      title={isSaved ? 'Remove from my schedule' : 'Save to my festival schedule'}
                    >
                      {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Audio preview button overlay */}
                  <div className="absolute bottom-3 right-4">
                    <button
                      onClick={() => handlePlayPreview(artist)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-amber-400 text-black border-amber-300 shadow-[0_0_15px_#ffc700]'
                          : 'bg-black/70 text-white border-white/20 hover:bg-black/90'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-black" />
                          <span>Playing Track</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Preview Beat</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                      <span>{artist.genre}</span>
                      <span>·</span>
                      <span className="text-[#ff5e36] font-medium">{artist.topTrack}</span>
                    </div>

                    <h3 className="text-2xl font-black font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {artist.name}
                    </h3>

                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                      {artist.bio}
                    </p>
                  </div>

                  {/* Stage & Time Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{artist.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-[#ff2d55]" />
                      <span>{artist.stage}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Action Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/5 via-[#1a1d2c] to-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-display text-white mb-1">
              Want front-row access for your favorite headliners?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              VIP Lounge passes include access to the elevated viewing deck directly beside the Main Stage.
            </p>
          </div>
          <button
            onClick={onOpenTickets}
            className="px-6 py-3 bg-[#ff2d55] hover:bg-[#ff4267] text-white font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap shadow-lg transition-colors cursor-pointer"
          >
            Upgrade to VIP Pass
          </button>
        </div>
      </div>
    </section>
  );
};
