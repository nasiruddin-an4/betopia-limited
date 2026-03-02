import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-87.5 lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/case-studies/case-studies-hero.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-[3%]  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="xl:min-w-415 xl:mx-auto mb-2 lg:mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-sm lg:text-3xl font-semibold">
            Impact & Insights
          </div>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-sm lg:text-3xl font-semibold"
            href="/case_studies"
          >
            Case Studies
          </Link>
        </div>
        <div className="xl:min-w-415 mx-auto">
          <div className={`text-2xl md:text-4xl xl:text-[58px] font-bold `}>
            <h1 className={""}>
              Discover How Betopia Delivers <br /> Real{" "}
              <span className={"text-orange-400"}>Business Outcomes </span>
            </h1>
          </div>
          <p
            className={`text-sm md:text-xl xl:text-2xl mt-2 md:mt-7 text-start text-[#CAD5E2] w-fit lg:max-w-5xl`}
          >
            Our case studies showcase how Betopia transforms challenges into
            results through secure architecture, scalable systems, and
            execution-driven delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
