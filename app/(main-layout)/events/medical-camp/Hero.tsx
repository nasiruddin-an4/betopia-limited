import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-90 lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover pt-16"
        src="/events/m.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[32%] xl:pt-[12%] 2xl:pt-0">
        <div
          className="
    w-full
    mb-6
    flex flex-wrap
    items-center
    gap-x-2 gap-y-1
    pb-3
    border-b border-white

    text-sm
    sm:text-base
    lg:text-xl
    xl:text-3xl

    xl:max-w-400
    xl:mx-auto
  "
        >
          <div className="text-xl lg:text-3xl font-semibold">News & Media</div>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link className="text-xl lg:text-3xl font-semibold" href="/events">
            Events
          </Link>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link
            className="text-xl lg:text-3xl font-semibold"
            href="/events/medical-camp"
          >
            Medical Camp & Awareness Program
          </Link>
        </div>
        <div className="min-w-400 mx-auto">
          <h1
            className="font-bold text-white 
          text-2xl md:text-4xl lg:text-[64px]"
          >
            FREE {}
            <span className="text-[#FF9500]">
              Medical Camp & <br /> Awareness
            </span>{" "}
            Program 2026
          </h1>
        </div>
      </div>
    </div>
  );
}
