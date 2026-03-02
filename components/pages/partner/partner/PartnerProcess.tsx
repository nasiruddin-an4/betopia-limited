"use client";

import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Image from "next/image";

interface StepItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    title: "Apply & Onboard",
    description:
      "Complete the quick application and get onboarded with our partner success team.",
    icon: (<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.1928C0 7.24975 7.24975 0 16.1928 0H57.8313C66.7743 0 74.0241 7.24975 74.0241 16.1928V57.8313C74.0241 66.7743 66.7743 74.0241 57.8313 74.0241H16.1928C7.24975 74.0241 0 66.7743 0 57.8313V16.1928Z" fill="url(#paint0_linear_1707_31302)"/>
<path d="M41.6396 21.5938H27.7601C26.9421 21.5938 26.1576 21.9187 25.5792 22.4971C25.0007 23.0756 24.6758 23.8601 24.6758 24.6781V49.3528C24.6758 50.1708 25.0007 50.9553 25.5792 51.5337C26.1576 52.1122 26.9421 52.4371 27.7601 52.4371H46.2661C47.0842 52.4371 47.8687 52.1122 48.4471 51.5337C49.0255 50.9553 49.3505 50.1708 49.3505 49.3528V29.3046L41.6396 21.5938Z" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M40.0977 21.5938V27.7624C40.0977 28.5804 40.4226 29.365 41.001 29.9434C41.5795 30.5218 42.364 30.8468 43.182 30.8468H49.3507" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.9281 32.3867H30.8438" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M43.1811 38.5547H30.8438" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M43.1811 44.7266H30.8438" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1707_31302" x1="0" y1="0" x2="74.0241" y2="74.0241" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#155DFC"/>
</linearGradient>
</defs>
</svg>
),
  },
  {
    title: "Training & Enablement",
    description:
      "Learn our offerings: Cloud, AI, cybersecurity, multi-cloud solutions, and proprietary products.",
    icon: (<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.1928C0 7.24975 7.24975 0 16.1928 0H57.8313C66.7743 0 74.0241 7.24975 74.0241 16.1928V57.8313C74.0241 66.7743 66.7743 74.0241 57.8313 74.0241H16.1928C7.24975 74.0241 0 66.7743 0 57.8313V16.1928Z" fill="url(#paint0_linear_1707_31316)"/>
<path d="M37.0154 52.4371C45.5326 52.4371 52.4371 45.5326 52.4371 37.0154C52.4371 28.4983 45.5326 21.5938 37.0154 21.5938C28.4983 21.5938 21.5938 28.4983 21.5938 37.0154C21.5938 45.5326 28.4983 52.4371 37.0154 52.4371Z" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37.0147 46.2677C42.125 46.2677 46.2677 42.125 46.2677 37.0147C46.2677 31.9044 42.125 27.7617 37.0147 27.7617C31.9044 27.7617 27.7617 31.9044 27.7617 37.0147C27.7617 42.125 31.9044 46.2677 37.0147 46.2677Z" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37.014 40.0984C38.7175 40.0984 40.0984 38.7175 40.0984 37.014C40.0984 35.3106 38.7175 33.9297 37.014 33.9297C35.3106 33.9297 33.9297 35.3106 33.9297 37.014C33.9297 38.7175 35.3106 40.0984 37.014 40.0984Z" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1707_31316" x1="0" y1="0" x2="74.0241" y2="74.0241" gradientUnits="userSpaceOnUse">
<stop stopColor="#AD46FF"/>
<stop offset="1" stopColor="#9810FA"/>
</linearGradient>
</defs>
</svg>
),
  },
  {
    title: "Generate Leads & Close Deals",
    description:
      "Identify potential clients, submit requirements, and collaborate with Betopia for delivery.",
    icon: (<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.1928C0 7.24975 7.24975 0 16.1928 0H57.8313C66.7743 0 74.0241 7.24975 74.0241 16.1928V57.8313C74.0241 66.7743 66.7743 74.0241 57.8313 74.0241H16.1928C7.24975 74.0241 0 66.7743 0 57.8313V16.1928Z" fill="url(#paint0_linear_1707_31328)"/>
<path d="M43.1841 50.8936V47.8093C43.1841 46.1733 42.5342 44.6042 41.3773 43.4474C40.2205 42.2905 38.6515 41.6406 37.0154 41.6406H27.7624C26.1264 41.6406 24.5574 42.2905 23.4005 43.4474C22.2437 44.6042 21.5938 46.1733 21.5938 47.8093V50.8936" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.3874 35.4702C35.7943 35.4702 38.5561 32.7084 38.5561 29.3015C38.5561 25.8946 35.7943 23.1328 32.3874 23.1328C28.9806 23.1328 26.2188 25.8946 26.2188 29.3015C26.2188 32.7084 28.9806 35.4702 32.3874 35.4702Z" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M52.439 50.8924V47.808C52.438 46.4413 51.9831 45.1135 51.1457 44.0333C50.3083 42.9531 49.1359 42.1815 47.8125 41.8398" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M43.1836 23.3359C44.5105 23.6757 45.6866 24.4474 46.5265 25.5294C47.3663 26.6114 47.8222 27.9421 47.8222 29.3118C47.8222 30.6815 47.3663 32.0123 46.5265 33.0943C45.6866 34.1763 44.5105 34.948 43.1836 35.2877" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1707_31328" x1="0" y1="0" x2="74.0241" y2="74.0241" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C950"/>
<stop offset="1" stopColor="#00A63E"/>
</linearGradient>
</defs>
</svg>
),
  },
  {
    title: "Earn Revenue & Scale",
    description:
      "Receive up to 40% of project value or recurring SaaS revenue. Grow your partnership over time.",
    icon:(<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.1928C0 7.24975 7.24975 0 16.1928 0H57.8313C66.7743 0 74.0241 7.24975 74.0241 16.1928V57.8313C74.0241 66.7743 66.7743 74.0241 57.8313 74.0241H16.1928C7.24975 74.0241 0 66.7743 0 57.8313V16.1928Z" fill="url(#paint0_linear_1707_31339)"/>
<path d="M52.4332 29.3047L39.3248 42.4131L31.6139 34.7023L21.5898 44.7264" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M43.1836 29.3047H52.4366V38.5577" stroke="white" strokeWidth="3.08434" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1707_31339" x1="0" y1="0" x2="74.0241" y2="74.0241" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF9500"/>
<stop offset="1" stopColor="#F54900"/>
</linearGradient>
</defs>
</svg>
),
  },
];

export default function PartnerProcess() {
  return (
    <section className="relative max-w-[1406px] mx-auto px-4 pt-[60px]">
      
      <UnderlineSectionTitle
        title="How It Works"
        wrapperClassName="mb-[18px] text-center text-[#4A5565]"
      />
      <p className="text-[#4A5565] text-center text-lg md:text-2xl mb-16 px-4 md:px-0">
        Simple, transparent process to get you earning in 4 easy steps
      </p>
      {/* connector line */}
      <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-px bg-[#FF950080] mx-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[37px] relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white p-[38px] border-[1.16px] border-[#F3F4F6] rounded-2xl shadow-lg transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            {/* icon */}
            <div className=" flex justify-end items-end">
              {step.icon}
            </div>

            <h3 className="text-xl md:text-[28px] font-bold text-[#0A0A0A] mb-3">
              {step.title}
            </h3>
            <p className="text-lg md:text-2xl text-[#4A5565] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
