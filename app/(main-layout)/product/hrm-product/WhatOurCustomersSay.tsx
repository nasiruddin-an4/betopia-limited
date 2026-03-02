"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  message: string;
  verified?: boolean;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jahirul Bhuiyan",
    role: "CEO of ZHB Solution",
    avatar: "/testimonial/zhb.webp",
    message:
      "“HRM doesn’t just manage employees — it enables smarter HR operations, better workforce planning, and a more transparent employee experience.”",
    verified: true,
  },
  {
    id: 2,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer - VALR",
    avatar: "/testimonial/Ronald.png",
    message:
      "From booking to final delivery, Ship X delivers excellence. Their support team is responsive, and shipments always arrive on time. It’s the reliability we’ve been looking for",
    verified: true,
  },
  {
    id: 3,
    name: "Jahirul Bhuiyan",
    role: "CEO of ZHB Solution",
    avatar: "/testimonial/zhb.webp",
    message:
      "“HRM doesn’t just manage employees — it enables smarter HR operations, better workforce planning, and a more transparent employee experience.”",
    verified: true,
  },
  {
    id: 4,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer - VALR",
    avatar: "/testimonial/Ronald.png",
    message:
      "From booking to final delivery, Ship X delivers excellence. Their support team is responsive, and shipments always arrive on time. It’s the reliability we’ve been looking for",
    verified: true,
  },
  {
    id: 5,
    name: "Jahirul Bhuiyan",
    role: "CEO of ZHB Solution",
    avatar: "/testimonial/zhb.webp",
    message:
      "“HRM doesn’t just manage employees — it enables smarter HR operations, better workforce planning, and a more transparent employee experience.”",
    verified: true,
  },
  {
    id: 6,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer - VALR",
    avatar: "/testimonial/Ronald.png",
    message:
      "From booking to final delivery, Ship X delivers excellence. Their support team is responsive, and shipments always arrive on time. It’s the reliability we’ve been looking for",
    verified: true,
  },
  {
    id: 7,
    name: "Jahirul Bhuiyan",
    role: "CEO of ZHB Solution",
    avatar: "/testimonial/zhb.webp",
    message:
      "“HRM doesn’t just manage employees — it enables smarter HR operations, better workforce planning, and a more transparent employee experience.”",
    verified: true,
  },
  {
    id: 8,
    name: "Ronald Vergera",
    role: "Chief Marketing Officer - VALR",
    avatar: "/testimonial/Ronald.png",
    message:
      "From booking to final delivery, Ship X delivers excellence. Their support team is responsive, and shipments always arrive on time. It’s the reliability we’ve been looking for",
    verified: true,
  },
];

function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full min-h-87.5 md:min-h-105 lg:min-h-105">
      {/* Avatar Section - Fixed Height */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative">
          <Image
            src={data.avatar}
            alt={data.name}
            width={120}
            height={120}
            className="rounded-full object-cover w-28 h-28 md:w-32 md:h-32 border-4 border-white shadow-md"
            priority
          />
          {/* Optional frame - remove if not needed in final design */}
          {/* <Image
            src="/product/frame.png"
            alt="Decorative frame"
            width={172}
            height={138}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 md:w-40"
          /> */}
        </div>
      </div>

      {/* Quote Icon */}
      {/* <div className="mb-5 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 60 60"
          fill="none"
          className="w-12 h-12 md:w-14 md:h-14 text-[#FF9500]"
        >
          <path
            d="M10.4228 44.5323C15.2818 41.9867 18.6093 37.6601 20.0165 32.7779C15.8421 33.5292 11.4911 31.5467 9.41906 27.5916C6.86418 22.7149 8.74553 16.6932 13.6223 14.1383C14.046 13.9163 14.4775 13.7263 14.9204 13.5752C19.5203 11.935 24.7427 13.8885 27.0756 18.3415C32.0244 27.7877 28.3813 39.458 18.9315 44.4087C14.7963 46.5751 10.2395 47.0947 6 46.2013C7.50521 45.8358 8.98901 45.2834 10.4228 44.5323ZM34.4804 44.5323C39.3394 41.9867 42.6669 37.6601 44.0742 32.7779C39.8997 33.5292 35.5487 31.5467 33.4767 27.5916C30.9218 22.7149 32.8031 16.6932 37.6799 14.1383C38.1036 13.9163 38.5351 13.7263 38.978 13.5752C43.5779 11.935 48.8003 13.8885 51.1332 18.3415C56.082 27.7877 52.4389 39.458 42.9891 44.4087C38.8539 46.5751 34.2971 47.0947 30.0576 46.2013C31.5628 45.8358 33.0466 45.2834 34.4804 44.5323Z"
            fill="currentColor"
          />
        </svg>
      </div> */}

      {/* Message - Takes available space but limited lines */}
      <div className="flex-1 flex flex-col justify-start">
        <p className="text-gray-700 text-base leading-relaxed line-clamp-6 md:line-clamp-5">
          {data.message}
        </p>
      </div>

      {/* Name + Role - Fixed at bottom */}
      <div className=" text-center">
        <h4 className="text-base md:text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
          {data.name}
          {data.verified && <span className="text-[#FF9500] text-sm">✔</span>}
        </h4>
        <p className=" text-sm text-gray-500 mt-1">{data.role}</p>
      </div>
    </div>
  );
}

function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="py-12 md:py-16  bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-20 m bg-linear-to-r from-gray-50 to-transparent z-10" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-20 m bg-linear-to-l from-gray-50 to-transparent z-10" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            breakpoints={{
              // Mobile: 1 card (slightly offset for peek effect)
              0: {
                slidesPerView: 1.15,
                centeredSlides: true,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 2.2,
                centeredSlides: false,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              // Large Desktop
              1280: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
            className="py-6"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="px-2">
                <TestimonialCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows - Always visible & centered */}
          <div className="flex justify-center items-center gap-4 mt-8 md:mt-10">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FF9500] hover:text-white transition group"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition" />
            </button>

            <button
              onClick={() => swiperRef?.slideNext()}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FF9500] hover:text-white transition group"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WhatOurCustomersSay() {
  return (
    <section className=" bg-gray-50 pt-10">
      <p className="mb-2 text-base px-6 py-2 rounded-full border border-[#0000001A] w-fit mx-auto">
        Testimonials
      </p>
      <h2 className="lg:text-[64px] text-3xl text-[#414042] font-bold text-center ">
        What Our Customers Say
      </h2>
      <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
}
