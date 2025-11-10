"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ banners = [] }) => {
  return (
    <section className="relative w-full overflow-hidden bg-bgPage">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="banner-swiper h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[520px]"
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Link href={banner.link || "#"} aria-label={banner.title}>
                <Image
                  src={banner.image}
                  alt={banner.title || "ShoppersLink Banner"}
                  fill
                  sizes="60vw"
                  priority={i === 0}
                  className="object-cover object-center select-none"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
