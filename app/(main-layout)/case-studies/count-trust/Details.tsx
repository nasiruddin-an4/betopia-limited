import Container from "@/components/layout/Container";
import HeadingFour from "@/components/shared/heading/HeadingFour";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
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
              <img
                src="/case-studies/count/new/1.png"
                alt="Project Overview"
                
                className="object-center object-cover"
              />
            </div>
            <PageSubtitle
              text="The Voting System is a secure, transparent, and user-centric digital polling platform designed to facilitate collective decision-making. Whether used for local community governance, organizational elections, or large-scale public initiatives, the system provides a robust framework for capturing and verifying public opinion."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />

           <ul className="list-disc pl-7 space-y-2 text-[#818181] text-base md:text-lg lg:text-2xl pt-7 lg:pt-10 ">
              <li>
                Administrators can create candidates, ballots, define eligibility criteria, and monitor real-time results.
              </li>
              <li>
               Voters can securely register, verify their identity, and cast immutable votes on active initiatives.
              </li>
              <li>Auditors can access anonymized ledgers to verify the integrity of the voting process without compromising individual privacy.</li>
            </ul>
          </div>

          {/* Right img */}
          <div className="relative w-full h-62.5 lg:h-137.5 lg:block hidden">
            <img
              src="/case-studies/count/new/1.png"
              alt="Project Overview"
              
              className="object-center object-cover"
            />
          </div>
        </div>
      </Container>

      <img
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/count/new/2.png"
        alt="Screen Overview1"
        width={1921}
        height={740}
      />
      <Container>
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold mb-6 lg:mb-10">
          Problem & <span className="text-[#FF9500]">Solutions</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-10">
          {/* Left  */}
          <div className="relative rounded-3xl overflow-hidden ">
            <img
              src="/case-studies/count/new/3.png"
              alt="zulio-ai App Preview"
              
              className="w-full h-full  object-center"
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
                Balancing voter anonymity with accountability
              </li>
              <li>
                Handling thousands of concurrent votes without delays
              </li>
              <li>Communicating complex security processes in a simple, user-friendly way</li>
            </ul>

          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden  block lg:hidden">
            <img
              src="/case-studies/count/new/4.png"
              alt="zulio-ai App Preview"
              
              className="w-full h-full  object-center"
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
              <li>Separation of identity and ballot data using cryptographic hashing

</li>
              <li>Queue-based vote processing to prevent deadlocks and data conflicts</li>
              <li>
                Clear UI feedback, confirmations, and verification receipts to build trust
              </li>
            </ul>
           
          </div>
          {/* Right – Text */}
          <div className="relative rounded-3xl overflow-hidden  lg:block hidden">
            <img
              src="/case-studies/count/new/4.png"
              alt="zulio-ai App Preview"
       
              className="w-full h-full  object-center"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
            {/* Left  */}
            <div className="relative rounded-3xl overflow-hidden ">
              <img
                src="/case-studies/count/new/5.png"
                alt="zulio-ai App Preview"
              
                className="w-full h-full  object-center"
              />
            </div>

            {/* Right*/}

            <div className="space-y-4">
              <HeadingFour
                title="Development &  "
                highlight="Implementation"
                center={false}
                className="md:text-3xl"
              />
              <PageSubtitle
                text="This phase focused on building the core voting infrastructure, integrating secure backend and frontend systems, and optimizing performance for high-concurrency environments. Special attention was given to ensuring the platform remained stable, responsive, and audit-ready under peak voting conditions.

"
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />

              <PageSubtitle
                text="The system was developed to be scalable, cloud-ready, and secure from end to end, supporting real-time updates and immutable vote handling."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>
          </div>
        </div>
      </Container>
      <img
        className="mx-auto my-10 lg:my-20"
        src="/case-studies/count/new/6.png"
        alt="Screen Overview1"
     
      />
      <Container>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-2 lg:mt-10">
            {/* Left  */}
            <div className="space-y-4">
              <HeadingFour
                title="App User "
                highlight="Experience"
                center={false}
                className="md:text-3xl"
              />
              <PageSubtitle
                text="The app user experience focuses on clarity, accessibility, and trust. Designs evolved from wireframes into intuitive, interactive interfaces that guide users through the voting process with minimal friction.

"
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />

              <PageSubtitle
                text="Visual cues, progress indicators, and confirmation states were intentionally designed to reassure users at every step of the voting journey."
                className="text-[#818181] mt-2 lg:mt-6 leading-8"
              />
            </div>

            {/* Right*/}
            <div className="relative rounded-3xl overflow-hidden ">
              <img
                src="/case-studies/count/new/7.png"
                alt="zulio-ai App Preview"
              
                className="w-full h-full  object-center"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className=" py-10 lg:py-20 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
            {/* Left */}
            <div className="relative rounded-3xl overflow-hidden hidden lg:block">
              <img
                src="/case-studies/count/new/15.jpg"
                alt="zulio-ai App Preview"
                
                className="w-full h-full  object-center"
              />
            </div>
            <div className="space-y-4">
              <HeadingFour
                title="Management "
                highlight="Dashboard"
                center={false}
                className="md:text-3xl "
              />

              <PageSubtitle
                text="The management dashboard provides administrators with full control over elections, candidates, eligibility criteria, and real-time results. The interface is designed for efficiency, allowing quick monitoring, decision-making, and oversight during active voting periods."
                className=" mt-2  leading-8"
              />
                  <PageSubtitle
                text="Data visualization and structured layouts help reduce cognitive load while managing complex election data."
                className=" mt-2  leading-8"
              />
               <div className="relative rounded-3xl overflow-hidden lg:hidden block">
              <img
                src="/case-studies/count/new/15.jpg"
                alt="zulio-ai App Preview"
                
                className="w-full h-full  object-center"
              />
            </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-6 lg:mt-10">
          {/* Left */}
       
          <div className="space-y-4">
            <HeadingFour
              title="Logo & "
              highlight="Iconography"
              center={false}
              className="md:text-3xl"
            />

            <PageSubtitle
              text="The Count Trust identity reflects security, neutrality, and reliability. The visual language uses a clean, professional aesthetic that reinforces trust and seriousness, essential for governance and voting-related platforms.
"
              className="text-[#818181] mt-2  leading-8"
            />
            <PageSubtitle
              text="The identity system ensures consistency across the app, dashboard, and supporting materials."
              className="text-[#818181] mt-2  leading-8"
            />
           
          </div>
          {/* Right – Text */}
          <div className="relative  overflow-hidden ">
            <img
              src="/case-studies/count/new/16.jpg"
              alt="zulio-ai App Preview"
           
              className="w-full h-full  object-center"
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
              <img
                src="/case-studies/Chase The Cash SA.png"
                alt="Nutri AI"
                
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
              <img
                src="/case-studies/Nutri AI.png"
                alt="Umrah Guide"
              
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
