import React, { useState } from 'react';
import { Heart, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
  onOpenCustomOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenCustomOrder }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-2xl font-display font-bold text-white tracking-tight block">
              Twist & Bloom
            </a>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Artisan handcrafted pipe-cleaner flowers, everlasting bouquets, cute keychains, and luminous floral lamps. 
              Sculpted petal-by-petal to bring timeless joy to your loved ones.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/15550198273"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#25D366] hover:text-white text-stone-300 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-rose-600 hover:text-white text-stone-300 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@twistandbloomcrafts.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('flowers')}
                  className="hover:text-rose-300 transition-colors text-left"
                >
                  Pipe-Cleaner Flowers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('bouquets')}
                  className="hover:text-rose-300 transition-colors text-left"
                >
                  Handmade Bouquets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('keychains')}
                  className="hover:text-rose-300 transition-colors text-left"
                >
                  Cute Keychains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('lamps')}
                  className="hover:text-rose-300 transition-colors text-left"
                >
                  Decorative Lamps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('gifts')}
                  className="hover:text-rose-300 transition-colors text-left"
                >
                  Customized Gifts
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Studio & Orders
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={onOpenCustomOrder}
                  className="hover:text-rose-300 transition-colors text-left"
                >
                  Custom Order Studio
                </button>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-300 transition-colors">
                  Craft Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-300 transition-colors">
                  About Our Artisans
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-rose-300 transition-colors">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-300 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bloom Club Newsletter
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe to get seasonal flower drop alerts and 10% off your first custom gift.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-800">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you for joining our bloom family!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <div className="pt-2 text-[11px] text-stone-500">
              Handmade with <Heart className="w-3 h-3 inline text-rose-500 fill-rose-500" /> in our local craft studio.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Twist & Bloom Studio. All rights reserved. Handcrafted Everlasting Floral Art.</p>
          <div className="flex items-center gap-6">
            <span>Handmade with Love, Made Just for You</span>
            <a href="#home" className="hover:text-stone-300 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
