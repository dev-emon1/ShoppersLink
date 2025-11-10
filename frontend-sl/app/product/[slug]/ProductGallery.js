"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductGallery = ({ product }) => {
  // ✅ ধরো product.images হচ্ছে একটা array
  const [activeImg, setActiveImg] = useState(
    product?.images?.[0] || "/images/placeholder.png"
  );

  return (
    <div className="space-y-4">
      {/* 🔹 Main Product Image */}
      <div className="relative w-full aspect-square border border-border rounded-lg overflow-hidden">
        <Image
          src={activeImg || "/images/placeholder.png"}
          alt={product?.name || "Product Gallery Image"}
          fill
          className="object-contain"
        />
      </div>

      {/* 🔹 Thumbnails */}
      <div className="flex gap-3 justify-center">
        {product?.images?.length > 0 ? (
          product.images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImg(img)}
              className={`relative w-20 h-20 border rounded-md cursor-pointer overflow-hidden ${
                activeImg === img
                  ? "ring-2 ring-main scale-105"
                  : "hover:ring-1 hover:ring-main/50"
              } transition`}
            >
              <Image
                src={img || "/images/placeholder.png"}
                alt={`Thumbnail ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))
        ) : (
          <p className="text-sm text-textLight">No images available</p>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
