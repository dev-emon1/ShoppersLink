"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import ProductActions from "./ProductActions";

const Card = ({ data }) => {
  const productImage =
    data?.image ||
    (Array.isArray(data?.images) && data.images.length > 0
      ? data.images[0]
      : "/images/placeholder.png");

  return (
    <div className="group relative bg-bgSurface rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mx-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-none">
      {/* Badge */}
      {data.badge && (
        <span
          className={`absolute top-3 left-3 z-20 text-xs font-semibold text-white px-3 py-1 rounded-md 
            ${
              data.badge === "New"
                ? "bg-green"
                : data.badge === "Popular"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)] flex items-center gap-1"
                : "bg-red"
            }`}
        >
          {data.badge}
        </span>
      )}

      {/* Image */}
      <Link href={`/product/${data.slug || "#"}`}>
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={productImage}
            alt={data?.name || "Product Image"}
            fill
            sizes="(max-width: 768px) 220px, 260px"
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 text-center">
        <h3 className="text-sm font-medium text-textPrimary line-clamp-1">
          {data.name}
        </h3>

        {/* Rating */}
        {data.rating && (
          <div className="flex items-center justify-center gap-[2px] mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className={
                  i < Math.round(data.rating)
                    ? "fill-yellow text-yellow"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-[11px] text-textSecondary ml-1">
              {data.rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex justify-center items-center gap-2 mt-1">
          <span className="text-main font-semibold flex items-center gap-[1px]">
            <TbCurrencyTaka size={18} /> {data.price.toFixed(2)}
          </span>
          {data.oldPrice && (
            <span className="text-textLight line-through text-xs flex items-center">
              <TbCurrencyTaka size={12} /> {data.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Hover Actions */}
      <ProductActions
        slug={data.slug}
        product={data}
        vendorId={data.vendorId || "vendor-1"}
        vendorName={data.vendorName || "Abc Official"}
      />
    </div>
  );
};

export default Card;
