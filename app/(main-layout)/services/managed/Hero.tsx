import BookButton from "@/components/shared/button/BookButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full   h-[580px]  xl:h-[750px]  2xl:min-h-screen overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover object-right"
        src="/service/managed/hero.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[28%] 2xl:pt-[5%]">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-10 flex flex-wrap items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/services">
            <div className="text-lg lg:text-3xl font-semibold">Services</div>
          </Link>

          <div className="text-lg lg:text-3xl font-semibold">/</div>
          <Link
            className="text-lg lg:text-3xl font-semibold"
            href="/services/managed"
          >
            Managed Services
          </Link>
        </div>
       <div className="lg:w-[1440px] mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
            Run smarter. Stay focused. 
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
           Scale without friction.
          </h1>


          <PageSubtitle
            text="Modern IT operations must be reliable, secure, and continuously improving. Betopia Limited delivers Managed Services that ensure day-to-day IT operations run smoothly while enabling organizations to focus on core business priorities. Our services combine operational excellence, automation, and proactive management across on-premises, cloud, and hybrid environments."
            className="mt-4 md:mt-7 text-[#CAD5E2] lg:text-justify lg:w-[60%]"
          />
          <BookButton />
        </div>
      </div>
    </div>
  );
}