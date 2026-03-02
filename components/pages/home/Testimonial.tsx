"use client";
import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import React from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  maxRating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ronald Vergera",
    date: "Mar 10, 2024",
    rating: 4,
    maxRating: 8,
    text: "“Betopia has been instrumental in delivering our digital platforms, AI-powered solutions, and custom web applications. Their professionalism, quality of work, on-time delivery, and clear communication truly stand out. If you’re looking for a reliable technology partner, Betopia is an excellent choice. They are based in Bangladesh, and I couldn’t be prouder to recommend their work.”",
    image: "/testimonial/Ronald.png",
  },
  {
    id: 2,
    name: "BAG (USA)",
    date: "Mar 15, 2024",
    rating: 5,
    maxRating: 8,
    text: "“On behalf of the Bangladesh Association of Georgia and the Election Commission 2025–2026...”",
    image: "/testimonial/bag-short-logo.png",
  },
  {
    id: 3,
    name: "Stacey Michelon",
    date: "Mar 28, 2025",
    rating: 4,
    maxRating: 8,
    text: "“Working with Betopia was a smooth experience from start to finish. The team was responsive, understood our requirements clearly, and delivered the work as promised. Communication was consistent, which made the collaboration easy.”",
    image: "/testimonial/stacy.jpeg",
  },
  {
    id: 4,
    name: "Chris French",
    date: "June 10, 2025",
    rating: 6,
    maxRating: 8,
    text: "“Betopia handled the project with professionalism and flexibility. They were quick to adapt to changes, kept everything well organized, and maintained quality throughout the process. Overall, a reliable team to work with.”",
    image: "/testimonial/chris.jpeg",
  },
  {
    id: 5,
    name: "Robert Bailey",
    date: "Aug 10, 2025",
    rating: 4,
    maxRating: 8,
    text: "“What stood out was the structured approach and attention to detail. Progress updates were clear, timelines were respected, and post-delivery support was helpful. The experience was straightforward and efficient.”",
    image: "/testimonial/r.png",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length];
  const current = testimonials[currentIndex];
  const next = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <Container>
      <div className="lg:pt-10 pb-10 lg:pb-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl xl:text-[52px] font-bold mb-4">
            “Real Stories, Real Impact”
          </h2>
            <PageSubtitle
            text=" See how our solutions helped businesses grow faster and smarter."
            className="text-gray-600"
          />

        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center gap-10">

          {/* LEFT PREVIEW → ONLY XL */}
          <div className="hidden xl:block relative">
            <div className="w-[234px] h-[370px] overflow-hidden">
              <Image fill src={prev.image} alt={prev.name} className="object-cover" />
              <div className="absolute inset-0 bg-[#1DB487]/50" />
            </div>
            <button
              onClick={prevSlide}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaArrowLeft className="text-white text-xl" />
            </button>
          </div>

          {/* CENTER CARD → ALL DEVICES */}
          <div className="bg-[#F0F0F1] w-full max-w-[900px]">
            <div className="flex flex-col md:flex-row">
              <Image
                src={current.image}
                alt={current.name}
                width={234}
                height={370}
                className="w-full md:w-[234px] h-[320px] md:h-[370px] object-cover"
              />

              <div className="p-6 md:p-8">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">{current.date}</span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#FA9200]" />
                    <span>
                      {current.rating}/{current.maxRating}
                    </span>
                  </div>
                </div>

                <p className="leading-relaxed text-gray-800 lg:text-lg">
                  {current.text}
                </p>

                <div className="pt-4 mt-4 border-t">
                  <h4 className="font-semibold text-lg">{current.name}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PREVIEW → ONLY XL */}
          <div className="hidden xl:block relative">
            <div className="w-[234px] h-[370px] overflow-hidden">
              <Image fill src={next.image} alt={next.name} className="object-cover" />
              <div className="absolute inset-0 bg-[#1DB487]/50" />
            </div>
            <button
              onClick={nextSlide}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaArrowRight className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile + MD arrows */}
        <div className="flex justify-center gap-6 mt-6 xl:hidden">
          <button onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? "w-8 bg-[#FF9500]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
