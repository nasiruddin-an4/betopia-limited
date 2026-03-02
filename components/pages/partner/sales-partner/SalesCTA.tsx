import { Calendar } from "lucide-react";
import Link from "next/link";

export default function SalesCTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <div className="py-10 md:py-23.25 flex flex-col items-center w-11/12 mx-auto px-4">
        <div className="mb-10">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3598 45.3151C8.24034 48.7755 6.86719 59.0466 6.86719 59.0466C6.86719 59.0466 17.1383 57.6735 20.5987 53.554C22.5485 51.2471 22.5211 47.7044 20.3515 45.5623C19.284 44.5435 17.8779 43.9547 16.403 43.9091C14.928 43.8635 13.4882 44.3642 12.3598 45.3151Z" stroke="white" strokeWidth="5.49259" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.9576 41.1947L24.7188 32.9558C26.1802 29.1644 28.0204 25.53 30.2113 22.108C33.4113 16.9916 37.867 12.7789 43.1546 9.87072C48.4423 6.9625 54.3861 5.45544 60.4206 5.49287C60.4206 12.9628 58.2785 26.0901 43.9428 35.7021C40.4739 37.8957 36.7938 39.7357 32.9576 41.1947Z" stroke="white" strokeWidth="5.49259" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.7159 32.9518H10.9844C10.9844 32.9518 12.4948 24.6306 16.477 21.9667C20.926 19.0007 30.2085 21.9667 30.2085 21.9667" stroke="white" strokeWidth="5.49259" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.9531 41.1957V54.9272C32.9531 54.9272 41.2744 53.4167 43.9383 49.4346C46.9043 44.9856 43.9383 35.7031 43.9383 35.7031" stroke="white" strokeWidth="5.49259" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
        <h2 className="text-white text-3xl md:text-4xl xl:text-[52px] text-center font-bold ">
         Ready to Explore This Opportunity?
        </h2>

        <p className="mt-6 md:mt-7 text-[#FFFFFFE5]  text-base md:text-[23px] max-w-[700px] mx-auto text-center">
         If you have the ability to generate business and close deals in your market, we invite you to discuss this opportunity with us.
        </p>
     <div className="flex justify-center gap-1  gap-5 mt-10">
          <Link
            href="/meeting-scheduler"  
            className="flex items-center gap-2 cursor-pointer  bg-white text-[#FF9500] px-6 py-3 md:px-5 text-base rounded-[14px]"
          >
      Schedule a Meeting 
               <Calendar className="h-5 w-5" />
          </Link>
        </div>
        <p className="mt-6 md:mt-7 text-[#FFFFFFE5]  text-lg lg:text-xl text-center">
        Further onboarding details and commercial terms will be shared after the introductory discussion.
        </p>
      </div>
    </section>
  );
}
