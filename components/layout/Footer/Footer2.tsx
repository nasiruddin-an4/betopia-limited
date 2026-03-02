"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { officeData, socialLinks } from "@/data/footer";
import FooterDetials from "./FooterDetials";
import { TbDownload } from "react-icons/tb";
import Container from "../Container";

const Footer2: React.FC = () => {
  return (
    <div className="bg-linear-to-t from-[#040404] to-[#626262] w-full pt-6 md:pt-12  flex items-center justify-center overflow-hidden">
      <Container>
        <div className="relative z-2">
          <FooterDetials />

          <div className="flex justify-center mt-16 z-0 relative">
            <Image
              src="/footer/footerlogo.svg"
              alt="Footer Logo"
              width={1440}
              height={200}
              className="opacity-60"
            />
          </div>
          {/* CARDS pulled upward over image */}
          <div className="md:-mt-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[21px] bg-transparent rounded-xl ">
              {officeData.map((office, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-[#595959]
                  hover:border-[#F79549] transition-colors duration-300
                  px-[22px] py-[33px] bg-transparent"
                >
                  {/* 🔹 Background Video */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover rounded-xl "
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={office.bgVideo} type="video/mp4" />
                  </video>

                  {/* 🔹 Overlay */}
                  <div className="absolute inset-0 bg-black/50 rounded-xl " />

                  {/* 🔹 Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="mb-[11px]">
                        <p className="text-[#F79549] uppercase text-xs md:text-base 2xl:text-[19px]">
                          {office.title}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 gap-[11px] text-white list-none">
                        <li className="font-medium text-base md:text-lg 2xl:text-[25px]">
                          {office.city}
                        </li>
                        <li className="text-sm 2xl:text-base">
                          {office.address}
                        </li>
                        <li>
                          <a
                            href={`tel:${office.phone}`}
                            className="text-sm md:text-base 2xl:text-[19px] text-[#F8F8F8] hover:underline"
                          >
                            {office.phone}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-7 md:pt-10 pb-6 ">
            <div className="flex flex-col md:flex-row gap-5 justify-between items-center  gap-x-10  text-white ">
              <div className="flex items-center gap-4 text-white">
                {/* Download Button */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1nsE1wyQ2fscbjWN63CXNcSumZPrxi5Bs"
                  download
                  className="bg-[#FFEF03] w-12 md:w-[60px] h-12 md:h-[60px] rounded-full flex items-center justify-center transition-transform hover:scale-105"
                >
                  <TbDownload className="text-[#232323] w-6 h-6" />
                </a>

                {/* Text Section */}
                <div className="flex flex-col gap-y-[5px] leading-tight">
                  <p className="text-base md:text-xl 2xl:text-2xl font-medium">
                    Company Deck
                  </p>
                  <p className="text-sm md:text-base 2xl:text-[19px]">
                    PDF, 17 MB
                  </p>
                </div>
              </div>
              <p className="text-[#F8F8F8] text-base 2xl:text-2xl mb-0 ">
                © 2025, Betopia Ltd. | All Rights Reserved.
              </p>
              <div className="flex items-center justify-center gap-x-4 ">
                {socialLinks.map((link, index) => (
                  <p
                    key={index}
                    className="w-9 md:w-[49px] h-9 md:h-[49px] flex items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: "#555555", color: "#F8F8F8" }}
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-[#F8F8F8]"
                    >
                      {link.icon}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer2;
