import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (cat: string) => void;
  onOpenCustomOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onSelectCategory,
  onOpenCustomOrder
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-rose-50/90 text-rose-800 text-xs py-1.5 px-4 text-center border-b border-rose-100 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
        <span>Handmade with Love & Care · Free Custom Gift Packaging & Fairy Lights on orders over $50</span>
      </div>

      {/* Main Top Bar: 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/70 py-3'
            : 'bg-[#FAF8F5] border-b border-stone-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand wordmark (single text element) */}
            <a
              href="#"
              className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-stone-900 hover:text-rose-700 transition-colors whitespace-nowrap"
            >
              Twist & Bloom
            </a>

            {/* Zone 2: Navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
              <a href="#home" className="hover:text-rose-600 transition-colors">
                Home
              </a>
              <a href="#shop" className="hover:text-rose-600 transition-colors">
                Shop
              </a>
              <a href="#categories" className="hover:text-rose-600 transition-colors">
                Categories
              </a>
              <a href="#custom-orders" className="hover:text-rose-600 transition-colors">
                Custom Orders
              </a>
              <a href="#occasions" className="hover:text-rose-600 transition-colors">
                Occasions
              </a>
              <a href="#gallery" className="hover:text-rose-600 transition-colors">
                Gallery
              </a>
              <a href="#about" className="hover:text-rose-600 transition-colors">
                About Us
              </a>
              <a href="#contact" className="hover:text-rose-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCustomOrder}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-rose-900 bg-rose-100/80 hover:bg-rose-200/90 rounded-full transition-colors whitespace-nowrap"
              >
                <span>Customize Gift</span>
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                aria-label={`Shopping Cart with ${cartCount} items`}
                className="relative p-2.5 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1.5 bg-rose-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center tabular-nums shadow-xs animate-in zoom-in-50">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-5 space-y-3">
            <nav className="flex flex-col space-y-2 text-base font-medium text-stone-800">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Home
              </a>
              <a
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Shop All Products
              </a>
              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Categories
              </a>
              <a
                href="#custom-orders"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Custom Orders & Personalization
              </a>
              <a
                href="#occasions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Gifts by Occasion
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Handmade Gallery
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                About Our Craft
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors"
              >
                Contact & Studio
              </a>
            </nav>

            <div className="pt-2 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomOrder();
                }}
                className="w-full py-2.5 px-4 text-sm font-semibold text-center text-rose-900 bg-rose-100 rounded-xl hover:bg-rose-200 transition-colors"
              >
                Start a Custom Order
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
