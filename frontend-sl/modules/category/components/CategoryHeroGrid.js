"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategoryHeroGrid({ items = [] }) {
  if (!items?.length)
    return (
      <div className="text-center py-12 text-muted-foreground">
        No items found.
      </div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group block rounded-xl overflow-hidden border border-border bg-white hover:shadow-md transition-all"
        >
          <div className="relative w-full h-52 md:h-60 overflow-hidden">
            <Image
              src={item.image || "/images/category-placeholder.jpg"}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3 md:p-4">
            <h3 className="text-sm md:text-base font-medium group-hover:underline text-center">
              {item.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
