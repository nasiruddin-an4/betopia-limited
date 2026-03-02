import HeroSection from "../../../components/pages/resource/HeroSection";
import TalentCardList from "../../../components/pages/resource/enterprise-talent-card/TalentCardList";
import BenefitSection from "../../../components/pages/resource/BenefitSection";
import FAQSection from "@/components/shared/FAQSection";
import { resourcefaqData } from "@/data/resource";
import ResourceCTA from "@/components/pages/resource/ResourceCTA";
import TalentCapabilities from "@/components/pages/resource/TalentCapabilities";
import ResourceForm from "@/components/pages/resource/ResourceForm";
import Trust from "@/components/pages/resource/Trust";
import HowItWork from "@/components/pages/resource/HowItWork";
import AccelerateSection from "@/components/pages/resource/AccelerateSection";
import TestimonialCards from "@/components/pages/resource/TestimonialCards";
import PricingSection from "@/components/pages/resource/PricingSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <TalentCardList />
      <BenefitSection />
      <TalentCapabilities />
      <HowItWork />
      <AccelerateSection />
      <ResourceForm />
      <TestimonialCards />
      <PricingSection />
      <FAQSection imageSrc="/service/faq.png" faqs={resourcefaqData} />
      <Trust />
      <ResourceCTA />
    </div>
  );
}
