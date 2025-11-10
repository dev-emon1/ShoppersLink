"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { bannerData } from "@/data/homePageData";

export default function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(bannerData);
  }, []);

  if (!banners.length) return null;

  return (
    <section className="relative w-full h-[80vh] overflow-hidden lg:mt-[26px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}
        className="h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="absolute inset-0">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-semibold text-white max-w-[700px] leading-tight"
              >
                {banner.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl text-gray-100 max-w-[550px]"
              >
                {banner.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <a
                  href={banner.ctaLink}
                  className="px-8 py-3 bg-main text-white font-medium rounded-xl hover:bg-mainHover transition"
                >
                  {banner.ctaText}
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
