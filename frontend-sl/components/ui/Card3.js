"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import ProductActions from "./ProductActions";
import Link from "next/link";

const Card3 = ({
  imageSrc = "/images/product-placeholder.jpg",
  isNew = false,
  discount = 0,
  name = "Product Name",
  slug = "",
  vendorId = "vendor-1",
  vendorName = "Official Store",
  rating = 0,
  price = null,
  oldPrice = null,
  category = "",
  href,
}) => {
  const hasBadge = isNew || discount > 0;
  const badgeText = isNew ? "NEW" : discount > 0 ? `-${discount}%` : "";
  const badgeClass = isNew ? "bg-green" : discount > 0 ? "bg-red" : "";
  return (
    <div
      className="
        group relative bg-white border border-border rounded-2xl 
        overflow-hidden shadow-sm hover:shadow-md 
        transition-all duration-300 w-full sm:w-[95%] md:w-full
      "
    >
      {/* 🔹 Badge */}
      {hasBadge && (
        <span
          className={`absolute top-3 left-3 z-20 text-xs font-semibold text-white px-3 py-1 rounded-md ${badgeClass}`}
        >
          {badgeText}
        </span>
      )}

      {/* 🔹 Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "/images/product-placeholder.jpg";
          }}
        />

        {/* 🔹 Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-300">
          <ProductActions
            slug={slug}
            product={{
              imageSrc,
              name,
              slug,
              price,
              discount,
              href,
            }}
            vendorId={vendorId}
            vendorName={vendorName}
          />
        </div>
      </div>

      {/* 🔹 Product Details */}
      <Link href={href || "#"} className="p-2 text-center">
        <h3 className="font-semibold text-textPrimary text-sm md:text-base line-clamp-2 p-1">
          {name}
        </h3>

        {category && <p className="text-textLight text-xs mt-1">{category}</p>}

        {/* 🔹 Rating */}
        {/* {rating > 0 && (
          <div className="flex items-center justify-center gap-1 text-yellow-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(rating)
                    ? "fill-yellow text-yellow"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs text-textSecondary ml-1">
              ({rating.toFixed(1)})
            </span>
          </div>
        )} */}

        {/* 🔹 Price */}
        {price && (
          <div className="mt-3">
            <span className="text-lg font-bold text-main">
              ৳{price.toFixed(2)}
            </span>
            {oldPrice && (
              <span className="text-xs text-textLight line-through ml-2">
                ৳{oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card3;
