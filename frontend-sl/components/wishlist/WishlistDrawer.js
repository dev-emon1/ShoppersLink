"use client";
import { useWishlistSession } from "@/modules/wishlist/hooks/useWishlistSession";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";
import { Heart, ShoppingBag, X, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { showToast } from "@/lib/utils/toast";

const WishlistDrawer = ({ open, onClose }) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistSession();
  const { addItem } = useCartSession();

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [open]);

  // 🛒 Move to cart handler
  const moveToCart = (item) => {
    const vendorId = item.vendorId || "vendor-1";
    const vendorName = item.vendorName || "ShoppersLink Official";
    addItem(vendorId, vendorName, item);
    removeFromWishlist(item.id);
    showToast(`🛒 ${item.name} moved to cart`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[420px] bg-white shadow-xl z-50 flex flex-col 
        transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Heart size={20} className="text-main" />
            My Wishlist ({wishlist.length})
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-main transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {wishlist.length === 0 ? (
            <div className="text-center mt-20">
              <Heart
                size={60}
                className="text-gray-400 mx-auto mb-4 opacity-70"
              />
              <p className="text-gray-500 mb-2 font-medium">
                Your wishlist is empty 💔
              </p>
              <Link
                href="/"
                onClick={onClose}
                className="text-main underline hover:text-main/80 text-sm"
              >
                Continue shopping →
              </Link>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-3 border rounded-lg p-3 hover:shadow-md transition"
              >
                {/* Product Info */}
                <div className="flex items-center gap-3 w-[70%]">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={
                        item.image ||
                        item.images?.[0] ||
                        "/images/placeholder.png"
                      }
                      alt={item.name}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="truncate">
                    <h5 className="text-sm font-medium truncate">
                      {item.name}
                    </h5>
                    <p className="text-xs text-gray-500">
                      ৳{item.price?.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => moveToCart(item)}
                    className="bg-main text-white text-xs px-2 py-1 rounded flex items-center gap-1 hover:bg-main/90"
                  >
                    <ShoppingBag size={12} /> Move
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-xs text-red-500 hover:underline flex items-center gap-1"
                  >
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="border-t p-4 bg-white">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600">Total items:</span>
              <span className="font-semibold">{wishlist.length}</span>
            </div>
            <button
              onClick={clearWishlist}
              className="w-full border border-red-400 text-red-500 py-2 rounded-lg hover:bg-red-50 transition text-sm font-medium"
            >
              Clear Wishlist
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistDrawer;
