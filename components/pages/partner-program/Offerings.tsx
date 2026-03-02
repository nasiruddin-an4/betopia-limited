import Link from "next/link";
import React from "react";

const Offerings = () => {
  const comparisonData = [
    {
      criterion: "Delivery accountability",
      betopia: "Betopia holds full liability",
      traditional: "Partner bears full risk",
    },
    {
      criterion: "Sales & pre-sales support",
      betopia: "Dedicated PSM + pre-sales engineers",
      traditional: "You're on your own",
    },
    {
      criterion: "IP & data protection",
      betopia: "US-compliant, cryptographically secure",
      traditional: '"Wild West" data risks',
    },
    {
      criterion: "Product portfolio",
      betopia: "AI, ERP, Voting, HRM, Cloud",
      traditional: "Limited to in-house skills",
    },
    {
      criterion: "Resource continuity",
      betopia: "Guaranteed replacement within 72h",
      traditional: "Months of delays",
    },
    {
      criterion: "Deal protection",
      betopia: "Lifetime lead registration",
      traditional: "No guarantees",
    },
    {
      criterion: "Recurring revenue",
      betopia: "Up to 15% lifetime on managed services",
      traditional: "One-time project fees only",
    },
  ];

  const portfolioData = [
    {
      id: 1,
      icon: "/service/ai/1.svg",
      title: "Betopia ERP — Business Brain",
      description:
        "The nervous system for multi-branch enterprises. Unified HRMS, finance, sales, CRM, purchasing, inventory, KPI management, and analytics — one platform, total control.",
      tags: "ENTERPRISE · MULTI-BRANCH",
      tagColor: "text-cyan-500",
    },
    {
      id: 2,
      icon: "/service/ai/2.svg",
      title: "Talkora AI — Agentic Intelligence",
      description:
        "Beyond chatbots. Intelligent voice and call automation with real-time understanding, smart routing, and analytics. Executes real tasks. Scales 24/7 with enterprise reliability.",
      tags: "AI · VOICE · AUTOMATION",
      tagColor: "text-cyan-500",
    },
    {
      id: 3,
      icon: "/service/ai/3.svg",
      title: "Count Trust — Secure Governance",
      description:
        "The gold standard in cryptographically secure digital voting. Tamper-proof, fully auditable, and trusted by enterprises, schools, and institutions for high-stakes decisions.",
      tags: "GOVERNANCE · SECURITY · COMPLIANCE",
      tagColor: "text-amber-500",
    },
    {
      id: 4,
      icon: "/service/ai/5.svg",
      title: "Betopia HRM — Human Capital Management",
      description:
        "Hardware-integrated workforce management. Centralises employee records, attendance, payroll, performance, and analytics with role-based access and real-time insights.",
      tags: "HR TECH · HARDWARE-INTEGRATED",
      tagColor: "text-cyan-500",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-sm tracking-wider uppercase mb-3">
            The Betopia Edge
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How we compare
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See why agencies and consultants choose the Betopia Alliance over
            traditional outsourcing models.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="px-6 py-6 text-left text-gray-900 font-bold text-lg border-b border-gray-200">
                  What Matters
                </th>
                <th className="px-6 py-6 text-left text-gray-900 font-bold text-lg border-b border-gray-200 bg-blue-50/50">
                  <span className="text-blue-500 text-base font-semibold mr-2">
                    ✦
                  </span>
                  Betopia Alliance
                </th>
                <th className="px-6 py-6 text-left text-gray-900 font-bold text-lg border-b border-gray-200">
                  Traditional Outsourcing
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-6 py-5 text-gray-700 font-medium text-base">
                    {row.criterion}
                  </td>
                  <td className="px-6 py-5 text-gray-700 text-base bg-blue-50/50">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    {row.betopia}
                  </td>
                  <td className="px-6 py-5 text-gray-600 text-base">
                    <span className="text-gray-400 mr-2">—</span>
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Proprietary Portfolio */}
      <div className="mt-20 lg:mt-32 pt-20 mx-auto max-w-7xl px-4 md:px-0">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold text-sm tracking-wider uppercase mb-3">
            PROPRIETARY PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Own a portfolio of industry giants
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just sell "software." Sell enterprise-grade, Secure by Design
            solutions your clients cannot find anywhere else.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6 px-4 md:px-0">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4">
                    {item.description}
                  </p>
                  <p className="font-semibold text-amber-500 text-sm tracking-wider">
                    {item.tags}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/product"
            className="inline-block bg-amber-500 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            View Full Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
