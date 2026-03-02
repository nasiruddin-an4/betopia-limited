import React from "react";

export interface FAQItem {
  question: string;
  answer?: string;
}
export const partnerfaqData = [
  {
    key: "1",
    question:
      "What exactly is the Betopia International Partnership & Sales Program?",
    answer:
      "The Betopia International Partnership & Sales Program is a strategic framework that allows US-based IT firms, MSPs, consultants, and sales professionals to sell enterprise-grade Cloud, AI, and Custom Software solutions. You own the client relationship and handle the commercial introduction, while Betopia’s global hub of over 5,000 engineers handles 100% of the technical execution. You sell. We build. You earn. ",
  },
  {
    key: "2",
    question: "Do I have to pay an upfront fee to join?",
    answer: (
      <>
        <p>
          <strong>No.</strong> It is not mandatory to pay an upfront fee to
          become a standard sales agent. However, if you want to instantly
          establish institutional credibility and launch as a digital agency, we
          offer an optional <strong>$2,000 Growth Pack</strong>. This includes
          an 8–10 page website, integrated AI tools, SEO research, and premium
          emails for 12 months. This fee is split into a $1,000 Activation
          Deposit and a $1,000 Service Enablement Credit that you can spend on
          Betopia services.
        </p>
      </>
    ),
  },

  {
    key: "3",
    question: "How much can I earn?",
    answer: (
      <>
        <p>
          Our &quot;The More You Bring, The More You Keep&quot; model features
          three lucrative revenue streams: <br />
          1. <strong>Custom Projects (One-Time):</strong> Earn up to a{" "}
          <strong>30% commission</strong> on deals up to $50,000, 25% on deals
          up to $150k, and 20% on enterprise deals above $150k. <br />
          2. <strong>Managed Services (Recurring):</strong> Build predictable
          &quot;Mailbox Money&quot; with{" "}
          <strong>10% to 15% monthly recurring commission</strong> on SLAs and
          IT maintenance contracts for up to 12 months. <br />
          3. <strong>Resource Augmentation (Recurring):</strong> Place dedicated
          developers or engineers on your client&apos;s team and earn{" "}
          <strong>10% to 15% monthly</strong> for the duration of the placement
          (12 to 24 months).
        </p>
      </>
    ),
  },

  {
    key: "4",
    question: "What happens if a project has bugs or fails? Am I liable?",
    answer: (
      <>
        <p>
          <strong>Absolutely not.</strong> One of the biggest advantages of this
          program is that Betopia holds full delivery responsibility. You act as
          the strategic advisor, but you take on{" "}
          <strong>zero technical or warranty liability</strong>. If a bug is
          discovered or a project misses its Scope of Work, Betopia&apos;s
          engineering team fixes it at no cost to you, protecting your brand
          from litigation.
        </p>
      </>
    ),
  },
  {
    key: "5",
    question: "How does Betopia ensure my leads and clients aren't poached? ",
    answer: (
      <>
        <p>
          We use a strict <strong>&quot;Deal Lock&quot;</strong> policy via our
          transparent Partner Portal. Once you register a prospect, that lead is
          legally locked to you, ensuring no internal team or other partner can
          claim it. Furthermore, Betopia signs strict Non-Compete and
          Non-Overlap agreements, legally guaranteeing we will never circumvent
          you to work directly with your clients.
        </p>
      </>
    ),
  },
  {
    key: "6",
    question:
      "Do I need to be a deep technical expert to close these enterprise deals? ",
    answer: (
      <>
        <p>
          No. You bring the executive relationships and the ability to uncover
          client pain points. Every partner is assigned a dedicated{" "}
          <strong>Partner Success Manager (PSM)</strong> who acts as your
          &quot;Technical Co-Pilot&quot;. The PSM will join your discovery
          calls, design the technical architecture, and write the proposals so
          you always sound like the smartest person in the room.
        </p>
      </>
    ),
  },
  {
    key: "7",
    question: "Who actually qualifies for this program? ",
    answer: (
      <>
        <p>
          To protect the brand, Betopia enforces strict qualification barriers.
          We look for{" "}
          <strong>
            Small US IT Firms, MSPs, Fractional CIOs/CTOs, and Ex-Enterprise
            Sales Leaders
          </strong>
          . To be accepted, you must prove you have an active contract base (3-5
          contracts in sectors like Healthcare, Government, or Education),
          possess genuine &quot;C-Suite&quot; access to bypass IT gatekeepers,
          and demonstrate experience selling complex SaaS or ERP solutions.
        </p>
      </>
    ),
  },
  {
    key: "8",
    question: "Do you offer any marketing support?",
    answer: (
      <>
        <p>
          Yes! We allocate a <strong>3% Market Development Fund (MDF)</strong>{" "}
          from every successfully closed deal. This fund is reserved
          specifically for you to spend on future joint marketing efforts, such
          as local executive roundtables, webinars, and whitepapers to help you
          grow your local footprint.
        </p>
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:gap-16">
          {/* Left Sticky Section - 35% */}
          <div className="w-full lg:w-[35%] h-fit lg:sticky lg:top-32 mb-8 lg:mb-0">
            <div className="text-left">
              <p className="text-cyan-500 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
                FAQ
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Everything you need to know about joining and growing with the
                Betopia Alliance
              </p>
            </div>
          </div>

          {/* Right FAQ Items - 65% */}
          <div className="w-full lg:w-[65%] space-y-3 sm:space-y-4">
            {partnerfaqData.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 sm:px-6 py-4 sm:py-5 md:py-6 font-semibold text-sm sm:text-base md:text-lg text-gray-900 transition-colors hover:bg-gray-50 group-open:bg-cyan-50">
                  <span className="text-left pr-2 sm:pr-4">
                    {item.question}
                  </span>
                  <span className="ml-2 sm:ml-4 flex-shrink-0 text-cyan-500 group-open:hidden">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 sm:ml-4 hidden flex-shrink-0 text-cyan-500 group-open:flex">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </span>
                </summary>

                {item.answer && (
                  <div className="px-4 sm:px-6 py-4 sm:py-5 md:py-6 border-t border-gray-200 bg-white text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
