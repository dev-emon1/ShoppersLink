"use client";
import React from "react";
import Link from "next/link";

const MegaMenu = ({ categories, activeMenu, setActiveMenu, showTopBar }) => {
  return (
    <nav className="border-b border-border bg-bgSurface relative z-30 hidden md:block">
      <div className="container">
        <ul className="flex justify-center gap-8 text-sm font-medium text-textPrimary relative">
          {categories.map((category, index) => (
            <li
              key={category.id}
              className="relative group py-3 cursor-pointer"
              onMouseEnter={() => setTimeout(() => setActiveMenu(index), 100)}
              onMouseLeave={() => setTimeout(() => setActiveMenu(null), 100)}
            >
              <Link
                href={`/${category.slug}`}
                className="hover:text-main transition-all duration-200"
              >
                {category.name}
              </Link>

              {activeMenu === index && category.subcategories && (
                <div
                  className="fixed left-1/2 transform -translate-x-1/2 w-full bg-white shadow-xl border-t border-border py-10 px-10 animate-smoothAppear z-[99]"
                  style={{
                    top: showTopBar ? "140px" : "108px",
                    transition: "top 0.3s ease",
                  }}
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-xs">
                    {category.subcategories.map((sub) => (
                      <div key={sub.id}>
                        <h4 className="font-semibold border-b border-border pb-2 mb-3 text-textPrimary cursor-default">
                          {sub.name}
                        </h4>

                        <ul className="space-y-2 text-textSecondary">
                          {sub.children?.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={`/${category.slug}/${sub.slug}/${child.slug}`}
                                className="hover:text-main hover:underline transition-all duration-150"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
