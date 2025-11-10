"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items = [], theme = "light" }) {
  if (!items.length) return null;

  const baseColor =
    theme === "dark" ? "text-white/90" : "text-muted-foreground";
  const activeColor = theme === "dark" ? "text-white" : "text-foreground";

  return (
    <nav className="flex flex-wrap justify-center items-center gap-1 text-sm">
      {items.map((b, i) => (
        <span key={i} className="flex items-center">
          {b.href ? (
            <Link
              href={b.href}
              className={`${baseColor} hover:underline hover:text-main transition-colors`}
            >
              {b.label}
            </Link>
          ) : (
            <span className={`${activeColor} font-medium`}>{b.label}</span>
          )}

          {i < items.length - 1 && (
            <ChevronRight
              className={`w-3.5 h-3.5 mx-1 ${
                theme === "dark" ? "text-white/60" : "text-slate-100/40"
              }`}
            />
          )}
        </span>
      ))}
    </nav>
  );
}
