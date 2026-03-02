import Image from "next/image";

const data = {
  id: 21,
  title: "Chase The Cash SA: Accelerating a Real-Time Treasure Hunt Experience",
  category: "Customer Story",
  date: "05 Feb 2025",
  image: "/case-studies/Management.png",
  assetType: "Product Case Study",
  industry: " ",
  service: "Product Design & Application Development",
  region: "South Africa",
  technology:
    "AI-powered Backend, Mobile Application, QR Code Integration, Live Map Tracking",
  year: "2025",
  link: "/impact-insights/chase-the-cash-sa",
  description:
    "As the creators of Chase The Cash SA, we set out to deliver a thrilling real-world treasure hunt that could engage users beyond traditional gaming experiences. However, as the product evolved, it became clear that turning this vision into a seamless, real-time digital journey was more complex than anticipated. Users often struggled with unclear navigation, inconsistent discovery flows, and moments of confusion when transitioning between clues and locations. To truly bring our idea to life, we needed a partner who could understand the experience from the user’s perspective and help us transform complexity into clarity.",
  projectOverview:
    "Chase The Cash SA is an immersive treasure hunt platform where participants follow cryptic clues across real-world locations in pursuit of hidden rewards. Along the journey, users solve puzzles, scan QR codes, upload proof of progress, and track their movement through a live interactive map. For us, the success of the product depended not just on features, but on how naturally users could move from one challenge to the next while staying engaged and motivated.",
  developmentAndImplementation:
    "Working closely with the development team, we focused on building a stable, scalable foundation that could support real-time interactions and growing user demand. The team implemented core application features while integrating AI-powered backend and frontend capabilities to enhance performance, responsiveness, and reliability. Their attention to system optimization and user flow ensured that the platform was not only technically sound, but also ready for launch in a live, competitive environment.",
  challengesAndProblems:
    "Before the transformation, users frequently encountered cluttered map markers, unclear navigation cues, and an overall lack of continuity in the experience. These challenges disrupted engagement and made it harder for participants to stay immersed in the treasure hunt. At times, system instability further affected confidence in the platform, highlighting the need for a more refined and user-focused solution.",
  solutionsAndBenefits:
    "The solution focused on simplifying the journey while preserving the excitement of the hunt. Navigation was redesigned with smart highlighting to guide users clearly between locations, rewards were presented more intuitively, and system stability was significantly improved to prevent interruptions. AI-driven logic now supports smoother progression through challenges, resulting in a more engaging, intuitive, and enjoyable experience for users, while giving us confidence in the platform’s scalability and reliability.",
  designAndBranding:
    "From a branding standpoint, the logo and app icon successfully captured the bold and competitive spirit of Chase The Cash SA. The modern, energetic design reflects the thrill of discovery, while the inclusion of the localized “SA” reinforces regional identity and cultural relevance. This visual consistency helped strengthen brand recognition and trust among users.",
  informationArchitectureAndWireframing:
    "A clear information architecture was established to guide users from the splash screen through secure login, registration, OTP verification, and core gameplay flows. Early wireframing translated these journeys into intuitive screen layouts, allowing us to validate usability before final UI development. This approach ensured a smooth, logical navigation experience that supports both first-time users and returning participants.",
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
      <div className="text-base md:text-lg xl:text-xl  text-[#475569] max-w-230">
        {children}
      </div>
    </section>
  );
}
