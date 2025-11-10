"use client";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const MiniCartDrawer = ({ open, onClose }) => {
  const { cart, totalItems, totalPrice, changeQuantity, removeItem } =
    useCartSession();
  const vendorKeys = Object.keys(cart || {});

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
            <ShoppingBag size={20} className="text-main" />
            My Cart ({totalItems})
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
          {vendorKeys.length === 0 ? (
            <div className="text-center mt-20">
              <ShoppingBag
                size={60}
                className="text-gray-400 mx-auto mb-4 opacity-70"
              />
              <p className="text-gray-500 mb-2 font-medium">
                Your cart is empty.
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
            vendorKeys.map((vendorId) => {
              const vendor = cart[vendorId];
              if (!vendor || !Array.isArray(vendor.items)) return null;

              return (
                <div key={vendorId} className="mb-6 border-b pb-4">
                  <h4 className="font-semibold mb-3">🏬 {vendor.vendorName}</h4>

                  {vendor.items.map((item) => {
                    const currentQty = item.quantity || 1;
                    const stock = item.stock || 10;

                    // ✅ Determine correct image source (string or object)
                    const imageSrc =
                      item.images?.[0]?.src ||
                      (typeof item.images?.[0] === "string"
                        ? item.images[0]
                        : "/images/placeholder.png");

                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between mb-3"
                      >
                        {/* Product Info */}
                        <div className="flex items-center gap-3 w-[70%]">
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={imageSrc}
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
                              ৳{item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            disabled={currentQty <= 1}
                            onClick={() =>
                              changeQuantity(vendorId, item.id, "decrease")
                            }
                            className={`px-2 py-1 border rounded-md text-sm transition ${
                              currentQty <= 1
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            −
                          </button>

                          <span className="text-sm font-medium w-4 text-center">
                            {currentQty}
                          </span>

                          <button
                            disabled={currentQty >= stock}
                            onClick={() =>
                              changeQuantity(vendorId, item.id, "increase")
                            }
                            className={`px-2 py-1 border rounded-md text-sm transition ${
                              currentQty >= stock
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            +
                          </button>

                          <button
                            onClick={() => removeItem(vendorId, item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                            aria-label="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {vendorKeys.length > 0 && (
          <div className="border-t p-4 bg-white">
            <div className="flex justify-between font-medium mb-3">
              <span>Subtotal:</span>
              <span className="text-main font-bold">
                ৳{totalPrice.toFixed(2)}
              </span>
            </div>
            <Link
              href="/cart"
              onClick={onClose}
              className="block text-center bg-main text-white py-2 rounded-lg hover:bg-main/90 transition"
            >
              Go to Cart →
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MiniCartDrawer;
