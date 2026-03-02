const testimonials = [
  {
    quote:
      "“HRM doesn’t just manage employees — it enables smarter HR operations, better workforce planning, and a more transparent employee experience.”",
    name: "Sarah Johnson",
    role: "CTO, Global Logistics Inc.",
  },
  {
    quote:
      "From booking to final delivery, Ship X delivers excellence. Their support team is responsive, and shipments always arrive on time. It’s the reliability we’ve been looking for",
    name: "Michael Chen",
    role: "VP of Operations, TechVentures",
  },
  {
    quote:
      "“HRM doesn’t just manage employees — it enables smarter HR operations, better workforce planning, and a more transparent employee experience.”",
    name: "Emily Rodriguez",
    role: "CISO, FinSecure Bank",
  },
];

export default function WhatOurClientsSay() {
  return (
    <section className="bg-[#F3F8FF] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl text-center lg:text-[50px] font-bold text-black">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Don&apos;t just take our word for it—hear from the leaders
            we&apos;ve helped succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="text-blue-500 text-4xl mb-4 leading-none">
                &ldquo;&rdquo;
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                “{item.quote}”
              </p>

              {/* Author */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
