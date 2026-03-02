import PageBanner from "@/components/shared/PageBanner";
import SolutionDetails from "../../common/SolutionDetails";
import HighlyEffective from "../../common/HIghlyEffective";
import TrustedBy from "../../common/TrustedBy";
import WorkTogether from "../../common/WorkTogether";
import {
  cloudInfrastructurefaqData,
  CloudInfrastructuresolutions,

} from "@/data/solution";
import FAQSection from "@/components/shared/FAQSection";

const page = () => {
  return (
    <div>
      <PageBanner
        badgeText="Trusted by Fortune 500 Companies"
        normalTitle="Cloud Infrastructure &"
        highlightTitle="Networking Solution"
        description="Betopia Limited offers Cloud Modernization & Managed Services, empowering businesses with tailored cloud solutions"
        primaryBtn={{ label: "Get Started", href: "/contact" }}
        showSecondaryBtn={true}
        secondaryBtn={{ label: "View Demo", href: "#" }}
      />
      <SolutionDetails
        badgeText="Proof Networking Foundations"
        title="Agile, Secure,"
        highlightText="Built for Growth"
        description={[
          "Our Cloud Infrastructure & Networking Solution delivers a unified, scalable, and secure foundation for modern enterprises. From virtual desktops and container orchestration to hybrid cloud and DevOps pipelines, we architect cloud-native environments that accelerate innovation and reduce operational complexity.",
          "We design and deploy intelligent networking across public, private, and hybrid clouds ensuring high availability, low latency, and enterprise-grade security. Whether you're modernizing legacy systems or launching cloud-native applications, our solution adapts to your business needs with precision and speed.",
        ]}
        videoSrc="/videos/solution/cloud3.mp4"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Tailored cloud solutions, seamless migrations, and optimized infrastructure for enhanced performance and scalability."
        solutions={CloudInfrastructuresolutions}
      />
      <TrustedBy />
      <FAQSection
        imageSrc="/service/faq.png"
        faqs={cloudInfrastructurefaqData}
      />
      <WorkTogether />
    </div>
  );
};

export default page;
