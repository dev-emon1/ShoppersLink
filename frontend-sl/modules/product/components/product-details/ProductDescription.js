"use client";
export default function ProductDescription({ text }) {
  if (!text) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Product Description</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
