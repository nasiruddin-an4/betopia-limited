import Image from "next/image";
import Link from "next/link";

const VotingHero = () => {
  return (
    <div className="relative w-full h-157.5 lg:h-225 2xl:min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        alt="media"
        className="absolute inset-0 w-full h-full object-cover"
        src="/product/hero.png"
        width={1660}
        height={563}
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 pt-[15%] lg:pt-[5%] xl:pt-[15%] 2xl:pt-0">
        {/* Breadcrumb */}
        <div className="w-full max-w-420 mx-auto mb-6 lg:mb-10 flex flex-wrap items-center gap-3 pb-3 border-b border-white">
          <Link
            className="text-base sm:text-lg lg:text-3xl font-semibold"
            href="/adaptability"
          >
            What We Do
          </Link>
          <span className="text-lg lg:text-3xl font-semibold">/</span>

          <Link
            className="text-base sm:text-lg lg:text-3xl font-semibold"
            href="/product"
          >
            Products
          </Link>
          <span className="text-lg lg:text-3xl font-semibold">/</span>

          <Link
            className="text-base sm:text-xl lg:text-3xl font-semibold"
            href="/product/voting-count-trust"
          >
            CountTrust
          </Link>
        </div>

        {/* Text block */}
        <div className="w-full max-w-420 mx-auto">
          <h3 className="text-white text-[28px] md:text-[32px] lg:text-[52px] font-bold ">
            Count Trust-Secure, Auditable <br />
            Online Voting System <br />
            <span className="text-[#FF9500]">Built on Trust</span>
          </h3>

          <p className="text-base md:text-xl xl:text-2xl mt-4 md:mt-7 text-[#CAD5E2] lg:w-[70%]">
            A next-generation online voting platform designed for organizations
            that demand security, transparency, and credibility starting from
            clubs and schools to enterprises and large-scale elections.
          </p>

          <div className="flex gap-4 mt-6 md:mt-10">
            <Link
              href="/meeting-scheduler"
              className="flex items-center bg-linear-to-r from-[#FF9500] to-[#F54900] px-5 md:px-6 py-3 text-base rounded-[14px]"
            >
              Demo Request
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingHero;
