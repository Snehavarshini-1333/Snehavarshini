import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { X, Star, Check, ShoppingBag, Zap, ShieldCheck, Sparkles, Feather } from 'lucide-react';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: ProductColor) => void;
  onOrderNow: (product: Product, selectedColor: ProductColor) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  onOrderNow
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] || { name: 'Natural', hex: '#E5D4C0' }
  );

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image */}
        <div className="md:w-1/2 bg-stone-100 relative min-h-[260px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          {product.isBestseller && (
            <span className="absolute bottom-4 left-4 bg-stone-900/90 text-white text-xs font-semibold px-3 py-1 rounded-md">
              Bestselling Artisan Craft
            </span>
          )}
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Metadata & Title */}
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span className="font-semibold uppercase tracking-wider text-rose-700">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-stone-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold tabular-nums">{product.rating.toFixed(1)}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>
              <h2 className="text-2xl font-display font-bold text-stone-900 leading-snug">
                {product.name}
              </h2>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-stone-900 tabular-nums">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-400 line-through font-mono tabular-nums">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <label className="text-xs font-semibold text-stone-700 flex items-center justify-between">
                <span>Color Variation: <span className="font-bold text-stone-900">{selectedColor.name}</span></span>
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`h-7 px-3 rounded-full border text-xs font-medium flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-stone-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Craft Specs */}
            <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-600">
              {product.dimensions && (
                <p><strong>Dimensions:</strong> {product.dimensions}</p>
              )}
              <p><strong>Craft Materials:</strong> {product.materials}</p>
              <ul className="space-y-1 pt-1">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                onAddToCart(product, selectedColor);
                onClose();
              }}
              className="py-3 px-4 border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-stone-600" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => {
                onOrderNow(product, selectedColor);
                onClose();
              }}
              className="py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Order Now</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
