import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-125 lg:h-145 xl:min-h-screen   overflow-hidden">
      {/* Background image */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/r.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:pt-[5%] lg:pt-[35%] xl:pt-[28%]">
        <div className="max-w-360 w-full mx-auto mb-10 flex flex-wrap items-center gap-3 pb-3 border-b border-white">
          <div className=" lg:text-3xl font-semibold">Impact & Insights</div>
          <div className="lg:text-3xl font-semibold">/</div>
          <Link className=" lg:text-3xl font-semibold" href="/case_studies">
            Case Studies
          </Link>

          <div className=" lg:text-3xl font-semibold">/</div>
          <Link className=" lg:text-3xl font-semibold" href="/case-studies/re">
            RE
          </Link>
        </div>

        <div className="max-w-360 w-full mx-auto">
          <h1
            className="font-bold text-white 
          text-2xl md:text-4xl lg:text-[64px]"
          >
            RE: Is Your Countdown
            <br />
            {}
            <span className="text-[#FF9500]"> Social Experience</span>
          </h1>
          <PageSubtitle
            text="A next-generation social platform where moments unfold over time, creating deeper connections through intentional sharing."
            className="mt-2 lg:mt-7 text-start text-[#CAD5E2] xl:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
}

// import PageSubtitle from "@/components/shared/heading/pageSubtitle";

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[440px] lg:h-[663px] overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/videos/hero/team_augmentation_hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <h6 className="text-xs md:text-sm lg:text-base mb-4 font-roboto px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#70491d]">
//           Betopia Portfolio
//         </h6>

//         <h1 className=" text-white text-3xl md:text-5xl xl:text-[64px] font-bold">
//          RE: <br />
//          Is Your  <span className="text-[#FF9500]">Countdown  </span> Social Experience
//         </h1>
//         <PageSubtitle
//           text="A next-generation social platform where moments unfold over time, creating deeper connections through intentional sharing."
//           className="mt-4 sm:mt-6 text-[#CAD5E2] lg:w-[60%] mx-auto"
//         />
//       </div>
//     </div>
//   );
// }
