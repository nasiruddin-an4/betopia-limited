import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Together() {
  return (
    <div className="bg-[#FFF7ED]">
      <Container>
        <div className="pt-10 mb:pb-10 lg:pb-0 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          <div>
            <h6 className="w-fit text-xs md:text-sm lg:text-base text-[#CA3500] mb-4  px-5 py-2 rounded-3xl bg-[#FFD6A8]">
              Ready to Get Started?
            </h6>
            <h1
              className=" text-black 
          text-3xl sm:text-4xl lg:text-5xl lg:text-[56px] lg:leading-16"
            >
              Let&apos;s Build Something <br />{" "}
              <span className="text-[#FF9500]">Amazing Together</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg md:text-xl lg:text-2xl text-[#45556C]">
             Schedule a free consultation with our experts to discuss your infrastructure needs and discover how we can help transform your business.
            </p>
            <div className="flex items-center gap-[19px]">
                 <Link href="/meeting-scheduler">
              <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
                Schedule Consultation
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </button>
            </Link>
            {/* <Link href="/coming-soon">
              <button className="bg-white mt-8 text-[#314158] cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base border border-[#CAD5E2]">
                View Pricing
              </button>
            </Link> */}
            </div>
          </div>
          <div className="mb-10 lg:mb-20">
          <Image
            src="/solution/main/cta2.png"
            alt="hiring"
            width={711}
            height={474}
            className="object-cover md:h-[380px] lg:h-[474px] rounded-2xl"
          />
          </div>
        </div>
      </Container>
    </div>
  );
}
