import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <div className="max-w-360 mx-auto my-10 px-3 xl:px-0">
      <h1 className="text-3xl text-center lg:text-[50px] font-bold text-black">
        Featured Work{" "}
      </h1>
      <p className="text-[#818181] text-center text-base lg:text-xl font-normal mt-6 leading-8 my-1  mb-6">
        Discover how we&apos;ve helped organizations transform their digital
        landscape <br /> and achieve measurable success.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <div className="rounded-xl bg-white shadow-2xl">
          <Image
            src="/case-studies/Chase The Cash SA.png"
            alt="Chase The Cash SA"
            width={474}
            height={295}
          />
          <div className="p-7">
            <h4 className="text-xl lg:text-3xl text-[#0A0A0A] font-semibold">
              Chase The Cash SA
            </h4>
            <p className="text-gray-400 text-base lg:text-xl font-normal my-3">
              An innovative mobile app that transforms the thrill of treasure
              hunting into an engaging, gamified adventure with puzzles, QR
              scans, and real rewards.
            </p>
            <Link
              href="/case-studies/chase-the-cash"
              className="flex items-center gap-2 text-[#155DFC]"
            >
              View Case Study{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M3.85156 9.24219H14.6338"
                  stroke="#155DFC"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.24219 3.84766L14.6333 9.23875L9.24219 14.6298"
                  stroke="#155DFC"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-2xl">
          <Image
            src="/case-studies/Nutri AI.png"
            alt="Nutri AI"
            width={474}
            height={295}
          />
          <div className="p-7">
            <h4 className="text-xl lg:text-3xl text-[#0A0A0A] font-semibold">
              Nutri AI
            </h4>
            <p className="text-gray-400 text-base lg:text-xl font-normal my-3">
              Nutri AI is your AI-powered nutrition coach, helping you track
              calories, analyze meals, and achieve a healthier lifestyle with
              ease. Explore the 2025 UI/UX case study
            </p>
            <Link
              href="/case-studies/nutri-ai"
              className="flex items-center gap-2 text-[#155DFC]"
            >
              View Case Study{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M3.85156 9.24219H14.6338"
                  stroke="#155DFC"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.24219 3.84766L14.6333 9.23875L9.24219 14.6298"
                  stroke="#155DFC"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-2xl">
          <Image
            src="/case-studies/Umrah Guide.png"
            alt="Umrah Guide"
            width={474}
            height={295}
          />
          <div className="p-7">
            <h4 className="text-xl lg:text-3xl text-[#0A0A0A] font-semibold">
              Umrah Guide
            </h4>
            <p className="text-gray-400 text-base lg:text-xl font-normal my-3">
              Embark on your spiritual journey with confidence using Umrah Guide
              & Connection, the ultimate app designed to assist pilgrims at
              every step of their Umrah
            </p>
            <Link
              href="/case-studies/umrah-guide"
              className="flex items-center gap-2 text-[#155DFC]"
            >
              View Case Study{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M3.85156 9.24219H14.6338"
                  stroke="#155DFC"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.24219 3.84766L14.6333 9.23875L9.24219 14.6298"
                  stroke="#155DFC"
                  strokeWidth="1.54031"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
