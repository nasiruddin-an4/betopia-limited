import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Enterprise = () => {
  return (
    <section className=" py-10 md:py-20 px-4 bg-[#F9EFE7]">
      <Container>
      <div className=" space-y-6 ">
        <h2 className="text-[28px] md:text-[32px] lg:text-[52px] font-bold text-[#171717]">
          The Continuously Adaptive Enterprise
        </h2>
        <PageSubtitle
          text="Betopia Limited applies advanced technology and deep engineering expertise to help organizations reimagine what’s possible when unlocking innovation while balancing growth, resilience, and sustainability."
          className="text-[#414042] lg:w-[60%] lg:text-justify"
        />
        <PageSubtitle
          text="We enable our clients not only to succeed in the present, but also to lead transformation, adapt continuously, and create meaningful digital legacies for years to come.  "
          className="text-[#414042] lg:w-[60%] lg:text-justify"
        />

        <Link href="/adaptability">
          <button className="flex gap-1 items-center justify-center cursor-pointer hover:text-[#FF9500] font-semibold text-lg">
            Discover More{" "}
            <span className="mt-1">
              <IoIosArrowForward />{" "}
            </span>{" "}
          </button>
        </Link>
      </div>
      </Container>
    </section>
  );
};

export default Enterprise;
