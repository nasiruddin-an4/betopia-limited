import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Together() {
  return (
    <div className="">
      <Container>
        <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          <div className="flex flex-col justify-center">
  
         <SectionTitle normalText="Let's Work" highlightText="Together" />
            <p className="mt-7 text-base md:text-[20px] text-[#45556C]">
             Ready to secure your endpoints and protect your organization? Our team of security experts is here to help you implement a comprehensive endpoint management solution.
            </p>
            <Link href="/meeting-scheduler">
            <button className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 md:py-3 text-sm md:text-base w-[250.9px]">
                Schedule a Consultation
              <FaArrowRight/>
              </button>
            </Link>
          </div>
          <div >
          <Image
            src="/service/together.png"
            alt="hiring"
            width={711}
            height={474}
            className="object-cover"
          />
          </div>
        </div>
      </Container>
    </div>
  );
}
