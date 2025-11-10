"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { brandData } from "@/data/brandData";

const ShopByBrand = () => {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-2">
            Shop by Brand
          </h2>
          <p className="text-textSecondary text-sm max-w-md mx-auto">
            Rule the world with your product
          </p>
          <div className="mt-3 w-20 h-1 bg-main mx-auto rounded-full"></div>
        </div>

        {/* Brand Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
        >
          {brandData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex flex-col items-center justify-center group cursor-pointer">
                <Link
                  href={brand.link}
                  target="_blank"
                  className="relative w-28 h-28 flex items-center justify-center rounded-full border border-border overflow-hidden bg-bgPage hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={80}
                    height={80}
                    className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByBrand;
