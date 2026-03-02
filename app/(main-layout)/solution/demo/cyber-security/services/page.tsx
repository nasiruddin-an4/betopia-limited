import PageBanner from '@/components/shared/PageBanner'
import SolutionDetails from '../../common/SolutionDetails'
import HighlyEffective from '../../common/HIghlyEffective'
import { CloudInfrastructuresolutions } from '@/data/solution'

const page = () => {
  return (
    <div>
      <PageBanner
        badgeText="Enterprise Cybersecurity"
        titleVariant="oneline"
        normalTitle="Cyber Security"
        highlightTitle="Services"
        description="Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions"
        primaryBtn={{ label: "Get Started", href: "/contact" }}
      />
      <SolutionDetails
        title="Holistic Cyber"
        highlightText="Security"
        description={[
          "We provide expert Cybersecurity Advisory & Managed Security Services, customizing defenses to protect what matters most.",
          "Our approach includes continuous monitoring, threat detection & response, vulnerability management, and attack simulations to proactively strengthen your defenses. We also ensure email, cloud services, and AI systems are protected and compliant, reducing risk across all surfaces.",
          "With an end-to-end mindset, we build resilient security frameworks that support business continuity, regulatory compliance, and long-term growth. Your organization stays secure, agile, and ready to face whatever’s next.",

        ]}
        videoSrc="/videos/solution/cyber.mp4"
      />
      <HighlyEffective
        titleNormal="Highly Effective"
        titleHighlight="Solutions"
        description="Enterprise-grade cybersecurity solutions designed to protect, detect, and respond to threats"
        solutions={CloudInfrastructuresolutions}
      />

    </div>
  )
}

export default page
