import PageTitle from "@/components/shared/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CoBrandedBanner = () => {
  return (
    <section className="relative flex flex-col justify-end items-center h-[653px] overflow-hidden text-white pb-20">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/partner/co-branded.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <p className="text-sm md:text-base border border-[#0000004D] bg-[#00000033] py-2 rounded-full w-fit mx-auto mb-4 px-6 flex items-center gap-1">
          <Image
            src="/partner/white-label/badge-icon.svg"
            alt="icon"
            width={20}
            height={20}
          />
          Co-Branded Partnership Program
        </p>

        <PageTitle
          normalText="Partner with Betopia Under "
          highlightText="a Co-Branded Model"
          wrapperClass="text-3xl md:text-5xl lg:!text-[60px] font-bold"
        />

        <p className={`md:text-2xl text-[#FFFFFFE5] mx-auto mt-[22px] mb-8 md:w-[58%]`}>
          Leverage Betopia’s enterprise technology under our trusted brand while earning maximum revenue on every project.
        </p>

        {/* <div className="flex justify-center gap-5">
          <Link
            href="/coming-soon"
            className="flex items-center gap-3 font-bold lg:text-2xl bg-linear-to-r from-[#FF9500] to-[#FF8000] px-4 py-2 md:py-4  md:px-6 rounded-[10px]"
          >
           Become a Co-Branded Partner <svg
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
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default CoBrandedBanner;
