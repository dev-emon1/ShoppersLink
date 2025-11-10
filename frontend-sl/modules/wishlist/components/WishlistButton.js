"use client";
import { Heart } from "lucide-react";
import { useWishlist } from "@/modules/wishlist/hooks/useWishlistSession";

const WishlistButton = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const active = isInWishlist(product.id);

  return (
    <button
      onClick={() => toggleWishlist(product)}
      className={`p-2 rounded-full transition ${
        active
          ? "bg-red-100 text-red-600 hover:bg-red-200"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
      aria-label="Add to wishlist"
    >
      <Heart fill={active ? "currentColor" : "none"} size={18} />
    </button>
  );
};

export default WishlistButton;
