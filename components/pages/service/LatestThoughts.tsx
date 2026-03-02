import Image from "next/image";
import Container from "@/components/layout/Container";
import {
  FiUsers,
  FiTrendingUp,
  FiBarChart2,
  FiZap,
  FiHeadphones,
} from "react-icons/fi";
import SectionTitle from "@/components/shared/SectionTitle";

const features = [
  {
    title: "User Behavior Analytics",
    description:
      "Advanced analytics to detect anomalous user behavior and potential insider threats.",
    image: "/service/thought/1.svg",
  },
  {
    title: "Predictive Intelligence",
    description:
      "AI-powered threat prediction to stay ahead of emerging security risks.",
    image: "/service/thought/2.svg",
  },
  {
    title: "Performance Metrics",
    description:
      "Comprehensive reporting and analytics for security posture and compliance.",
    image: "/service/thought/3.svg",
  },
  {
    title: "Rapid Response",
    description:
      "Automated incident response workflows to minimize breach impact.",
    image: "/service/thought/4.svg",
  },
  {
    title: "24/7 Expert Support",
    description:
      "Round-the-clock security operations center support from certified professionals.",
    image: "/service/thought/5.svg",
  },
];

const LatestThoughts = () => {
  return (
    <section className="pb-10 pt-10 md:pt-20">
      <Container>
        {/*  Title */}
        <div className="text-center mb-8 md:mb-[65px]">
          <SectionTitle normalText="Our Latest" highlightText="Thoughts" />
        </div>
        <div className="grid items-center gap-12 md:gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative overflow-hidden">
            <Image
              src="/service/thought/thought.png"
              alt="Security team analytics"
              width={600}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <ul className="space-y-6">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  {/* Icon */}
                  <div>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-base md:text-[20px] text-[#0F172B]">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm md:text-[19px] text-[#45556C]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestThoughts;
