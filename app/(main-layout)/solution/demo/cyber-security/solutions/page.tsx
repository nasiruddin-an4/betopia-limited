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
        highlightTitle="Solutions"
        description="Betopia Limited offers Cybersecurity Advisory & Managed Security Services, empowering businesses with tailored protection solutions"
        primaryBtn={{ label: "Get Started", href: "/contact" }}
      />
      <SolutionDetails
        title="Cyber"
        highlightText="Security"
        description={[
          "We provide Cybersecurity Advisory & Managed Security Services, protecting businesses with tailored solutions. We safeguard critical systems and digital assets from evolving threats.",
          "Our services cover infrastructure, networks, applications, and data with real-time monitoring and threat response. We also manage vulnerabilities and simulate attacks to strengthen defenses.",
          "We secure emails, cloud services, and AI systems, ensuring compliance and business continuity. With our end-to-end approach, your organization stays safe and resilient.",

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
