import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, ProductColor } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onAddToCart: (product: Product, selectedColor: ProductColor) => void;
  onOrderNow: (product: Product, selectedColor: ProductColor) => void;
  onQuickView: (product: Product) => void;
  selectedOccasionFilter?: string | null;
  onClearOccasionFilter?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onOrderNow,
  onQuickView,
  selectedOccasionFilter,
  onClearOccasionFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categoriesList: { id: ProductCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Crafts', icon: '✨' },
    { id: 'flowers', label: 'Pipe-Cleaner Flowers', icon: '🌸' },
    { id: 'bouquets', label: 'Handmade Bouquets', icon: '💐' },
    { id: 'keychains', label: 'Cute Keychains', icon: '🔑' },
    { id: 'lamps', label: 'Decorative Lamps', icon: '💡' },
    { id: 'gifts', label: 'Customized Gifts', icon: '🎁' }
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory !== 'all' && p.category !== activeCategory) {
          return false;
        }
        // Occasion filter if active
        if (
          selectedOccasionFilter &&
          (!p.occasions || !p.occasions.includes(selectedOccasionFilter))
        ) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchCat = p.categoryLabel.toLowerCase().includes(q);
          const matchOccasion = p.occasions?.some((o) => o.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchCat && !matchOccasion) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [products, activeCategory, selectedOccasionFilter, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-16 bg-[#FAF8F5]">
      <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">
            Handcrafted Collection
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
            Explore Our Handmade Creations
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Each piece is shaped, sculpted, and detailed by hand using dense velvet chenille wire. 
            Choose your favorite shade or request a custom combination.
          </p>
        </div>

        {/* Category Navigation Pills / Segmented Controls */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search, Filter & Sort Controls Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-xs">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search flowers, bouquets, lamps, keychains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 transition-all text-stone-800 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Active Filter indicator if filtered by occasion */}
          {selectedOccasionFilter && onClearOccasionFilter && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800">
              <span>Occasion: <strong>{selectedOccasionFilter}</strong></span>
              <button
                onClick={onClearOccasionFilter}
                className="p-0.5 hover:bg-rose-200/50 rounded-full"
                title="Clear occasion filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Sort Selector */}
          <div className="flex items-center gap-2 justify-end">
            <SlidersHorizontal className="w-4 h-4 text-stone-500" />
            <span className="text-xs text-stone-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOrderNow={onOrderNow}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
            <span className="text-4xl">🌸</span>
            <h3 className="text-lg font-bold text-stone-900">No matching craft found</h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              We couldn't find any products matching your current filters. Try changing your search query or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
                if (onClearOccasionFilter) onClearOccasionFilter();
              }}
              className="px-5 py-2.5 text-xs font-semibold text-rose-900 bg-rose-100 hover:bg-rose-200 rounded-xl transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
