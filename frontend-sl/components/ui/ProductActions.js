"use client";
import React from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import Link from "next/link";
import { showToast } from "@/lib/utils/toast";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";
import { useWishlistSession } from "@/modules/wishlist/hooks/useWishlistSession";

const ProductActions = ({ slug, product, href }) => {
  const { addItem } = useCartSession();
  const { toggleWishlist, isInWishlist } = useWishlistSession();

  const active = isInWishlist(product.id);

  // 🛒 Add to Cart Handler
  const handleAddToCart = () => {
    const vendorId = product.vendorId || "vendor-1";
    const vendorName = product.vendorName || "ShoppersLink Official";
    addItem(vendorId, vendorName, product);
    showToast(`🛒 ${product.name} added to cart`);
  };

  // ❤️ Wishlist Toggle Handler
  const handleWishlist = () => {
    const wasInWishlist = isInWishlist(product.id);
    toggleWishlist(product);
    if (wasInWishlist) {
      showToast(`💔 Removed from wishlist`);
    } else {
      showToast(`❤️ Added to wishlist`);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 group-hover:bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* ❤️ Wishlist */}
      <button
        onClick={handleWishlist}
        className={`bg-white p-2 rounded-full shadow transition ${
          active
            ? "text-red-500 hover:bg-red-50"
            : "hover:bg-main hover:text-white"
        }`}
        aria-label="Add to Wishlist"
      >
        <Heart size={16} fill={active ? "currentColor" : "none"} />
      </button>

      {/* 🛒 Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="bg-white p-2 rounded-full shadow hover:bg-main hover:text-white transition"
        aria-label="Add to Cart"
      >
        <ShoppingBag size={16} />
      </button>

      {/* View Product */}
      <Link
        href={href || `/product/${slug}` || "#"}
        className="bg-white p-2 rounded-full shadow hover:bg-main hover:text-white transition"
        aria-label="View Product"
      >
        <Eye size={16} />
      </Link>
    </div>
  );
};

export default ProductActions;
