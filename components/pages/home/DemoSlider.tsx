/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";

import Image, { StaticImageData } from "next/image";

import tImg1 from "@/public/testimonial/2.jpg";
import tImg2 from "@/public/testimonial/2.jpg";
import tImg3 from "@/public/testimonial/2.jpg";
import tImg4 from "@/public/testimonial/2.jpg";

import icon1 from "@/public/testimonial/2.jpg";
import icon2 from "@/public/testimonial/2.jpg";
import icon3 from "@/public/testimonial/2.jpg";
import icon4 from "@/public/testimonial/2.jpg";
import icon5 from "@/public/testimonial/2.jpg";

import quote from "@/public/testimonial/2.jpg";
import hicon from "@/public/testimonial/2.jpg";

interface TestimonialItem {
  id: string;
  tImg: StaticImageData;
  logo: StaticImageData;
  Des: string;
  Name: string;
  sub: string;
}

const testimonial: TestimonialItem[] = [
  {
    id: "01",
    tImg: tImg1,
    logo: icon1,
    Des: "Working with betopia was fantastic! Their strategies improved our rankings and increased leads.",
    Name: "Christopher Smith",
    sub: "Brand Strat at near",
  },
  {
    id: "02",
    tImg: tImg2,
    logo: icon2,
    Des: "betopia exceeded all our expectations! Their expertise in SEO helped us achieve a remarkable 150%",
    Name: "Sarah Davis",
    sub: "Branding at spinlet",
  },
  {
    id: "03",
    tImg: tImg3,
    logo: icon3,
    Des: "Choosing betopia was a great decision. Their focus on trends helped us rank for competitive keywords.",
    Name: "Robert Miller",
    sub: "Marketing Dir. at BUSD",
  },
  {
    id: "04",
    tImg: tImg4,
    logo: icon4,
    Des: "Since partnering with betopia, our website's performance has improved remarkably.",
    Name: "Jessica Martinez",
    sub: "Project Manager at Kuda",
  },
  {
    id: "05",
    tImg: tImg3,
    logo: icon5,
    Des: "Since partnering with betopia, our website's performance has improved remarkably.",
    Name: "Jessica Martinez",
    sub: "Project Manager at Kuda",
  }, 
  {
    id: "03",
    tImg: tImg3,
    logo: icon3,
    Des: "Choosing betopia was a great decision. Their focus on trends helped us rank for competitive keywords.",
    Name: "Robert Miller",
    sub: "Marketing Dir. at BUSD",
  },
  {
    id: "04",
    tImg: tImg4,
    logo: icon4,
    Des: "Since partnering with betopia, our website's performance has improved remarkably.",
    Name: "Jessica Martinez",
    sub: "Project Manager at Kuda",
  },
  {
    id: "05",
    tImg: tImg3,
    logo: icon5,
    Des: "Since partnering with betopia, our website's performance has improved remarkably.",
    Name: "Jessica Martinez",
    sub: "Project Manager at Kuda",
  },
];

const DemoSlider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative overflow-hidden pb-[140px] max-w-[1320px] mx-auto py-20">
      <div className=" px-4">
        {/* Header */}
        <div className="relative mb-[60px] flex items-center justify-between">
          <div>
            {/* <Fade direction="down" duration={1000}>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                <Image src={hicon} alt="like" />
                99% positive feedback
              </div>
            </Fade> */}

            {/* <Fade direction="up" duration={1200}>
              <h2 className="text-[42px] font-bold leading-tight">
                Feedback That Speaks
              </h2>
            </Fade> */}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <div
              ref={prevRef}
              className="w-12 h-12 flex items-center justify-center border rounded-full cursor-pointer hover:bg-black hover:text-white transition swiper-button-prev"
            >
              <i className="fal fa-angle-left"></i>
            </div>
            <div
              ref={nextRef}
              className="w-12 h-12 flex items-center justify-center border rounded-full cursor-pointer hover:bg-black hover:text-white transition swiper-button-next"
            >
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        loop
        speed={1800}
        spaceBetween={50}
        slidesPerView={2}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          1600: { slidesPerView: 5 },
          768: { slidesPerView: 2 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {testimonial.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full grid grid-cols-1 lg:grid-cols-9 gap-5 border-2">
              <Image src={quote} alt="quote" className="mb-5 lg:col-span-5" width={960} height={520}/>
              <div className="lg:col-span-4">
                <h4 className="font-semibold">{item.Name}</h4>
                <p className="text-gray-600 mb-6">
                “{item.Des}”
              </p>
              </div>


              {/* <p className="text-gray-600 mb-6">
                “{item.Des}”
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={item.tImg}
                  alt={item.Name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.Name}</h4>
                  <span className="text-sm text-gray-500">{item.sub}</span>
                  <div className="mt-2">
                    <Image src={item.logo} alt="logo" />
                  </div>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DemoSlider;
