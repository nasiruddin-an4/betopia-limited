import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#E68600]">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[52px] text-center font-normal leading-tight">
          Ready to Build Something Great?
        </h2>

        <p className="mt-6 md:mt-7 text-[#FFFFFFE5]  text-base md:text-[23px] max-w-175 mx-auto text-center">
          Let&apos;s collaborate to create solutions that drive impact and
          growth.
        </p>
        <Link href="/contact">
          <button
            className="mt-9.25 inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl
             transition"
          >
            Get in Touch
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
