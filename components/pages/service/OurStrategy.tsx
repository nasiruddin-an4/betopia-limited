import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

interface OurStrategy {
  description: string;
  features: string[];
  image: string;
  buttonColor: string;
  reverse?: boolean;
}

const strategys: OurStrategy[] = [
  {
    description:
      "Data-driven insights power our endpoint security strategy. Our advanced analytics engine processes millions of security events daily, providing actionable intelligence to protect your organization.",
    features: [
      "Real-time threat intelligence and pattern recognition",
      "Predictive analytics for proactive threat prevention",
      "Comprehensive reporting and compliance dashboards",
      "Machine learning-powered anomaly detection",
    ],
    image: "/service/strategy.png",
    buttonColor: "bg-[#FF9500]",
    reverse: true,
  },
];

const OurStrategy = () => {
  return (
    <section className="pt-10 md:pt-20">
      <Container>
        {strategys.map((s, i) => (
          <div key={i} className="mb-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              {/* Image */}
              <div
                className={`relative h-64 md:h-[462px] ${
                  s.reverse && "md:order-2"
                }`}
              >
                <Image
                  fill
                  src={s.image}
                  alt=""
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={s.reverse ? "md:order-1" : ""}>         

                 <SectionTitle normalText="Our Strategy Is" highlightText="Analytics" />

                <p className="mt-5 text-[#45556C] md:text-xl">
                  {s.description}
                </p>

                <ul className="mt-7 mb-8 space-y-3">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Image
                        src="/solution/checkbox.png"
                        width={23}
                        height={23}
                        alt="check"
                        className="w-4 md:w-[23px] h-4 md:h-[23px]"
                      />
                      <span className="text-[#314158]  md:text-[19px]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default OurStrategy;
