import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-80 md:h-95 bg-blue-500 overflow-hidden">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        src="/case-studies/hero.png"
        alt="hero"
        height={455}
        width={1921}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 md:mt-14 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1
          className=" font-bold text-white 
              text-3xl sm:text-4xl md:text-5xl lg:text-[60px]  lg:leading-24"
        >
          Showcasing Our Work, Driving Real Results
        </h1>

        <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-250 px-2 sm:px-4">
          Explore our portfolio of projects across cloud, AI, cybersecurity, and
          enterprise solutions.
        </p>

        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
              <button
                onClick={() => {
                  setTimeout(() => {
                    scrollToDivById("contact_form");
                  }, 300);
                }}
                className="bg-[#FF9500]   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"
              >
                Contact Us Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                >
                  <path
                    d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
                    stroke="white"
                    strokeWidth="1.54031"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div> */}
      </div>
    </div>
  );
}
