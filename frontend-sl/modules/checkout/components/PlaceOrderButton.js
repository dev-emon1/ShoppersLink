"use client";
import { useRouter } from "next/navigation";
import { useCheckoutSession } from "@/modules/checkout/hooks/useCheckoutSession";
import { useCartSession } from "@/modules/cart/hooks/useCartSession";
import { payWith } from "@/modules/checkout/services";
import { useState } from "react";

const PlaceOrderButton = () => {
  const router = useRouter();
  const { snapshot, clearCheckout } = useCheckoutSession();
  const { clearCart } = useCartSession();
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    const orderId = "ORD-" + Date.now();
    const payload = { orderId, amount: snapshot.totals?.grandTotal || 0 };

    setLoading(true);
    try {
      const res = await payWith(snapshot.paymentMethod, payload);
      if (res.status === "SUCCESS") {
        clearCart();
        clearCheckout();
        router.push(`/checkout/success?orderId=${res.orderId}`);
      } else {
        router.push(`/checkout/fail?orderId=${orderId}`);
      }
    } catch (err) {
      router.push(`/checkout/fail?orderId=${orderId}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlaceOrder}
      disabled={loading}
      className="w-full bg-main text-white py-3 rounded-lg font-semibold hover:bg-main/90 transition disabled:opacity-50"
    >
      {loading ? "Processing..." : "Place Order →"}
    </button>
  );
};

export default PlaceOrderButton;
