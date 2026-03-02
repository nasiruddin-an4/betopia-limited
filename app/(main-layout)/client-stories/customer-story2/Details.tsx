import Image from "next/image";

const data = {
  id: 22,
  title:
    "Umrah Guide: Transforming the Pilgrimage Experience with AI-Powered Guidance",
  category: "Customer Story",
  date: "18 Mar 2025",
  image: "/case-studies/User Testimonial3.png",
  assetType: "Product Case Study",
  industry: "Travel & Religious Services",
  service: "AI-Powered Mobile App Development",
  region: "Middle East",
  technology: "Mobile Application",
  year: "2025",
  link: "/impact-insights/umrah-guide",
  description:
    "As pilgrims ourselves, we understood that performing Umrah and Hajj is a deeply spiritual journey, yet many digital tools available today fail to support pilgrims in a meaningful and intuitive way. Existing apps often felt cluttered, difficult to navigate, and overwhelming, especially for first-time visitors to Mecca and Madina. We needed a solution that could simplify the journey, provide trusted guidance, and allow pilgrims to focus on their spiritual purpose rather than managing fragmented information.",
  projectOverview:
    "Umrah Guide was envisioned as an AI-powered companion that supports pilgrims throughout their sacred journey. The app enables users to find and book experienced guides for key locations such as the Sacred Mosque in Mecca and the Prophet’s Mosque in Madina. By combining expert human guidance with intelligent digital support, the platform ensures pilgrims receive accurate, personalized assistance at every stage of their Umrah and Hajj experience.",
  developmentAndImplementation:
    "During development, the focus was on building a robust and scalable application that could serve both pilgrims and guides effectively. Core features were implemented alongside AI-powered backend and frontend integrations to enhance personalization, performance, and reliability. The result was a seamless, launch-ready application optimized for real-world usage, even during peak pilgrimage seasons when demand and user activity are at their highest.",
  challengesAndProblems:
    "Before Umrah Guide, pilgrims often struggled with applications that were poorly structured, visually inconsistent, and slow to respond. Navigation issues and information overload made it difficult to complete simple tasks such as finding guidance or understanding next steps in their journey. These challenges reduced trust in digital tools at a time when clarity and reassurance were most needed.",
  solutionsAndBenefits:
    "Umrah Guide addressed these challenges by introducing a clean, intuitive interface with consistent layouts and fast load times. Tasks such as booking guides, accessing step-by-step rituals, and managing trip details were simplified to reduce cognitive load. From our perspective, the app significantly improved user satisfaction and engagement, allowing pilgrims to move confidently through their journey while feeling supported and informed.",
  userPersonaAndFeedback:
    "The platform also considered the needs of experienced guides like Omar Al-Farhan, who require efficient tools to manage clients, schedules, and feedback. Feedback from users highlighted the value of clear Arabic text visibility, ad-free content, and structured guidance that enhanced focus and spiritual connection. Many pilgrims shared that the app helped them experience Umrah with greater peace of mind and understanding.",
  informationArchitectureAndWireframing:
    "A well-defined information architecture ensured smooth navigation across authentication, dashboards, profiles, bookings, and support features. Wireframes translated these flows into clear visual structures, validating usability before high-fidelity design. Supported by a modern style guide using thoughtful color palettes and Poppins typography, the final experience feels calm, accessible, and purpose-driven throughout the app.",
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
      <div className="relative w-full h-60 sm:h-100 xl:h-145 rounded-2xl overflow-hidden mb-6 lg:mb-12">
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
      <div className="text-base md:text-lg xl:text-xl text-[#475569] max-w-230">
        {children}
      </div>
    </section>
  );
}
