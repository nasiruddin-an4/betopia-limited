import PageTitle from "@/components/shared/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const WhiteLabelBanner = () => {
  return (
    <section className="relative flex flex-col justify-end items-center h-[650px] sm:h-[580px] md:h-[653px] overflow-hidden text-white pb-20">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/partner/white-label.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4  ">
        <p className="text-sm md:text-base border border-[#0000004D] bg-[#00000033] py-2 rounded-full w-fit mx-auto mb-4 px-6 flex items-center gap-1">
          <Image
            src="/partner/white-label/badge-icon.svg"
            alt="icon"
            width={20}
            height={20}
          />
          White-Label Partnership Program
        </p>

        <PageTitle
          normalText="Grow Your Business with"
          highlightText="Betopia White-Label Solutions"
          wrapperClass="text-3xl md:text-5xl lg:!text-[64px] font-bold"
        />

        <p className={`text-lg md:text-2xl text-[#FFFFFFE5] mx-auto mt-[22px] mb-8 md:w-[58%]`}>
          Offer enterprise-grade technology under your own brand while Betopia
          delivers end-to-end solutions. Focus on client relationships, we
          handle the tech.
        </p>

        <div className="flex justify-center gap-5">
          <Link
            href="/partner-form"
            className="flex items-center gap-3 font-bold text-base lg:text-lg bg-linear-to-r from-[#FF9500] to-[#FF8000] px-4 py-2 md:py-4  md:px-6 rounded-[10px]"
          >
            Apply as a White-Label Partner <IoIosArrowForward className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelBanner;
