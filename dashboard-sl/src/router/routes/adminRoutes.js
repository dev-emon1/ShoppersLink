import { createElement, lazy } from "react";
const Overview = lazy(() => import("../../views/admin/index/Overview"));
const SalesAnalytics = lazy(() =>
  import("../../views/admin/index/SalesAnalytics")
);
const AllProducts = lazy(() =>
  import("../../views/admin/product-management/AllProducts")
);
const AddProduct = lazy(() =>
  import("../../views/admin/product-management/add-product")
);
const Category = lazy(() =>
  import("../../views/admin/product-management/Category")
);
const Subcategory = lazy(() =>
  import("../../views/admin/product-management/Subcategory")
);
const ChildCategory = lazy(() =>
  import("../../views/admin/product-management/ChildCategory")
);
const Attributes = lazy(() =>
  import("../../views/admin/product-management/Attributes")
);
const AttributeValue = lazy(() =>
  import("../../views/admin/product-management/AttributeValue")
);
const Brand = lazy(() => import("../../views/admin/product-management/Brand"));

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: createElement(Overview),
    role: "admin",
  },
  {
    path: "/admin/dashboard/overview",
    element: createElement(Overview),
    role: "admin",
  },
  {
    path: "/admin/dashboard/sales-analytics",
    element: createElement(SalesAnalytics),
    role: "admin",
  },
  {
    path: "/admin/products/all-products",
    element: createElement(AllProducts),
    role: "admin",
  },
  {
    path: "/admin/products/add-product",
    element: createElement(AddProduct),
    role: "admin",
  },
  {
    path: "/admin/products/category",
    element: createElement(Category),
    role: "admin",
  },
  {
    path: "/admin/products/sub-category",
    element: createElement(Subcategory),
    role: "admin",
  },
  {
    path: "/admin/products/child-category",
    element: createElement(ChildCategory),
    role: "admin",
  },
  {
    path: "/admin/products/attributes",
    element: createElement(Attributes),
    role: "admin",
  },
  {
    path: "/admin/products/attribute-value",
    element: createElement(AttributeValue),
    role: "admin",
  },
  {
    path: "/admin/products/brand",
    element: createElement(Brand),
    role: "admin",
  },
];
