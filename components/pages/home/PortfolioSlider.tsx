"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react"; 

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import Container from "@/components/layout/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const portfolioItems = [
  { id: 1, image: "videos/home/Google Cloud.mp4", text: "Google Cloud" },
  { id: 2, image: "videos/home/AWS.mp4", text: "AWS" },
  { id: 3, image: "videos/home/Microsoft.mp4", text: "Microsoft" },
  { id: 4, image: "videos/home/Google Cloud.mp4", text: "Google Cloud" },
  { id: 5, image: "videos/home/AWS.mp4", text: "AWS" },
  { id: 6, image: "videos/home/Microsoft.mp4", text: "Microsoft" },
];

export default function PortfolioSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="">
      <div className="max-w-[1660px] mx-auto px-2 md:px-7">
        {/* <h2 className="text-4xl text-center lg:text-5xl font-bold text-[#45556C] mb-4">
          What We Offer
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-4"></div>
        <p className="text-xl text-[#6e6e6e] max-w-3xl mx-auto mb-6 text-center">
          Comprehensive enterprise solutions tailored to your digital
          transformation journey
        </p> */}

        <div className="relative">
          {/* Header + Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#45556C] mb-2 ml-4">
                Solutions
              </h2>
              <div className="w-20 h-1 bg-[#FF9500] ml-4" />
            </div>
 
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={24}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.6 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="portfolio-swiper pb-12"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-3xl overflow-hidden">
                  <video
                    src={item.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover p-2 rounded-3xl"
                  />

                  <Link href="/solution">
                        <p className="absolute bottom-10 w-[90%] text-center backdrop-blur-xs mx-5 px-5 py-2 rounded-2xl border border-white/60 text-white text-[26px] font-medium">
                          {item.text}
                        </p>
                      </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper styles */}
        <style jsx global>{`
          .portfolio-swiper .swiper-button-prev,
          .portfolio-swiper .swiper-button-next {
            display: none;
          }
          .portfolio-swiper .swiper-pagination-bullet {
            background: #c5cbd4;
            opacity: 1;
          }
          .portfolio-swiper .swiper-pagination-bullet-active {
            background: #ff9500;
          }
        `}</style>
      </div>
    </section>
  );
}
