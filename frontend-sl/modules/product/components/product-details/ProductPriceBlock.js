"use client";
export default function ProductPriceBlock({ price, oldPrice }) {
  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold text-main">
        ৳{price.toLocaleString()}
      </span>
      {oldPrice && (
        <span className="text-textLight line-through text-lg">
          ৳{oldPrice.toLocaleString()}
        </span>
      )}
      {discount > 0 && (
        <span className="text-green font-medium bg-green/10 px-2 py-1 rounded">
          -{discount}%
        </span>
      )}
    </div>
  );
}
