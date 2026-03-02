import CoreBusinessApplications from "./CoreBusinessApplications";
import Hero from "./Hero";
import HighlyEffectiveSolutions from "./HighlyEffectiveSolutions";
import ORMPlatforms from "./ORMPlatforms";
import WhyChooseSection from "./WhyChooseSolution";
import {
  applicationchooseData,
  applicationchooseData2,
  applicationchooseData3,
  OEMPlatforms,
  OEMPlatforms2,
  OEMPlatforms3,
} from "@/data/solution";
import LeadingPlatform from "./LeadingPlatform";
import { businessapplicationwhyBetopiaContent } from "../batabase-business-analytics/page";
import WhyBetopia from "./WhyBetopia";
import CTA from "./CTA";
import SolutionAbout from "./SolutionAbout";

export default function page() {
  return (
    <div>
      <Hero />
      <CoreBusinessApplications />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Enterprise Resource <br /> Planning (ERP)
          </>
        }
        description="ERP solutions act as the central system of record, integrating finance, procurement, inventory, manufacturing, and operations into a unified platform that enables control, accuracy, and scalability."
        imageSrc="/solution/business-application/about.png"
      />
      <HighlyEffectiveSolutions
        normalTitle="Highly Effective"
        highlightTitle="Solutions"
        imageSrc="/solution/business-application/high.png"
        blocks={[
          {
            title: "Core Functional Capabilities",
            iconType: "check",
            items: [
              "Financial management, accounting, and reporting",
              "Procurement and supplier management",
              "Inventory, supply, and demand planning",
              "Manufacturing and operational control",
              "Project costing, budgeting, and compliance",
            ],
          },
          {
            title: "Custom Development Capabilities",
            iconType: "settings",
            items: [
              "Local statutory and tax compliance extensions",
              "Industry-specific costing, pricing, and approval logic",
              "Custom reporting, controls, and integrations",
            ],
          },
        ]}
      />
      <WhyChooseSection
        normalText="Why Choose"
        highlightText="Our Solutions"
        data={applicationchooseData}
      />
      <ORMPlatforms
        normalText="OEM Platforms"
        highlightText="We Deliver"
        items={OEMPlatforms}
      />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Customer Relationship <br /> Management (CRM)
          </>
        }
        description="CRM solutions enable organizations to manage sales, marketing, and customer service through a single platform, delivering consistent engagement and complete customer visibility."
        imageSrc="/solution/business-application/about2.png"
      />
      <HighlyEffectiveSolutions
        normalTitle="Highly Effective"
        highlightTitle="Solutions"
        imageSrc="/solution/business-application/high2.png"
        blocks={[
          {
            title: "Core Functional Capabilities",
            iconType: "check",
            items: [
              "Sales pipeline and opportunity management",
              "Marketing automation and lead nurturing",
              "Customer service and case management",
              "Unified customer data and engagement insights",
            ],
          },
          {
            title: "Custom Development Capabilities",
            iconType: "settings",
            items: [
              "Custom sales workflows and approval hierarchies",
              "Partner and customer self-service portals",
              "Advanced pricing, discount, and commission logic",
              "ERP and third-party system integrations",
            ],
          },
        ]}
      />
      <WhyChooseSection
        normalText="Why Choose"
        highlightText="Our Solutions"
        data={applicationchooseData2}
      />
      <ORMPlatforms
        normalText="OEM Platforms"
        highlightText="We Deliver"
        items={OEMPlatforms2}
      />
      <SolutionAbout
        badgeText="What We Do"
        title={
          <>
            Human Capital <br /> Management (HCM)
          </>
        }
        description="HCM solutions support the entire employee lifecycle, enabling organizations to manage talent efficiently while maintaining compliance and employee satisfaction."
        imageSrc="/solution/business-application/about3.png"
      />
      <HighlyEffectiveSolutions
        normalTitle="Highly Effective"
        highlightTitle="Solutions"
        imageSrc="/solution/business-application/high3.png"
        blocks={[
          {
            title: "Core Functional Capabilities",
            iconType: "check",
            items: [
              "Core HR and employee data management",
              "Payroll, benefits, and statutory compliance",
              "Talent acquisition, onboarding, and performance management",
              "Learning, development, and workforce analytics",
            ],
          },
          {
            title: "Custom Development Capabilities",
            iconType: "settings",
            items: [
              "Country-specific payroll and HR policy extensions",
              "Custom approval workflows and self-service portals",
              "Integration with finance, attendance, and identity systems",
            ],
          },
        ]}
      />
      <WhyChooseSection
        normalText="Why Choose"
        highlightText="Our Solutions"
        data={applicationchooseData3}
      />
      <ORMPlatforms
        normalText="OEM Platforms"
        highlightText="We Deliver"
        items={OEMPlatforms3}
        containerClassName="pb-10 lg:pb-20"
      />
      <LeadingPlatform />
      <WhyBetopia content={businessapplicationwhyBetopiaContent} />
      <CTA />
    </div>
  );
}
