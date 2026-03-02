import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Link from "next/link";

export default function BrandCTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-[28px] md:text-4xl lg:text-[52px] text-center font-bold ">
          Build Smarter. Scale Faster. Stay Secure.
        </h2>
        <PageSubtitle
          text="We help organizations navigate complexity and thrive in the AI era with intelligent, future-ready technology."
          className="mt-6 md:mt-7 text-[#FFFFFFE5] max-w-[700px] mx-auto text-center "
        />

        <Link href="/meeting-scheduler">
          <button
            className="mt-9.25 inline-flex cursor-pointer  items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl cursor-pointer
             transition"
          >
            Book a Consultation
            <span className="text-lg">
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
