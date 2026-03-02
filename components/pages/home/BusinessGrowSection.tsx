"use client";

import Container from "@/components/layout/Container";
import { MdArrowOutward } from "react-icons/md";
import { productcards } from "@/data/home";
import Image from "next/image";
import Link from "next/link";

export default function BusinessGrowSection() {
  return (
    <Container>
      <section
        className="relative bg-[#ECEFF4] overflow-hidden px-14 -mt-24 lg:mt-[-70px] pb-10  rounded-md
  [clipPath:polygon(0_8%,100%_0,100%_100%,0_100%)]
"
      >
        <div className="relative pt-38.25">
          {/* Top content */}
          <div className="md:flex justify-between gap-10">
            {/* Left */}
            <div className="md:w-1/2 md:flex flex-col justify-center">
              {/* <h2 className="text-sm md:text-base lg:text-2xl font-semibold text-[#1F1F1F]">
                [ Betopia Products ]
              </h2> */}
              <h2 className="mt-2 text-2xl md:text-6xl font-medium text-[#070A0E] md:leading-20">
                Enterprise <span className="text-[#FF9500]">Product </span>
                Solutions
              </h2>
            </div>

            {/* Right */}
            <div className="text-[#1F1F1F] space-y-6 md:space-y-14 md:text-2xl md:w-1/2 mt-6 md:mt-0">
              <p>
                We deliver secure and scalable HRM, ERP, and Digital Voting
                Systems built to simplify operations and ensure reliability. Our
                products are designed for efficiency, transparency, and
                long-term growth—helping organizations automate processes and
                make smarter decisions.
              </p>
              <Link href="/product">
                <button
                  className="inline-flex items-center gap-4 border 
             border-[#FF9500] text-[#1F1F1F] px-6.5 py-3 rounded-2xl text-sm md:text-[22px] transition cursor-pointer"
                >
                  Explore More <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>

          {/* Cards */}
<div className="grid md:grid-cols-3 gap-10 mt-15">
          {productcards.map((card, index) => (
            <Link href={card.link} key={index} className="block">
              <div className="relative">
                {/* Top Image Container */}
                <div className={`rounded-t-[21px] overflow-hidden ${card.bg}`}>
                  <Image
                    src={card.image}
                    alt=""
                    width={366}
                    height={220}
                    className="object-cover w-full"
                  />
                </div>
                {/* Absolute Image - Forced Alignment */}
              <div
  className={`absolute left-0 w-full
    bottom-[-24px] 
    ${index === 1 ? 'lg:bottom-[-90px]' : ''}`}
>

                  <Image
                    src={card.floatImage}
                    alt=""
                    width={500}
                    height={160}
                    className="w-full h-auto block"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </Link>
          ))}
          </div>
          {/* <div className="grid md:grid-cols-3 gap-10 mt-15">
            {productcards.map((card, index) => (
              <Link href="#" key={index}>
                <div className="relative">
                  <div
                    className={`rounded-t-[21px] overflow-hidden ${card.bg}`}
                  >
                    <Image
                      src={card.image}
                      alt=""
                      width={366}
                      height={220}
                      className="object-cover w-full"
                    />
                  </div            >

                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-6  overflow-hidden w-full">
                    <Image
                      src={card.floatImage}
                      alt=""
                      width={500}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div> */}

          {/* Stats */}
          {/* <h2 className="text-xl md:text-4xl lg:text-[43px] font-bold mt-18.5 text-center">
         Trusted by Organizations Worldwide
        </h2> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20">
            <div className="lg:-ml-10">
              <h3 className="text-5xl text-center 2xl:text-[120px] font-semibold text-[#CCCCCC]">
                4000+
              </h3>
              <p className=" text-lg md:text-[28px] text-center text-[#1F1F1F] font-semibold ">
                Expert Developers & Engineers
              </p>
              {/* <p className="mt-2 md:text-lg text-[#1F1F1F] ">
             Achieved a 95% customer satisfaction rate across all AI solutions.
              </p> */}
            </div>
            <div className="">
              <h3 className="text-5xl 2xl:text-[120px] font-semibold text-center text-[#CCCCCC]">
                40,000+
              </h3>
              <p className=" text-lg md:text-[28px] text-[#1F1F1F] font-semibold text-center ">
              Clients Served Worldwide
              </p>
              {/* <p className="mt-2 md:text-lg text-[#1F1F1F] ">
               Achieved a 95% customer satisfaction rate across all AI solutions.
               </p> */}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
