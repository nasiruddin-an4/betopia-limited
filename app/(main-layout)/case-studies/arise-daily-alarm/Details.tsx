import Container from "@/components/layout/Container";
import HeadingFour from "@/components/shared/heading/HeadingFour";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

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
                src="/case-studies/arise/1.png"
                alt="Project Overview"
                fill
                className="object-center"
              />
            </div>
            <PageSubtitle
              text="Daily Devotional Alarm invites users to begin their day with intention, peace, and spiritual clarity."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <PageSubtitle
              text="Rather than waking up to a harsh alarm, users are guided into a calm morning ritual where sound, scripture, and reflection come together—transforming the first five minutes of the day into a meaningful devotional experience."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <PageSubtitle
              text="The app seamlessly bridges the moment between waking up and spiritual grounding, helping users build a consistent faith-based habit through technology."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>

          {/* Right image */}
          <div className="relative w-full h-62.5 lg:h-137.5  lg:block hidden">
            <Image
              src="/case-studies/arise/1.png"
              alt="Project Overview"
              fill
              className="object-center"
            />
          </div>
        </div>
      </Container>

      <Image
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/arise/2.png"
        alt="Screen Overview1"
        width={1921}
        height={571}
      />
      <Container>
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold  mb-6 lg:mb-10">
          Problem & <span className="text-[#FF9500]">Solutions</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-10">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden ">
            <Image
              src="/case-studies/arise/10.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right*/}

          <div className="space-y-4">
            <HeadingFour
              title="Problem"
              highlight="Identified"
              center={false}
              className="md:text-3xl"
            />

            <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
              <li>
                Traditional alarm apps create stress and anxiety at wake-up
              </li>
              <li>
                Devotional apps are often disconnected from daily routines
              </li>
              <li>
                Users struggle to maintain consistency in spiritual practices
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
            <Image
              src="/case-studies/arise/4.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>
          <div className="space-y-4">
            <HeadingFour
              title="Implemented"
              highlight="Solutions"
              center={false}
              className="md:text-3xl"
            />

            <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
              <li>
                A gentle alarm-to-devotional flow that feels calm, not intrusive
              </li>
              <li>
                Structured daily themes (Gratitude, Joy, Faith, Hope) to reduce
                decision fatigue
              </li>
              <li>
                Minimal UI with high contrast text for early-morning readability
              </li>
            </ul>
          </div>
          {/* Right – Text */}
          <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
            <Image
              src="/case-studies/arise/4.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden ">
            <Image
              src="/case-studies/arise/5.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right*/}

          <div className="space-y-4">
            <HeadingFour
              title="Design Process & "
              highlight="Timeline"
              center={false}
              className="md:text-3xl"
            />
            <PageSubtitle
              text="The project followed an agile, four-week design cycle:"
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
              <li>
                Week 1: Research & Discovery (user habits, spiritual routines)
              </li>
              <li>Weeks 2–3: UX/UI Design & Flow Prototyping</li>
              <li>Week 4: Final Prototype, Testing & Review</li>
            </ul>
            <PageSubtitle
              text="This ensured a polished, launch-ready experience while maintaining focus on emotional and spiritual outcomes."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>
        <div className="py-10 lg:py-20">
          <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold mb-6 lg:mb-10">
            Information <span className="text-[#FF9500]">Architecture</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Left  */}
            <div className="relative rounded-3xl overflow-hidden lg:hidden block">
              <Image
                src="/case-studies/arise/6.png"
                alt="Arise App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
            <div className="space-y-4">
              <PageSubtitle
                text="The app follows a linear and distraction-free journey, inspired by Chase The Cash’s clear task progression:"
                className="text-[#818181] leading-8"
              />
              <PageSubtitle
                text="Splash → Authentication → Main Dashboard → Alarm Setup → Devotional Experience
"
                className="text-[#818181] leading-8"
              />
              <PageSubtitle
                text="Key sections include:"
                className="text-[#818181] leading-8"
              />
              <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
                <li>Alarm Tab (time, repeat, theme selection)</li>
                <li>Devotional Content Page (post-alarm reflection)</li>
                <li>Saved & History Tabs (past devotionals)</li>
                <li>Settings & Profile</li>
                <li>Admin Dashboard for content and growth metrics</li>
              </ul>
              <PageSubtitle
                text="This structure ensures users never feel lost and can focus fully on reflection rather than navigation."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
            {/* Right*/}
            <div className="relative rounded-3xl overflow-hidden hidden lg:block">
              <Image
                src="/case-studies/arise/6.png"
                alt="Arise App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
          </div>
        </div>
      </Container>
      <Image
        className="mx-auto mb-10 lg:mb-20"
        src="/case-studies/arise/7.png"
        alt="Screen Overview1"
        width={1921}
        height={571}
      />
      <Container>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left  */}
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src="/case-studies/arise/8.png"
                alt="Arise App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
            {/* Right*/}
            <div className="space-y-4">
              <HeadingFour
                title="App Survey & "
                highlight="User Insights"
                center={false}
                className="md:text-3xl"
              />
              <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
                <li>
                  30% of users install spiritual apps to support daily spiritual
                  well-being.
                </li>
                <li>
                  41% of users have used a mental health or spiritual app in the
                  past year.
                </li>
                <li>
                  57% of users primarily use smartphones (mostly Android) for
                  spiritual and wellness apps.
                </li>
              </ul>
              <p className="text-[#818181] mt-2 lg:mt-6 leading-8 text-base md:text-xl font-bold">
                Insight:
              </p>
              <PageSubtitle
                text="Users are shifting away from stressful alarms toward calm, purpose-driven morning experiences that integrate spirituality into their daily routine."
                className="text-[#818181] mt-2  leading-8"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
            <Image
              src="/case-studies/arise/9.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>
          <div className="space-y-4">
            <HeadingFour
              title="Style"
              highlight="Guide"
              center={false}
              className="md:text-3xl"
            />

            <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
              <li>
                Primary Colors: Deep Purple & Soft Pink for calm spirituality
              </li>
              <li>
                Accent Colors: Blue for positive growth and progress indicators
              </li>
              <li>Typography: Inter (clean, modern, highly readable)</li>
              <li>
                Contrast: White on dark backgrounds for low-light morning use
              </li>
            </ul>
            <PageSubtitle
              text="The visual system mirrors serenity, trust, and clarity avoiding visual noise and unnecessary decoration."
              className="text-[#818181] mt-2  leading-8"
            />
          </div>
          {/* Right – Text */}
          <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
            <Image
              src="/case-studies/arise/9.png"
              alt="Arise App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>
        </div>
      </Container>
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
