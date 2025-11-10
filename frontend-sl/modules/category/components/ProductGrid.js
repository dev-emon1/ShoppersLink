"use client";
import { useState } from "react";
import Card3 from "@/components/ui/Card3";

export default function ProductGrid({ products = [], baseHref = "" }) {
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleProducts = products.slice(0, visibleCount);

  if (!products?.length) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-8">
        {visibleProducts.map((p) => {
          const href = baseHref
            ? `${baseHref}/${p.slug}`
            : `/${p.categorySlug || ""}/${p.subcategorySlug || ""}/${
                p.childCategorySlug || ""
              }/${p.slug}`;

          const imageSrc =
            Array.isArray(p.images) && p.images.length > 0
              ? p.images[0]?.src || p.images[0]
              : p.image || "/images/product-placeholder.jpg";

          console.log("Product Image Source:", imageSrc);

          const priceText =
            typeof p.price === "number" ? `৳${p.price.toLocaleString()}` : "—";

          return (
            <div
              key={p.id}
              className="group block border border-border rounded-xl bg-white overflow-hidden hover:shadow-lg transition-all"
            >
              <Card3
                imageSrc={imageSrc}
                isNew={p.isNew}
                discount={p.discount}
                name={p.name}
                slug={p.slug}
                vendorId={p.vendor?.id}
                vendorName={p.vendor?.name}
                rating={p.rating}
                price={p.price}
                oldPrice={p.oldPrice}
                category={p.category}
                href={href}
              />
            </div>
          );
        })}
      </div>

      {/* =================== LOAD MORE =================== */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="bg-main text-white px-6 py-2 rounded-lg hover:bg-main/90 transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
