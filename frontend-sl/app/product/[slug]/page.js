"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  featuredProducts,
  newArrivalProducts,
  topRatedProducts,
} from "@/data/homePageData";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import DescriptionTab from "./ProductTabs/DescriptionTab";
import SpecificationTab from "./ProductTabs/SpecificationTab";
import ReviewsTab from "./ProductTabs/ReviewsTab";
import DeliveryTab from "./ProductTabs/DeliveryTab";
import ProductTabs from "./ProductTabs/ProductTabs";
import RelatedProducts from "@/modules/product/components/RelatedProducts";
import Breadcrumb from "@/components/common/Breadcrumb";

const ProductDetailsPage = () => {
  const { slug } = useParams();

  const allProducts = [
    ...featuredProducts,
    ...newArrivalProducts,
    ...topRatedProducts,
  ];

  const product = allProducts.find((p) => p.slug === slug);

  if (!product)
    return (
      <div className="container py-20 text-center text-lg font-semibold text-red-500">
        Product not found 😢
      </div>
    );

  return (
    <div className="min-h-screen bg-bgPage py-8">
      <div className="container mb-6">
        <Breadcrumb />
      </div>

      {/* Top Section */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

      {/* Tabs Section */}
      <div className="container mt-12 border-t border-border pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <DescriptionTab product={product} />
          <SpecificationTab product={product} />
          <ReviewsTab product={product} />
          <DeliveryTab product={product} />
        </div>
      </div>
      <ProductTabs product={product} />

      {/* Related Section */}
      <RelatedProducts product={product} />
    </div>
  );
};

export default ProductDetailsPage;
