"use client";
const SpecificationTab = ({ product }) => (
  <ul className="list-disc ml-5 space-y-1">
    <li>Brand: {product.brand || "Generic"}</li>
    <li>Category: {product.category || "N/A"}</li>
    <li>Material: 100% Cotton (example)</li>
    <li>Origin: Bangladesh</li>
    <li>SKU: {product.sku || "N/A"}</li>
  </ul>
);
export default SpecificationTab;
