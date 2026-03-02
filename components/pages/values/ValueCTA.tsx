import Link from "next/link";

export default function ValueCTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[52px] text-center font-bold ">
         Built on Values. Focused on Results.
        </h2>

        <p className="mt-6 md:mt-7 text-[#FFFFFFE5] md:text-2xl max-w-[700px] mx-auto text-center ">
        Let’s create secure, cloud-ready, AI-powered solutions designed for your business goals.
        </p>
        <Link href="/meeting-scheduler">
          <button
            className="mt-9.25 inline-flex items-center gap-2 cursor-pointer  bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl cursor-pointer
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
