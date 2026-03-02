import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function StartYourJourney() {
  return (
    <div className="bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <div className="max-w-[1480px] w-11/12 mx-auto py-10 lg:py-20">
        <h3 className="text-center text-white text-[28px] md:text-[32px] lg:text-[52px] font-bold">
          Ready to Start Your Journey?
        </h3>

        <PageSubtitle
          text="Don't see the perfect role? Send us your resume anyway. We're always looking for exceptional talent to join our growing team."
          className="mt-4 sm:mt-6 text-center font-normal  text-[#ffffff] mx-auto max-w-[1000px] px-2 sm:px-4"
        />
      </div>
    </div>
  );
}

// export default function StartYourJourney() {
//     return (
//         <div className="bg-linear-to-r from-[#FF9500] to-[#F54900]">

//             <div className='max-w-[1480px] mx-auto py-20'>
//                 <h3 className='text-center text-white text-3xl md:text-4xl xl:text-[52px]  font-bold'>Ready to Start Your Journey?</h3>
//                 <p
//                     className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[#ffffff] mx-auto max-w-[1000px] px-2 sm:px-4"
//                 >Don&apos;t see the perfect role? Send us your resume anyway. We&apos;re always looking for exceptional talent to join our growing team.</p>

//                 {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">

//                     <button
//                         className="bg-[#ffffff]   text-[#F54900] cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

//                     >Submit Your Resume
//                         <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="#F54900"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//                     </button>
//                 </div> */}
//             </div>
//         </div>
//     )
// }
