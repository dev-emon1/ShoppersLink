"use client";

import Link from "next/link";
import { useState } from "react";

export default function CategorySidebar({
  category,
  showFilters = true,
  filters = {},
  selected = {},
  onFilterChange = () => {},
  tree = null,
  active = {},
}) {
  // === Tree Mode ===
  if (!showFilters && tree) {
    return (
      <div
        className="bg-white border border-border rounded-xl p-5 sticky top-[100px]"
        style={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        <h3 className="text-lg font-semibold mb-4">{category?.name}</h3>

        <ul className="space-y-4">
          {tree.subcategories?.map((s) => (
            <li key={s.slug}>
              <div
                className={`font-semibold mb-1 ${
                  active.sub === s.slug ? "text-primary" : "text-foreground"
                }`}
              >
                <Link href={`/${category.slug}/${s.slug}`}>{s.name}</Link>
              </div>

              {s.children?.length > 0 && (
                <ul className="mt-1 pl-3 border-l border-border space-y-1">
                  {s.children.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${category.slug}/${s.slug}/${c.slug}`}
                        className={`text-sm hover:underline ${
                          active.child === c.slug
                            ? "font-semibold text-primary"
                            : ""
                        }`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // === Filter Mode ===
  const { brands = [], ratings = [], priceRange = [] } = filters;
  const [price, setPrice] = useState(
    selected.price?.length === 2 ? selected.price : priceRange
  );

  const toggleBrand = (brand) => {
    const newBrands = selected.brands?.includes(brand)
      ? selected.brands.filter((b) => b !== brand)
      : [...(selected.brands || []), brand];
    onFilterChange({ ...selected, brands: newBrands });
  };

  const toggleRating = (r) => {
    const newRatings = selected.ratings?.includes(r)
      ? selected.ratings.filter((x) => x !== r)
      : [...(selected.ratings || []), r];
    onFilterChange({ ...selected, ratings: newRatings });
  };

  const handlePriceChange = (index, value) => {
    const updated = [...price];
    updated[index] = Number(value);
    setPrice(updated);
  };

  const applyPrice = () => onFilterChange({ ...selected, price });

  return (
    <div className="bg-white border border-border rounded-xl p-5 sticky top-[100px] space-y-6">
      {brands.length > 0 && (
        <div>
          <h4 className="font-semibold text-base mb-3">Brand</h4>
          <ul className="space-y-2">
            {brands.map((b) => (
              <li key={b}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    checked={selected.brands?.includes(b)}
                    onChange={() => toggleBrand(b)}
                  />
                  <span className="text-sm">{b}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      {ratings.length > 0 && (
        <div>
          <h4 className="font-semibold text-base mb-3">Rating</h4>
          <ul className="space-y-2">
            {ratings.map((r) => (
              <li key={r}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    checked={selected.ratings?.includes(r)}
                    onChange={() => toggleRating(r)}
                  />
                  <span className="text-sm">{r}★ & above</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      {priceRange.length === 2 && (
        <div>
          <h4 className="font-semibold text-base mb-3">Price</h4>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-20 border border-border rounded px-2 py-1 text-sm"
              value={price[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
            />
            <span>-</span>
            <input
              type="number"
              className="w-20 border border-border rounded px-2 py-1 text-sm"
              value={price[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
            />
            <button
              onClick={applyPrice}
              className="ml-auto bg-primary text-white px-3 py-1 text-sm rounded"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
