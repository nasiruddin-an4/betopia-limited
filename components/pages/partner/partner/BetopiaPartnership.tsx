"use client";

import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { whyPartner } from "@/data/whyPartner";

interface partnerprops {
  title: string;
  description: string;
  image: string;
}

const PartnershipCard = ({
  image,
  title,
  description,
  onPrev,
  onNext,
  atStart,
  atEnd,
}: partnerprops & {
  onPrev: () => void;
  onNext: () => void;
  atStart: boolean;
  atEnd: boolean;
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div
      className="relative w-full h-96 overflow-hidden cursor-pointer group"
      onTouchStart={() => setShowMobileNav(true)}
      onTouchEnd={() => setShowMobileNav(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/90 transition-all duration-500" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start py-6 px-20 lg:p-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight">
          {title.split(" ").map((w, i) => (
            <React.Fragment key={i}>
              {w}
              <br />
            </React.Fragment>
          ))}
        </h3>

        <div className="w-32 h-[1px] bg-white mb-6" />

        <p className="text-base md:text-lg">{description}</p>
      </div>

      {/* MOBILE LEFT (hidden on first card) */}
      {!atStart && (
        <button
          onClick={onPrev}
          className={`
            absolute top-1/2 -translate-y-1/2 left-2
            w-10 h-10 rounded-full flex items-center justify-center
            bg-gray-700 border border-gray-300 transition
            md:hidden
            ${
              showMobileNav
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }
          `}
        >
          <FaArrowLeft className="text-white" />
        </button>
      )}

      {/* MOBILE RIGHT (hidden on last card) */}
      {!atEnd && (
        <button
          onClick={onNext}
          className={`
            absolute top-1/2 -translate-y-1/2 right-2
            w-10 h-10 rounded-full flex items-center justify-center
            bg-gray-700 border border-gray-300 transition
            md:hidden
            ${
              showMobileNav
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }
          `}
        >
          <FaArrowRight className="text-white" />
        </button>
      )}
    </div>
  );
};

export default function BetopiaPartnership() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  return (
    <div className="bg-linear-to-b from-[#FFF7ED] to-[#FFFFFF]">
      <div className="py-10 lg:py-20 ">
        {/* Header */}
        <div className="text-center mb-10 md:mb-0">
          <h2 className="text-2xl md:text-[52px] font-bold text-[#414042]">
            <span className="text-[#FF9500]">Why Partner</span> with Betopia
          </h2>
          <span className="block mx-auto mt-5 rounded-full w-[104px] h-[5px] bg-[#FF9500]" />
          <p className="mt-4 text-slate-600 text-lg md:text-xl lg:text-2xl">
            Join a winning ecosystem designed for mutual growth and success
          </p>
        </div>

        {/* DESKTOP NAVIGATION BUTTONS */}
        <div className="mb-6 hidden md:flex justify-between w-11/12 mx-auto xl:px-8">

          {/* LEFT — hidden on first slide */}
          {!atStart ? (
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group border border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-12 h-12 rounded-full flex items-center justify-center transition"
            >
              <FaArrowLeft className="text-gray-600 group-hover:text-white" />
            </button>
          ) : (
            <div className="w-12 h-12" />
          )}

          {/* RIGHT — hidden on last slide */}
          {!atEnd ? (
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group border border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-12 h-12 rounded-full flex items-center justify-center transition"
            >
              <FaArrowRight className="text-gray-600 group-hover:text-white" />
            </button>
          ) : (
            <div className="w-12 h-12" />
          )}
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setAtStart(swiper.isBeginning);
            setAtEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setAtStart(swiper.isBeginning);
            setAtEnd(swiper.isEnd);
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {whyPartner.map((card, index) => (
            <SwiperSlide key={index}>
              <PartnershipCard
                image={card.image}
                title={card.title}
                description={card.description}
                atStart={atStart}
                atEnd={atEnd}
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
