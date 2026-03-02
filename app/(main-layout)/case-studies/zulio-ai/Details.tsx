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
                src="/case-studies/zulio-ai/1.png"
                alt="Project Overview"
                fill
                className="object-center"
              />
            </div>
            <PageSubtitle
              text="Zulio AI is an AI-driven legal intelligence platform designed to streamline legal research, case analysis, and decision-making for attorneys, firms, and enterprises."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

            <PageSubtitle
              text="The product leverages advanced machine learning models to transform complex legal data into clear, actionable insights—reducing research time while improving accuracy and confidence."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>

          {/* Right image */}
          <div className="relative w-full h-62.5 lg:h-137.5 lg:block hidden">
            <Image
              src="/case-studies/zulio-ai/1.png"
              alt="Project Overview"
              fill
              className="object-center"
            />
          </div>
        </div>
      </Container>

      <Image
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/zulio-ai/2.png"
        alt="Screen Overview1"
        width={1921}
        height={571}
      />
      <Container>
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold mb-6 lg:mb-10">
          Problem & <span className="text-[#FF9500]">Solutions</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-10">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden ">
            <Image
              src="/case-studies/zulio-ai/3.png"
              alt="zulio-ai App Preview"
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
            <PageSubtitle
              text="Legal professionals face persistent challenges when working with traditional research tools:"
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
              <li>
                Excessive time spent searching and cross-referencing legal
                documents
              </li>
              <li>
                Cognitive overload caused by dense, unstructured legal data
              </li>
              <li>Lack of intelligent summarization and contextual insights</li>
              <li>Poor usability in existing legal research platforms</li>
            </ul>
            <PageSubtitle
              text="The goal was to design a modern, AI-first legal experience that feels fast, trustworthy, and intuitive—without compromising on depth or accuracy."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
            <Image
              src="/case-studies/zulio-ai/4.png"
              alt="zulio-ai App Preview"
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

            <PageSubtitle
              text="We designed Zulio AI as a next-generation legal assistant that blends AI intelligence with a premium, enterprise-grade UX."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <PageSubtitle
              text="
Key solution pillars included:
"
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl ">
              <li>AI-powered legal summaries and insights</li>
              <li>Clean, distraction-free interface for focused research</li>
              <li>
                Trust-forward visual language suitable for legal professionals
              </li>
              <li>Modular components for scalability across use cases</li>
            </ul>
            <PageSubtitle
              text="The result is a platform that feels authoritative, efficient, and effortless to use."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          {/* Right – Text */}
          <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
            <Image
              src="/case-studies/zulio-ai/4.png"
              alt="zulio-ai App Preview"
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
                src="/case-studies/zulio-ai/5.png"
                alt="zulio-ai App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>

            {/* Right*/}

            <div className="space-y-4">
              <HeadingFour
                title="Design "
                highlight="Process"
                center={false}
                className="md:text-3xl"
              />
              <PageSubtitle
                text="Humanizer was developed using a structured, multi-phase design process that guided the project from research to launch."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />

              <PageSubtitle
                text="Each phase focused on understanding user needs, crafting intuitive interfaces, and validating usability through testing ensuring the final product delivers a seamless, human-centered AI experience."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
          </div>
        </div>
      </Container>
      <Image
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/zulio-ai/6.png"
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
                title="Design"
                highlight="Workflow"
                center={false}
                className="md:text-3xl"
              />
              <PageSubtitle
                text="The design workflow for Zulio AI focused on turning complex legal AI capabilities into a clear, efficient user experience. We started with research to understand user needs and market gaps, then defined core workflows and information architecture around speed, clarity, and trust."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />

              <PageSubtitle
                text="After validating layouts through wireframes, we applied a premium, enterprise-grade UI and scalable design system. The process concluded with a structured handoff to ensure accurate and smooth implementation."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>

            {/* Right*/}
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src="/case-studies/zulio-ai/7.png"
                alt="zulio-ai App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-linear-to-r from-[#16218E] to-[#14224C] py-10 lg:py-20 my-10 lg:my-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
            {/* Left */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/case-studies/zulio-ai/8.png"
                alt="zulio-ai App Preview"
                width={1200}
                height={472}
                className="w-full h-full lg:h-100 xl:h-118 object-center"
              />
            </div>
            <div className="space-y-4">
              <HeadingFour
                title="User"
                highlight="Persona"
                center={false}
                className="md:text-3xl text-white"
              />

              <PageSubtitle
                text="Zulio AI has significantly improved the way our legal team conducts research and analyzes case materials. What previously took hours of manual review is now distilled into clear, actionable insights within minutes. The platform’s AI-driven summaries, combined with its clean and professional interface, make it easy to trust and adopt in high-stakes legal work. Zulio AI has become an essential part of our daily workflow, enabling faster decisions without compromising accuracy or confidence."
                className="text-white mt-2  leading-8"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
            <Image
              src="/case-studies/zulio-ai/9.png"
              alt="zulio-ai App Preview"
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

            <PageSubtitle
              text="The style guide for Zulio AI was designed to reinforce trust, clarity, and professionalism while supporting complex, AI-driven legal workflows."
              className="text-[#818181] mt-2  leading-8"
            />
            <PageSubtitle
              text=" It establishes a consistent visual language built around a dark, premium color palette that reduces eye strain and conveys authority, paired with high-contrast typography to ensure readability of dense legal content. Spacing, layout, and hierarchy rules are carefully defined to minimize cognitive load and help users scan information quickly. "
              className="text-[#818181] mt-2  leading-8"
            />
            <PageSubtitle
              text="The guide includes reusable UI components, interaction states, and guidelines for presenting AI-generated insights in a clear and explainable manner. Together, these standards ensure visual consistency, scalability, and a cohesive user experience across the entire product."
              className="text-[#818181] mt-2  leading-8"
            />
          </div>
          {/* Right – Text */}
          <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
            <Image
              src="/case-studies/zulio-ai/9.png"
              alt="zulio-ai App Preview"
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
