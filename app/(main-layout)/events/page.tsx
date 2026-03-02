import CaseStudiesSection from "./EventSection";
import Hero from "./Hero";
import Upcoming from "./Upcoming";

export default function page() {
  return (
    <div>
      <Hero />
      {/* <ShortDetails/> */}
      <Upcoming />
      <CaseStudiesSection />
    </div>
  );
}
