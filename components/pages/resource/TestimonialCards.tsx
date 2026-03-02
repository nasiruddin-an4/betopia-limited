import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Betopia's embedded AI team delivered predictive analytics in 60 days, saving us $500k in internal hiring.",
    name: "Sarah Johnson",
    role: "CTO, Global FinTech Corp",
  },
  {
    quote:
      "Our cloud migration was seamless with Betopia engineers fully embedded in our IT department.",
    name: "Michael Chen",
    role: "VP of Engineering, Healthcare Systems Inc",
  },
  {
    quote:
      "The flexibility and expertise of Betopia's resource augmentation saved our critical project timeline.",
    name: "David Martinez",
    role: "IT Director, Enterprise Solutions Ltd",
  },
];

export default function TestimonialCards() {
  return (
    <section className="py-10 md:py-20 bg-[#FFF9F3] ">
      <div className="max-w-[1406px] mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="w-[205px] mx-auto mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-1  font-semibold text-white">
            Client Success Stories
          </div>

          <UnderlineSectionTitle
            title="What Our Clients Say"
            wrapperClassName="mb-[4px] md:mb-[55px] text-center text-[#101828]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition"
            >
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8039 5.77734C29.7826 5.77734 28.8032 6.18305 28.081 6.90521C27.3588 7.62737 26.9531 8.60683 26.9531 9.62813V21.1805C26.9531 22.2018 27.3588 23.1812 28.081 23.9034C28.8032 24.6255 29.7826 25.0313 30.8039 25.0313C31.3146 25.0313 31.8043 25.2341 32.1654 25.5952C32.5264 25.9563 32.7293 26.446 32.7293 26.9566V28.882C32.7293 29.9033 32.3236 30.8828 31.6014 31.605C30.8793 32.3271 29.8998 32.7328 28.8785 32.7328C28.3679 32.7328 27.8781 32.9357 27.5171 33.2968C27.156 33.6578 26.9531 34.1476 26.9531 34.6582V38.509C26.9531 39.0196 27.156 39.5094 27.5171 39.8705C27.8781 40.2315 28.3679 40.4344 28.8785 40.4344C31.9424 40.4344 34.8808 39.2173 37.0473 37.0508C39.2137 34.8843 40.4309 31.9459 40.4309 28.882V9.62813C40.4309 8.60683 40.0252 7.62737 39.303 6.90521C38.5808 6.18305 37.6014 5.77734 36.5801 5.77734H30.8039Z"
                  stroke="#FF9500"
                  strokeWidth="3.85078"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.63203 5.77734C8.61074 5.77734 7.63128 6.18305 6.90912 6.90521C6.18696 7.62737 5.78125 8.60683 5.78125 9.62813V21.1805C5.78125 22.2018 6.18696 23.1812 6.90912 23.9034C7.63128 24.6255 8.61074 25.0313 9.63203 25.0313C10.1427 25.0313 10.6324 25.2341 10.9935 25.5952C11.3546 25.9563 11.5574 26.446 11.5574 26.9566V28.882C11.5574 29.9033 11.1517 30.8828 10.4296 31.605C9.70739 32.3271 8.72793 32.7328 7.70664 32.7328C7.196 32.7328 6.70626 32.9357 6.34518 33.2968C5.9841 33.6578 5.78125 34.1476 5.78125 34.6582V38.509C5.78125 39.0196 5.9841 39.5094 6.34518 39.8705C6.70626 40.2315 7.196 40.4344 7.70664 40.4344C10.7705 40.4344 13.7089 39.2173 15.8754 37.0508C18.0419 34.8843 19.259 31.9459 19.259 28.882V9.62813C19.259 8.60683 18.8533 7.62737 18.1311 6.90521C17.409 6.18305 16.4295 5.77734 15.4082 5.77734H9.63203Z"
                  stroke="#FF9500"
                  strokeWidth="3.85078"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[#364153] text-lg md:text-2xl my-4 italic">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FF9500] size-[17px]" />
                ))}
              </div>

              <h4 className="font-semibold text-xl md:text-[28px] text-[#101828]">
                {t.name}
              </h4>
              <p className="text-[#4A5565] text-lg md:text-2xl">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
