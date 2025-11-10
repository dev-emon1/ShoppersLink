"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { newArrivalProducts } from "@/data/homePageData";
import Card from "../ui/Card";
import ViewAllButton from "../common/ViewAllButton";

const NewArrivals = () => {
  const swiperRef = useRef(null);
  const isStaticMode = newArrivalProducts.length <= 5;

  return (
    <section className="py-12 bg-bgPage">
      <div className="container">
        {/* 🏷️ Section Title */}
        <div className="relative text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary inline-block relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-main after:rounded-full">
            New Arrivals
          </h2>
          <p className="text-textLight text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            Discover our latest collection — fresh, trendy, and hand-picked for
            you.
          </p>
        </div>

        {isStaticMode ? (
          <div
            className="
              flex flex-wrap justify-center items-start gap-4 sm:gap-6
            "
          >
            {newArrivalProducts.map((item, index) => (
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
          </div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={16}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  centeredSlides: true,
                  spaceBetween: 12,
                },
                768: { slidesPerView: 3, spaceBetween: 18 },
                1024: { slidesPerView: 4, spaceBetween: 22 },
                1280: { slidesPerView: 5, spaceBetween: 24 },
              }}
              className="featured-products-swiper pb-10 select-none"
            >
              {newArrivalProducts.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center px-2"
                >
                  <div className="w-full sm:w-[95%] md:w-full">
                    <Card data={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <ViewAllButton href="/products/new-arrivals" />

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="hidden lg:flex items-center justify-center absolute -left-[25px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-border hover:bg-main hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="hidden lg:flex items-center justify-center absolute -right-[43px] lg-xl:-right-[0px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-border hover:bg-main hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
