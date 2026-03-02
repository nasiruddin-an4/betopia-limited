import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        {/* 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Project <span className="text-[#F69348]">Overview</span>{" "}
            </h1>
            <PageSubtitle
              text="Nutri Ai is a smart AI-Powered mobile application designed to help users make healthier lifestyle choices through personalized nutrition guidance. The app combines advanced artificial intelligence with user-friendly design to deliver tailored meal plans, real-time dietary advice, and progress tracking."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
            src="/case-studies/Project Overview2.jpg"
            alt="Project Overview2"
            width={564}
            height={671}
          />
        </div>
        {/* 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center my-10 lg:my-20">
          <div className="hidden lg:block">
            <Image
              className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150 shadow-xl rounded-2xl"
              src="/case-studies/n1.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black ">
              Development &{" "}
              <span className="text-[#F69348]"> implementation</span>{" "}
            </h1>
            <PageSubtitle
              text="AI-powered 
backend and frontend, and optimizing the user experience to ensure a 
seamless, ready to launch Nutri AI app."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <div className="lg:hidden block mt-10">
              <Image
                className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150 shadow-xl rounded-2xl"
                src="/case-studies/n1.png"
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
              text="The Logo and App Icon, designed to reflect the app’s bold, energetic, and competitive spirit. With a sleek, modern aesthetic, the logo conveys the thrill of the treasure hunt experience, while the localized “SA” highlights its regional identity, ensuring both brand recognition and cultural relevance."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
            src="/case-studies/User Persona2.png"
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
              src="/case-studies/Screen Overview11.png"
              alt="Screen Overview1"
              width={564}
              height={671}
            />
            <Image
              className="w-full mx-auto object-center h-75 md:h-107.5"
              src="/case-studies/n2.png"
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
            className="w-full mx-auto object-center h-75 md:h-107.5 lg:h-125"
            src="/case-studies/User Testimonial.png"
            alt="Project Overview"
            width={564}
            height={671}
          />
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-white">
              User <span className="text-[#F69348]"> Testimonial </span>{" "}
            </h1>
            <PageSubtitle
              text="Read user testimonials about Nutri AI. Discover how personalized
              meal plans and AI coaching make healthy eating simple, motivating,
              and sustainable."
              className="text-[#A6A6A6] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>
      </div>

      <div className="max-w-360 w-11/12 mx-auto px-3 xl:px-0 space-y-10 py-10 lg:py-20">
        {/* 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Problems & <span className="text-[#F69348]">Solution </span>{" "}
            </h1>
            <PageSubtitle
              text=" Nutri AI solves nutrition challenges with AI personalization,
              smart coaching, effortless tracking, and an all-in-one platform
              for healthier living."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5"
            src="/case-studies/problems_solution2.png"
            alt="Problems Solution"
            width={564}
            height={671}
          />
        </div>
        {/* 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="hidden lg:block">
            <Image
              className="w-full mx-auto object-center h-75 md:h-132.5"
              src="/case-studies/User Flow.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              User <span className="text-[#F69348]"> Flow </span>{" "}
            </h1>
            <PageSubtitle
              text="Nutri AI user flow design – from login and meal logging to
              analytics, notifications, and activity tracking. A seamless
              journey for better health management."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <div className="lg:hidden block mt-6">
              <Image
                className="w-full mx-auto object-center h-75 md:h-132.5"
                src="/case-studies/User Flow.png"
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
              Style <span className="text-[#F69348]"> Guide </span>{" "}
            </h1>
            <PageSubtitle
              text="Nutri AI style guide featuring modern color palettes, typography
              (Poppins & Roboto), and UI elements crafted for an engaging,
              user-friendly nutrition app experience."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5 rounded-2xl shadow-xl"
            src="/case-studies/Style Guide2.png"
            alt="Wireframing"
            width={564}
            height={671}
          />
        </div>
      </div>

      <Container>
        <div className="">
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
                src="/case-studies/Umrah Guide.png"
                alt="Umrah Guide"
                width={464}
                height={671}
                className="w-full h-full object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 m bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-1">
                  Umrah Guide
                </h3>
                <p className="text-gray-300 text-md lg:text-base mb-3">
                  An AI-powered mobile app designed to assist pilgrims during
                  their Umrah and Hajj journey.
                </p>
                <Link
                  href="/case-studies/umrah-guide"
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
