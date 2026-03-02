import Hero from "./Hero";
import TestimonialSlider from "@/components/pages/home/Testimonial";
import ShortDetails from "./ShortDetails";
import CustomerStorySection from "./CustomerStory";

export default function page() {
  return (
    <div>
      <Hero />
      <ShortDetails />
      {/* <CaseStudiesSection /> */}
      <CustomerStorySection />
      <TestimonialSlider />
    </div>
  );
}
