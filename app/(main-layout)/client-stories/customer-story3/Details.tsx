import Image from "next/image";

const data = {
  id: 23,
  title:
    "Umrah Guide: Enabling Trusted Digital Companionship for Millions of Pilgrims",
  category: "Customer Story",
  date: "02 Apr 2025",
  image: "/case-studies/Umrah Guide.png",
  assetType: "Product Case Study",
  industry: "Religious Services",
  service: "AI-Driven",
  region: "Middle East & South Asia",
  technology: "Mobile App",
  year: "2025",
  link: "/impact-insights/umrah-guide-digital-companion",
  description:
    "From our perspective as a pilgrimage service provider, we saw a growing gap between the emotional importance of Umrah and the quality of digital tools available to support it. Pilgrims relied heavily on fragmented sources, manual coordination with guides, and word-of-mouth recommendations, which often led to confusion, stress, and inconsistent experiences. We needed a platform that could bring trust, structure, and simplicity into a deeply personal journey.",
  projectOverview:
    "Umrah Guide was built as a digital companion designed to support pilgrims before, during, and after their journey. The platform connects users with verified and experienced guides while offering AI-powered assistance tailored to individual needs. By centralizing guidance, booking, and journey tracking into one application, Umrah Guide transforms how pilgrims prepare for and experience Umrah and Hajj.",
  developmentAndImplementation:
    "The development phase focused on reliability, scalability, and clarity. The application was engineered to perform smoothly across diverse devices and user demographics, including elderly pilgrims and first-time travelers. AI-powered logic was integrated to support personalized recommendations, while the frontend experience was optimized to remain fast, distraction-free, and easy to navigate even under limited connectivity conditions.",
  challengesAndProblems:
    "Prior to this initiative, pilgrims faced multiple challenges such as unclear guidance flows, language barriers, and difficulty identifying trustworthy guides. Many applications attempted to solve these issues but introduced complexity instead. As a result, users often abandoned digital tools altogether and reverted to offline methods, limiting visibility and coordination.",
  solutionsAndBenefits:
    "Umrah Guide simplified the entire experience by focusing on essential user needs. Clear task flows, consistent layouts, and intelligent guidance reduced friction across the journey. From our standpoint, the solution increased user confidence, reduced dependency on external coordination, and enabled pilgrims to focus on worship rather than logistics. Engagement levels improved significantly due to the app’s clarity and reliability.",
  userPersonaAndFeedback:
    "Guides and organizers also benefited from the platform. Managing bookings, schedules, and feedback became more efficient, reducing manual follow-ups and miscommunication. Feedback from pilgrims consistently highlighted the sense of reassurance the app provided, especially through step-by-step rituals, clear Arabic text presentation, and the absence of intrusive advertisements.",
  informationArchitectureAndWireframing:
    "The information architecture was carefully designed to support both pilgrims and guides through clearly defined journeys. From authentication to booking management and support, every screen served a specific purpose. Wireframes validated these flows early on, ensuring usability before visual refinement. The final design language reflects calmness, trust, and accessibility, aligning with the spiritual nature of the journey.",
};

export default function Details() {
  return (
    <div className="max-w-275 mx-auto px-4 sm:px-6 lg:px-8 pb-10 xl:pb-20 pt-30 xl:pt-45">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-[#F69348] mb-2">
          {data.category} · {data.assetType}
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight text-[#0F172A]">
          {data.title}
        </h1>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-3">
          <span>{data.date}</span>
          <span>• {data.region}</span>
          <span>• {data.year}</span>
          <span>• {data.industry}</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-60] sm:h-100 xl:h-145 rounded-2xl overflow-hidden mb-6 lg:mb-12">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="space-y-5 lg:space-y-10">
        <ContentSection title="Client Perspective">
          <p>{data.description}</p>
        </ContentSection>

        {/* <ContentSection title="Project Overview">
          <p>{data.projectOverview}</p>
        </ContentSection> */}

        {/* <ContentSection title="Development & Implementation">
          <p>{data.developmentAndImplementation}</p>
        </ContentSection> */}

        <ContentSection title="Challenges Before the Project">
          <p>{data.challengesAndProblems}</p>
        </ContentSection>

        <ContentSection title="Solutions & Outcomes">
          <p>{data.solutionsAndBenefits}</p>
        </ContentSection>

        {/* <ContentSection title="Design & Branding">
          <p>{data.designAndBranding}</p>
        </ContentSection> */}

        <ContentSection title="Information Architecture & Wireframing">
          <p>{data.informationArchitectureAndWireframing}</p>
        </ContentSection>
      </div>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2 lg:mb-4">
        {title}
      </h2>
      <div className="text-base md:text-lg xl:text-xl  text-[#475569] max-w-230">
        {children}
      </div>
    </section>
  );
}
