import Link from "next/link";


export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#E68600]">
      <div className="py-10 lg:py-20 flex flex-col items-center w-11/12 mx-auto px-4">
       <h2 className="text-white text-3xl md:text-4xl xl:text-[52px] text-center font-bold ">
       Ready to Transform Your Business?
        </h2>


        <p className="mt-6 md:mt-7 text-[#FFFFFFE5]  text-base md:text-[23px] max-w-[900px] mx-auto text-center">
       Connect with our experts to explore how our business application solutions can drive growth and operational excellence.
        </p>
      <div className="flex justify-center gap-1  mt-10">
          <Link
            href="/meeting-scheduler" 
            className="flex items-center cursor-pointer  bg-white text-[#FF9500] px-6 py-3 md:px-5 text-base rounded-[14px]"
          >
          Book a Consultation
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
          </Link>
        </div>
      </div>
    </section>
  );
}