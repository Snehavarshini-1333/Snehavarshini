import React from 'react';
import { Heart, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Dense Velvet Chenille Sourcing',
      desc: 'We use ultra-dense, plush velvet pipe cleaners with flexible galvanized iron cores that hold delicate shapes forever without bending out of place.'
    },
    {
      num: '02',
      title: 'Hand-Curling & Petal Sculpting',
      desc: 'Every single petal, leaf, and stamen is twisted, curled, and shaped one by one by skilled craftswomen—no plastic molds, no automated assembly lines.'
    },
    {
      num: '03',
      title: 'Lighting & Hardware Integration',
      desc: 'Lamps are paired with low-heat micro fairy LEDs and crystal-clear borosilicate cloches; keychains feature anti-tarnish polished hardware.'
    },
    {
      num: '04',
      title: 'Keepsake Gifting & Ribbons',
      desc: 'Finished with layered Korean matte paper wraps, luxury satin bows, and optional personalized handwritten calligraphy cards.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              <img
                src="/src/assets/images/hero_pipecleaner_crafts_1790585705399.jpg"
                alt="Artisan hands crafting pipe-cleaner flowers"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-100">
                <span className="text-2xl font-bold font-mono text-rose-900 block tabular-nums">12,000+</span>
                <span className="text-xs text-rose-700 font-medium">Petals Sculpted by Hand</span>
              </div>
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100">
                <span className="text-2xl font-bold font-mono text-amber-900 block tabular-nums">100%</span>
                <span className="text-xs text-amber-700 font-medium">Everlasting & Non-Wilting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-800">
                Our Story & Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
                Crafted with Care, Meant to Last Forever
              </h2>
            </div>

            <p className="text-base text-stone-600 leading-relaxed">
              At <strong>Twist & Bloom</strong>, we believe flowers should not have an expiration date. 
              What started as a quiet passion for tactile chenille sculptures grew into a beloved artisan studio 
              dedicated to creating everlasting flowers, whimsical night lamps, and personalized treasures.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Every blossom is crafted entirely by hand with soft velvet pipe cleaners. Unlike fresh blooms that fade 
              after a few days, our handmade crafts retain their vivid colors, fluffy texture, and heartfelt sentiment 
              for years to come—making them the perfect meaningful gift for those you cherish most.
            </p>

            {/* Craft Steps */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((st) => (
                <div key={st.num} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-rose-700">{st.num}.</span>
                    <h3 className="text-xs font-bold text-stone-900">{st.title}</h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-stone-700">
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-600" />
                <span>100% Artisan Handcrafted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Feather className="w-4 h-4 text-purple-600" />
                <span>Hypoallergenic & Dust-Resistant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Custom Requests Welcomed</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
