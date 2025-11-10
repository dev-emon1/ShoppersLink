"use client";

import { use, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categoryService } from "@/modules/category/services/category.service";
import { makeCrumbsFromSlug } from "@/lib/breadcrumb";

import CategoryHeader from "@/modules/category/components/CategoryHeader";
import CategorySidebar from "@/modules/category/components/CategorySidebar";
import CategoryHeroGrid from "@/modules/category/components/CategoryHeroGrid";
import ProductGrid from "@/modules/category/components/ProductGrid";

import RelatedProducts from "@/modules/product/components/RelatedProducts";
import ProductDetails from "@/modules/product/components/product-details";

export default function CategoryPage({ params }) {
  const resolvedParams =
    typeof params?.then === "function" ? use(params) : params;
  const segments = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug
    : [];
  const [catSlug, subSlug, childSlug, productSlug] = segments;

  const router = useRouter();
  const sp = useSearchParams();

  // === CATEGORY HIERARCHY ===
  const cat = categoryService.getCategoryBySlug(catSlug);
  const sub = subSlug
    ? categoryService.getSubcategoryBySlug(catSlug, subSlug)
    : null;
  const child = childSlug
    ? categoryService.getChildBySlug(catSlug, subSlug, childSlug)
    : null;

  const breadcrumb = makeCrumbsFromSlug(segments);

  const isProductPage = !!productSlug;
  const isChildPage = !!child && !productSlug;
  const isSubcategoryPage = !!sub && !child;
  const isCategoryPage = !!cat && !sub && !child;

  // 🧠 Moved all hooks to top
  const baseProducts = isChildPage
    ? categoryService.getProductsByChild(catSlug, subSlug, childSlug)
    : [];

  const [selected, setSelected] = useState({
    brands: (sp.get("brands") || "").split(",").filter(Boolean),
    ratings: (sp.get("ratings") || "").split(",").map(Number).filter(Boolean),
    price:
      (sp.get("price") || "")
        .split("-")
        .map(Number)
        .filter((n) => !isNaN(n)).length === 2
        ? (sp.get("price") || "").split("-").map(Number)
        : [],
  });

  const filtered = useMemo(
    () =>
      isChildPage ? categoryService.applyFilters(baseProducts, selected) : [],
    [baseProducts, selected, isChildPage]
  );

  const onFilterChange = (next) => {
    setSelected(next);
    const q = new URLSearchParams();
    if (next.brands?.length) q.set("brands", next.brands.join(","));
    if (next.ratings?.length) q.set("ratings", next.ratings.join(","));
    if (next.price?.length === 2)
      q.set("price", `${next.price[0]}-${next.price[1]}`);
    router.replace(`?${q.toString()}`);
  };

  // =============== 1️⃣ PRODUCT DETAILS PAGE (PDP) ===============
  if (isProductPage) {
    const product = categoryService.getProductBySlug(productSlug);
    if (!product)
      return (
        <div className="container py-20 text-center text-gray-500">
          Product not found.
        </div>
      );

    const related = categoryService
      .getProductsByChild(catSlug, subSlug, childSlug)
      .filter((p) => p.slug !== product.slug)
      .slice(0, 8);

    return (
      <div className="mt-[80px]">
        <ProductDetails product={product} breadcrumb={breadcrumb} />
        <RelatedProducts product={product} products={related} />
      </div>
    );
  }

  // =============== 2️⃣ CATEGORY LANDING ===============
  if (isCategoryPage) {
    const sidebarTree = categoryService.getSidebarTree(catSlug);

    return (
      <div className="mt-[80px]">
        <CategoryHeader
          title={cat.name}
          image={cat.image}
          breadcrumb={breadcrumb}
        />
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          <aside className="md:col-span-3">
            <CategorySidebar
              category={cat}
              showFilters={false}
              tree={sidebarTree}
              active={{ sub: null, child: null }}
            />
          </aside>
          <main className="md:col-span-9">
            <CategoryHeroGrid
              items={
                cat.subcategories?.map((s) => ({
                  id: s.id,
                  name: s.name,
                  image: s.image,
                  href: `/${cat.slug}/${s.slug}`,
                })) || []
              }
            />
          </main>
        </div>
      </div>
    );
  }

  // =============== 3️⃣ SUBCATEGORY LANDING ===============
  if (isSubcategoryPage) {
    const sidebarTree = categoryService.getSidebarTree(catSlug);

    return (
      <div className="mt-[80px]">
        <CategoryHeader
          title={sub.name}
          image={sub.image || cat.image}
          breadcrumb={breadcrumb}
        />
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          <aside className="md:col-span-3">
            <CategorySidebar
              category={cat}
              showFilters={false}
              tree={sidebarTree}
              active={{ sub: subSlug, child: null }}
            />
          </aside>
          <main className="md:col-span-9">
            <CategoryHeroGrid
              items={
                sub.children?.map((c) => ({
                  id: c.id,
                  name: c.name,
                  image: c.image,
                  href: `/${cat.slug}/${sub.slug}/${c.slug}`,
                })) || []
              }
            />
          </main>
        </div>
      </div>
    );
  }

  // =============== 4️⃣ CHILD CATEGORY (PLP) ===============
  if (isChildPage) {
    const filters = categoryService.deriveFilters(baseProducts);

    return (
      <div className="mt-[80px]">
        <CategoryHeader
          title={child.name}
          image={child.image || sub.image || cat.image}
          breadcrumb={breadcrumb}
        />
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          <aside className="md:col-span-3">
            <CategorySidebar
              category={cat}
              showFilters
              filters={filters}
              selected={selected}
              onFilterChange={onFilterChange}
              tree={categoryService.getSidebarTree(catSlug)}
              active={{ sub: subSlug, child: childSlug }}
            />
          </aside>
          <main className="md:col-span-9">
            <ProductGrid
              products={filtered}
              baseHref={`/${catSlug}/${subSlug}/${childSlug}`}
            />
          </main>
        </div>
      </div>
    );
  }

  // =============== FALLBACK ===============
  return (
    <div className="container py-20 text-center text-gray-500">
      Page not found.
    </div>
  );
}
