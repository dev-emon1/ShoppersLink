"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import { topRatedProducts } from "@/data/homePageData";
import Card from "../ui/Card";
import ViewAllButton from "../common/ViewAllButton";

const TopRatingProducts = () => {
  const swiperRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isStaticMode = topRatedProducts.length <= 5;

  return (
    <section className="py-16 bg-bgPage overflow-hidden">
      <div className="container relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 text-center lg:text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-textPrimary inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-20 after:h-[3px] after:bg-main after:rounded-full capitalize">
              Top Rating Products
            </h2>
            <p className="text-textLight text-sm sm:text-base mt-3 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover the products our customers love the most — top-rated
              choices hand-picked for quality, performance, and satisfaction.
            </p>
          </div>

          {/* Navigation Arrows + Pagination */}
          {isDesktop && !isStaticMode && (
            <div className="flex items-center justify-center lg:justify-end gap-4">
              <div className="swiper-button-prev-custom cursor-pointer text-main hover:text-mainHover transition-all">
                <MoveLeft size={22} />
              </div>
              <div className="swiper-pagination-custom flex gap-2"></div>
              <div className="swiper-button-next-custom cursor-pointer text-main hover:text-mainHover transition-all">
                <MoveRight size={22} />
              </div>
            </div>
          )}
        </div>

        {/* Static or Swiper Mode */}
        {isStaticMode ? (
          <div
            className="
              flex flex-wrap justify-center items-start 
              gap-4 sm:gap-6
            "
          >
            {topRatedProducts.map((item, index) => (
              <div
                key={index}
                className="
                  w-[80%] 
                  sm:w-[45%] 
                  md:w-[30%] 
                  lg:w-[28%] 
                  xl:w-[18%] 
                  flex justify-center
                "
              >
                <Card data={item} />
              </div>
            ))}
            {/* Static mode view all */}
            <ViewAllButton href="/products/top-rated" />
          </div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={16}
              slidesPerView={1}
              centeredSlides={true}
              speed={600}
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: true },
                480: { slidesPerView: 2, centeredSlides: true },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              navigation={
                isDesktop
                  ? {
                      nextEl: ".swiper-button-next-custom",
                      prevEl: ".swiper-button-prev-custom",
                    }
                  : false
              }
              pagination={
                isDesktop
                  ? {
                      el: ".swiper-pagination-custom",
                      clickable: true,
                      renderBullet: (index, className) => {
                        const maxDots = 5;
                        const totalSlides = topRatedProducts.length;
                        const displayDots = Math.min(totalSlides, maxDots);
                        return index < displayDots
                          ? `<span class='w-2.5 h-2.5 rounded-full bg-main/30 hover:bg-main/60 transition-all ${className}'></span>`
                          : "";
                      },
                    }
                  : false
              }
              onSlideChange={(swiper) => {
                // highlight dot dynamically within 5 dots
                const bullets = document.querySelectorAll(
                  ".swiper-pagination-custom span"
                );
                bullets.forEach((bullet, i) => {
                  bullet.classList.remove("bg-main");
                  if (i === swiper.realIndex % 5) {
                    bullet.classList.add("bg-main");
                  }
                });
              }}
              className="!overflow-hidden pb-10 select-none"
            >
              {topRatedProducts.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="flex justify-center items-center px-2"
                >
                  <div className="w-full sm:w-[95%] md:w-full">
                    <Card data={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <ViewAllButton href="/products/top-rated" />
          </div>
        )}
      </div>
    </section>
  );
};

export default TopRatingProducts;
