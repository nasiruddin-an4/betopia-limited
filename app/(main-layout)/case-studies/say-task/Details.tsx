import Container from "@/components/layout/Container";
import HeadingFour from "@/components/shared/heading/HeadingFour";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Details() {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        {/* 1 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-10 xl:gap-29.25 items-center">
          {/* Left content */}

          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Project <span className="text-[#F69348]">Overview</span>
            </h1>
            <div className="relative w-full h-62.5 md:h-100 lg:h-137.5 xl:h-full block lg:hidden my-4">
              <Image
                src="/case-studies/say-task/1.png"
                alt="Project Overview"
                fill
                className="object-center"
              />
            </div>
            <PageSubtitle
              text="SayTask is a voice-assisted productivity application designed to help users quickly capture, organize, and manage daily tasks using natural language. The app focuses on simplicity, accessibility, and speed, allowing users to speak or type their plans and have them transformed into actionable reminders and notes."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>

          {/* Right image */}
          <div className="relative w-full h-62.5 lg:h-137.5 lg:block hidden">
            <Image
              src="/case-studies/say-task/1.png"
              alt="Project Overview"
              fill
              className="object-center"
            />
          </div>
        </div>
      </Container>

      <Image
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/say-task/22.png"
        alt="Screen Overview1"
        width={1921}
        height={571}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-10 lg:mb-20">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden ">
            <Image
              src="/case-studies/say-task/3.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right*/}

          <div className="space-y-2 lg:space-y-4">
            <HeadingFour
              title="How It "
              highlight="Works"
              center={false}
              className="md:text-3xl"
            />

            <p className="text-[#818181] text-base md:text-lg lg:text-2xl lg:mt-6 lg:leading-8">
              <b>Natural Language Understanding (NLU)</b>
            </p>
            <p className="text-[#818181] text-base md:text-lg lg:text-2xl lg:mt-4 lg:leading-8">
              The AI processes user input, identifies key information such as
              date, time, and action, and converts it into structured data.
            </p>
            <p className="text-[#818181] text-base md:text-lg lg:text-2xl lg:mt-4 lg:leading-8">
              <b>Contextual Responses</b>
            </p>
            <p className="text-[#818181] text-base md:text-lg lg:text-2xl lg:mt-4 lg:leading-8">
              The chatbot confirms the task (e.g., “I’ll make sure you have a
              reminder set for buying dog food tomorrow afternoon”) and allows
              follow-up edits.
            </p>
            <p className="text-[#818181] text-base md:text-lg lg:text-2xl lg:mt-4 lg:leading-8">
              <b>Automation</b>
            </p>
            <p className="text-[#818181] text-base md:text-lg lg:text-2xl lg:mt-4 lg:leading-8">
              Tasks can trigger reminders, phone call alerts, or be saved as
              notes automatically, reducing manual effort and error.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
            <Image
              src="/case-studies/say-task/4.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right – Text */}
          <div className="space-y-2 lg:space-y-4">
            <HeadingFour
              title="Project "
              highlight="Timeline"
              center={false}
              className="md:text-3xl"
            />

            <PageSubtitle
              text="The project followed a structured seven-phase process from ideation to final prototype. Each phase focused on balancing research, design, and usability testing to ensure a polished, human-centered outcome."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
            <Image
              src="/case-studies/say-task/4.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-5 lg:mt-20">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden ">
            <Image
              src="/case-studies/say-task/5.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right*/}

          <div className="space-y-2 lg:space-y-4">
            <HeadingFour
              title="App  "
              highlight="Screens"
              center={false}
              className="md:text-3xl"
            />

            <PageSubtitle
              text="The visual design of SayTask focuses on clarity, calmness, and intuitive interaction. Every screen was crafted to create a seamless flow from onboarding to task creation, ensuring users feel guided rather than overwhelmed. The design follows a minimalist aesthetic paired with meaningful motion and consistent visual hierarchy."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="mt-5 mb-10 lg:mt-20">
          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
            Admin <span className="text-[#F69348]"> Dashboard </span>{" "}
          </h1>
          <PageSubtitle
            text="The Admin Dashboard is a web-based control panel designed for
          administrators to monitor user activity, manage subscriptions, and
          oversee system operations. It provides an analytical overview of app
          performance while maintaining the brand’s clean and modern aesthetic."
            className="text-[#818181] mt-2 lg:mt-6 leading-8"
          />
        </div>
      </Container>

      <Image
        className="mx-auto"
        src="/case-studies/say-task/6.png"
        alt="Screen Overview1"
        width={1921}
        height={671}
      />
      <Container>
        <div className=" my-10 lg:my-20">
          {/* 3 */}
          <div className="mb-10 lg:mb-20">
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
                Admin <span className="text-[#F69348]"> Goals </span>{" "}
              </h1>
              <ul className="mt-6 space-y-3 text-[#818181] text-base md:text-lg lg:text-2xl leading-8 list-disc pl-6">
                <li>
                  Provide a comprehensive snapshot of user engagement and
                  subscription data
                </li>
                <li>
                  Enable user account management (edit, suspend, delete users)
                </li>
                <li>
                  Present business insights through clear visual analytics
                </li>
                <li>
                  Maintain consistency with SayTask’s minimalist, functional,
                  and data-focused visual language
                </li>
              </ul>
            </div>
          </div>
          {/* 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left */}
            <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
              <Image
                src="/case-studies/say-task/7.png"
                alt="Arise App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>

            {/* Right – Text */}
            <div className="space-y-2 lg:space-y-4">
              <HeadingFour
                title="User"
                highlight="Flow"
                center={false}
                className="md:text-3xl"
              />

              <PageSubtitle
                text="The user flow of SayTask maps a seamless journey from login to
              task creation, confirmation, and follow-ups. By leveraging
              conversational AI, the flow reduces manual input and ensures users
              can manage tasks, reminders, and notes with clarity and ease."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
              <Image
                src="/case-studies/say-task/7.png"
                alt="Arise App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className=" bg-linear-to-r from-[#05201e]  to-[#0c554e] py-16 mt-10 ">
        <div className="max-w-360 w-11/12 mx-auto px-3 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Image
            className="mx-auto"
            src="/case-studies/say-task/8.png"
            alt="Project Overview"
            width={564}
            height={671}
          />
          <div>
            <h1 className="text-3xl md:text-4xl xl:text-[52px] font-semibold text-white">
              User <span className="text-[#F69348]"> Testimonial </span>{" "}
            </h1>
            <PageSubtitle
              text="N  Using SayTask feels natural and seamless. The conversational
              interface removes friction from task creation, while the clean
              design keeps everything easy to find and manage."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
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
                text="SayTask’s style guide establishes a cohesive visual language that
              blends modern typography, purposeful color usage, and simple
              interface elements. Designed to complement conversational
              interactions, the system emphasizes readability, hierarchy, and
              subtle motion to create a calm, intuitive productivity
              environment."
                className="mt-4 sm:mt-6 text-[#818181] leading-8"
              />
            </div>
            <Image
              className="w-full h-full lg:h-125 object-center"
              src="/case-studies/say-task/9.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
        </div>
      </Container>

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
