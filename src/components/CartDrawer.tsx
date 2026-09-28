import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, Sparkles, Tag, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedCheckout: () => void;
  onOrderViaWhatsApp: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  onOrderViaWhatsApp
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const subtotal = Math.max(0, rawSubtotal - discountAmount);
  const freeShippingThreshold = 50;
  const progressToFreeShipping = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'BLOOM10') {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid code. Try "BLOOM10" for 10% off!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-700" />
              <h2 className="font-display font-bold text-lg text-stone-900">
                Your Shopping Bag
              </h2>
              <span className="text-xs font-mono font-medium text-stone-500 bg-stone-200/80 px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-rose-50/70 border-b border-rose-100 text-xs text-rose-900">
            {rawSubtotal >= freeShippingThreshold ? (
              <p className="font-semibold flex items-center gap-1.5 text-emerald-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>You unlocked FREE Gift Packaging & Shipping! 🎉</span>
              </p>
            ) : (
              <div className="space-y-1.5">
                <p>
                  Add <strong className="font-mono">${freeShippingThreshold - rawSubtotal}</strong> more for Free Custom Packaging & Shipping!
                </p>
                <div className="w-full bg-rose-200/60 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-rose-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-3xl">
                  🌸
                </div>
                <h3 className="text-base font-bold text-stone-900">Your bag is empty</h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our handcrafted pipe-cleaner bouquets, lamps, and gifts to add a forever keepsake.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-3.5">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 rounded-xl object-cover border border-stone-200 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-bold text-stone-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-stone-400 hover:text-rose-600 p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-stone-300 inline-block"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        <span>{item.selectedColor.name}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 text-xs font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-xs font-mono font-bold text-stone-800 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 text-xs font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono text-sm font-bold text-stone-900 tabular-nums">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Controls */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-4">
              
              {/* Promo code input */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. BLOOM10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-xl uppercase tracking-wider text-stone-800 placeholder:normal-case placeholder:tracking-normal"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold rounded-xl"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 text-xs px-3 py-1.5 rounded-xl border border-emerald-200">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>Coupon BLOOM10 applied (10% off)</span>
                  </span>
                  <button
                    onClick={() => {
                      setPromoApplied(false);
                      setDiscountPercent(0);
                    }}
                    className="text-[11px] underline text-emerald-700"
                  >
                    Remove
                  </button>
                </div>
              )}
              {promoError && (
                <p className="text-[11px] text-rose-600">{promoError}</p>
              )}

              {/* Subtotal & Totals */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">${rawSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span className="font-mono tabular-nums">-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Gift Wrapping & Ribbon</span>
                  <span className="text-emerald-700 font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-base font-bold text-stone-900">
                  <span>Estimated Total</span>
                  <span className="font-mono tabular-nums">${subtotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={onProceedCheckout}
                  className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOrderViaWhatsApp}
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly on WhatsApp</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
