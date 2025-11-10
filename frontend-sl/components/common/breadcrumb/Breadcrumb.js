"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  // 🧩 Split the URL path (remove empty parts)
  const segments = pathname.split("/").filter(Boolean);

  // 🏠 Add Home at start
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      // 🔤 Make readable names (replace hyphen, capitalize)
      const name = decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { name, href };
    }),
  ];

  return (
    <nav
      className="text-sm text-textSecondary mb-6 mt-2"
      aria-label="Breadcrumb"
    >
      {breadcrumbPaths.map((item, index) => (
        <span key={index}>
          {index !== breadcrumbPaths.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-main transition font-medium"
            >
              {item.name}
            </Link>
          ) : (
            <span className="font-semibold text-textPrimary">{item.name}</span>
          )}
          {index < breadcrumbPaths.length - 1 && (
            <span className="mx-1 text-gray-400">›</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
