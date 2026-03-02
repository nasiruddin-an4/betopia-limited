import Container from "@/components/layout/Container";
import HeadingThree from "../heading/HeadingThree";
import PageSubtitle from "../pageSubtitle";
import CTAButton from "../button/CTAButton";

type CTAProps = {
  title: string;
  subtitle?: string;
  description: string;
  gradient?: string;
};

export default function ServiceCTA({
  title,
  subtitle,
  description,
  gradient = "bg-linear-to-r from-[#FF9500] to-[#F54900]",
}: CTAProps) {
  return (
    <section className={`w-full ${gradient}`}>
      <Container>
        <div className="py-10 md:py-23.25 flex flex-col items-center">
          <h2 className="text-white text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
            {title}
          </h2>

          {subtitle && (
            <HeadingThree
              title={subtitle}
              className="text-white mt-4 text-center"
              center={false}
            />
          )}

          <PageSubtitle
            text={description}
            className="mt-6 text-[#FFFFFFE5] lg:w-[40%] mx-auto text-center"
          />

          <CTAButton />
        </div>
      </Container>
    </section>
  );
}
