import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
const missionData = [
  {
    id: 1,
    href: "/about/mission/mission1.svg",
    title: "Innovative Solutions",
    description:
      "Deliver innovative enterprise-grade services and proprietary platforms",
  },
  {
    id: 2,
    href: "/about/mission/mission2.svg",
    title: "Multi-Cloud Expertise",
    description:
      "Enable global organizations to leverage Microsoft, AWS, Google Cloud solutions",
  },
  {
    id: 3,
    href: "/about/mission/mission3.svg",
    title: "Talent Development",
    description:
      "Develop a world-class talent pipeline through Betopia Leadership Institute",
  },
  {
    id: 4,
    href: "/about/mission/mission4.svg",
    title: "Strategic Partnerships",
    description:
      "Forge partnerships to expand market reach and create high-value outcomes",
  },
];

const Mission = () => {
  return (
    <section className="bg-linear-to-r from-[#101828] to-[#1E2939] py-10 lg:py-20">
      <Container>
        <div className="flex items-center justify-center mb-[19px]">
          <p className="text-sm md:text-base lg:text-[19px] text-[#FF9500] bg-[#FFFFFF1A] py-2 rounded-full w-fit font-bold px-6 flex items-center  gap-1">
            <Image
              src="/about/mission/missin-badge.svg"
              alt="icon"
              width={20}
              height={20}
            />
            Our Mission
          </p>
        </div>
        {/* Section Title */}
        <div className="text-center mb-8 lg:mb-[64px]">
          <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-white">
            What Drives Us
          </h2>
          <span className="block w-[93px] h-[7px] bg-linear-to-r from-[#FF9500] to-[#FF8904] mx-auto mt-4 md:mt-7 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-3 xl:px-0 gap-6 lg:gap-[37px]">
          {missionData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F3F4F6] rounded-[17px] p-4 md:p-[33px] shadow-md hover:shadow-lg group transition-all duration-300 ease-out
    hover:-translate-y-2"
            >
              <Image
                src={item.href}
                alt={item.title}
                width={56}
                height={56}
                className="mb-[19px]"
              />

              <h4 className="text-xl xl:text-[30px] font-bold mb-2 md:mb-[15px]">
                {item.title}
              </h4>
<PageSubtitle
            text={item.description}
            className="text-[#4A5565]"
          />
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mission;
