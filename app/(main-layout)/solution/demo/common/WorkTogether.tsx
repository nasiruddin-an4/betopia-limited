import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function WorkTogether() {
  return (
    <div className="bg-linear-to-b from-[#FFF7ED] to-[#EFF6FF]">
      <Container>
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h1
              className=" font-normal text-balck 
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
            >
              Let&apos;s Work <span className="text-[#FF9500]">Together</span>
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0">
              Ready to transform your infrastructure? Our team of experts is
              here to help you build a scalable, secure, and efficient
              enterprise solution.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal ">
                <Image
                  className="p-2 bg-[#FFEDD4] rounded-full"
                  src="/service/service2/mail_orange.png"
                  alt="icon"
                  width={38}
                  height={38}
                />{" "}
                sales@betopialimited.com
              </div>
              <div className="flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal ">
                <Image
                  className="p-2 bg-[#FFEDD4] rounded-full"
                  src="/service/service2/phone_orange.png"
                  alt="icon"
                  width={38}
                  height={38}
                />{" "}
                +8801332840871
              </div>
              <div className="flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal ">
                <Image
                  className="p-2 bg-[#FFEDD4] rounded-full"
                  src="/service/service2/location_orange.png"
                  alt="icon"
                  width={38}
                  height={38}
                />{" "}
                C/A, Ak Khandaker Road Kaderia Tower J-28/8-B, <br /> Mohakhali,
                Dhaka 1213
              </div>
            </div>
            <Link href="/meeting-scheduler">
              <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base">
                Schedule a Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M3.85156 9.2417H14.6338"
                    stroke="white"
                    strokeWidth="1.54031"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.24219 3.85059L14.6333 9.24168L9.24219 14.6328"
                    stroke="white"
                    strokeWidth="1.54031"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <Image
            src="/service/service2/001.png"
            alt="hrm_software"
            width={711}
            height={462}
          />
        </div>
      </Container>
    </div>
  );
}
