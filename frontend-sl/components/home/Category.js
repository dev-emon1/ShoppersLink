"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryGrid = ({ categories = [] }) => {
  return (
    <section className="py-10 bg-bgPage">
      <div className="container">
        <div className="relative text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary inline-block relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-main after:rounded-full">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4">
          {categories.map((cat, index) => (
            <Link
              href={`/category/${cat.slug}`}
              key={index}
              className="group relative border border-border bg-bgSurface rounded-md p-3 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-main hover:shadow-[0_4px_14px_rgba(224,125,66,0.2)]"
            >
              <div className="relative flex justify-center items-center aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={200}
                  height={200}
                  className="object-contain w-[80%] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-main/0 group-hover:bg-main/5 transition-colors duration-300" />
              </div>

              <span
                className="mt-2 font-medium text-[10px] sm:text-xs text-textPrimary group-hover:text-main transition-colors duration-300 w-full text-center truncate"
                title={cat.name}
              >
                {cat.name}
              </span>

              {/* 🔹 Bottom underline hover effect */}
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-main transition-all duration-300 group-hover:w-2/3 rounded-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
