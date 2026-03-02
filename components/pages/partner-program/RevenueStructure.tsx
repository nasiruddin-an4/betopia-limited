import React from "react";

const RevenueStructure = () => {
  const streams = [
    {
      percentage: "30%",
      label: "PER PROJECT",
      title: "High-Impact Wins",
      description:
        "Up to 30% commission on every custom software project you bring in. The biggest deal values in the market — yours to close and profit from.",
      color: "orange",
      borderColor: "border-t-4 border-orange-500",
    },
    {
      percentage: "15%",
      label: "EVERY MONTH, FOREVER",
      title: "Lifetime Recurring Revenue",
      description:
        "Up to 15% lifetime commission on every Managed Services (SLA/AMC) contract. Sign once. Collect month after month, year after year.",
      color: "cyan",
      borderColor: "border-t-4 border-cyan-500",
    },
    {
      percentage: "15%",
      label: "MONTHLY",
      title: "Scalable Team Revenue",
      description:
        "10–15% monthly on every resource augmentation engagement. Revenue that scales automatically as your clients grow their teams.",
      color: "blue",
      borderColor: "border-t-4 border-blue-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-sm tracking-wider uppercase mb-3">
            REVENUE STRUCTURE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three streams of mailbox money
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Designed for both the Hunter and the Farmer. Close a deal once — and
            get paid for life on recurring streams.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {streams.map((stream, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${stream.borderColor} hover:shadow-lg transition`}
            >
              {/* Percentage */}
              <div
                className={`text-5xl md:text-6xl font-bold mb-2 ${
                  stream.color === "orange"
                    ? "text-orange-500"
                    : stream.color === "cyan"
                      ? "text-cyan-500"
                      : "text-blue-500"
                }`}
              >
                {stream.percentage}
              </div>

              {/* Label */}
              <p className="text-gray-600 font-semibold text-sm tracking-wider mb-4">
                {stream.label}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {stream.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {stream.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* The Betopia Firewall */}
      <div></div>
    </section>
  );
};

export default RevenueStructure;
