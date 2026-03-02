import FAQSection from "@/components/shared/FAQSection";
import PageBanner from "@/components/shared/PageBanner";
import TrustedBy from "../../common/TrustedBy";
import WorkTogether from "../../common/WorkTogether";
import { enterpriseInfrastructurefaqData } from "@/data/solution";
import SolutionDetails from "../../common/SolutionDetails";
import EffectiveSolution from "./EffectiveSolution";

const page = () => {
  return (
    <div>
      <PageBanner
        badgeText="Trusted by Fortune 500 Companies"
        normalTitle="Enterprise Infrastructure "
        highlightTitle="Solutions"
        description="Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions"
        primaryBtn={{ label: "Get Started", href: "/contact" }}
        showSecondaryBtn={true}
        secondaryBtn={{ label: "View Demo", href: "#" }}
      />
           <SolutionDetails
        badgeText="Networking Solutions"
        title="Unified. Resilient"
        highlightText="Ready for Tomorrow"
        description={[
          "Enterprise Infrastructure Solutions give your business a strong, secure, and flexible IT setup. We provide servers, storage, virtualization, and tools to manage containers, making it easy for your business to grow. Built-in backup, recovery, and monitoring keep your systems safe, while centralized infrastructure and virtual desktops let your team work securely from anywhere, save money, and stay productive.",
          "Our solutions grow with your business, keeping your IT reliable and supporting long-term success.",
        ]}
        videoSrc="/videos/solution/cloud1.mp4"
      />
      <EffectiveSolution/>
      <TrustedBy />
      <FAQSection
        imageSrc="/service/faq.png"
        faqs={enterpriseInfrastructurefaqData}
      />
      <WorkTogether />
    </div>
  );
};

export default page;
