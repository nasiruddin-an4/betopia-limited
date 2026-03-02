import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface CTASectionProps {
  titleLine1: string;
  titleLine2?: string;
  description: string;
  videoSrc?: string;
  iconSrc?: string;
  buttons: CTAButton[];
}

const CTASection: React.FC<CTASectionProps> = ({
  titleLine1,
  titleLine2,
  description,
  videoSrc,
  iconSrc,
  buttons = [],
}) => {
  return (
    <section className="relative my-10 overflow-hidden rounded-[20px] mx-auto max-w-[1677px] py-10 md:py-20 w-11/12 ">
      {/* Background Video */}
      {videoSrc && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* {iconSrc && (
          <Image
            src={iconSrc}
            alt="CTA Icon"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
        )} */}

        <h2 className="text-3xl md:text-[52px] font-bold text-white">
          {titleLine1}
        </h2>

        {titleLine2 && (
          <h2 className="text-3xl md:text-[52px] font-bold text-white mb-[17px]">
            {titleLine2}
          </h2>
        )}

        <p className=" text-lg  md:text-2xl text-[#FFFFFFE5] mb-6 max-w-3xl mx-auto">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {buttons.map((btn, index) => (
            <Link key={index} href={btn.href}>
              {/* {btn.variant === "secondary" ? (
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-[#FF9500] transition">
                  {btn.label}
                </button>
              ) : (
                <button className="flex items-center gap-3 font-bold lg:text-lg bg-[#FF9500] text-white px-6 py-4 rounded-[10px]">
                  {btn.label} <FaArrowRight />
                </button>
              )} */}
              {btn.variant === "secondary" ? (
                <button className="inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl transition cursor-pointer">
                  {btn.label}
                  <span className="text-lg">
                    <IoIosArrowForward className="text-2xl" />
                  </span>
                </button>
              ) : (
                <button className="flex items-center gap-1 lg:gap-3 cursor-pointer font-bold  bg-linear-to-r from-[#FF9500] to-[#F54900]  text-white px-3 lg:px-6 py-4 rounded-[10px]">
                  {btn.label} <IoIosArrowForward className="text-2xl" />
                </button>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
