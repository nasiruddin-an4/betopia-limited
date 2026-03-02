import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function ServiceBanner() {
  return (
    <div className="relative w-full h-[430px]  lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="Values"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        src="/hero/Services2.png"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[40%] xl:pt-[22%] 2xl:pt-[5%]">
        <div className="xl:min-w-[1490px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <Link href="/services">
            <div className="text-lg lg:text-3xl font-semibold">Our Services</div>
          </Link>

          
        </div>
        <div className="min-w-[1440px] mx-auto">
          <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold">
          Enterprise Services
          </h1>
           <h1 className="text-2xl md:text-5xl xl:text-[64px] font-bold text-[#FF9500] md:mt-3">
          That Drive Innovation
          </h1>


          <PageSubtitle
            text="Transform your business with cutting-edge AI, scalable cloud infrastructure, and comprehensive cybersecurity services from industry experts."
            className="mt-4 md:mt-7 text-[#CAD5E2] w-[20%] md:w-[50%]"
          />

        </div>
      </div>
    </div>
  );
}

// import PageTitle from "@/components/shared/PageTitle";
// import Image from "next/image";


// const ServiceBanner = () => {
//   return (
//     <section className="relative flex flex-col justify-end items-center h-[500px] md:h-[574px] overflow-hidden text-white pb-[20px]">
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/servicebanner.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 container text-center px-4 mt-10">
//         <p className="text-sm md:text-base border border-[#FF69004D] bg-[#FF690033] text-[#FF8904]  py-[9px] rounded-full w-fit mx-auto mb-4 md:mb-[27px] px-[19px] flex items-center gap-1">
//           AI, Cloud & Cyber Security
//         </p>

//         <PageTitle
//           normalText="Enterprise Services"
//           highlightText="That Drive Innovation"
//           wrapperClass="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[83px] font-bold"
//         />

//         <p className={`md:text-2xl md:text-[23px] text-[#FFFFFFE5] mx-auto mt-[22px] mb-8 md:w-[58%] `}>
//           Transform your business with cutting-edge AI, scalable cloud infrastructure, and comprehensive cybersecurity services from industry experts.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ServiceBanner;
