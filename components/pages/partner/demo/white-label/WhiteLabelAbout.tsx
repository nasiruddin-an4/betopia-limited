import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { whiteLabelAboutData } from "@/data/whiteLabelAbout";

export default function WhiteLabelAbout() {
  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-0 overflow-hidden max-w-[1674px] mx-auto">
      {/* Section Title */}
      <UnderlineSectionTitle title="What is White-Label Partnership?" wrapperClassName="mb-10 md:mb-20 text-center text-[#4A5565]"/>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {whiteLabelAboutData.map((item) => (
          <div
            key={item.id}
            className="relative pl-[27px] pb-[53px] w-full md:w-[544px] h-full md:h-[514px] "
          >
            {/* Video */}
            <video
              className="absolute top-0 left-0 w-full h-full  object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl " />

            {/* Content */}
            <div className="relative z-20 px-4 h-full flex flex-col justify-end">
              <h5 className="text-xl md:text-2xl 2xl:text-[32px] text-white font-bold">
                {item.title}
              </h5>

              <p className="text-sm md:text-base mt-[10px] text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// import AboutPartner from "../common/AboutPartner";

// const whiteLabelData = [
//   {
//     id: 1,
//     href: '/partner/white-label/about/about1.svg',
//     title: "Your Brand, Our Expertise",
//     description:
//       "Deliver Betopia solutions (Cloud, AI, cybersecurity, ERP, HRMS, POS, Voting Systems) under your branding",
//   },
//   {
//     id: 2,
//     href: '/partner/white-label/about/about2.svg',
//     title: "Enterprise Platforms",
//     description:
//       "Leverage our enterprise-grade platforms and multi-cloud solutions across Microsoft, AWS, and Google Cloud",
//   },
//   {
//     id: 3,
//     href: '/partner/white-label/about/about3.svg',
//     title: "Full Client Ownership",
//     description:
//       "Maintain full client ownership while we manage delivery, compliance, and technical execution",
//   },
// ];

// export default function WhiteLabelAbout() {
//   return (
//     <AboutPartner
//       heading="What is White-Label Partnership?"
//       items={whiteLabelData}
//     />
//   );
// }
