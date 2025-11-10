import { categories } from "@/data/categories";
import { products } from "@/data/products";

/**
 * Helper: Convert slug → readable name
 * Example: "home-garden" → "Home & Garden"
 */
const toName = (slug) => {
  if (!slug) return "";
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace("And", "&")
    .trim();
};

export const categoryService = {
  /**
   * 🔍 Get category by slug (e.g. "home-garden")
   */
  getCategoryBySlug: (slug) => {
    if (!slug) return null;
    return categories.find((c) => c.slug === slug) || null;
  },

  /**
   * 🔍 Get subcategory by slug (e.g. "bedding-mattresses")
   */
  getSubcategoryBySlug: (catSlug, subSlug) => {
    if (!catSlug || !subSlug) return null;
    const cat = categories.find((c) => c.slug === catSlug);
    return cat?.subcategories?.find((s) => s.slug === subSlug) || null;
  },

  /**
   * 🔍 Get child category by slug (e.g. "mattresses")
   */
  getChildBySlug: (catSlug, subSlug, childSlug) => {
    if (!catSlug || !subSlug || !childSlug) return null;
    const sub = categoryService.getSubcategoryBySlug(catSlug, subSlug);
    return sub?.children?.find((ch) => ch.slug === childSlug) || null;
  },

  /**
   * 🌲 Build sidebar tree (category → sub → children)
   */
  getSidebarTree: (catSlug) => {
    const cat = categoryService.getCategoryBySlug(catSlug);
    if (!cat) return { subcategories: [] };
    return {
      subcategories: (cat.subcategories || []).map((s) => ({
        name: s.name,
        slug: s.slug,
        children: (s.children || []).map((c) => ({
          name: c.name,
          slug: c.slug,
        })),
      })),
    };
  },

  /**
   * 🛍️ Get all products under a specific child category
   * Handles slug-to-name conversion automatically
   */
  getProductsByChild: (catSlug, subSlug, childSlug) => {
    if (!catSlug) return [];

    const catName = toName(catSlug);
    const subName = toName(subSlug);
    const childName = toName(childSlug);

    return products.filter((p) => {
      const matchCategory =
        catSlug &&
        p.category?.toLowerCase().trim() === catName.toLowerCase().trim();

      const matchSub =
        subSlug &&
        p.subcategory?.toLowerCase().trim() === subName.toLowerCase().trim();

      const matchChild =
        childSlug &&
        p.childCategory
          ?.toLowerCase()
          .trim()
          .includes(childName.toLowerCase().trim());

      return matchChild || (matchSub && matchCategory);
    });
  },

  /**
   * 🧮 Derive filter options (brands, ratings, price range)
   */
  deriveFilters: (prods = []) => {
    if (!prods.length)
      return { brands: [], ratings: [5, 4, 3, 2, 1], priceRange: [0, 0] };

    const brands = [...new Set(prods.map((p) => p.brand))].sort();
    const ratings = [5, 4, 3, 2, 1];
    const prices = prods.map((p) => Number(p.price));
    const priceRange = [Math.min(...prices), Math.max(...prices)];

    return { brands, ratings, priceRange };
  },

  /**
   * 🔎 Apply filters to product list
   */
  applyFilters: (prods = [], sel = {}) => {
    if (!prods.length) return [];

    return prods.filter((p) => {
      const brandMatch = !sel.brands?.length || sel.brands.includes(p.brand);
      const ratingMatch =
        !sel.ratings?.length || sel.ratings.some((r) => (p.rating || 0) >= r);
      const priceMatch =
        !sel.price?.length ||
        (p.price >= sel.price[0] && p.price <= sel.price[1]);
      return brandMatch && ratingMatch && priceMatch;
    });
  },

  /**
   * 🧭 Utility: Get product by slug
   */
  getProductBySlug: (slug) => {
    if (!slug) return null;
    return products.find((p) => p.slug === slug) || null;
  },

  /**
   * 🧩 Helper: Convert category/sub/child names → slugs
   * Used for reverse lookup (for products that store names instead of slugs)
   */
  getSlugsFromNames: (catName, subName, childName) => {
    if (!catName) return { catSlug: "", subSlug: "", childSlug: "" };

    const cat = categories.find(
      (c) => c.name.toLowerCase() === (catName || "").toLowerCase()
    );

    const sub = cat?.subcategories?.find(
      (s) => s.name.toLowerCase() === (subName || "").toLowerCase()
    );

    const child = sub?.children?.find(
      (ch) => ch.name.toLowerCase() === (childName || "").toLowerCase()
    );

    return {
      catSlug: cat?.slug || "",
      subSlug: sub?.slug || "",
      childSlug: child?.slug || "",
    };
  },

  /**
   * 🧠 Helper Alias: Resolve product slugs directly from product object
   * Simplifies use inside RelatedProducts or ProductDetails
   */
  resolveProductSlugs: (product) => {
    if (!product) return { catSlug: "", subSlug: "", childSlug: "" };
    return categoryService.getSlugsFromNames(
      product.category,
      product.subcategory,
      product.childCategory
    );
  },
};
