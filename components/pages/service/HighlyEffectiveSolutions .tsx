'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const solutions = [
  {
    title: "End User Devices",
    subtitle: "(Laptop/Desktop/Mobile)",
    description:
      "Empower your team with secure, high-performance laptops, desktops, and mobile devices—optimized for productivity anywhere. Our End User Device Solutions simplify setup, enhance security, and ensure seamless management. Keep your workforce connected, agile, and ready for the future whether in the office or on the move.",
    image: "/service/solution/high1.png", 
  },
  {
    title: "Device Operating Systems ",
    subtitle: "(Windows/Linux)",
    description:
      "Empower your workforce with secure, customizable operating systems Windows or Linux tailored to your workflow and scalability goals. Our OS solutions ensure seamless integration, reliable performance, and centralized management. Choose deploy and manage with confidence—built for productivity and business growth.",
    image: "/service/solution/high2.png", 
  },
  {
    title: "Endpoint ",
    subtitle: "Management Solution",
    description:
      "Manage all your devices—laptops, desktops, mobiles, and IoT—from one unified platform. Our UEM solutions combine security, visibility, and control across Windows, macOS, Linux, Android, and iOS. With zero-touch deployment, patch management, and real-time monitoring, stay agile, compliant, and always in control.",
    image: "/service/solution/high3.png", 
  },
   {
    title: "End User Devices",
    subtitle: "(Laptop/Desktop/Mobile)",
    description:
      "Empower your team with secure, high-performance laptops, desktops, and mobile devices—optimized for productivity anywhere. Our End User Device Solutions simplify setup, enhance security, and ensure seamless management. Keep your workforce connected, agile, and ready for the future whether in the office or on the move.",
    image: "/service/solution/high1.png", 
  },
  {
    title: "Device Operating Systems ",
    subtitle: "(Windows/Linux)",
    description:
      "Empower your workforce with secure, customizable operating systems Windows or Linux tailored to your workflow and scalability goals. Our OS solutions ensure seamless integration, reliable performance, and centralized management. Choose deploy and manage with confidence—built for productivity and business growth.",
    image: "/service/solution/high2.png", 
  },
  {
    title: "Endpoint ",
    subtitle: "Management Solution",
    description:
      "Manage all your devices—laptops, desktops, mobiles, and IoT—from one unified platform. Our UEM solutions combine security, visibility, and control across Windows, macOS, Linux, Android, and iOS. With zero-touch deployment, patch management, and real-time monitoring, stay agile, compliant, and always in control.",
    image: "/service/solution/high3.png", 
  },
];

const HighlyEffectiveSolutions = () => {
  return (
    <section className="py-10 md:py-20 bg-linear-to-r from-[#F8FAFC] to-[#EFF6FF]">
      <Container>
        {/* Title */}
        <div className="text-center mb-8 md:mb-[65px]">
          <SectionTitle normalText="Highly Effective" highlightText="Solutions" />
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            spaceBetween={37}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            className="pb-10"
          >
            {solutions.map((item,index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-2xl  bg-[#FEF9F6] transition-all duration-300 hover:-translate-y-1 p-4">
                  {/* Image */}
                  <div className="relative h-[221.81px]  w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-6 pb-2">
                    <h3 className="mb-3 text-xl font-medium text-[#FF9500]">
                      {item.title} <span className='text-[#0F172B]'>  {item.subtitle}</span>
                    </h3>
                  

                    <p className="mb-5 text-sm md:text-lg text-[#45556C]">
                      {item.description}
                    </p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff95009d] -ml-16 ">
            <MdKeyboardArrowLeft className="text-2xl text-white" />
          </button>
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff95009d] -mr-16">
            <MdKeyboardArrowRight   className="text-2xl text-white" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HighlyEffectiveSolutions;