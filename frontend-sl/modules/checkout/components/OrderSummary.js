"use client";
import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useCheckoutSession } from "@/modules/checkout/hooks/useCheckoutSession";

const OrderSummary = ({ totals }) => {
  const { discountInfo, applyCoupon } = useCheckoutSession();
  const [coupon, setCoupon] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyCoupon = async () => {
    if (!coupon.trim()) return;
    setIsApplying(true);
    setTimeout(() => {
      applyCoupon(coupon);
      setIsApplying(false);
    }, 500);
  };

  const formatAmount = (value = 0) =>
    Number(value).toLocaleString("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  if (!totals)
    return (
      <div className="bg-white rounded-xl border border-border p-4 text-center text-gray-500">
        Calculating totals...
      </div>
    );

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4 text-textPrimary">Order Summary</h3>

      {/* Summary Totals */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="flex items-center gap-1">
            <TbCurrencyTaka size={12} />
            {formatAmount(totals.subtotal)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="flex items-center gap-1">
            <TbCurrencyTaka size={12} />
            {formatAmount(totals.shipping)}
          </span>
        </div>

        {/* <div className="flex justify-between">
          <span>VAT (5%)</span>
          <span className="flex items-center gap-1">
            <TbCurrencyTaka size={12} />
            {formatAmount(totals.vat)}
          </span>
        </div> */}

        {totals.discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span className="flex items-center gap-1">
              -<TbCurrencyTaka size={12} />
              {formatAmount(totals.discount)}
            </span>
          </div>
        )}

        <hr className="my-2 border-gray-200" />

        <div className="flex justify-between font-semibold text-base">
          <span>Total Payable</span>
          <span className="text-main flex items-center gap-1">
            <TbCurrencyTaka size={14} />
            {formatAmount(totals?.grandTotal)}
          </span>
        </div>
      </div>

      {/* Coupon Input */}
      <div className="mt-5">
        <label
          htmlFor="coupon"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Have a coupon?
        </label>
        <div className="flex gap-2">
          <input
            id="coupon"
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-main focus:border-main"
          />
          <button
            onClick={handleApplyCoupon}
            disabled={isApplying || !coupon.trim()}
            className="bg-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-main/90 transition disabled:opacity-50"
          >
            {isApplying ? "Applying..." : "Apply"}
          </button>
        </div>

        {discountInfo?.message && (
          <p
            className={`text-xs mt-2 ${
              discountInfo.discount > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {discountInfo.message}
          </p>
        )}
      </div>

      <p className="text-xs text-gray-400 text-center mt-4">
        VAT & applicable taxes included.
      </p>
    </div>
  );
};

export default OrderSummary;
