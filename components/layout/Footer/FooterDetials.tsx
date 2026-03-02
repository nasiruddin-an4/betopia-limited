// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { anotherServices, quickLinks, reviews, services } from "@/data/footer";

const FooterDetials = () => {
  return (
    <footer className="text-white text-base sm:text-lg px-4 sm:px-6 md:px-10 lg:px-10  pb-8 md:pb-[50px] ">
      <div className="max-w-[1760px] mx-auto grid grid-cols-2 xl:grid-cols-10 gap-6 md:gap-4 ">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center col-span-2  xl:col-span-4 mt-6 lg:mt-20">
          <p className="leading-relaxed text-lg md:text-2xl max-w-full lg:max-w-[80%]">
            Betopia Limited builds secure, cloud-ready, AI-powered enterprise
            platforms, delivering vendor-neutral solutions across Microsoft,
            AWS, and Google Cloud for organizations ready to scale and innovate.
          </p>
          <Link href="/partner-program">
            <button className="mt-4 sm:mt-6 cursor-pointer rounded-lg bg-linear-to-r from-[#FF9500] to-[#F54900] border-[1.3px] border-b-[4px] border-[#FAFAFA] text-white text-sm sm:text-base md:text-lg 2xl:text-2xl font-semibold px-5 py-2 sm:px-6 sm:py-3 transition">
              Become a Partner
            </button>
          </Link>
        </div>

        {/* Company */}
        <div className="xl:col-span-1 mt-6 sm:mt-2">
          <h3 className="text-2xl md:text-[36px] font-semibold mb-4 sm:mb-6">
            Company
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-lg md:text-2xl">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-[#FF9500] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="xl:col-span-2  mt-20">
          <ul className="space-y-1 sm:space-y-2 text-lg md:text-2xl md:ml-0 xl:ml-8">
            {services.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-[#FF9500] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Another Services / Quick Links */}
        <div className="xl:col-span-2 mt-6 lg:mt-20">
          <ul className="space-y-1 sm:space-y-2 text-lg md:text-2xl">
            {anotherServices.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-[#FF9500] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Review */}
        <div className="xl:col-span-1 mt-6 sm:mt-2">
          <h3 className="font-semibold text-2xl md:text-[36px] mb-4 sm:mb-6">
            Review
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-lg md:text-2xl">
            {reviews.map((review, idx) => (
              <li key={idx}>
                <a
                  href={review.href}
                  target="_blank"
                  className="hover:text-[#FF9500] transition"
                >
                  {review.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterDetials;
