"use client";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ReviewBlock = ({ address, payment, vendors, totals }) => {
  if (!totals) return null;

  const formatAmount = (value = 0) =>
    `৳${Number(value).toLocaleString("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="space-y-6 text-gray-800">
      {/* Address Section */}
      <div>
        <h4 className="font-semibold text-lg mb-2">Delivery Address</h4>
        <div className="text-sm text-gray-600 leading-relaxed">
          <p>{address.fullName || "N/A"}</p>
          <p>{address.phone || "N/A"}</p>
          <p>
            {address.line1}, {address.city} {address.postcode}
          </p>
          {address.notes && (
            <p className="italic text-gray-500">{address.notes}</p>
          )}
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h4 className="font-semibold text-lg mb-2">Payment Method</h4>
        <p className="text-sm text-gray-600 capitalize">
          {payment?.method ? payment.method : "Not selected"}
        </p>
      </div>

      {/* Ordered Items (Summary Only) */}
      <div>
        <h4 className="font-semibold text-lg mb-2">Order Summary</h4>
        {Object.keys(vendors).length === 0 ? (
          <p className="text-sm text-gray-500">No items in cart.</p>
        ) : (
          <div className="space-y-4">
            {Object.entries(vendors).map(([vendorId, vendor]) => (
              <div
                key={vendorId}
                className="border border-gray-200 rounded-lg p-3"
              >
                <h5 className="font-semibold text-gray-700 text-sm mb-2">
                  {vendor.vendorName || "Vendor"}
                </h5>
                <ul className="divide-y divide-gray-100 text-sm">
                  {vendor.items.map((item, idx) => (
                    <li key={idx} className="py-2 flex justify-between">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span className="flex items-center gap-1">
                        <TbCurrencyTaka size={12} />
                        {(item.price * item.quantity).toLocaleString("en-BD")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Totals */}
      <div className="border-t pt-4 text-sm text-gray-700 space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatAmount(totals.subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatAmount(totals.shipping)}</span>
        </div>

        <div className="flex justify-between">
          <span>VAT (5%)</span>
          <span>{formatAmount(totals.vat)}</span>
        </div>

        {totals.discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount Applied</span>
            <span>-{formatAmount(totals.discount)}</span>
          </div>
        )}

        <hr className="my-2 border-gray-200" />

        <div className="flex justify-between font-semibold text-base">
          <span>Total Payable</span>
          <span className="text-main">{formatAmount(totals.grandTotal)}</span>
        </div>
      </div>

      <p className="text-xs text-gray-500 pt-2">
        * VAT, shipping, and discounts are estimated; final totals will confirm
        at payment.
      </p>
    </div>
  );
};

export default ReviewBlock;
