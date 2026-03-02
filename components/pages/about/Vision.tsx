import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";


const Vision = () => {
  return (
    <div className="bg-[#F7FEFA]">
      <Container>

      <div className="pt-10 pb-10 lg:pt-20 flex flex-col xl:flex-row justify-between gap-3 lg:gap-[150px]">
        {/* Content */}
        <div className="md:w-[676px] px-3 2xl:px-0">
          <p className="text-sm md:text-base lg:text-[19px] text-[#FF9500] bg-[#FFF7ED] py-2 rounded-full w-fit font-bold mb-3 px-6 flex items-center gap-1">
            <Image
              src="/about/vision-icon.svg"
              alt="icon"
              width={20}
              height={20}
            />
            Our Vision
          </p>

          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-[#101828]">
            From Bangladesh to the World
          </h1>
          <PageSubtitle
            text="Building a global enterprise technology leader delivering secure, cloud-ready, and AI-powered business platforms. Betopia empowers organizations to modernize, secure, and scale their digital ecosystems through world-class engineering, multi-cloud expertise, and enterprise-grade delivery."
            className="mt-3 mb-3 md:mb-0 md:mt-10  text-[#4A5565] "
          />
        </div>
        <div className="relative ">
          {/* Main Image */}
          <Image
            className="object-cover rounded-xl"
            src="/about/team.jpg"
            alt="Main vision"
            width={722}
            height={512}
          />

          {/* Top Overlay Image */}
          <Image
            className="absolute -top-10 right-20 hidden lg:flex"
            src="/about/top1.svg"
            alt="Overlay"
            width={225}
            height={127}
          />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Vision;
