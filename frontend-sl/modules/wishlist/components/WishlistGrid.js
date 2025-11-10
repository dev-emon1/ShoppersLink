"use client";
import Image from "next/image";
import { useWishlistSession } from "@/modules/wishlist/hooks/useWishlistSession";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";
import { ShoppingBag, Trash2 } from "lucide-react";
import { showToast } from "@/lib/utils/toast";

const WishlistGrid = ({ items }) => {
  const { removeFromWishlist } = useWishlistSession();
  const { addItem } = useCartSession();

  const moveToCart = (item) => {
    const vendorId = item.vendorId || "vendor-1";
    const vendorName = item.vendorName || "ShoppersLink Official";
    addItem(vendorId, vendorName, item);
    removeFromWishlist(item.id);
    showToast(`🛒 ${item.name} moved to cart`);
  };

  if (!items?.length)
    return (
      <p className="text-center text-gray-500 py-10">Your wishlist is empty.</p>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={item.image || "/images/placeholder.png"}
              alt={item.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-3 text-center">
            <p className="text-sm font-medium text-gray-800 line-clamp-1">
              {item.name}
            </p>
            <p className="text-main font-semibold text-sm mt-1">
              ৳{item.price?.toFixed(2)}
            </p>

            <div className="flex justify-center gap-2 mt-3">
              <button
                onClick={() => moveToCart(item)}
                className="flex items-center gap-1 bg-main text-white text-xs px-3 py-1.5 rounded hover:bg-main/90"
              >
                <ShoppingBag size={12} /> Move to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="flex items-center gap-1 text-xs px-3 py-1.5 text-red-500 border border-red-400 rounded hover:bg-red-50"
              >
                <Trash2 size={12} /> Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistGrid;
