import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";

export default function PartnerHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/partner/herobg.png"
        alt="hero"
        width={1916}
        height={900}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1400px] w-11/12 mx-auto px-4 lg:px-0 pb-10 pt-28 md:pb-20 md:pt-40 ">
        <p className="inline-flex items-center gap-2 bg-[#FEB72B33] px-4 py-2 rounded-3xl uppercase font-semibold text-sm md:text-base">
          We are ready to help you
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold ">
          Join the Betopia Partnership <br />
          Program – <span className="text-[#FF9500]">
            Grow Your Revenue
          </span>{" "}
          with <br />
          Enterprise-Grade Solutions
        </h1>

        {/* Content Layout */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left */}
          <div className="flex flex-col gap-4 md:gap-10">
            <PageSubtitle
              text="We empowers enterprises and partners with agile, enterprise-grade cloud, AI, ERP, and cybersecurity solutions built for the modern digital economy."
              className="text-[#5D6B81]  mt-6 md:mt-10"
            />

            {/* <p className="text-base md:text-lg lg:text-xl text-[#5D6B81]  mt-6 md:mt-10">
              Partner with Betopia and unlock access to global clients,
              proprietary products, multi-cloud solutions, and end-to-end
              enterprise services. Whether you sell under our brand or your own,
              earn revenue while delivering high-value projects.
            </p> */}

            <div className="w-full flex items-center  py-6">
              <div className="flex items-center gap-4 ">
                {/* Avatars */}
                <div className="flex -space-x-4">
                  <Image
                    src="/global/zahirul.png"
                    width={60}
                    height={60}
                    className="size-[60px] rounded-full border-2 border-white object-cover"
                    alt="Partner"
                  />
                  <Image
                    src="/global/ronald.png"
                    width={60}
                    height={60}
                    className="size-[60px] rounded-full border-2 border-white object-cover"
                    alt="Partner"
                  />
                  <Image
                    src="/global/nehir.png"
                    width={60}
                    height={60}
                    className="size-[60px] rounded-full border-2 border-white object-cover"
                    alt="Partner"
                  />
                </div>

                {/* Text */}
                <div>
                  <p className="text-xl font-bold text-slate-800 leading-tight">
                    50+
                  </p>
                  <p className="text-slate-600 text-sm font-medium">
                    Happy Partners
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full">
            <Image
              src="/partner/h2.png"
              alt="hero"
              width={712}
              height={442}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
