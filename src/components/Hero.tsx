import React from 'react';
import { ArrowRight, Palette, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onCustomizeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onCustomizeClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background gradient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-rose-100/60 via-purple-50/40 to-amber-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean unboxed editorial kicker (No pills) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-rose-800">
              <span>Artisan Chenille Studio</span>
              <span aria-hidden="true">·</span>
              <span>100% Handcrafted</span>
              <span aria-hidden="true">·</span>
              <span>Everlasting Blooms</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
              Handmade with Love, Made Just for You
            </h1>

            {/* Subtitle / Short description */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Beautiful handmade pipe-cleaner flowers, bouquets, keychains, lamps, and unique gifts.
              Sculpted petal-by-petal to bring warmth, color, and everlasting magic into your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.98] rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onCustomizeClick}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-rose-950 bg-rose-100 hover:bg-rose-200/90 active:scale-[0.98] rounded-xl transition-all border border-rose-200/80 flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4 text-rose-700" />
                <span>Customize Your Order</span>
              </button>
            </div>

            {/* Trust points - clean unboxed list */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Never fades or wilts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Custom colors on request</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Free fairy lights on sets</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-stone-900/5 aspect-[4/3] lg:aspect-[5/4] bg-stone-100">
                <img
                  src="/src/assets/images/hero_pipecleaner_crafts_1790585705399.jpg"
                  alt="Artisanal flatlay of handmade pipe-cleaner pastel flowers, bouquets, lamps, and keychains"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating Craft Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-rose-700">Artisan Studio Spotlight</p>
                      <h3 className="text-sm font-bold text-stone-900">Custom Everlasting Keepsakes</h3>
                    </div>
                    <span className="text-xs font-mono font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                      100% Velvet
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative gentle floating badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-amber-50 border border-amber-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="w-8 h-8 rounded-xl bg-amber-200/60 flex items-center justify-center text-amber-800">
                  <Heart className="w-4 h-4 fill-amber-600 text-amber-600" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-amber-900">Allergen Free</p>
                  <p className="text-[10px] text-amber-700">Safe for pets & kids</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
