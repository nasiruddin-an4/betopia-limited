import {
  Cloud,
  Cpu,
  ShieldCheck,
  Database,
  Code2,
  Lightbulb,
} from "lucide-react";

const capabilities = [
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    icon: Cpu,
  },
  {
    title: "Cybersecurity",
    description: "Enterprise-grade security and compliance",
    icon: ShieldCheck,
  },
  {
    title: "Data Engineering",
    description: "Big data processing and analytics platforms",
    icon: Database,
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions for your business",
    icon: Code2,
  },
  {
    title: "Digital Innovation",
    description: "Emerging technology consulting and strategy",
    icon: Lightbulb,
  },
];

export default function OurCapabilities() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl text-center lg:text-[50px] font-bold text-black">
            Our Capabilities
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
