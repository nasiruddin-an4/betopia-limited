import Container from "@/components/layout/Container";
import Image from "next/image";

const Trust = () => {
  return (
    <section className="">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block text-sm md:text-[19px] rounded-[5.27px] font-medium text-[#070A0E] bg-white p-1.5 border border-[#DADADB]">
              800K+ TRUST CUSTOMER
            </span>

            <h1 className="mt-[21px] text-3xl md:text-4xl xl:text-[52px] font-bold text-[#070A0E]">
              Empowering business
              <br />
              Redefining experiences
            </h1>

            <p className="mt-[22px] text-base md:text-[23px] leading-relaxed text-[#070A0E]">
              We don&apos;t just design—we craft experiences that engage, convert, and inspire.
              Backed by innovation and industry expertise, we transform insights into
              pixel-perfect digital solutions.
            </p>

            <p className="mt-[22px] text-base md:text-[23px] leading-relaxed text-[#070A0E]">
              From apps to websites, we deliver seamless, high-impact designs that
              redefine user experience. Let’s build something extraordinary together!
            </p>

            {/* Rating */}
            <div className="mt-20 md:mt-[210px] flex items-center gap-3">
               <Image
              src="/trust/reviews.svg"
              alt="Dashboard Visual"
              width={286.82}
              height={69}
              priority
            />
            </div>
          </div>

          {/* Right Image*/}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/trust/trust.svg"
              alt="Dashboard Visual"
              width={945.41}
              height={1165}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trust;