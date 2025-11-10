"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { useWishlist } from "@/modules/wishlist/hooks/useWishlistSession";
import { TbCurrencyTaka } from "react-icons/tb";

const WishlistItemCard = ({ item }) => {
  const { removeFromWishlist } = useWishlist();

  return (
    <div className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <Image
          src={item.image || "/placeholder.png"}
          alt={item.name}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <TbCurrencyTaka size={13} /> {item.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeFromWishlist(item.id)}
        className="text-gray-400 hover:text-red-500 transition"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default WishlistItemCard;
