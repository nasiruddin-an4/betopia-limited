import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function PartnerCTA() {
  return (
    <section className="w-11/12 mx-auto  bg-linear-to-r from-[#FF9500] to-[#E68600]">

          <div className="py-10 md:py-[75px] flex flex-col items-center">
            <h2 className="text-white text-3xl md:text-4xl xl:text-[52px] font-bold  text-center px-0 md:px-4">
              Don&apos;t Miss Out: Join 50+ partners driving <br /> global enterprise transformation
            </h2>

            <Link href="/contact">
              <button
                className="md:mt-[50px] mt-6 inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl
             transition"
              >
                Apply to Join Today
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
