import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-[28px] md:text-4xl lg:text-[52px] font-bold text-center ">
          Want to Collaborate with Betopia?
        </h2>
        <PageSubtitle
          text="Join us in transforming enterprises worldwide"
          className="mt-6 md:mt-7 text-[#FFFFFFE5] "
        />

        <Link href="/meeting-scheduler" target="_blank">
          <button
            className="mt-9.25 inline-flex items-center cursor-pointer  gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl
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
