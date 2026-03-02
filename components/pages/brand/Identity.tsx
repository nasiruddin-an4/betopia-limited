"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Identity() {
  return (
    <section className="relative w-full pt-50 pb-10 md:py-10 md:h-[400px] lg:h-[734px] overflow-hidden flex items-center">

      {/* Background Image */}
      <Image
        src="/brand/brandbg.svg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* Content */}
      <Container>
      <div className="relative z-10 text-white space-y-2 md:space-y-4 ">
        <p className="text-sm md:text-lg text-white">Our Visual Identity</p>

        <h2 className="text-xl xl:text-[36px] font-bold ">
          Betopia Limited Logo
        </h2>

        <Link href="/media-kit">
          <button className="flex gap-1 items-center hover:text-[#FF9500] font-semibold cursor-pointer">
            Discover More
            <span className="mt-1">
              <IoIosArrowForward />
            </span>
          </button>
        </Link>
      </div>
      </Container>
    </section>
  );
}
