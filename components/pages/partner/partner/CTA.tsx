import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full flex justify-center pb-10 lg:pb-20 px-4">
      <div
        className="bg-[#FF9800] rounded-3xl w-[95%] lg:w-[80%] lg:h-[403px] 
                      flex flex-col lg:flex-row items-center lg:items-center"
      >
        <div
          className="size-[220px] md:size-[240px] lg:size-[260px] overflow-hidden 
                        self-center lg:self-end mt-6 lg:mt-0"
        >
          <img
            src="/partner/cta.png"
            alt="Partner network"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className="flex flex-col items-center xl:items-start xl:ml-7 text-center gap-4 flex-1 text-white 
                        px-4 py-6 lg:px-0 lg:py-0"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-bold ">
            Don’t Miss Out: Join 50+ partners <br />
            driving global enterprise transformation
          </h3>
          <Link href="/meeting-scheduler" className="xl:ml-[30%]">
            <button className="group px-8 py-4 flex items-center gap-3 cursor-pointer hover:bg-transparent border-2 border-white text-[#FF9500] rounded-xl font-semibold md:text-lg bg-white hover:text-white transition mt-4">
              Book a Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="transition"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="currentColor"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>

          {/* <button className="px-8 py-4 flex cursor-pointer items-center gap-3 hover:bg-transparent border-2 border-white text-[#FF9500] rounded-xl font-semibold md:text-lg bg-white hover:text-gray-100 transition xl:ml-[30%] mt-4 ">
            Apply to Join Today{" "}
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
          </button> */}
        </div>
      </div>
    </section>
  );
}
