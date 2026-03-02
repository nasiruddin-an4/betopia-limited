import { ClientValueStoryProps } from "@/types/solution";
import Link from "next/link";

export default function CTA({ title }: ClientValueStoryProps) {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-4xl xl:text-[52px] text-center font-bold leading-tight w-[90%] lg:w-[60%]">
          { title }
        </h2>

        {/* <p className="mt-6 md:mt-7 text-[#FFFFFFE5]  text-base md:text-[23px] max-w-[700px] mx-auto text-center">
          Partner with Betopia to build a robust security framework that
          protects your business
        </p> */}
        <Link href="/meeting-scheduler" target="_blank">
          <button
            className="md:mt-9.25 mt-7 inline-flex cursor-pointer  items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl
             transition"
          >
            Book a Consultation
            <span className="text-lg mt-1">
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
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
