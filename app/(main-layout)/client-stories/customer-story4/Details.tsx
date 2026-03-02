import Image from "next/image";

const data = {
  id: 24,
  title: "SayTask: Redefining Task Management Through Conversational AI",
  category: "Customer Story",
  date: "10 May 2025",
  image: "/case-studies/say-task/3.png",
  assetType: "Product Customer Story",
  industry: "SaaS",
  service: "AI Product & Application Development",
  region: "Global",
  technology: "Conversational AI",
  year: "2025",
  link: "/impact-insights/saytask-conversational-productivity",
  description:
    "From our perspective as a productivity-focused product team, we recognized that traditional task management tools often demand too much manual effort. Users were required to type, categorize, and structure tasks themselves, which created friction and reduced consistency. We wanted a solution that felt natural, fast, and human—one that could understand intent rather than force users to adapt to rigid interfaces.",
  projectOverview:
    "SayTask was conceived as a voice-assisted productivity application that allows users to capture and manage tasks using natural language. By speaking or typing plans as they naturally think them, users can instantly convert ideas into actionable reminders or notes. The product prioritizes simplicity, accessibility, and speed, ensuring that task creation feels effortless rather than administrative.",
  developmentAndImplementation:
    "The development process focused on integrating conversational AI with a clean, intuitive interface. Natural Language Understanding enables the system to extract dates, times, and actions from user input, while contextual responses confirm and refine tasks through conversation. Automation features were added to trigger reminders, alerts, or saved notes, significantly reducing manual input and user error.",
  challengesAndProblems:
    "Before SayTask, users often struggled with fragmented productivity workflows, cluttered interfaces, and repetitive task entry. Managing reminders across different apps led to missed actions and reduced trust in digital tools. From a business perspective, monitoring user engagement and subscription behavior also lacked clarity and actionable insight.",
  solutionsAndBenefits:
    "SayTask addressed these challenges by introducing a conversational task flow that mirrors how users think and speak. Tasks are confirmed, edited, and managed through dialogue, minimizing friction. On the administrative side, a dedicated dashboard provides a comprehensive view of user engagement, subscriptions, and system performance. This dual-layer approach improved user satisfaction while enabling informed decision-making for administrators.",
  userFlowAndExperience:
    "The user flow was designed to feel seamless, guiding users from login to task creation, confirmation, and follow-up actions without cognitive overload. Conversational interactions replace complex forms, allowing users to manage reminders and notes with clarity and confidence. The experience feels guided, calm, and intentional rather than overwhelming.",
  visualDesignAndStyleGuide:
    "SayTask’s visual system emphasizes calmness and clarity through a minimalist aesthetic, modern typography, and consistent visual hierarchy. Subtle motion and purposeful color usage support conversational interactions without distraction. This cohesive style ensures that both the mobile app and admin dashboard maintain a unified, data-focused, and approachable identity.",
  userFeedback:
    "Users consistently described SayTask as natural and intuitive, highlighting how the conversational interface removed friction from task creation. The clean design made information easy to find and manage, reinforcing trust and encouraging long-term adoption of the platform.",
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
          className="object-center "
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

        {/* <ContentSection title="Information Architecture & Wireframing">
          <p>{data.informationArchitectureAndWireframing}</p>
        </ContentSection> */}
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
