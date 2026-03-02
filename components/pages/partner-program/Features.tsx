"use client";

import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";

const items = [
  {
    img: "/partner/partner/1.png",
    title: "Engineering Scale",
    text: "Access our 5,000-person engineering bench across AI, ERP, Cloud, Cybersecurity, and HR Tech — without hiring a single developer yourself.",
  },
  {
    img: "/partner/partner/2.png",
    title: "Zero Technical Liability",
    text: "Betopia assumes full delivery responsibility. If something breaks, it's our problem — at our cost. Your client relationship stays completely pristine.",
  },
  {
    img: "/partner/partner/3.png",
    title: "Three Revenue Streams",
    text: "Earn up to 30% per project, 15% lifetime on managed services, and 10–15% monthly on resource augmentation. Build compounding, recurring wealth.",
  },
  {
    img: "/partner/partner/4.png",
    title: "Dedicated Partner Support",
    text: "A dedicated Partner Success Manager and pre-sales engineering team support every deal you run — from qualification to close to delivery.",
  },
  {
    img: "/partner/partner/5.png",
    title: "Lifetime Deal Protection",
    text: "Register a lead in our Partner Portal and that client relationship is yours for life. We maintain a strict no-direct policy — we never compete with our partners.",
  },
  {
    img: "/partner/partner/6.png",
    title: "Enterprise-Grade Portfolio",
    text: "Co-sell AI, ERP, secure governance, and HR solutions that are certified ISO 27001, SOC 2, and CMMI. Products your clients simply cannot buy elsewhere.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2 text-center">
            Access benefits designed just for you
          </h1>
          <p className="text-gray-500">
            We've built a partner programme that removes every barrier standing
            between your agency and the revenue it deserves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
