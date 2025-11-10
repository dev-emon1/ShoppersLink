"use client";
import React from "react";
import Card from "@/components/ui/Card";
import { products } from "@/data/products";
import { categoryService } from "@/modules/category/services/category.service";

export default function RelatedProducts({ product }) {
  if (!product) return null;

  const { catSlug, subSlug, childSlug } =
    categoryService.resolveProductSlugs(product);

  const related = categoryService
    ?.getProductsByChild(catSlug, subSlug, childSlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 8);

  // ✅ Fallback: If no related found, show top-rated
  const fallback =
    related.length > 0
      ? related
      : products.filter((p) => p.isTopRated).slice(0, 5);

  return (
    <div className="container mt-16 mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-6 text-textPrimary">
        You may also like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {fallback.map((item) => (
          <div
            key={item.id}
            // className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] flex justify-center"
          >
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
