"use client";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";
import MiniCartDrawer from "./MiniCartDrawer";

const CartIconButton = () => {
  const { totalItems } = useCartSession();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        className="relative flex items-center flex-col lg:flex-row lg:gap-1 hover:text-main group transition-all duration-200"
      >
        <div className="relative">
          <ShoppingBag
            size={18}
            className="text-gray-700 group-hover:text-main transition-colors"
          />

          {totalItems > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-main text-white text-[10px] 
              font-semibold rounded-full w-5 h-5 flex items-center justify-center
              shadow-md ring-2 ring-white"
            >
              {totalItems}
            </span>
          )}
        </div>

        <span className="hidden sm:block text-[10px] lg:text-sm lg:font-medium group-hover:text-main text-textPrimary">
          Cart
        </span>
      </button>

      <MiniCartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CartIconButton;
