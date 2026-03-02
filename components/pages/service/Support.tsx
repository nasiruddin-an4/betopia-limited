import Container from "@/components/layout/Container";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface Support {
  title: string;
  description: string;
  features: string[];
  image: string;
  tag: string;
  tagColor: string;
  buttonColor: string;
  reverse?: boolean;
}

const supports: Support[] = [
  {
    title: "Infrastructure Modernization",
    description:
      "Our endpoint management platform provides unified visibility and control across all devices in your organization.",
    features: [
      "Automated security updates and patch management",
      "Remote device wiping and lockdown capabilities",
      "Application whitelisting and blacklisting",
      "Detailed audit logs and compliance reporting",
    ],
    image: "/service/service.png",
    tag: "Comprehensive Protection",
    tagColor: "bg-[#FFEDD4] text-[#FF9500]",
    buttonColor: "bg-[#FF9500]",
    reverse: true,
  },
];

const Support = () => {
  return (
    <section className="pt-10 md:pt-20">
      <Container>
        {supports.map((s, i) => (
          <div key={i} className="mb-12 md:mb-[110px]">
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
                  alt={s.title}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={s.reverse ? "md:order-1" : ""}>
                <span
                  className={`inline-block px-3.5 py-1 rounded-full text-base font-medium ${s.tagColor}`}
                >
                  {s.tag}
                </span>

                <h3 className="mt-5 text-3xl md:text-5xl lg:text-[52px]">
                  Secure Every Device: <br />
                  <span className="text-[#FF9500]">Support and Control</span>
                </h3>

                <p className="mt-5 text-[#45556C] md:text-xl">
                  {s.description}
                </p>

                <ul className="mt-7 mb-8 space-y-3">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Image
                        src="/service/servicecheck.svg"
                        width={23}
                        height={23}
                        alt="check"
                      />
                      <span className="text-[#314158] md:text-[19px]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`${s.buttonColor} text-white px-6 py-2.5 rounded-[9px] flex items-center gap-2`}
                >
                  Learn More <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Support;
