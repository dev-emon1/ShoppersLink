"use client";
import ProductPriceBlock from "./ProductPriceBlock";
import ProductShippingInfo from "./ProductShippingInfo";
import ProductVendorInfo from "./ProductVendorInfo";
import ProductActions from "@/components/ui/ProductActions";
import ProductWarranty from "./ProductWarranty";
import ProductReturnPolicy from "./ProductReturnPolicy";
import { Heart, ShoppingBasket, Star, StarIcon } from "lucide-react";
import { TbBasket } from "react-icons/tb";

export default function ProductSummary({ product }) {
  return (
    <div className="space-y-4 rounded-xl p-3">
      <span className="text-gray-500 text-sm font-semibold">
        {product.brand}
      </span>
      <h1 className="text-2xl font-semibold text-textPrimary leading-tight">
        {product.name}
      </h1>

      <div className="flex items-center justify-between text-sm text-textSecondary">
        <span className="flex">
          <StarIcon size={20} className="text-yellow" /> {product.rating} (
          {product.reviewsCount})
        </span>
      </div>

      <ProductPriceBlock price={product.price} oldPrice={product.oldPrice} />

      <div className="flex flex-col gap-4 mt-5 mb-5">
        <button className="bg-main text-white px-4 py-2 w-full hover:bg-mainHover transition-all duration-150 flex items-center justify-center gap-2">
          <span>
            <ShoppingBasket size={20} />
          </span>{" "}
          Add to Cart
        </button>
        <button className="bg-transparent border border-main px-4 py-2 w-full flex items-center justify-center gap-2">
          <span>
            <Heart size={20} />
          </span>{" "}
          Add to Wishlist
        </button>
      </div>

      <ProductVendorInfo vendor={product.vendor} />
      <div className="lg:col-span-1 space-y-6">
        <ProductShippingInfo shipping={product.shipping} />
        <ProductWarranty warranty={product.warranty} />
        <ProductReturnPolicy returnPolicy={product.returnPolicy} />
      </div>
    </div>
  );
}
