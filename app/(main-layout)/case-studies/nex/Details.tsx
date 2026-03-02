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
              text="AI Fitness is a next-generation fitness companion that leverages
              Artificial Intelligence to help users track their muscles, monito
              progress, and receive smart workout feedback. Unlike traditional
              fitness apps, AI Fitness goes beyond static workout plans it scans
              the user's body, analyzes posture, and provides real-time
              AI-driven recommendations to improve strength, form, and growth."
              className="text-[#818181] mt-2 md:mt-6 leading-8"
            />
            <PageSubtitle
              text=" The challenge was to create a modern, intuitive, and motivational
              app that integrates cutting-edge AI technology while remaining
              simple and enjoyable to use."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center  h-65 lg:h-150"
            src="/case-studies/nex/1.png"
            alt="Project Overview2"
            width={564}
            height={671}
          />
        </div>
        {/* 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-10 lg:py-20">
          <div className="hidden lg:block">
            <Image
              className="w-full mx-auto object-center h-65 "
              src="/case-studies/nex/2.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Project <span className="text-[#F69348]"> Goals </span>{" "}
            </h1>
            <PageSubtitle
              text="Design a user-friendly interface with a focus on muscle tracking &
              AI insights."
              className="mt-2 md:mt-6 text-[#818181] lg:leading-8"
            />
            <PageSubtitle
              text="Enable real-time body scanning with feedback
              on posture, form, and muscle activation."
              className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
            />
            <PageSubtitle
              text="Create a progress
              system that keeps users motivated through clear analytics and
              achievements."
              className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
            />
            <div className="lg:hidden block mt-6">
              <Image
                className="w-full mx-auto object-center h-65 "
                src="/case-studies/nex/2.png"
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
              Project <span className="text-[#F69348]"> Goals </span>{" "}
            </h1>
            <PageSubtitle
              text="Build an admin dashboard for managing users, workouts, & data."
              className="mt-2 md:mt-6 text-[#818181] lg:leading-8"
            />
            <PageSubtitle
              text="Deliver a visually appealing, fitness-inspired UI that
              builds user trust."
              className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
            />
            <PageSubtitle
              text="Create a progress system that keeps
              users motivated through clear analytics and achievements."
              className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-65 "
            src="/case-studies/nex/4.png"
            alt="User Persona"
            width={564}
            height={671}
          />
        </div>
      </Container>
      <Container>
        <div className="py-10 lg:py-20">
          {/* 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center pb-10 lg:pb-20">
            <div className="hidden lg:block">
              <Image
                className="w-full mx-auto object-center h-65 "
                src="/case-studies/nex/3.png"
                alt="Project Overview"
                width={564}
                height={671}
              />
            </div>
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Problem{" "}
                <span className="text-[#F69348]"> Identified </span>{" "}
              </h1>
              <PageSubtitle
                text=" Complex AI Outputs"
                className="mt-2 md:mt-6 text-[#818181] lg:leading-8"
              />
              <PageSubtitle
                text="Low User Motivation Risk"
                className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
              />
              <PageSubtitle
                text=" Undefined Admin Roles"
                className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
              />
              <div className="lg:hidden block mt-6">
                <Image
                  className="w-full mx-auto object-center h-65 "
                  src="/case-studies/nex/2.png"
                  alt="Project Overview"
                  width={564}
                  height={671}
                />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Implemented{" "}
                <span className="text-[#F69348]"> Solutions </span>{" "}
              </h1>
              <PageSubtitle
                text="Designed heatmaps and simple charts to make data digestible."
                className="mt-2 md:mt-6 text-[#818181] lg:leading-8"
              />
              <PageSubtitle
                text="Added gamification elements, including badges and streaks."
                className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
              />
              <PageSubtitle
                text="Proposed a multi-level hierarchy: Super Admin, Trainer, and Support."
                className="mt-2 lg:mt-6 text-[#818181] lg:leading-8"
              />
            </div>
            <Image
              className="w-full mx-auto object-center  h-65 "
              src="/case-studies/nex/5.png"
              alt="User Persona"
              width={564}
              height={671}
            />
          </div>
        </div>
        <section className="">
          {/* Heading */}
          <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black mb-6 lg:mb-14">
            Design <span className="text-[#F69348]">Process</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-start">
            {/* Research */}
            <div>
              <h3 className="text-xl xl:text-[36px] font-bold lg:mb-2">
                Research
              </h3>
              <PageSubtitle
                text="We researched apps like Fitbit, Freeletics, and MyFitnessPal and
                found a gap that most track numbers but lack AI-based form
                analysis. Client interviews confirmed the need for muscle
                scanning and workout feedback."
                className="mt-2 lg:mt-6 text-[#818181] leading-8"
              />
            </div>
            {/* Define */}
            <div>
              <h3 className="text-xl xl:text-[36px] font-bold lg:mb-2">
                Define
              </h3>
              <PageSubtitle
                text="I found that leading fitness apps track numbers but lack AI form
                analysis, so I focused on adding muscle scanning and workout
                feedback."
                className="mt-2 lg:mt-6 text-[#818181] leading-8"
              />
            </div>
            {/* Ideate */}
            <div>
              <h3 className="text-xl xl:text-[36px] font-bold lg:mb-2">
                Ideate
              </h3>
              <PageSubtitle
                text="Brainstormed ideas around muscle scanning and real-time workout
                feedback to make training more interactive and personalized."
                className="mt-2 lg:mt-6 text-[#818181] leading-8"
              />
            </div>

            {/* Prototype */}

            <div>
              <h3 className="text-xl xl:text-[36px] font-bold lg:mb-2">
                Prototype
              </h3>
              <PageSubtitle
                text="An interactive prototype was built in Figma."
                className="mt-2 lg:mt-6 text-[#818181] leading-8"
              />
            </div>

            {/* Test */}
            <div>
              <h3 className="text-xl xl:text-[36px] font-bold lg:mb-2">Test</h3>
              <PageSubtitle
                text="It was tested with sample users for clarity and motivation, and
                the UI was refined to make feedback instantly visible."
                className="mt-2 lg:mt-6 text-[#818181] leading-8"
              />
            </div>

            {/* Image Grid */}
            <div className="mb-10 lg:mb-20  gap-3">
              <div className="relative  h-65 md:h-80 lg:h-118 w-full rounded-xl overflow-hidden">
                <Image
                  src="/case-studies/nex/55.png"
                  alt="Workout app"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Image
        className="mx-auto"
        src="/case-studies/nex/111.png"
        alt="Screen Overview1"
        width={1921}
        height={671}
      />
      <Container>
        <section className="py-10 lg:py-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-5 lg:space-y-10">
              {/* Feature 3 */}
              <div>
                <h3 className="text-xl xl:text-[36px] font-bold mb-3">
                  3. AI Workout Feedback
                </h3>
                <ul className="space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl list-disc pl-5">
                  <li>Record workouts via phone camera.</li>
                  <li>
                    AI checks movement and gives real-time posture corrections.
                  </li>
                  <li>Prevents injuries with instant posture alerts.</li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div>
                <h3 className="text-xl xl:text-[36px] font-bold mb-3">
                  4. Admin Dashboard
                </h3>
                <ul className="space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl list-disc pl-5">
                  <li>Manage users and trainers efficiently.</li>
                  <li>Update and organize workout libraries.</li>
                  <li>View global user progress and performance analytics.</li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative ">
                <Image
                  src="/case-studies/nex/p1.png"
                  alt="AI Workout App"
                  width={700}
                  height={700}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </Container>

      <div className=" bg-linear-to-r from-[#05201e]  to-[#0c554e] py-10 lg:py-20 ">
        <div className="max-w-360 w-11/12 mx-auto px-3 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Image
            className="w-full h-full lg:h-125 object-center"
            src="/case-studies/nex/222.png"
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
              guidance, better visibility of English text, ad-free content, and
              meaningful experiences."
              className="mt-4 sm:mt-6 text-white leading-8"
            />
          </div>
        </div>
      </div>
      <Container>
        <div className="py-10 lg:py-20">
          {/* 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Style <span className="text-[#F69348]"> Guide </span>{" "}
              </h1>
              <PageSubtitle
                text="Nex AI Fitness style guide featuring modern color palettes,
              typography (Inter), and UI elements crafted for an engaging,
              user-friendly nutrition app experience."
                className="mt-4 sm:mt-6 text-[#818181] leading-8"
              />
            </div>
            <Image
              className="mx-auto"
              src="/case-studies/nex/7.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
        </div>

        <div className="mb-6 lg:mb-16">
          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black ">
            Screen <span className="text-[#F69348]"> Overview </span>{" "}
          </h1>
        </div>
      </Container>

      <Image
        className="w-full h-full lg:h-125 object-center"
        src="/case-studies/nex/overview.png"
        alt="Screen Overview1"
        width={1921}
        height={671}
      />

      <Container>
        <div className="pt-10 lg:pt-20">
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
