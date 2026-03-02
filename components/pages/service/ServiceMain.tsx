// import PageBanner from "@/components/shared/PageBanner";
// import Support from "./Support";
// import OurCapabilities from "./OurCapabilities";
// import Together from "./Together";
// import FAQSection from "@/components/shared/FAQSection";
// import OurStrategy from "./OurStrategy";
// import HighlyEffectiveSolutions from "./HighlyEffectiveSolutions ";
// import LatestThoughts from "./LatestThoughts";
// import { solutionfaqData } from "@/data/solution";

import CoreServices from "./CoreServices";
import ServiceBanner from "./ServiceBanner";
import ServiceCTA from "./ServiceCTA";
import WhyChooseBetopia from "./WhyChooseBetopia";

const ServiceMain = () => {
  return (
    <div>
      <ServiceBanner/>
      <CoreServices/>
      <WhyChooseBetopia/>
      <ServiceCTA/>
      {/* <PageBanner
        badgeText="Enterprise-Grade Security"
        normalTitle="Endpoint Management &"
        highlightTitle=" Security Solutions"
        description="Betopia Limited delivers customized Endpoint, Identity, and Productivity solutions, ensuring seamless security and operational efficiency."
        primaryBtn={{ label: "Request Demo", href: "#" }}
        showSecondaryBtn={true}
        secondaryBtn={{ label: "View Pricing", href: "#" }}
      />
      <Support /> */}
      {/* <OurCapabilities /> */}
      {/* <HighlyEffectiveSolutions />
      <LatestThoughts/>
      <OurStrategy/>
      <FAQSection
        imageSrc="/service/faq.png"
        faqs={solutionfaqData}
      />

      <Together /> */}
    </div>
  );
};

export default ServiceMain;
