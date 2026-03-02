/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import  { useRef } from "react";

import type { Swiper as SwiperType } from "swiper";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

import "swiper/css";
import Container from "@/components/layout/Container";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";


export default function TrustedOrganizations() {
  const swiperRef = useRef<SwiperType | null>(null);
  const services = [
    {
      icon: "/partnership/logos_microsoft-icon.png",
      title: "Microsoft Gold",
      description: "Partnership",
    },
    {
      icon: "/partnership/aws2.png",
      title: "AWS Advanced",
      description: "Partnership",
    },
    {
      icon: "/partnership/cloud1.png",
      title: "Google Cloud",
      description: "Partnership",
    },

    {
      icon: "/partnership/oddo_up.png",
      title: "Odoo",
      description: "Partnership",
    },
    // {
    //   icon: "/partnership/british_2.png",
    //   title: "British Council",
    //   description: "Partnership",
    // },
    // {
    //   icon: "/partnership/pear.png",
    //   title: "Pearson Vue",
    //   description: "Partnership",
    // },
    // {
    //   icon: "/partnership/orac.png",
    //   title: "Oracle",
    //   description: "Partnership",
    // },
    { icon: "/partnership/sap.png", title: "SAP", description: "Partnership" },
    {
      icon: "/partnership/s.png",
      title: "Salesforce",
      description: "Partnership",
    },
    {
      icon: "/partnership/users.png",
      title: "300+ Enterprises",
      description: "Partnership",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative  overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          >
          <source src="/videos/home/trusted.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 py-10 lg:py-20 text-center">
          <Container>
             <HeadingTwo title="Trusted by Leading Organizations" className="text-white" />
        <PageSubtitle
          text="Serving approximately 300 enterprise businesses across healthcare,
            BFSI, manufacturing, and technology sectors"
          className="text-center text-gray-300 mb-8"
        />

          </Container>

          {/* ================= XL GRID ================= */}
          {/* <div className="hidden 2xl:grid grid-cols-7 gap-8">
            {services.map((service, index) => (
              <Card key={index} service={service} />
              ))} 
              </div> */}

          {/* Navigation Buttons */}
          {/* <div className="relative">
            <div className="flex justify-between w-11/12 mx-auto xl:px-8 absolute md:static top-28 left-[4%] z-10 mb-3 -mt-10">
            <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="group border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
            >
            <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
            </button>
            <button
            onClick={() => swiperRef.current?.slideNext()}
                className="group border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
                >
                <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
                </button>
                </div>
          </div> */}

          {/* ================= SLIDER ( < XL ) ================= */}
          <Swiper
            modules={[Autoplay]}
            loop
            spaceBetween={20}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Card service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

/* ================= CARD COMPONENT ================= */

function Card({ service }: { service: any }) {
  return (
    <div className="h-full">
      <div
        className="group h-full flex flex-col items-center justify-between 
      bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 
      border border-white/20 transition-all duration-300 
      hover:bg-white/20 hover:scale-105"
      >
        {/* ICON */}
        {service.title === "Google Cloud" ||
        service.title === "Microsoft Gold" ||
        service.title === "AWS Advanced" ? (
          <img
            src={service.icon}
            alt={service.title}
            className="w-10 h-10 md:w-20 md:h-20  object-contain my-5 md:my-5.5 lg:my-6"
          />
        ) : (
          <img
            src={service.icon}
            alt={service.title}
            className="w-20 h-20 md:w-32 md:h-32  object-contain"
          />
        )}

        {/* TEXT */}
        <div className="text-center  flex-1 flex flex-col justify-center">
          <p className="text-gray-200 text-sm md:text-base mb-2 leading-relaxed">
            {service.description}
          </p>

          <h3 className="text-white text-lg md:text-xl font-semibold">
            {service.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Container from "@/components/layout/Container";
// import React, { useRef } from "react";
// import Image from "next/image";
// import type { Swiper as SwiperType } from "swiper";
// // swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode, Navigation } from "swiper/modules";

// import "swiper/css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export default function TrustedOrganizations() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const services = [
//     {
//       icon: "/partnership/logos_microsoft-icon.png",
//       title: "Microsoft Gold",
//       description: "Partnership",
//     },
//     {
//       icon: "/partnership/aws2.png",
//       title: "AWS Advanced",
//       description: "Partnership",
//     },
//     {
//       icon: "/partnership/cloud1.png",
//       title: "Google Cloud",
//       description: "Partnership",
//     },

//     {
//       icon: "/partnership/oddo_up.png",
//       title: "Odoo",
//       description: "Partnership",
//     },
//     {
//       icon: "/partnership/british_2.png",
//       title: "British Council",
//       description: "Partnership",
//     },
//     {
//       icon: "/partnership/pear.png",
//       title: "Pearson Vue",
//       description: "Partnership",
//     },
//     // {
//     //   icon: "/partnership/orac.png",
//     //   title: "Oracle",
//     //   description: "Partnership",
//     // },
//     { icon: "/partnership/sap.png", title: "SAP", description: "Partnership" },
//     {
//       icon: "/partnership/s.png",
//       title: "Salesforce",
//       description: "Partnership",
//     },
//     {
//       icon: "/partnership/users.png",
//       title: "300+ Enterprises",
//       description: "Partnership",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       <div className="relative w-full overflow-hidden">
//         {/* Video Background */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/videos/home/trusted.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/80"></div>

//         {/* Content */}
//         <div className="relative z-10 py-16 text-center">
//           <h2 className="text-3xl md:text-4xl xl:text-[52px] font-bold text-white mb-4">
//             Trusted by Leading Organizations
//           </h2>

//           <div className="w-16 sm:w-20 h-1 bg-[#FF9500] mx-auto mb-6"></div>

//           <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
//             Serving approximately 300 enterprise businesses across healthcare,
//             BFSI, manufacturing, and technology sectors
//           </p>

//           {/* ================= XL GRID ================= */}
//           {/* <div className="hidden 2xl:grid grid-cols-7 gap-8">
//             {services.map((service, index) => (
//               <Card key={index} service={service} />
//             ))} 
//           </div> */}

//           {/* Navigation Buttons */}
//           {/* <div className="relative">
//             <div className="flex justify-between w-11/12 mx-auto xl:px-8 absolute md:static top-28 left-[4%] z-10 mb-3 -mt-10">
//               <button
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 className="group border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//               >
//                 <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
//               </button>
//               <button
//                 onClick={() => swiperRef.current?.slideNext()}
//                 className="group border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//               >
//                 <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
//               </button>
//             </div>
//           </div> */}

//           {/* ================= SLIDER ( < XL ) ================= */}
//           <Swiper
//             modules={[Autoplay]}
//             loop
//             spaceBetween={20}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             autoplay={{
//               delay: 1000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             speed={3000}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index}>
//                 <Card service={service} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= CARD COMPONENT ================= */

// function Card({ service }: { service: any }) {
//   return (
//     <div className="h-full">
//       <div
//         className="group h-full flex flex-col items-center justify-between 
//       bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 
//       border border-white/20 transition-all duration-300 
//       hover:bg-white/20 hover:scale-105"
//       >
//         {/* ICON */}
//         {service.title === "Google Cloud" ||
//         service.title === "Microsoft Gold" ||
//         service.title === "AWS Advanced" ? (
//           <img
//             src={service.icon}
//             alt={service.title}
//             className="w-10 h-10 md:w-20 md:h-20  object-contain my-5 md:my-5.5 lg:my-6"
//           />
//         ) : (
//           <img
//             src={service.icon}
//             alt={service.title}
//             className="w-20 h-20 md:w-32 md:h-32  object-contain"
//           />
//         )}

//         {/* TEXT */}
//         <div className="text-center  flex-1 flex flex-col justify-center">
//           <p className="text-gray-200 text-sm md:text-base mb-2 leading-relaxed">
//             {service.description}
//           </p>

//           <h3 className="text-white text-lg md:text-xl font-semibold">
//             {service.title}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }
