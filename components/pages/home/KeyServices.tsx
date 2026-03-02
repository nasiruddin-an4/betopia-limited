
"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

export default function KeyServices() {
  const services = [
    {
      title: "Cloud Modernization",
      video: "/videos/services/cloud.mp4",
      link: "/services/cloud-modernization",
    },
    {
      title: "Cybersecurity & Compliance",
      video: "/videos/services/cybersecurity.mp4",
      link: "/services/cybersecurity",
    },
    {
      title: "AI & Analytics",
      video: "/videos/services/ai.mp4",
      link: "/services/ai-analytics",
    },
  ];
  return (
    <section className="w-full py-7 px-4 md:px-6 max-w-[1660px] mx-auto">
      {/* <h2 className="text-4xl text-center lg:text-5xl font-bold text-[#45556C] mb-4">
          What We Offer
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-4"></div>
        <p className="text-xl text-[#6e6e6e] max-w-3xl mx-auto mb-6 text-center">
          Comprehensive enterprise solutions tailored to your digital
          transformation journey
        </p> */}
        <div className="mb-4">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#45556C] mb-2 ml-4 2xl:ml-3">
                Services
              </h2>
              <div className="w-20 h-1 bg-[#FF9500] ml-4 2xl:ml-3" />
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6.75">
        {/* First two service cards */}
        {services.slice(0, 2).map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer h-64 md:h-96 2xl:h-[490.2002px] "
          >
            {/* Video Background */}
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* title */}
            {/* <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white"> */}
            <div className="absolute bottom-16 left-16 text-white">
              <h3 className="text-2xl 2xl:text-[32px] text-center">{item.title}</h3>
            </div>
{/* <div className="absolute -rotate-45 bottom-[60px] -right-[12px] min-w-6 min-h-6 rounded-full border-b-8 border-white"></div>
              <div className="absolute -rotate-45 -bottom-[10px] right-[51px] min-w-4 min-h-4 rounded-full border-b-8  border-white"></div> */}
            {/* Arrow Button */}
            <Link
              href={item.link}
              className="absolute bottom-0 right-0 bg-[#FF9500] p-2.25 rounded-[10px] border-8 border-white"
            >
              <span className="text-white text-xl 2xl:text-[34px]"><MdArrowOutward /></span>
            </Link>
          </div>
        ))}

        <div className="flex flex-col-reverse md:flex-col gap-4 2xl:gap-4.75">
          {/* More Services Button */}
          <Link
            href="/services"
            className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer h-24 2xl:h-[142.6286px]
             bg-linear-to-r from-[#FF9500] to-[#F54900] flex items-center gap-4 justify-center"
          >
            <span className="text-white text-xl 2xl:text-[46.02px] font-medium">More Services</span>
            <span className="text-white text-3xl 2xl:text-[50px]"><IoIosArrowRoundForward /></span>
          </Link>

          {/* Third service card */}
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <video
              src={services[2].video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
{/* <div className="absolute -rotate-45 bottom-[45px] -right-[2px] min-w-4 min-h-4 rounded-full border-b-8  border-white"></div>
              <div className="absolute -rotate-45 -bottom-[10px] right-[51px] min-w-4 min-h-4 rounded-full border-b-8  border-white"></div> */}
            {/* title */}
            <div className="absolute bottom-16 left-40 text-white">
              <h3 className="text-2xl 2xl:text-[32px] text-center">{services[2].title}</h3>
            </div>

            {/* Arrow Button */}
            <Link
              href={services[2].link}
              className="absolute bottom-0 right-0 bg-[#FF9500] p-2.25 rounded-[10px] border-8 border-white"
            >
              <span className="text-white text-xl 2xl:text-[34px]"><MdArrowOutward /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
