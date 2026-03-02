import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative w-full h-[550px] lg:h-[900px]  overflow-hidden">
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-[550px] md:h-[900px] object-cover"
        src="/partner/white-label/hero.png"
        width={1660}
        height={900}
      />

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-10  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="  xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link
            className="text-lg md:text-xl lg:text-2xl font-semibold"
            href="/adaptability"
          >
            What We Do{" "}
          </Link>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-lg md:text-xl lg:text-2xl font-semibold"
            href="/partner/white-label"
          >
            Partnership
          </Link>
        </div>
        <div className="max-w-[1440px] mx-auto w-full">
          <h1
            className="font-bold text-white 
          text-3xl md:text-4xl lg:text-[64px]  "
          >
            Grow Your Business with{" "}
            <span className="text-[#FF9500]">Betopia</span>
            <br />
            <span className="text-[#FF9500]">White-Label Solutions</span>
          </h1>

          <p
            className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2]  mx-auto `}
          >
            Explore our official Betopia assets, for editorial use only.
          </p>
          <Link
            href="/partner/white-label/partner-form"
            className=" md:w-[408px] flex items-center justify-center gap-1 font-bold text-xs lg:text-lg bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:py-4  md:px-6 rounded-[10px] mt-8"
          >
          Speak to a Partner Success Manager{" "}
            <IoIosArrowForward className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
