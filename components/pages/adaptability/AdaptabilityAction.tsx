import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function AdaptabilityAction() {
  return (
    <div className="bg-[#45556C] py-10 lg:py-20">
      <div className="max-w-[1440px] w-11/12 mx-auto  px-3">
        <h6 className="text-[#51A2FF] text-base lg:text-2xl font-normal text-center">
          Success Stories
        </h6>

        <h2 className="py-3 md:py-5  text-[22px] md:text-4xl xl:text-[52px] font-bold text-[#FFFFFF] text-center">
          Adaptability <span className="text-[#FF9500]">in action</span>
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="rounded-xl bg-white shadow-2xl p-2">
            <Image
              src="/case-studies/Chase The Cash SA.png"
              alt="Chase The Cash SA"
              width={474}
              height={295}
              className="rounded-2xl"
            />
            <div className="p-7">
              <h4 className="text-xl md:text-3xl text-[#0A0A0A] font-semibold">
                Chase The Cash SA
              </h4>
              <PageSubtitle
                text="An innovative mobile app that transforms the thrill of treasure
              hunting into an engaging, gamified adventure with puzzles, QR
              scans, and real rewards."
                className="text-gray-400  my-3"
              />

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
          <div className="rounded-xl bg-white shadow-2xl p-2">
            <Image
              src="/case-studies/Nutri AI.png"
              alt="Nutri AI"
              width={474}
              height={295}
              className="rounded-2xl"
            />
            <div className="p-7">
              <h4 className="text-2xl md:text-3xl xl:text-[36px] text-[#0A0A0A] font-semibold">
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
          <div className="rounded-xl bg-white shadow-2xl p-2">
            <Image
              src="/case-studies/Umrah Guide.png"
              alt="Umrah Guide"
              width={474}
              height={295}
              className="rounded-2xl"
            />
            <div className="p-7">
              <h4 className="text-2xl md:text-3xl xl:text-[36px] text-[#0A0A0A] font-semibold">
                Umrah Guide
              </h4>
              <p className="text-gray-400 text-base lg:text-xl font-normal my-3">
                Embark on your spiritual journey with confidence using Umrah
                Guide & Connection, the ultimate app designed to assist pilgrims
                at every step of their Umrah
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
    </div>
  );
}
