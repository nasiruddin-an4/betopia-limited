import PageBanner from "@/components/shared/PageBanner";
import SolutionDetails from "../../common/SolutionDetails";
import HighlyEffective from "../../common/HIghlyEffective";
import {
  EnterpriseInfrastructuresolutions,
  enterpriseNetworkingfaqData,
} from "@/data/solution";
import TrustedBy from "../../common/TrustedBy";
import WorkTogether from "../../common/WorkTogether";
import FAQSection from "@/components/shared/FAQSection";

const page = () => {
  return (
    <div>
      <PageBanner
        badgeText="Trusted by Fortune 500 Companies"
        normalTitle="Enterprise Networking"
        highlightTitle="Solutions"
        description="Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions"
        primaryBtn={{ label: "Get Started", href: "/contact" }}
        showSecondaryBtn={true}
        secondaryBtn={{ label: "View Demo", href: "#" }}
      />
      <SolutionDetails
        badgeText="Networking Solutions"
        title="Secure, Scalable "
        highlightText="Accelerate"
        description={[
          "Our Enterprise Networking Solutions deliver a unified, intelligent, and secure foundation for modern digital enterprises.",
          "From core infrastructure to edge connectivity, we provide scalable, high-performance networking that supports hybrid workforces, cloud migration, and mission-critical applications.",
        ]}
        videoSrc="/videos/solution/cloud2.mp4"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={EnterpriseInfrastructuresolutions}
      />
      <TrustedBy />
      <FAQSection
        imageSrc="/service/faq.png"
        faqs={enterpriseNetworkingfaqData}
      />
      <WorkTogether />
    </div>
  );
};

export default page;
