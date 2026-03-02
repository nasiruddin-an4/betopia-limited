import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

const Headquarter = () => {
  return (
    <Container>
      <div className="py-10 lg:py-20 flex flex-col md:flex-row justify-between gap-8 lg:gap-[60px] ">
        {/* Content */}

        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="mt-6 md:mt-10 mb-3 text-base  lg:text-xl text-[#155DFC] uppercase  flex items-center gap-1">
            <span>
              <FiMapPin />
            </span>{" "}
            Headquarters
          </div>
          <h1 className="text-[28px] md:text-4xl lg:text-[52px] font-bold">
            Dhaka, Bangladesh
          </h1>
          <PageSubtitle
            text="BETOPIA Limited is headquartered in Dhaka, Bangladesh, where executive leadership, core engineering teams, and global operations management are based. This central hub drives innovation, strategic direction, and delivery excellence across all international regions."
            className="mt-6 lg:mt-10 text-[#41404299]"
          />
        </div>
        <div className="md:w-1/2 ">
          {/* Main Image */}
          <Image
            className="object-cover rounded-lg w-full h-full lg:h-[650px]"
            src="/global/11.svg"
            alt="Main vision"
            width={880}
            height={600}
          />
        </div>
      </div>
    </Container>
  );
};

export default Headquarter;
