"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Zahirul Bhuiyan",
    role: "CEO",
    image: "/global/zahirul.png",
    quote:
      "Our sales partners grew revenue 3x in 6 months by leveraging Betopia's enterprise solutions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ronald Vergera",
    role: "CMO",
    image: "/global/ronald.png",
    quote:
      "White-label partners expanded offerings without hiring in-house developers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nehir Can Buyukyazi",
    role: "CEO",
    image: "/global/nehir.png",
    quote:
      "By leveraging Betopia's enterprise-grade solutions, our sales partners achieved 3x revenue growth in just six months",
    rating: 5,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="relative py-16 lg:py-24 px-4 overflow-hidden bg-gray-50">
      {/* Background Image */}
      <Image
        src="/partner/t.png"
        alt="background"
        fill
        className="object-contain opacity-10"
        priority
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-sm tracking-wider uppercase mb-3">
            Partner Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What our partners achieve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from industry leaders who've transformed their business through
            the Betopia Alliance
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition"
              >
                {/* Profile */}
                <div className="flex items-end gap-4 mb-8">
                  <div className="relative border border-[#D8D8D8] p-2 rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 -left-0.5 bg-[#FF9500] rounded-full p-0.5">
                      <svg
                        className="w-4 h-4 text-white transform rotate-180"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  <div className="border-l-2 pl-2 border-[#FF9500]">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#5D6B81] ">{testimonial.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#5D6B81] text-lg md:text-xl lg:text-2xl italic mb-6 ">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FEB72B] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#FF9500] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2 ml-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#FF9500] hover:text-[#FF9500] transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#FF9500] text-white flex items-center justify-center  transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
