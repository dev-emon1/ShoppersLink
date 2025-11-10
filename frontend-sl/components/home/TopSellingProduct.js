"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Card2 from "../ui/Card2";
import { newArrivalProducts } from "@/data/homePageData";
import ViewAllButton from "../common/ViewAllButton";

const TopSellingProducts = () => {
  const swiperRef = useRef(null);
  const isStaticMode = newArrivalProducts.length <= 5;

  return (
    <section className="py-16 bg-bgPage">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary relative inline-block">
            Top Selling Products
            <span className="block w-20 h-[3px] bg-main mx-auto mt-2 rounded-full" />
          </h2>
          <p className="text-textLight text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
            Discover our top-rated items loved by thousands of happy customers.
          </p>
        </div>

        {isStaticMode ? (
          <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6">
            {newArrivalProducts.map((product, i) => (
              <div
                key={i}
                className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[18%] flex justify-center"
              >
                <Card2 product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={12}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: true },
                480: { slidesPerView: 2, centeredSlides: true },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="top-selling-swiper pb-10 select-none"
            >
              {newArrivalProducts.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="flex justify-center items-center px-2"
                >
                  <Card2 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            <ViewAllButton href="/products/top-selling" />
            {/* 🔹 Custom Arrow Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="hidden lg:flex items-center justify-center absolute -left-[25px] top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 rounded-full bg-white shadow-md border border-border 
              hover:bg-main hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="hidden lg:flex items-center justify-center absolute -right-[43px] lg-xl:-right-[0px] top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 rounded-full bg-white shadow-md border border-border 
              hover:bg-main hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopSellingProducts;
