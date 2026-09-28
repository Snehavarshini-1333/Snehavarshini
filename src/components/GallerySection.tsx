import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem, ProductCategory } from '../types';
import { Maximize2, X, Sparkles, Heart } from 'lucide-react';

interface GallerySectionProps {
  onCustomizeWithInspiration?: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onCustomizeWithInspiration }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'bouquets', label: 'Bouquets' },
    { id: 'lamps', label: 'Lamps' },
    { id: 'keychains', label: 'Keychains' },
    { id: 'flowers', label: 'Single Stems' },
    { id: 'gifts', label: 'Gift Sets' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-800">
            Artisan Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
            Handmade Craft Gallery
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            A visual showcase of recent custom commissions, seasonal bouquets, glowing cloche lamps, and whimsical charms crafted in our studio.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 cursor-pointer border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base leading-snug">{item.title}</h3>
                  <p className="text-xs text-stone-200 line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Static Card Bottom Info for touch/mobile */}
              <div className="p-4 bg-white sm:hidden border-t border-stone-100">
                <span className="text-[11px] font-semibold text-rose-700 uppercase">{item.categoryLabel}</span>
                <h3 className="text-sm font-bold text-stone-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] bg-stone-100 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="text-2xl font-display font-bold text-stone-900 mt-1">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-stone-600 bg-stone-100 px-3 py-1 rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                {onCustomizeWithInspiration && (
                  <button
                    onClick={() => {
                      onCustomizeWithInspiration(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-rose-300" />
                    <span>Request Custom Craft Inspired By This</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
