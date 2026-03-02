import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

const subtitles = [
  "Betopia Limited designs and delivers technology solutions that solve real business challenges and produce measurable results.",
  "Each case study represents a completed engagement where we assessed complexity, designed the right architecture, executed with precision, and delivered outcomes aligned with business objectives.",
  "From modernizing legacy systems to deploying scalable cloud platforms and intelligent automation, our case studies highlight how structured execution, technical expertise, and disciplined delivery translate into improved performance, stronger security, and sustainable growth.",
  "Every solution is built with scalability, reliability, and long-term value in mind, ensuring our partners are equipped not just for today, but for what comes next.",
];

export default function ShortDetails() {
  return (
    <Container>
      <div className="pt-10 lg:pt-20">
        <div className="space-y-3 lg:space-y-5">
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-semibold text-black mb-4 lg:mb-10">
            Delivering Measurable Outcomes Through Technology Excellence
          </h2>

          {subtitles.map((text, index) => (
            <PageSubtitle
              key={index}
              text={text}
              className="text-gray-700 text-justify"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
