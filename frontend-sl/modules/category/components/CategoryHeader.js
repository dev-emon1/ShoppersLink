"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function CategoryHeader({ title, image, breadcrumb = [] }) {
  return (
    <section className="relative w-full h-[220px] md:h-[280px] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-black drop-shadow-md">
          {title}
        </h1>
        {/* Breadcrumb */}
        {breadcrumb?.length > 0 && (
          <nav className="mb-3 flex justify-center flex-wrap items-center gap-1 text-sm text-black/90">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="hover:underline hover:text-main transition-colors"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-black font-medium">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-1 opacity-70" />
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
