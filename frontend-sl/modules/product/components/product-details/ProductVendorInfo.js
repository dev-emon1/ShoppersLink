"use client";
export default function ProductVendorInfo({ vendor }) {
  if (!vendor) return null;
  return (
    <div className="border-t pt-4 text-sm">
      <div className="font-medium text-foreground">
        Sold by:{" "}
        <span className="text-primary font-semibold">{vendor.name}</span>
      </div>
      <div className="text-muted-foreground text-xs">
        {vendor.location} | Rating: {vendor.rating}★
      </div>
      {vendor.verified && (
        <div className="text-green-600 text-xs mt-1">✓ Verified Seller</div>
      )}
    </div>
  );
}
