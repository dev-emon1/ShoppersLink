"use client";
import React, { useMemo, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery({ images = [], variants = [] }) {
  const mergedImages = useMemo(() => {
    if (Array.isArray(images) && images.length > 0) return images;
    if (Array.isArray(variants) && variants.length > 0) {
      return variants.flatMap((v) => v.images || []);
    }
    return [];
  }, [images, variants]);

  const validImages = mergedImages.filter(Boolean);
  const [activeIdx, setActiveIdx] = useState(0);
  const active = validImages[activeIdx] || "/images/product-placeholder.jpg";

  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  if (!validImages.length) {
    return (
      <div className="border h-[550px] flex items-center justify-center w-full">
        <Image
          src="/images/product-placeholder.jpg"
          alt="Product Placeholder"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative border border-border bg-bgSurface overflow-hidden">
        <div className="relative w-full h-[580px] sm:h-[640px] flex items-center justify-center">
          <Image
            src={active.src || active}
            alt="Product image"
            width={800}
            height={800}
            priority
            className="object-contain p- select-none"
          />
        </div>
      </div>

      {/* 🔹 Thumbnail List */}
      {validImages.length > 1 && (
        <div className="relative mt-4">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-border rounded-full p-1 shadow text-textPrimary hidden sm:block"
            aria-label="Prev thumbnails"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-border rounded-full p-1 shadow text-textPrimary hidden sm:block"
            aria-label="Next thumbnails"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-8"
          >
            {validImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`relative flex-shrink-0 border-2 rounded-lg overflow-hidden w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] transition-all ${
                  activeIdx === i
                    ? "border-main ring-2 ring-main/20"
                    : "border-border"
                }`}
              >
                <Image
                  src={img.src}
                  alt={`Thumbnail ${i + 1}`}
                  width={100}
                  height={100}
                  className="object-cover hover:opacity-90 transition"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
