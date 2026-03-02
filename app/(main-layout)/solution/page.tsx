import SolutionMain from '@/components/pages/solution/SolutionMain'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Enterprise Technology Solutions | Cloud, Security & Digital Platforms | Betopia Limited",

  description:
    "Enterprise technology solutions spanning cloud infrastructure, cybersecurity, data, AI, and digital platforms—designed to improve scalability, security, and operational efficiency by Betopia Limited.",

  keywords: [
    "enterprise technology solutions",
    "IT infrastructure solutions",
    "cloud and security solutions",
    "enterprise cybersecurity solutions",
    "hybrid cloud solutions",
    "digital transformation solutions",
    "AI and data solutions",
    "Betopia Limited",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/solution",
  },

  openGraph: {
    title:
      "Enterprise Technology Solutions | Cloud, Security & Digital Platforms | Betopia Limited",
    description:
      "Enterprise technology solutions spanning cloud infrastructure, cybersecurity, data, AI, and digital platforms—designed to improve scalability, security, and operational efficiency by Betopia Limited.",
    url: "https://betopialimited.com/solution",
    siteName: "Betopia Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <SolutionMain/>
    </div>
  )
}

export default page
