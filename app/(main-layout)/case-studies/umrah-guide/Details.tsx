import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        {/* 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-39.25 items-center">
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Project <span className="text-[#F69348]">Overview</span>{" "}
            </h1>
            <PageSubtitle
              text="Umrah Guide is an AI-Powered mobile app designed to assist
              pilgrims during their Umrah and Hajj journey. Offering
              personalized, expert guidance, the app helps users easily find and
              book experienced guides for key locations in Mecca and Madina,
              including the Sacred Mosque and Prophet’s Mosque"
              className="mt-4 sm:mt-6 text-[#818181] leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-192.75"
            src="/case-studies/overview.jpg"
            alt="Project Overview2"
            width={564}
            height={671}
          />
        </div>
        {/* 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-10 lg:py-20">
          <div className="hidden lg:block">
            <Image
              className="w-full mx-auto object-center h-75 md:h-132.5 "
              src="/case-studies/development_implementation3.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Development &{" "}
              <span className="text-[#F69348]"> implementation</span>{" "}
            </h1>
            <PageSubtitle
              text="This phase involves building core features, integrating AI-powered
              backend and frontend, and optimizing the user experience to ensure
              a seamless, ready to launch Umrah Guide app."
              className="mt-4 sm:mt-6 text-[#818181] leading-8"
            />
            <div className="lg:hidden block mt-6">
              <Image
                className="w-full mx-auto object-center h-75 md:h-132.5 "
                src="/case-studies/development_implementation3.png"
                alt="Project Overview"
                width={564}
                height={671}
              />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              User <span className="text-[#F69348]"> Persona </span>{" "}
            </h1>
            <PageSubtitle
              text="A sample persona, Omar Al-Farhan, represents an experienced Umrah
              guide. His goals, needs, and pain points illustrate the importance
              of digital solutions for managing clients, feedback, and schedules
              efficiently."
              className="mt-4 sm:mt-6 text-[#818181] leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5 "
            src="/case-studies/User Persona3.png"
            alt="User Persona"
            width={564}
            height={671}
          />
        </div>
        {/* 4 */}
        <div className="mt-10 lg:mt-20 lg:w-10/12 mx-auto">
          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black text-center">
            Screen Overview{" "}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mt-6 lg:mt-16">
            <Image
              className="w-full mx-auto object-center h-75 md:h-107.5 "
              src="/case-studies/Screen Overview111.png"
              alt="Screen Overview1"
              width={564}
              height={671}
            />
            <Image
              className="w-full mx-auto object-center h-75 md:h-107.5"
              src="/case-studies/Screen Overview222.png"
              alt="Screen Overview3"
              width={564}
              height={671}
            />
          </div>
        </div>
      </Container>

      {/* 5 */}
      <div className=" bg-linear-to-r from-black  to-[#522323] py-10 lg:py-20 mt-10 lg:mt-20 ">
        <div className="max-w-360 w-11/12 mx-auto px-3 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <Image
            className="w-full mx-auto object-center h-75 md:h-107.5"
            src="/case-studies/User Testimonial3.png"
            alt="Project Overview"
            width={564}
            height={671}
          />
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-white">
              User <span className="text-[#F69348]"> Testimonial </span>{" "}
            </h1>
            <PageSubtitle
              text="User feedback highlights the app’s value in providing step-by-step
              guidance, better visibility of Arabic text, ad-free content, and
              meaningful Umrah experiences."
              className="text-[#A6A6A6] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>
      </div>

      <Container>
        <div className="space-y-10 py-10 lg:py-20">
          {/* 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Problems &{" "}
                <span className="text-[#F69348]">Solution </span>{" "}
              </h1>
              <PageSubtitle
                text="Problems: Pilgrims face difficulty with cluttered apps, poor
              navigation, and inconsistent designs. Solution: Umrah Guide
              introduces a clean, intuitive interface with fast load times,
              consistent layouts, and easy task completion improving
              satisfaction and engagement."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
            <Image
              className="w-full mx-auto object-center h-75 md:h-132.5"
              src="/case-studies/problems_solution3.png"
              alt="Problems Solution"
              width={564}
              height={671}
            />
          </div>

          {/* 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="hidden lg:block">
              <Image
                className="w-full mx-auto object-center h-75 md:h-128.5"
                src="/case-studies/Information Architecture3.png"
                alt="Project Overview"
                width={564}
                height={671}
              />
            </div>
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Information{" "}
                <span className="text-[#F69348]"> Architecture </span>{" "}
              </h1>
              <PageSubtitle
                text=" The app’s structure is mapped out with clear sections such as
              authentication, home screen, user dashboard, profile, and support.
              It ensures smooth navigation for both tourists and guides with
              features like booking, trip summaries, earnings, and location
              management."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
              <div className="lg:hidden block mt-6">
                <Image
                  className="w-full mx-auto object-center h-75 md:h-128.5"
                  src="/case-studies/Information Architecture.png"
                  alt="Project Overview"
                  width={564}
                  height={671}
                />
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center lg:py-10">
            <div>
              <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
                Wire <span className="text-[#F69348]"> framing </span>{" "}
              </h1>
              <PageSubtitle
                text="Wireframes highlight the core app flows, including sign-in,
              booking guides, editing profiles, support, and dashboard
              management. It lays out the foundation for a seamless user
              experience before moving into high-fidelity design."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
            <Image
              className="w-full mx-auto object-center h-62.5 md:h-128.5"
              src="/case-studies/Wireframing3.png"
              alt="Wireframing"
              width={564}
              height={671}
            />
          </div>

          {/* 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ">
            <Image
              className="w-full mx-auto object-center h-62.5 md:h-140"
              src="/case-studies/Style Guide3.png"
              alt="Style Guide"
              width={564}
              height={671}
            />
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Style <span className="text-[#F69348]"> Guide </span>{" "}
              </h1>
              <PageSubtitle
                text="Umrah Guide style guide featuring modern color palettes,
              typography (Poppins), and UI elements crafted for an engaging,
              user-friendly nutrition app experience."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
          </div>
        </div>
        {/* 5 */}
        <div>
          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black text-center">
            Our Other’s <span className="text-[#F69348]">Portfolio</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mt-8 lg:mt-16 max-w-300 mx-auto">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/case-studies/Chase The Cash SA.png"
                alt="Nutri AI"
                width={464}
                height={671}
                className="w-full h-full object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 m bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-1">
                  AI Voice Recording Mobile App
                </h3>
                <p className="text-gray-300 text-md lg:text-base mb-3">
                  A sleek and modern design, perfectly embodies the energetic
                  and competitive spirit of the app.
                </p>
                <Link
                  href="/case-studies/chase-the-cash"
                  className="text-[#F69348] text-md lg:text-base font-medium flex items-center gap-2 cursor-pointer"
                >
                  Learn more{" "}
                  <span className="mt-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
                        stroke="#FF9500"
                        strokeWidth="1.54031"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/case-studies/Nutri AI.png"
                alt="Umrah Guide"
                width={464}
                height={671}
                className="w-full h-full object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 m bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-1">
                  Nutri AI
                </h3>
                <p className="text-gray-300 text-md lg:text-base mb-3">
                  A scalable marketplace connecting multiple vendors with
                  seamless shopping
                </p>
                <Link
                  href="/case-studies/nutri-ai"
                  className="text-[#FF9500] text-md lg:text-base font-medium flex items-center gap-2 cursor-pointer"
                >
                  Learn more{" "}
                  <span className="mt-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523"
                        stroke="#FF9500"
                        strokeWidth="1.54031"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
