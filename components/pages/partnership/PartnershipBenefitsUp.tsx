"use client";

import { useState } from "react";

type BenefitItem = {
  title: string;
  description: string;
};

type Tab = {
  id: string;
  label: string;
  benefits: BenefitItem[];
};

const tabs: Tab[] = [
  {
    id: "financial",
    label: "Financial Revenue Benefits",
    benefits: [
      {
        title: "High-Margin Project Commissions:",
        description:
          "You earn a 30% revenue share on custom software and project deals up to $50,000. For larger mid-sized deals ($50,000–$150,000), you earn 25%, and for enterprise deals above $150,000, you earn 20%.",
      },
      {
        title: 'Recurring "Mailbox Money":',
        description:
          "You earn 10% to 15% in monthly recurring commissions for selling Managed Services, SLAs, or Annual Maintenance Contracts (AMCs), which is typically paid out for the first 12 months.",
      },
      {
        title: "Resource Augmentation Income:",
        description:
          "If you place dedicated technical resources (like developers or cloud engineers) with a client, you earn 10% to 15% monthly commission for the duration of their placement, which can last 12 to 24 months.",
      },
      {
        title: "Market Development Funds (MDF):",
        description:
          "Betopia allocates 3% of every successfully closed deal into a specific fund used to finance your future joint marketing efforts, such as webinars or local networking events.",
      },
    ],
  },
  {
    id: "brand",
    label: "Brand & Marketing Benefits",
    benefits: [
      {
        title: "Leverage Established Credibility:",
        description:
          "You act as Betopia's official sales agent, using joint branding to offer enterprise-grade multi-cloud (AWS, GCP, Microsoft), AI, and cybersecurity solutions.",
      },
      {
        title: "Co-Branded Campaigns:",
        description:
          " You receive full support to run *co-branded marketing campaigns and develop a  joint Go-To-Market (GTM) strategy.",
      },
       
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise Support & Enablement",
    benefits: [
      {
        title: "Executive Partner Success Manager (PSM):",
        description:
          "You are assigned a dedicated expert who guides you through every step, from client onboarding and discovery calls to project delivery.",
      },
      {
        title: " Shared Sales & Delivery Resources:",
        description:
          "You get instant access to Betopia’s global engineering hub of over 5,000 developers and designers to fulfill your clients' needs.",
      },
      {
        title: "Pre-Sales & Proposal Assistance:",
        description:
          "Betopia provides sales playbooks, pitch decks, demo environments, and direct assistance with proposals and Statements of Work (SoW) to help you win bids.",
      },
      {
        title: "Ongoing Strategy Optimization:",
        description:
          "You receive priority enterprise support and participate in quarterly business reviews* to continuously refine your sales approach.",
      },
    ],
  },
  {
    id: "risk",
    label: "Risk Mitigation & Legal Protection",
    benefits: [
      {
        title: "Zero Delivery or Warranty Liability:",
        description:
          " You only handle the commercial introduction and client relationship. Betopia holds 100% of the delivery responsibility, meaning you take on absolutely no technical or warranty risk if something goes wrong.",
      },
      {
        title: "Client & Lead Protection:",
        description:
          "All leads are logged in a Partner Portal for 'Deal Protection.' Furthermore, Betopia signs strict non-compete and non-overlap agreements legally guaranteeing they will never circumvent you to work directly with your clients.",
      },
      {
        title: "Transparent Payouts:",
        description:
          "Commissions are tracked in real-time via the Partner Portal and are paid monthly against received client payments, ensuring your income is protected and predictable.",
      }, 
    ],
  },
];

export default function PartnershipBenefitsUp() {
  const [activeTab, setActiveTab] = useState<string>("financial");

  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-[#f0f0f0] py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold text-[#1a1a2e]">
          Partnership{" "}
          <span className="text-[#f5a623]">Benefits</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 bg-[#f5a623]" />
      </div>

      {/* Content */}
      <div className="max-w-[1660px] w-[95%] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Panel */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a2e] mb-2">
              Your partnership journey starts here
            </h3>
            <p className="text-sm md:text-base lg:text-xl text-gray-600 leading-relaxed">
              Access strategic resources, dedicated support, and collaborative
              opportunities designed to help Betopia partners grow, innovate,
              and succeed together.
            </p>
          </div>

          {/* Tabs */}
          <nav className="flex flex-col mt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left text-xl md:text-2xl xl:text-[28px] py-4 px-0 pl-5 font-semibold border-b border-gray-300 transition-colors duration-200 cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "text-[#f5a623] border-l-4 border-l-[#f5a623] border-b-gray-300"
                      : "text-[#414042] hover:text-[#885401] pl-0 border-l-4 border-l-[#ffffff]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Panel */}
        <div className="md:w-3/5">
          <div
            key={activeTab}
            className="bg-[#45556C] rounded-xl p-8 h-full text-white animate-fadeIn"
          >
            {activeData.benefits.map((benefit, idx) => (
              <div key={idx} className={idx !== 0 ? "mt-6" : ""}>
                <h4 className="text-xl md:text-2xl xl:text-[28px] font-bold text-white mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}