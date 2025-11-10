"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "./ProductGallery";
import ProductSummary from "./ProductSummary";
import ProductDescription from "./ProductDescription";
import ProductSpecifications from "./ProductSpecifications";

export default function ProductDetails({ product, breadcrumb }) {
  if (!product) {
    return (
      <div className="container py-20 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 space-y-10">
      {/* 🔹 Breadcrumb */}
      {breadcrumb?.length > 0 && (
        <div className="mb-6">
          <Breadcrumb items={breadcrumb} />
        </div>
      )}

      {/* 🔹 Top Section (Gallery + Summary) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductGallery images={product.images} variants={product.variants} />
        </div>

        <div className="bg-white border border-gray-200 p-3 shadow-sm h-fit sticky top-20">
          <ProductSummary product={product} />
        </div>
      </div>

      {/* 🔹 Bottom Section (Description + Specifications) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        <div className="lg:col-span-2 space-y-8">
          <ProductDescription text={product.description} />
          <ProductSpecifications specs={product.specifications} />
        </div>
      </div>
    </div>
  );
}
