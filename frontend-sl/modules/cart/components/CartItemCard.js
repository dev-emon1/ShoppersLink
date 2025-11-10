"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";

const CartItemCard = ({ item, vendorId, onRemove, onQuantityChange }) => {
  const currentQty = item.quantity || 1;
  const stock = item.stock || 10;

  return (
    <div className="flex items-center justify-between gap-3 border border-border rounded-lg p-3 mb-3 bg-white hover:shadow-sm transition">
      {/* Product Info */}
      <div className="flex items-center gap-3 flex-1">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={item.images?.[0] || "/images/placeholder.png"}
            alt={item.name}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <div className="truncate">
          <h4 className="font-semibold text-sm text-textPrimary truncate">
            {item.name}
          </h4>
          <p className="text-xs text-gray-500 mt-[2px]">
            ৳{item.price.toFixed(2)}
          </p>
          <p className="text-[11px] text-gray-400">
            In stock: {stock - currentQty}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            disabled={currentQty <= 1}
            onClick={() => onQuantityChange(vendorId, item.id, "decrease")}
            className={`px-3 py-[2px] text-sm ${
              currentQty <= 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            −
          </button>
          <span className="px-3 py-[2px] text-sm font-medium">
            {currentQty}
          </span>
          <button
            disabled={currentQty >= stock}
            onClick={() => onQuantityChange(vendorId, item.id, "increase")}
            className={`px-3 py-[2px] text-sm ${
              currentQty >= stock
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            +
          </button>
        </div>

        {/* Price */}
        <span className="font-semibold text-main w-20 text-right">
          ৳{(item.price * item.quantity).toFixed(2)}
        </span>

        {/* Remove */}
        <button
          onClick={() => onRemove(vendorId, item.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
