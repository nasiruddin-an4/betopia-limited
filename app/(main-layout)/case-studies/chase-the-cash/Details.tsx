import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        {/* 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ">
          <div className="">
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Project <span className="text-[#F69348]">Overview</span>{" "}
            </h1>
            <div className="block lg:hidden my-4">
              <Image
                className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
                src="/case-studies/Project Overview.jpg"
                alt="Project Overview"
                width={564}
                height={671}
              />
            </div>
            <PageSubtitle
              text="Chase THE Cash SA invites users to embark on real-time treasure
              hunt user experience, where they follow a series of cryptic clues
              leading to specific locations. Each clue brings participants
              closer to uncovering hidden treasures, with the ultimate goal
              claiming a reward."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <PageSubtitle
              text=" Along the way, users are the tasked with solving puzzles, scanning
              QR codes, uploading proof of their journey and tracking their
              progress on live map."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
              src="/case-studies/Project Overview.jpg"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
        </div>
        {/* 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center my-10 lg:my-20">
          <div className="hidden lg:block">
            <Image
              className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
              src="/case-studies/Development  implementation.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Development &
              <span className="text-[#F69348]"> implementation</span>{" "}
            </h1>
            <PageSubtitle
              text="This phase involves building core features, integrating AI-powered
              backend and frontend, and optimizing the user experience to ensure
              a seamless, ready to launch Chase The Cash SA app."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <div className="lg:hidden block mt-4">
              <Image
                className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
                src="/case-studies/Development  implementation.png"
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
              Logo and App <span className="text-[#F69348]"> Icon </span>{" "}
            </h1>
            <PageSubtitle
              text="The Logo and App Icon, designed to reflect the app’s bold,
              energetic, and competitive spirit. With a sleek, modern aesthetic,
              the logo conveys the thrill of the treasure hunt experience, while
              the localized “SA” highlights its regional identity, ensuring both
              brand recognition and cultural relevance."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5 lg:h-150"
            src="/case-studies/Logo and App Icon.png"
            alt="Logo and App Icon"
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
              src="/case-studies/Screen Overview1.png"
              alt="Screen Overview1"
              width={564}
              height={671}
            />
            <Image
              className="w-full mx-auto object-center h-75 md:h-107.5"
              src="/case-studies/Screen Overview2.png"
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
            className="w-full mx-auto object-center h-75 md:h-120"
            src="/case-studies/Challenges We Faced.png"
            alt="Project Overview"
            width={564}
            height={671}
          />
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-white">
              Challenges We <span className="text-[#F69348]"> Faced </span>{" "}
            </h1>
            <PageSubtitle
              text="During development, including ensuring mdooth discovery flows,
              delivering an engaging user experience, and refining the user
              interface for clarity and usability. Overcoming these hurdles was
              crucial to creating a seamless, intuitive, and rewarding treasure
              hunt app that keeps users engaged from start to finish."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
        </div>
      </div>

      <Container>
        {/* 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-10 lg:py-20">
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Problems & <span className="text-[#F69348]">Solution </span>{" "}
            </h1>
            <PageSubtitle
              text="The core challenges users face, such as cluttered markers, unclear
              navigation, and poor user experience. It then presents streamlined
              solutions like reward consolidation, mdart highlighting, and crash
              prevention to ensure a mdoother journey. The phase focuses on
              integrating AI-powered backend and frontend features to deliver a
              seamless, launch-ready app."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-132.5"
            src="/case-studies/Problems Solution.png"
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
              src="/case-studies/Information Architecture.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Information <span className="text-[#F69348]"> Architecture </span>{" "}
            </h1>
            <PageSubtitle
              text="The information architecture defines a clear user journey starting
              from the splash screen to the login and registration process,
              including OTP verification and password recovery. From the home
              screen, users can access essential flows like location challenges,
              map tracking, terms & conditions, and privacy policy, with error
              handling for wrong locations. This structure ensures mdooth
              navigation, secure authentication, and a streamlined experience
              for all participants."
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-10 lg:py-20">
          <div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
              Wire <span className="text-[#F69348]"> framing </span>{" "}
            </h1>
            <PageSubtitle
              text="This wireframing phase translates the information architecture
              into visual layouts, outlining the structure of key screens such
              as login, registration, home, and tracking. It provides a
              blueprint for navigation, user interactions, and feature
              placement, ensuring a clear and intuitive design foundation before
              moving into high-fidelity UI development."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-128.5"
            src="/case-studies/Wireframing.png"
            alt="Wireframing"
            width={564}
            height={671}
          />
        </div>
      </Container>
      <Container>
        <div className="mb-10 ">
          <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold lg:mb-6  text-center">
            Management Dashboard{" "}
            <span className="text-[#FF9500]">
              {" "}
              <br /> Overview
            </span>
          </h2>
          <PageSubtitle
            text="This wireframing phase translates the information architecture into
          visual layouts, outlining the structure of key screens such as
          login, registration, home, and tracking. It provides a blueprint for
          navigation, user interactions, and feature placement, ensuring
          a clear and intuitive design foundation before moving into
          high-fidelity UI development."
            className="text-[#818181] mt-2 lg:mt-6 leading-8 text-center lg:w-[80%] mx-auto"
          />
        </div>
      </Container>
      <div className="mb-10 lg:mb-20">
        <Image
          className="mx-auto"
          src="/case-studies/Management.png"
          alt="Screen Overview1"
          width={1921}
          height={671}
        />
      </div>

      <Container>
        {/* 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="lg:block hidden ">
            <Image
              className="w-full mx-auto object-center h-75 md:h-140"
              src="/case-studies/App User Experience.png"
              alt="Project Overview"
              width={564}
              height={671}
            />
          </div>
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              App User <span className="text-[#F69348]"> Experience </span>{" "}
            </h1>
            <PageSubtitle
              text=" The App User Experience, highlighting how wireframes evolve into
              interactive, user-friendly designs. It emphasizes mdooth
              navigation, clear feature placement, and intuitive interaction
              flows, ensuring users can easily access core functions like login,
              registration, home, and tracking. The result is a polished,
              engaging interface that balances functionality with seamless
              usability."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
            <div className="block lg:hidden mt-5">
              <Image
                className="w-full mx-auto object-center h-75 md:h-140"
                src="/case-studies/App User Experience.png"
                alt="Project Overview"
                width={564}
                height={671}
              />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-10 lg:py-20">
          <div>
            <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black">
              Style <span className="text-[#F69348]"> Guide </span>{" "}
            </h1>
            <PageSubtitle
              text="Chase The Cash SA style guide featuring modern color palettes,
              typography (Poppins), and UI elements crafted for an engaging,
              user-friendly nutrition app experience."
              className="text-[#818181] mt-2 lg:mt-6 leading-8"
            />
          </div>
          <Image
            className="w-full mx-auto object-center h-75 md:h-140"
            src="/case-studies/Style Guide.png"
            alt="Style Guide"
            width={564}
            height={671}
          />
        </div>
        {/* 4 */}
        <div>
          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-black text-center">
            Our Other’s <span className="text-[#F69348]">Portfolio</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mt-8 lg:mt-16 max-w-300 mx-auto">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/case-studies/Nutri AI.png"
                alt="Nutri AI"
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
                  seamless shopping.
                </p>
                <Link
                  href="/case-studies/nutri-ai"
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

// import Image from "next/image";
// import Link from "next/link";

// export default function Details() {
//   return (
//     <div className="py-10 lg:py-20">
//       <div className="max-w-[1440px] w-11/12 mx-auto px-3 xl:px-0 space-y-10">
//         {/* 1 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Project <span className="text-[#F69348]">Overview</span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               Chase THE Cash SA invites users to embark on real-time treasure
//               hunt user experience, where they follow a series of cryptic clues
//               leading to specific locations. Each clue brings participants
//               closer to uncovering hidden treasures, with the ultimate goal
//               claiming a reward.
//             </p>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-4 lg:mt-6 leading-8">
//               Along the way, users are the tasked with solving puzzles, scanning
//               QR codes, uploading proof of their journey and tracking their
//               progress on live map.
//             </p>
//           </div>
//           <Image
//             className="w-full mx-auto object-center h-75 md:h-[530px] lg:h-[671px]"
//             src="/case-studies/Project Overview.jpg"
//             alt="Project Overview"
//             width={564}
//             height={671}
//           />
//         </div>
//         {/* 2 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <Image
//             className="w-full mx-auto object-center h-75 md:h-[530px] lg:h-[671px]"
//             src="/case-studies/Development  implementation.png"
//             alt="Project Overview"
//             width={564}
//             height={671}
//           />
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Development &{" "}
//               <span className="text-[#F69348]"> implementation</span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               This phase involves building core features, integrating AI-powered
//               backend and frontend, and optimizing the user experience to ensure
//               a seamless, ready to launch Chase The Cash SA app.
//             </p>
//           </div>
//         </div>
//         {/* 3 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Logo and App <span className="text-[#F69348]"> Icon </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               The Logo and App Icon, designed to reflect the app’s bold,
//               energetic, and competitive spirit. With a sleek, modern aesthetic,
//               the logo conveys the thrill of the treasure hunt experience, while
//               the localized “SA” highlights its regional identity, ensuring both
//               brand recognition and cultural relevance.
//             </p>
//           </div>
//           <Image
//             className="mx-auto"
//             src="/case-studies/Logo and App Icon.png"
//             alt="Logo and App Icon"
//             width={564}
//             height={671}
//           />
//         </div>
//         {/* 4 */}
//         <div>
//           <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//             Screen Overview{" "}
//           </h1>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
//             <Image
//               className="mx-auto"
//               src="/case-studies/Screen Overview1.png"
//               alt="Screen Overview1"
//               width={564}
//               height={671}
//             />
//             <Image
//               className="mx-auto"
//               src="/case-studies/Screen Overview2.png"
//               alt="Screen Overview3"
//               width={564}
//               height={671}
//             />
//           </div>
//         </div>
//       </div>

//       {/* 5 */}
//       <div className=" bg-linear-to-r from-black  to-[#522323] py-16 mt-10 ">
//         <div className="max-w-[1440px] w-11/12 mx-auto px-3 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <Image
//             className="mx-auto"
//             src="/case-studies/Challenges We Faced.png"
//             alt="Project Overview"
//             width={564}
//             height={671}
//           />
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-white">
//               Challenges We <span className="text-[#F69348]"> Faced </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               During development, including ensuring mdooth discovery flows,
//               delivering an engaging user experience, and refining the user
//               interface for clarity and usability. Overcoming these hurdles was
//               crucial to creating a seamless, intuitive, and rewarding treasure
//               hunt app that keeps users engaged from start to finish.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1440px] w-11/12 mx-auto px-3 xl:px-0 space-y-10 py-10">
//         {/* 1 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Problems & <span className="text-[#F69348]">Solution </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               The core challenges users face, such as cluttered markers, unclear
//               navigation, and poor user experience. It then presents streamlined
//               solutions like reward consolidation, mdart highlighting, and crash
//               prevention to ensure a mdoother journey. The phase focuses on
//               integrating AI-powered backend and frontend features to deliver a
//               seamless, launch-ready app.
//             </p>
//           </div>
//           <Image
//             className="mx-auto"
//             src="/case-studies/Problems Solution.png"
//             alt="Problems Solution"
//             width={564}
//             height={671}
//           />
//         </div>
//         {/* 2 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <Image
//             className="mx-auto"
//             src="/case-studies/Information Architecture.png"
//             alt="Project Overview"
//             width={564}
//             height={671}
//           />
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Information <span className="text-[#F69348]"> Architecture </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               The information architecture defines a clear user journey starting
//               from the splash screen to the login and registration process,
//               including OTP verification and password recovery. From the home
//               screen, users can access essential flows like location challenges,
//               map tracking, terms & conditions, and privacy policy, with error
//               handling for wrong locations. This structure ensures mdooth
//               navigation, secure authentication, and a streamlined experience
//               for all participants.
//             </p>
//           </div>
//         </div>
//         {/* 3 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Wire <span className="text-[#F69348]"> framing </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               This wireframing phase translates the information architecture
//               into visual layouts, outlining the structure of key screens such
//               as login, registration, home, and tracking. It provides a
//               blueprint for navigation, user interactions, and feature
//               placement, ensuring a clear and intuitive design foundation before
//               moving into high-fidelity UI development.
//             </p>
//           </div>
//           <Image
//             className="mx-auto"
//             src="/case-studies/Wireframing.png"
//             alt="Wireframing"
//             width={564}
//             height={671}
//           />
//         </div>
//       </div>

//       <div className="max-w-[1660px] w-11/12 mx-auto">
//         <h1 className="text-3xl text-center lg:text-[50px] font-normal text-black">
//           Management Dashboard <br />{" "}
//           <span className="text-[#F69348]"> Overview </span>{" "}
//         </h1>
//         <p className="text-[#818181] text-center  text-lg md:text-xl xl:text-2xl font-normal mt-6 leading-8 my-2">
//           This wireframing phase translates the information architecture into
//           visual layouts, outlining the structure of key screens <br /> such as
//           login, registration, home, and tracking. It provides a blueprint for
//           navigation, user interactions, <br /> and feature placement, ensuring
//           a clear and intuitive design foundation before moving into
//           high-fidelity UI development.
//         </p>
//       </div>
//       <Image
//         className="mx-auto"
//         src="/case-studies/Management.png"
//         alt="Screen Overview1"
//         width={1921}
//         height={671}
//       />

//       <div className="max-w-[1440px] w-11/12 mx-auto px-3 xl:px-0 space-y-10 pt-10">
//         {/* 2 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <Image
//             className="mx-auto"
//             src="/case-studies/App User Experience.png"
//             alt="Project Overview"
//             width={564}
//             height={671}
//           />
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               App User <span className="text-[#F69348]"> Experience </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               The App User Experience, highlighting how wireframes evolve into
//               interactive, user-friendly designs. It emphasizes mdooth
//               navigation, clear feature placement, and intuitive interaction
//               flows, ensuring users can easily access core functions like login,
//               registration, home, and tracking. The result is a polished,
//               engaging interface that balances functionality with seamless
//               usability.
//             </p>
//           </div>
//         </div>
//         {/* 3 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black">
//               Style <span className="text-[#F69348]"> Guide </span>{" "}
//             </h1>
//             <p className="text-[#818181] text-base md:text-lg lg:text-2xl mt-6 leading-8">
//               Chase The Cash SA style guide featuring modern color palettes,
//               typography (Poppins), and UI elements crafted for an engaging,
//               user-friendly nutrition app experience.
//             </p>
//           </div>
//           <Image
//             className="mx-auto"
//             src="/case-studies/Style Guide.png"
//             alt="Style Guide"
//             width={564}
//             height={671}
//           />
//         </div>
//         {/* 4 */}
//         <div>
//           <h1 className="text-[28px] md:text-[32px] lg:text-[52px] font-semibold text-black text-center">
//             Our Other’s <span className="text-[#F69348]">Portfolio</span>
//           </h1>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14 max-w-[1200px] mx-auto">
//             {/* Card 1 */}
//             <div className="relative rounded-2xl overflow-hidden group">
//               <Image
//                 src="/case-studies/Nutri AI.png"
//                 alt="Nutri AI"
//                 width={464}
//                 height={671}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 m bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
//                 <h3 className="text-white text-xl lg:text-2xl font-semibold mb-1">
//                   Nutri AI
//                 </h3>
//                 <p className="text-gray-300 text-md lg:text-base mb-3">
//                   A scalable marketplace connecting multiple vendors with
//                   seamless shopping.
//                 </p>
//                 <Link
//                   href="/case-studies/nutri-ai"
//                   className="text-[#F69348] text-md lg:text-base font-medium flex items-center gap-1 cursor-pointer"
//                 >
//                   Learn more <span>→</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="relative rounded-2xl overflow-hidden group">
//               <Image
//                 src="/case-studies/Umrah Guide.png"
//                 alt="Umrah Guide"
//                 width={464}
//                 height={671}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 m bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
//                 <h3 className="text-white text-xl lg:text-2xl font-semibold mb-1">
//                   Umrah Guide
//                 </h3>
//                 <p className="text-gray-300 text-md lg:text-base mb-3">
//                   An AI-powered mobile app designed to assist pilgrims during
//                   their Umrah and Hajj journey.
//                 </p>
//                 <Link
//                   href="/case-studies/umrah-guide"
//                   className="text-[#F69348] text-md lg:text-base font-medium flex items-center gap-1 cursor-pointer"
//                 >
//                   Learn more <span>→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
