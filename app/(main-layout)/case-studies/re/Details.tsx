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
                src="/case-studies/re/1.png"
                alt="Project Overview"
                fill
                className="object-center"
              />
            </div>
            <PageSubtitle
              text="RE: is a next-generation social media app designed around emotional connection and intentional sharing. Instead of instant gratification, the platform introduces a “Countdown Reveal” experience that builds anticipation and meaning around shared moments."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <PageSubtitle
              text="The app focuses on privacy-first interactions, paired memories, and asynchronous communication to create deeper, more personal digital connections."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>

          {/* Right image */}
          <div className="relative w-full h-62.5 lg:h-137.5 lg:block hidden">
            <Image
              src="/case-studies/re/1.png"
              alt="Project Overview"
              fill
              className="object-center"
            />
          </div>
        </div>
      </Container>

      <Image
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/re/2.png"
        alt="Screen Overview1"
        width={1921}
        height={571}
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  ">
            <Image
              src="/case-studies/re/3.png"
              alt="re App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right – Text */}
          <div className="space-y-4">
            <HeadingFour
              title="Typography & "
              highlight="Color"
              center={false}
              className="md:text-3xl"
            />

            <PageSubtitle
              text="The visual identity of RE: is built on clarity, restraint, and emotional balance.
 
"
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <PageSubtitle
              text="
The primary typeface, Lufga, was chosen for its modern geometric structure and high readability across devices. A clear typographic hierarchy—ranging from bold headlines to subtle captions—ensures content feels calm, intentional, and easy to scan.
"
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <PageSubtitle
              text="The color system uses a controlled, minimal palette that reinforces focus and reduces visual noise, allowing emotional content to remain the centerpiece of the experience."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center my-6 lg:my-20">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden block lg:hidden">
            <Image
              src="/case-studies/re/4.png"
              alt="re App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>

          {/* Right*/}

          <div className="space-y-4">
            <HeadingFour
              title="Logo & "
              highlight="Iconography"
              center={false}
              className="md:text-3xl"
            />
            <PageSubtitle
              text="The RE: logo uses a bold, lowercase geometric typeface, with the colon acting as the core visual symbol. The colon represents both a camera lens and the paired nature of the app Moment + Emotion."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <PageSubtitle
              text="Iconography follows the same philosophy: simple, functional, and expressive, designed to support interaction without distracting from user-generated content"
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden hidden lg:block">
            <Image
              src="/case-studies/re/4.png"
              alt="re App Preview"
              width={1200}
              height={472}
              className="w-full h-full lg:h-100 xl:h-118 object-center"
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
            {/* Left  */}
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src="/case-studies/re/5.png"
                alt="re App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>

            {/* Right*/}

            <div className="space-y-4">
              <HeadingFour
                title="Login "
                highlight="Page"
                center={false}
                className="md:text-3xl"
              />
              <PageSubtitle
                text="The login experience is intentionally minimal and welcoming. Users can securely sign in using email or phone credentials, with clear access to password recovery and account creation. "
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />

              <PageSubtitle
                text="The interface avoids unnecessary friction, allowing users to enter the platform quickly and intuitively while maintaining a sense of trust and privacy."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
          </div>
        </div>
      </Container>
      <Image
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/re/6.png"
        alt="Screen Overview1"
        width={1921}
        height={571}
      />
      <Container>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-2 lg:mt-10">
            {/* Left  */}
            <div className="space-y-4">
              <HeadingFour
                title="Social Users &"
                highlight="Engagement"
                center={false}
                className="md:text-3xl"
              />
              <PageSubtitle
                text="RE: is built for meaningful engagement rather than endless scrolling. Key interaction features include blurred media sharing, reaction triggers, paired memory storage, and interactive reveals. All content is automatically encrypted and expires after 48 hours, reinforcing privacy and encouraging authentic sharing.
"
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />

              <PageSubtitle
                text="With 1M+ total users, 100% privacy by default, and a carefully designed interaction model, RE: demonstrates how social platforms can prioritize emotional value over volume."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>

            {/* Right*/}
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src="/case-studies/re/7.png"
                alt="re App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
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
