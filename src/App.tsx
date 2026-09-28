/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product, ProductCategory, ProductColor, CartItem, ReviewItem, CustomOrderData, GalleryItem } from './types';
import { PRODUCTS } from './data/products';
import { INITIAL_REVIEWS } from './data/reviews';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { CustomOrdersSection } from './components/CustomOrdersSection';
import { OccasionsSection } from './components/OccasionsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickView } from './components/ProductQuickView';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tb_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active category filter
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedOccasionFilter, setSelectedOccasionFilter] = useState<string | null>(null);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [directCheckoutItem, setDirectCheckoutItem] = useState<{
    product: Product;
    selectedColor: ProductColor;
    quantity: number;
  } | null>(null);

  // Reviews state
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('tb_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  // Custom Orders list
  const [customOrders, setCustomOrders] = useState<CustomOrderData[]>(() => {
    try {
      const saved = localStorage.getItem('tb_custom_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tb_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Sync reviews to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tb_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error('Failed to save reviews to localStorage', e);
    }
  }, [reviews]);

  // Cart operations
  const handleAddToCart = (product: Product, selectedColor: ProductColor) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedColor.name === selectedColor.name
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${selectedColor.name}-${Date.now()}`,
          product,
          selectedColor,
          quantity: 1
        };
        return [...prev, newItem];
      }
    });
    // Open cart drawer for instant clear visual feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Direct Order Now
  const handleOrderNow = (product: Product, selectedColor: ProductColor) => {
    setDirectCheckoutItem({
      product,
      selectedColor,
      quantity: 1
    });
    setIsCheckoutOpen(true);
  };

  // WhatsApp Order from Cart
  const handleOrderCartViaWhatsApp = () => {
    const rawTotal = cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    const summary = cartItems
      .map((i) => `• ${i.product.name} [${i.selectedColor.name}] x${i.quantity} = $${i.product.price * i.quantity}`)
      .join('%0A');

    const message = `🌸 *New Cart Order Inquiry - Twist & Bloom* 🌸%0A%0A` +
      `*Items in Bag:*%0A${summary}%0A%0A` +
      `*Total Price:* $${rawTotal}%0A%0A` +
      `Hello! I would like to place this order with complimentary gift packaging and ribbon. Please let me know how to proceed! ✨`;

    window.open(`https://wa.me/15550198273?text=${message}`, '_blank');
  };

  // Add Review
  const handleAddReview = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  // Custom Order Submit
  const handleCustomOrderSubmit = (order: CustomOrderData) => {
    setCustomOrders((prev) => [order, ...prev]);
    try {
      const existing = localStorage.getItem('tb_custom_orders');
      const list = existing ? JSON.parse(existing) : [];
      localStorage.setItem('tb_custom_orders', JSON.stringify([order, ...list]));
    } catch (e) {
      console.error(e);
    }
  };

  // Navigation handlers
  const handleScrollToShop = () => {
    const el = document.getElementById('shop');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCustomOrders = () => {
    const el = document.getElementById('custom-orders');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectOccasion = (occasionName: string) => {
    setSelectedOccasionFilter(occasionName);
    setActiveCategory('all');
    handleScrollToShop();
  };

  const handleCategorySelectFromNav = (cat: string) => {
    setActiveCategory(cat as ProductCategory);
    setSelectedOccasionFilter(null);
    handleScrollToShop();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-rose-200">
      
      {/* 3-Zone Header Navbar */}
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleCategorySelectFromNav}
        onOpenCustomOrder={handleScrollToCustomOrders}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onShopClick={handleScrollToShop}
          onCustomizeClick={handleScrollToCustomOrders}
        />

        {/* Products Section with Filters, Categories & Cards */}
        <ProductsSection
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSelectedOccasionFilter(null);
          }}
          onAddToCart={handleAddToCart}
          onOrderNow={handleOrderNow}
          onQuickView={(p) => setQuickViewProduct(p)}
          selectedOccasionFilter={selectedOccasionFilter}
          onClearOccasionFilter={() => setSelectedOccasionFilter(null)}
        />

        {/* Dedicated Custom Orders Studio */}
        <CustomOrdersSection
          onSubmitCustomOrder={handleCustomOrderSubmit}
        />

        {/* Occasions Section */}
        <OccasionsSection
          onSelectOccasion={handleSelectOccasion}
        />

        {/* Visual Gallery Showcase */}
        <GallerySection
          onCustomizeWithInspiration={() => handleScrollToCustomOrders()}
        />

        {/* About Us & Craftsmanship Journey */}
        <AboutSection />

        {/* Customer Reviews & Testimonials */}
        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
        />

        {/* Contact Section with WhatsApp, Instagram & Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleCategorySelectFromNav}
        onOpenCustomOrder={handleScrollToCustomOrders}
      />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setDirectCheckoutItem(null);
          setIsCheckoutOpen(true);
        }}
        onOrderViaWhatsApp={handleOrderCartViaWhatsApp}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOrderNow={handleOrderNow}
      />

      {/* Checkout / Order Now Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setDirectCheckoutItem(null);
        }}
        cartItems={cartItems}
        directItem={directCheckoutItem}
        onOrderCompleted={() => {
          if (!directCheckoutItem) {
            setCartItems([]);
          }
        }}
      />

    </div>
  );
}
