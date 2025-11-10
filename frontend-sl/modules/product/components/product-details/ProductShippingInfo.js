"use client";
export default function ProductShippingInfo({ shipping }) {
  if (!shipping) return null;
  return (
    <div className="bg-white border border-border rounded-xl p-3 text-sm my-2">
      <h3 className="font-semibold mb-2">Shipping Information</h3>
      <ul className="space-y-1">
        <li>
          Inside Dhaka: ৳{shipping.insideDhaka?.cost} (
          {shipping.insideDhaka?.estimatedDays})
        </li>
        <li>
          Outside Dhaka: ৳{shipping.outsideDhaka?.cost} (
          {shipping.outsideDhaka?.estimatedDays})
        </li>
        {shipping.cashOnDelivery && <li>Cash on Delivery Available</li>}
        {shipping.freeShippingThreshold && (
          <li>Free shipping over ৳{shipping.freeShippingThreshold}</li>
        )}
      </ul>
    </div>
  );
}
