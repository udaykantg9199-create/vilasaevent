import React, { useState, useMemo } from 'react';
import { Search, Heart, Utensils, Star, MapPin, Tag } from 'lucide-react';
import { FOOD_STALLS } from '../data/festivalData';
import { FoodStall } from '../types/festival';

interface FoodExplorerProps {
  onSelectStallOnMap?: (stallNo: string) => void;
}

export const FoodExplorer: React.FC<FoodExplorerProps> = ({ onSelectStallOnMap }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [favoriteStalls, setFavoriteStalls] = useState<string[]>([]);
  const [selectedStallDetail, setSelectedStallDetail] = useState<FoodStall | null>(null);

  const categories = [
    'All',
    'Street Chaat',
    'Tandoor & Grills',
    'Burgers & Fries',
    'Asian & Dimsum',
    'Desserts & Churros',
    'Beverages & Mocktails',
  ];

  const dietaryOptions = ['All', 'Veg', 'Non-Veg', 'Vegan', 'Jain Options'];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteStalls((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredStalls = useMemo(() => {
    return FOOD_STALLS.filter((stall) => {
      const matchSearch =
        stall.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stall.mustTry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stall.highlight.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === 'All' || stall.category === selectedCategory;

      const matchDietary =
        selectedDietary === 'All' || stall.dietary.includes(selectedDietary as any);

      return matchSearch && matchCategory && matchDietary;
    });
  }, [searchQuery, selectedCategory, selectedDietary]);

  return (
    <section id="food" className="py-24 relative bg-[#090b10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>India's Largest Food Directory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              150+ Handpicked <span className="bg-gradient-to-r from-amber-400 to-[#ff5e36] bg-clip-text text-transparent">Food Popups</span>
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-neutral-400 max-w-md">
            Curation from Chandni Chowk legends to modern street food trucks and gourmet dessert labs.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food stalls, burgers, chaat, momos, pizzas, churros..."
                className="w-full pl-11 pr-4 py-3 bg-[#131622] border border-white/15 rounded-2xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#131622] border border-white/10 rounded-2xl overflow-x-auto">
              {dietaryOptions.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                    selectedDietary === diet
                      ? 'bg-amber-400 text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ff5e36] text-white border-[#ff5e36] shadow-[0_0_15px_rgba(255,94,54,0.3)]'
                    : 'bg-[#131622] text-neutral-300 border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6">
          <span>
            Showing <strong className="text-white">{filteredStalls.length}</strong> stalls
          </span>
          {favoriteStalls.length > 0 && (
            <span className="text-rose-400 font-semibold">
              ❤️ {favoriteStalls.length} saved to your wishlist
            </span>
          )}
        </div>

        {/* Stalls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStalls.map((stall) => {
            const isFav = favoriteStalls.includes(stall.id);

            return (
              <div
                key={stall.id}
                onClick={() => setSelectedStallDetail(stall)}
                className="group relative rounded-3xl bg-[#131622] border border-white/10 hover:border-amber-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
              >
                <div>
                  {/* Top unboxed metadata line */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <span className="text-amber-400 font-semibold">{stall.stallNo}</span>
                    <button
                      onClick={(e) => toggleFavorite(stall.id, e)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isFav
                          ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                          : 'bg-white/5 text-neutral-400 hover:text-white border-white/10'
                      }`}
                      title={isFav ? 'Remove favorite' : 'Save favorite'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {stall.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                    <span>{stall.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5 text-amber-300 font-medium">
                      <Star className="w-3 h-3 fill-amber-300" />
                      {stall.rating}
                    </span>
                  </div>

                  {/* Must-Try Box */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mb-4">
                    <span className="block text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                      Must Try Signature
                    </span>
                    <p className="text-xs text-neutral-200 font-medium leading-snug">
                      {stall.mustTry}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {stall.highlight}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-semibold text-neutral-200">{stall.priceRange}</span>
                  <div className="flex items-center gap-1">
                    {stall.dietary.map((d) => (
                      <span key={d} className="text-[10px] text-neutral-400">
                        {d === 'Veg' ? '🟢 Veg' : d === 'Non-Veg' ? '🔴 Non-Veg' : d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredStalls.length === 0 && (
          <div className="text-center py-16 bg-[#131622] rounded-3xl border border-white/10 p-8">
            <Utensils className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No stalls matched your filters</h4>
            <p className="text-xs text-neutral-400 mb-4">
              Try searching for something else like "Burger", "Chaat", or clearing filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDietary('All');
              }}
              className="px-4 py-2 bg-amber-400 text-black text-xs font-bold rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Stall Detail Modal */}
      {selectedStallDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedStallDetail(null)}
        >
          <div
            className="bg-[#151926] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {selectedStallDetail.stallNo} · {selectedStallDetail.category}
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-1">
                  {selectedStallDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStallDetail(null)}
                className="text-neutral-400 hover:text-white text-lg p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {selectedStallDetail.highlight}
            </p>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20 mb-6">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                ⭐ Festival Signature Dish
              </span>
              <p className="text-sm font-semibold text-white">
                {selectedStallDetail.mustTry}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-neutral-300 mb-6">
              <div className="p-3 bg-white/5 rounded-xl">
                <span className="block text-neutral-400 text-[10px] uppercase">Average Price</span>
                <span className="text-sm font-bold text-white">{selectedStallDetail.priceRange}</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <span className="block text-neutral-400 text-[10px] uppercase">Dietary Suitability</span>
                <span className="text-sm font-bold text-white">
                  {selectedStallDetail.dietary.join(', ')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#map"
                onClick={() => {
                  setSelectedStallDetail(null);
                  if (onSelectStallOnMap) onSelectStallOnMap(selectedStallDetail.stallNo);
                }}
                className="flex-1 py-3 text-center bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white text-xs font-bold rounded-xl shadow-lg hover:brightness-110 transition-all"
              >
                Locate On Festival Map
              </a>
              <button
                onClick={(e) => toggleFavorite(selectedStallDetail.id, e)}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Heart
                  className={`w-4 h-4 ${
                    favoriteStalls.includes(selectedStallDetail.id)
                      ? 'text-rose-500 fill-rose-500'
                      : ''
                  }`}
                />
                <span>
                  {favoriteStalls.includes(selectedStallDetail.id) ? 'Saved' : 'Wishlist'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
