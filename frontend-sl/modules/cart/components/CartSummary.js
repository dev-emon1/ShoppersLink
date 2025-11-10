"use client";
import { useRouter } from "next/navigation";
import { TbCurrencyTaka } from "react-icons/tb";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";

const CartSummary = ({ totalItems, totalPrice, onClear }) => {
  const { cart } = useCartSession();
  const router = useRouter();

  const shipping = totalPrice > 1000 ? 0 : 60;
  const grandTotal = totalPrice + shipping;

  const handleClick = () => {
    try {
      if (cart && Object.keys(cart).length > 0) {
        sessionStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
        console.log("🛍️ Cart synced before checkout:", cart);
      } else {
        console.warn("⚠️ No cart data found to sync before checkout");
      }

      router.push("/checkout");
    } catch (err) {
      console.error("❌ Failed to sync cart before checkout:", err);
      router.push("/checkout");
    }
  };

  return (
    <aside className="bg-white p-6 rounded-xl shadow-md sticky top-24 self-start border border-border/60">
      <h3 className="text-lg font-bold mb-4 text-textPrimary">Order Summary</h3>

      <div className="flex justify-between mb-2 text-sm">
        <span>Total Items:</span>
        <span className="font-medium">{totalItems}</span>
      </div>

      <div className="flex justify-between mb-2 text-sm">
        <span>Subtotal:</span>
        <span className="font-semibold text-textPrimary flex items-center">
          <TbCurrencyTaka size={14} /> {totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between mb-4 text-sm">
        <span>Shipping:</span>
        <span className="text-textSecondary">
          {shipping === 0 ? "Free" : `৳${shipping}`}
        </span>
      </div>

      <hr className="my-3 border-border" />

      <div className="flex justify-between font-semibold text-main mb-4">
        <span>Total:</span>
        <span className="flex items-center">
          <TbCurrencyTaka size={16} /> {grandTotal.toFixed(2)}
        </span>
      </div>

      <button
        onClick={onClear}
        className="w-full border border-red-400 text-red-500 py-2 rounded-lg hover:bg-red-50 transition text-sm font-medium"
      >
        Clear Cart
      </button>

      <button
        onClick={handleClick}
        className="w-full bg-main text-white py-2 rounded-lg mt-3 hover:bg-main/90 transition font-medium"
      >
        Proceed to Checkout →
      </button>

      <p className="text-xs text-gray-400 text-center mt-3">
        VAT & applicable taxes included.
      </p>
    </aside>
  );
};

export default CartSummary;
