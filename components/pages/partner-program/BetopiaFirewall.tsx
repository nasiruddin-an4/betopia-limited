import React from "react";

const BetopiaFirewall = () => {
  const guarantees = [
    {
      title: "Zero Technical Liability",
      description:
        "Betopia assumes full responsibility for delivery, quality, and warranties. If something breaks, it's our problem to fix — at our cost. You stay pristine in front of your client every time.",
      icon: "🛡️",
    },
    {
      title: "72-Hour Resource Replacement Guarantee",
      description:
        "If any resource leaves your project, we replace them within 72 hours — no project stalls, no extra costs to you, no awkward conversations with your client. Continuity is guaranteed.",
      icon: "⚡",
    },
    {
      title: "Lifetime Deal Protection",
      description:
        "Once you register a lead in our Partner Portal, that relationship is yours for life. We maintain a strict no-direct-approach policy. We never compete with our partners — ever.",
      icon: "🔒",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-sm tracking-wider uppercase mb-3">
            THE BETOPIA FIREWALL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your safety is our priority
          </h2>
          <p className="text-gray-600 text-lg">
            Risk is the #1 reason agencies say no. We have engineered every
            guarantee to remove that barrier completely.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="space-y-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">{guarantee.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetopiaFirewall;
