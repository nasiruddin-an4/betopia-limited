import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

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
    <section className="relative my-[60px] overflow-hidden rounded-[20px] lg:mx-auto max-w-[1677px] py-[84px]">
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
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="CTA Icon"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
        )}

        <h2 className="text-3xl md:text-[48px] font-bold text-white">
          {titleLine1}
        </h2>

        {titleLine2 && (
          <h2 className="text-3xl md:text-[48px] font-bold text-white mb-[17px]">
            {titleLine2}
          </h2>
        )}

        <p className="text-xl md:text-[20px] text-[#FFFFFFE5] mb-6 max-w-3xl mx-auto">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {buttons.map((btn, index) => (
            <Link key={index} href={btn.href}>
              {btn.variant === "secondary" ? (
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-[#FF9500] transition">
                  {btn.label}
                </button>
              ) : (
                <button className="flex items-center gap-3 font-bold lg:text-2xl bg-[#FF9500] text-white px-6 py-4 rounded-[10px]">
                  {btn.label} <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
