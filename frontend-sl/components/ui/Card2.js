"use client";
import React from "react";
import Image from "next/image";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import ProductActions from "./ProductActions";

const Card2 = ({ product }) => {
  const productImage =
    product?.image ||
    (Array.isArray(product?.images) && product.images.length > 0
      ? product.images[0]
      : "/images/placeholder.png");

  const badgeClass =
    product.badge === "New"
      ? "bg-green"
      : product.badge === "Popular"
      ? "bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)] flex items-center gap-1"
      : "bg-red";

  return (
    <div
      className="
        group relative bg-white border border-border rounded-2xl 
        overflow-hidden shadow-sm hover:shadow-md 
        transition-all duration-300 w-full sm:w-[95%] md:w-full
      "
    >
      {/* 🔹 Dynamic Badge */}
      {(product.badge || product.discount) && (
        <span
          className={`absolute top-3 left-3 z-20 text-xs font-semibold text-white px-3 py-1 rounded-md ${badgeClass}`}
        >
          {product.discount ? (
            `-${product.discount}%`
          ) : product.badge === "Popular" ? (
            <>
              <Star size={12} className="fill-yellow text-yellow" /> Popular
            </>
          ) : (
            product.badge || "New"
          )}
        </span>
      )}

      {/* 🔹 Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={productImage}
          alt={product?.name || "Product Image"}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* 🔹 Hover Actions */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-300">
          <ProductActions
            slug={product.slug}
            product={product}
            vendorId={product.vendorId || "vendor-1"}
            vendorName={product.vendorName || "ShoppersLink Official"}
          />
        </div>
      </div>

      {/* 🔹 Product Details */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-textPrimary text-sm md:text-base line-clamp-1">
          {product.name}
        </h3>

        {product.category && (
          <p className="text-textLight text-xs mt-1">{product.category}</p>
        )}

        {/* 🔹 Rating */}
        {product.rating && (
          <div className="flex items-center justify-center gap-1 text-yellow-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-yellow text-yellow"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs text-textSecondary ml-1">
              ({product.rating})
            </span>
          </div>
        )}

        {/* 🔹 Price */}
        {product.price && (
          <div className="mt-3">
            <span className="text-lg font-bold text-main">
              ৳{product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-textLight line-through ml-2">
                ৳{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card2;
