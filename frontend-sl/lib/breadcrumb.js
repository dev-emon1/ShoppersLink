// lib/breadcrumb.js
import { categoryService } from "@/modules/category/services/category.service";

export const makeCrumbs = ({
  cat,
  sub,
  child,
  product,
  customTrail = [],
} = {}) => {
  const crumbs = [{ label: "Home", href: "/" }];

  if (cat)
    crumbs.push({
      label: cat.name || cat,
      href: `/${cat.slug || cat}`,
    });

  if (sub)
    crumbs.push({
      label: sub.name || sub,
      href: `/${cat.slug || cat}/${sub.slug || sub}`,
    });

  if (child)
    crumbs.push({
      label: child.name || child,
      href: `/${cat.slug || cat}/${sub.slug || sub}/${child.slug || child}`,
    });

  if (product)
    crumbs.push({
      label: product.name || product,
      href: `/${cat.slug || cat}/${sub.slug || sub}/${child.slug || child}/${
        product.slug || product
      }`,
    });

  if (customTrail.length) crumbs.push(...customTrail);
  return crumbs;
};

export const makeCrumbsFromSlug = (slugArray = []) => {
  if (!Array.isArray(slugArray)) return [];

  const crumbs = [{ label: "Home", href: "/" }];

  const [catSlug, subSlug, childSlug, productSlug] = slugArray;

  // 1️⃣ CATEGORY
  if (catSlug) {
    const cat = categoryService.getCategoryBySlug(catSlug);
    if (cat)
      crumbs.push({
        label: cat.name,
        href: `/${cat.slug}`,
      });
  }

  // 2️⃣ SUBCATEGORY
  if (catSlug && subSlug) {
    const sub = categoryService.getSubcategoryBySlug(catSlug, subSlug);
    if (sub)
      crumbs.push({
        label: sub.name,
        href: `/${catSlug}/${subSlug}`,
      });
  }

  // 3️⃣ CHILD
  if (catSlug && subSlug && childSlug) {
    const child = categoryService.getChildBySlug(catSlug, subSlug, childSlug);
    if (child)
      crumbs.push({
        label: child.name,
        href: `/${catSlug}/${subSlug}/${childSlug}`,
      });
  }

  // 4️⃣ PRODUCT (PDP)
  if (productSlug) {
    const product = categoryService.getProductBySlug(productSlug);
    if (product)
      crumbs.push({
        label: product.name,
        href: `/${catSlug}/${subSlug}/${childSlug}/${product.slug}`,
      });
  }

  return crumbs;
};
