import React from "react";

const ProductQuickView = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-[90%] p-5 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
        >
          ✕
        </button>

        {/* Image + Basic Info */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-36 h-36 object-cover rounded-md border"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600">{product.sku}</p>
        </div>

        {/* Product Details */}
        <div className="mt-4 border-t border-gray-200 pt-3 text-sm space-y-1.5">
          <p>
            <strong>Brand:</strong> {product.brand || "N/A"}
          </p>
          <p>
            <strong>Vendor:</strong> {product.vendor || "N/A"}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
            {product.subcategory ? ` › ${product.subcategory}` : ""}
            {product.childCategory ? ` › ${product.childCategory}` : ""}
          </p>
          <p>
            <strong>Price:</strong>{" "}
            <span className="text-main font-medium">${product.price}</span>{" "}
            {product.discount ? (
              <span className="text-xs text-gray-500">
                ({product.discount}% off)
              </span>
            ) : null}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock} pcs
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-0.5 rounded text-xs ${
                product.status === "active"
                  ? "bg-green/15 text-green"
                  : "bg-red/15 text-red"
              }`}
            >
              {product.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
