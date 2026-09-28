import React from 'react';
import { OCCASIONS_DATA } from '../data/products';
import { ArrowRight, Gift } from 'lucide-react';

interface OccasionsSectionProps {
  onSelectOccasion: (occasionName: string) => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({ onSelectOccasion }) => {
  return (
    <section id="occasions" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-800">
            Thoughtful Keepsakes
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
            Handcrafted for Life's Cherished Moments
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Real flowers fade in a week. Our pipe-cleaner floral creations remain vibrant for years—a timeless token of affection, celebration, and gratitude.
          </p>
        </div>

        {/* Occasions Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {OCCASIONS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectOccasion(item.name)}
              className="group cursor-pointer bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2 bg-stone-50 rounded-xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <span className="text-[11px] font-medium text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>View Crafts</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-rose-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-stone-500 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
                <span className="flex items-center gap-1.5 text-stone-700">
                  <Gift className="w-3.5 h-3.5 text-rose-500" />
                  <span>Curated Gifts</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform text-rose-700 font-semibold">
                  Browse →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
