/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/refs */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { officeData, socialLinks } from "@/data/footer";
import FooterDetials from "./FooterDetials";
import Container from "../Container";
import { TbDownload, TbVideo } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OfficeSlider({ officeData }: any) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative md:-mt-16 z-10">
      {/* Left Arrow */}
      {/* {!isBeginning && (
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
          bg-black/60 p-2 rounded-full text-white"
        >
          <BiChevronLeft size={28} />
        </button>
      )} */}

      {/* Right Arrow */}
      {/* {!isEnd && (
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
          bg-black/60 p-2 rounded-full text-white"
        >
          <BiChevronRight size={28} />
        </button>
      )} */}

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={21}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          768: {
            slidesPerView: 2, // md
          },
          1024: {
            slidesPerView: 3, // lg
          },
          1280: {
            slidesPerView: 4, // xl
          },
        }}
      >
        {officeData.map((office: any, index: number) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-xl border border-[#595959] xl:mx-0
              hover:border-[#F79549] transition-colors duration-300
              px-[22px] py-[33px] bg-transparent h-[300px]"
            >
              <p className="text-[#F79549] uppercase text-base mb-[11px]">
                {office.title}
              </p>

              <ul className="grid gap-[11px] text-white">
                <li className="font-bold text-lg md:text-2xl">{office.city}</li>
                <li className="text-base md:text-lg">{office.address}</li>
                <li>
                  <a
                    href={`tel:${office.phone}`}
                    className="text-base md:text-lg text-[#F8F8F8] hover:underline"
                  >
                    {office.phone}
                  </a>
                </li>
                <li className="text-base md:text-lg text-[#F8F8F8] hover:underline">
                  {office.mail}
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-[linear-gradient(135deg,_#1E2222_0%,_#414042_50%,_#1E2222_100%)] lg:py-10">
        <FooterDetials />
      </div>
      <div className="relative w-full pt-6 md:pt-12 overflow-hidden bg-[#181818] px-3 md:px-8">
        {/* Video */}
        {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/footer.mp4" type="video/mp4" />
      </video> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />

        <div className="max-w-[1700px] mx-auto">
          <div className="relative z-[2]">
            {/* IMAGE (takes own space) */}
            <div className="flex justify-center mt-10 mb-5 md:mb-20 z-0 relative px-3 md:px-20">
              <Image
                src="/footer/tm.png"
                alt="Footer Logo"
                width={1660}
                height={200}
                className="opacity"
              />
            </div>

            {/* CARDS pulled upward over image */}
            {/* <div className="md:-mt-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[21px] bg-transparent">
              {officeData.map((office, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-[#595959]
                  hover:border-[#F79549] transition-colors duration-300
                  px-[22px] py-[33px] bg-transparent"
                >
                  <p className="text-[#F79549] uppercase text-xs md:text-base mb-[11px]">
                    {office.title}
                  </p>

                  <ul className="grid gap-[11px] text-white">
                    <li className="font-medium text-lg 2xl:text-[25px]">
                      {office.city}
                    </li>
                    <li className="text-sm 2xl:text-base">{office.address}</li>
                    <li>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-sm 2xl:text-[19px] text-[#F8F8F8] hover:underline"
                      >
                        {office.phone}
                      </a>
                    </li>
                     <li className="text-sm md:text-base 2xl:text-[19px] text-[#F8F8F8] hover:underline">
                           
                            {office.mail} 
                        </li>
                  </ul>
                </div>
              ))}
            </div>
          </div> */}
            {/* Slider */}
            <OfficeSlider officeData={officeData} />

            {/* Bottom */}
            <div className="pt-7 pb-6 mx-3 xl:mx-0">
              <div className="flex flex-wrap flex-col md:flex-row gap-6 justify-between items-center text-white">
                <div className="flex items-center gap-7 flex-wrap">
                  <div className="flex items-center gap-4">
                    <a
                      href="https://drive.google.com/uc?export=download&id=175katg5rFRqcKHyd3ABakJvvvcvEzntm"
                      download
                      className="bg-[#FFEF03] w-12 h-12 md:w-[60px] md:h-[60px]
                  rounded-full flex items-center justify-center"
                    >
                      <TbDownload className="text-[#232323] w-6 h-6" />
                    </a>

                    <div>
                      <p className="text-lg font-medium">Company Deck</p>
                      <p className="text-sm">PDF</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="/videos/hero/website_video_11.mp4"
                      download="website_video_11.mp4"
                      className="bg-[#FFEF03] w-12 h-12 md:w-[60px] md:h-[60px]
    rounded-full flex items-center justify-center"
                    >
                      <TbVideo className="text-[#232323] w-6 h-6" />
                    </a>

                    <div>
                      {/* <p className="text-lg font-medium">Profile Summary</p> */}
                      <p className="text-lg font-medium">Company Video Deck</p>
                      <p className="text-sm">MP4 Video</p>
                    </div>
                  </div>
                </div>

                <p className="text-[#F8F8F8]">
                  © 2026, Betopia Ltd. | All Rights Reserved.
                </p>

                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      className="w-9 h-9 md:w-[49px] md:h-[49px]
                    rounded-full flex items-center justify-center"
                      style={{ backgroundColor: link.bgColor }}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
