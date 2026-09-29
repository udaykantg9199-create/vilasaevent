import React from 'react';
import { X, Trash2, Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { ARTISTS_DATA } from '../data/festivalData';
import { Artist } from '../types/festival';

interface SavedScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemove: (id: string) => void;
  onOpenTickets: () => void;
}

export const SavedScheduleModal: React.FC<SavedScheduleModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemove,
  onOpenTickets,
}) => {
  if (!isOpen) return null;

  const savedArtists = ARTISTS_DATA.filter((a) => savedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative bg-[#121520] border border-white/20 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Personalized Plan
            </span>
            <h3 className="text-2xl font-black font-display text-white">
              My Festival Schedule ({savedArtists.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="overflow-y-auto space-y-3 flex-1 pr-1">
          {savedArtists.length > 0 ? (
            savedArtists.map((artist) => (
              <div
                key={artist.id}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <span className="text-amber-400 font-bold">{artist.day}</span>
                    <span>·</span>
                    <span className="text-neutral-300">{artist.genre}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{artist.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-300" />
                      {artist.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#ff2d55]" />
                      {artist.stage}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(artist.id)}
                  className="p-2 text-neutral-400 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors"
                  title="Remove from schedule"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-neutral-400">
              <Calendar className="w-10 h-10 mx-auto text-neutral-600 mb-3" />
              <p className="text-sm font-semibold text-white">No acts saved yet!</p>
              <p className="text-xs text-neutral-400 mt-1">
                Browse the lineup section and tap the bookmark icon on any artist to assemble your custom festival timetable.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenTickets();
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg"
          >
            <Ticket className="w-4 h-4" />
            <span>Book Entry Passes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
