import Container from "@/components/layout/Container";
import HeadingFive from "@/components/shared/heading/HeadingFive";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Link from "next/link";

export default function CTABanner() {
  return (
    <Container>
      <section className="relative py-10 lg:py-20 overflow-hidden rounded-2xl mt-8 mb-8 ">
        {/* Background Image */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/home/cta.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Animated Rocket Video/GIF (positioned like screenshot) */}
        <div className="absolute top-10 left-1/2 md:left-auto md:right-1/4 md:top-20 -translate-x-1/2 md:translate-x-0 animate-bounce"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 ">
          <div className="lg:w-[70%] mx-auto">

          <HeadingFive
            title="Ready to Transform Your Enterprise with AI-Powered Solutions?"
            center={false}
            className=" text-white mb-3 "
          />
          </div>
          <PageSubtitle
            text="Discover how Betopia can help you accelerate your digital transformation."
            className="mb-5 text-[#FF9500]"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <Link href="/meeting-scheduler" target="_blank">
              <button className="px-3 lg:px-8 py-2 lg:py-4 flex cursor-pointer items-center gap-3 hover:bg-transparent border-2 border-white text-[#FF9500] rounded-xl font-semibold md:text-lg bg-white hover:text-gray-100 transition">
                Book a Consultation{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                    stroke="#FF9500"
                    strokeWidth="1.95"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>

          </div>
        </div>
      </section>
    </Container>
  );
}
// import Link from "next/link";

// export default function CTABanner() {
//   return (
//     <section className="relative py-10 md:py-20 overflow-hidden rounded-2xl mt-8 mb-8 mx-4 md:mx-8 lg:mx-auto max-w-[1660px]">
//       {/* Background Image */}
//         <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/home/cta.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Animated Rocket Video/GIF (positioned like screenshot) */}
//       <div className="absolute top-10 left-1/2 md:left-auto md:right-1/4 md:top-20 -translate-x-1/2 md:translate-x-0 animate-bounce">
       
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
//         {/* <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//           🚀
//         </h2> */}
//         <h2 className="text-3xl md:text-4xl xl:text-[52px] font-bold text-white mb-6">
//          Ready to Transform Your Enterprise with AI-Powered Solutions?
//         </h2>
//         <p className="text-lg md:text-2xl text-orange-400 mb-10 font-normal">
//         Discover how Betopia can help you accelerate your digital transformation.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//           {/* <button className="px-8 py-4 bg-transparent border-2 border-[#FF9500] text-white rounded-full font-semibold text-lg hover:bg-[#FF9500] hover:text-white transition flex items-center gap-3 group">
//             Book a Consultation
//             <span className="group-hover:translate-x-2 transition-transform">→</span>
//           </button> */}

// <Link href="/meeting-scheduler"
//                 target="_blank">
//           <button className="px-8 py-4 flex cursor-pointer items-center gap-3 hover:bg-transparent border-2 border-white text-[#FF9500] rounded-xl font-semibold md:text-lg bg-white hover:text-gray-100 transition">
//             Book a Consultation     <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="#FF9500"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//           </button>
// </Link>
// {/* <Link href="/partner-program">
//           <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
//             Explore Partnerships
//           </button>
// </Link> */}
//         </div>
//       </div>
//     </section>
//   );
// }