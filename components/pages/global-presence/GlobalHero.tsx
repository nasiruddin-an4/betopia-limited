import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
import Image from "next/image";
import Link from "next/link";

export default function LeadershipHero() {
  return (
    <div className="relative w-full h-[390px] md:h-[450px] lg:min-h-screen  overflow-hidden">

      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Global2.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-30  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[28%] xl:pt-[15%] 2xl:pt-[6%]">
        <div className="xl:min-w-[1600px] xl:mx-auto mb-10 flex flex-wrap items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/about">
          <div className="text-xl lg:text-3xl font-semibold">
            Who We Are
          </div>
          </Link>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link className="text-xl lg:text-3xl font-semibold" href="/global-presence">
            Global Presence
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
          <OnelinePageTitle normalText="Worldwide" highlightText="Operations" />

           <PageSubtitle
         text="BETOPIA Limited operates with a global mindset, delivering technology and digital transformation solutions through a distributed international presence."
         className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[40%] "
      />
        </div>
      </div>
    </div>
  );
};

// import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";

// const GlobalHero = () => {
//   return (
//     <div className="relative w-full h-[370px] lg:h-[500px]  overflow-hidden">
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
//       <div className="relative z-10 flex flex-col mt-16 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <OnelinePageTitle normalText="Worldwide" highlightText="Operations" />

//         <PageSubtitle
//           text="BETOPIA Limited operates with a global mindset, delivering technology and digital transformation solutions through a distributed international presence."
//           className="mt-4 md:mt-7 text-[#CAD5E2] lg:w-[50%] mx-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default GlobalHero;
