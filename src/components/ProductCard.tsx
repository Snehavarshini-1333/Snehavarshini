import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { ShoppingBag, Zap, Eye, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedColor: ProductColor) => void;
  onOrderNow: (product: Product, selectedColor: ProductColor) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOrderNow,
  onQuickView
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] || { name: 'Natural', hex: '#E5D4C0' }
  );
  const [imgError, setImgError] = useState(false);
  const [addedEffect, setAddedEffect] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 1200);
  };

  return (
    <article className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300">
      
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-stone-100 p-4 text-center">
            <span className="text-3xl mb-2">🌸</span>
            <span className="text-xs font-semibold text-stone-700">{product.name}</span>
          </div>
        )}

        {/* Subtle status tag (No badge sandwiches) */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 bg-stone-900/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md backdrop-blur-xs">
            Bestseller
          </span>
        )}
        {!product.isBestseller && product.isNew && (
          <span className="absolute top-3 left-3 bg-rose-600/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md backdrop-blur-xs">
            New Arrival
          </span>
        )}

        {/* Quick View Button on Image */}
        <button
          onClick={() => onQuickView(product)}
          aria-label={`Quick view details for ${product.name}`}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-stone-700 rounded-full shadow-sm opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div className="space-y-2.5">
          {/* Metadata: Category & Rating (Unboxed clean text) */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="font-medium tracking-wide uppercase">{product.categoryLabel}</span>
            <div className="flex items-center gap-1 text-stone-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold tabular-nums">{product.rating.toFixed(1)}</span>
              <span className="text-stone-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-semibold text-stone-900 hover:text-rose-700 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection Swatches */}
          <div className="pt-1">
            <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5">
              <span>Color: <strong className="text-stone-700 font-medium">{selectedColor.name}</strong></span>
              <span className="text-stone-400">{product.colors.length} choices</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.colors.map((color) => {
                const isSelected = selectedColor.name === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                    className={`w-6 h-6 rounded-full border transition-all flex items-center justify-center ${
                      isSelected
                        ? 'ring-2 ring-stone-900 ring-offset-1 scale-110 border-transparent'
                        : 'border-stone-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {isSelected && (
                      <Check className="w-3 h-3 text-stone-800 drop-shadow-xs" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-5 mt-4 border-t border-stone-100 space-y-3">
          
          {/* Price display with tabular nums */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-stone-900 font-mono tabular-nums">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through font-mono tabular-nums">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">
              {product.stockStatus === 'in_stock' ? 'In Stock' : 'Made to Order'}
            </span>
          </div>

          {/* Action Buttons: Add to Cart & Order Now */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAdd}
              className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all flex items-center justify-center gap-1.5 ${
                addedEffect
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50 active:bg-stone-100'
              }`}
            >
              {addedEffect ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-stone-500" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            <button
              onClick={() => onOrderNow(product, selectedColor)}
              className="py-2.5 px-3 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Order Now</span>
            </button>
          </div>

        </div>

      </div>

    </article>
  );
};
