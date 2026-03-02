import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Strategic Fit Call",
      description:
        "A focused 15-min call to align on your market, territory, and growth goals.",
    },
    {
      number: "02",
      title: "Mutual NDA & Framework",
      description:
        "Lock in full legal protection and the partner framework that works for you.",
    },
    {
      number: "03",
      title: "Growth Pack Activation",
      description:
        "Get co-branded materials, Portal access, and a dedicated PSM in 48 hours.",
    },
    {
      number: "04",
      title: "First Deal Registration",
      description:
        "Submit your first opportunity and your back-office bench springs into action.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-sm tracking-wider uppercase mb-3">
            HOW TO JOIN
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Join the Alliance today
          </h2>
          <p className="text-gray-600 text-lg">
            Go from application to your first deal in four straightforward
            steps.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Steps Grid with connecting lines */}
          <div className="grid md:grid-cols-4 gap-0 md:gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="group relative">
                  {/* Circle Number */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-white group-hover:bg-cyan-500 transition-colors duration-300 cursor-pointer relative z-10">
                      <span className="text-2xl font-bold text-cyan-500 group-hover:text-white transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
