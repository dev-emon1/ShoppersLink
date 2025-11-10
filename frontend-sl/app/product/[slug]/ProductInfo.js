"use client";

import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Heart, ShoppingBag, CheckCircle2, Truck } from "lucide-react";
import RatingStars from "@/components/ui/RatingStars";

const ProductInfo = ({ product }) => {
  // 🧠 State for variant selection
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || null
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);

  // 🧮 Price display
  const price = product.price?.toFixed(2);
  const oldPrice = product.oldPrice?.toFixed(2);

  // 🛒 Handlers (you can later replace with Redux or API)
  const handleAddToCart = () => {
    alert(`Added ${product.name} (${selectedColor || "default"}) to Cart`);
  };

  const handleAddToWishlist = () => {
    alert(`Added ${product.name} to Wishlist`);
  };

  return (
    <div className="space-y-6">
      {/* Brand */}
      {product.brand && (
        <p className="text-sm uppercase text-textSecondary tracking-wide">
          {product.brand}
        </p>
      )}

      {/* Product Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-textPrimary leading-snug">
        {product.name}
      </h1>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-2">
        <RatingStars rating={product.rating || 4.8} />
        {product.reviewsCount && (
          <span className="text-xs text-textSecondary">
            ({product.reviewsCount} Reviews)
          </span>
        )}
      </div>

      {/* Price + Offer */}
      <div className="flex items-center gap-3">
        <span className="text-main text-2xl font-semibold flex items-center">
          <TbCurrencyTaka size={22} /> {price}
        </span>
        {oldPrice && (
          <span className="line-through text-textLight flex items-center">
            <TbCurrencyTaka size={14} /> {oldPrice}
          </span>
        )}
        {product.discount && (
          <span className="bg-red text-white text-xs font-semibold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Color Selection */}
      {product.colors?.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-textPrimary mb-2">Colour:</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`border rounded-md px-4 py-2 text-sm transition ${
                  selectedColor === color.name
                    ? "border-main bg-main text-white"
                    : "border-border hover:border-main"
                }`}
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes?.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-textPrimary mb-2">Size:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border rounded-md px-4 py-2 text-sm transition ${
                  selectedSize === size
                    ? "border-main bg-main text-white"
                    : "border-border hover:border-main"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add to Cart / Wishlist */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-main text-white rounded-lg font-medium hover:bg-main/90 transition w-full sm:w-auto"
        >
          <ShoppingBag size={18} />
          Add to Cart
        </button>

        <button
          onClick={handleAddToWishlist}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-gray-100 transition w-full sm:w-auto"
        >
          <Heart size={18} /> Wishlist
        </button>
      </div>

      {/* Extra Info */}
      <div className="mt-6 space-y-2 text-sm text-textSecondary">
        <div className="flex items-center gap-2">
          <Truck size={16} className="text-main" />
          <span>Free standard delivery over ৳1000</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green" />
          <span>Free returns within 7 days</span>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-border pt-4 mt-6 text-sm leading-relaxed text-textSecondary">
        <p>{product.description || "No additional details available."}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
