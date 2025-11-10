"use client";
import { Heart } from "lucide-react";
import { useState } from "react";
import WishlistDrawer from "./WishlistDrawer";
import { useWishlistSession } from "@/modules/wishlist/hooks/useWishlistSession";

const WishlistIconButton = () => {
  const { wishlist } = useWishlistSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Wishlist Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Wishlist"
        className="relative flex items-center flex-col lg:flex-row lg:gap-1 hover:text-main group transition-all duration-200"
      >
        <Heart
          size={20}
          className={`transition ${
            wishlist.length > 0 ? "fill-main text-main" : ""
          }`}
        />

        <span className="hidden sm:block text-[10px] lg:text-sm font-medium text-textPrimary group-hover:text-main">
          Wishlist
        </span>

        {/* Wishlist Count Badge */}
        {wishlist.length > 0 && (
          <span
            className="absolute -top-2 left-2 bg-main text-white text-[10px] 
              font-semibold rounded-full w-5 h-5 flex items-center justify-center
              shadow-md ring-2 ring-white"
          >
            {wishlist.length}
          </span>
        )}
      </button>

      {/* Drawer */}
      <WishlistDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WishlistIconButton;
