// components/TransformationPillars.tsx
import React from 'react';
import { 
  TrendingUp, 
  Leaf, 
  BarChart3, 
  Link as LinkIcon, 
  Rocket 
} from 'lucide-react';
import Container from '@/components/layout/Container';

interface Pillar {
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
  iconBg: string;
  imageUrl: string;
}

const pillars: Pillar[] = [
  {
    title: "Human Capital AI",
    description: "Break organizational bottlenecks by creating insight at the heart of decision making, securing genuine outcomes and every powerful data insight.",
    capabilities: ["AI Agents", "Machine Learning", "OCR", "Predictive Analytics", "Conversational AI", "AI-Powered IVR", "Intelligent Automation"],
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    iconBg: "bg-blue-500",
    imageUrl: "/adaptability/1.png"
  },
  {
    title: "Secure Digital Foundation",
    description: "Building enterprise-grade cybersecurity, governance, and compliance frameworks to protect data, infrastructure, and digital assets in an increasingly connected world.",
    capabilities: ["Cybersecurity Operations", "SOC", "ISO 27001", "GDPR Compliance", "Zero Trust Architecture", "Endpoint & Network Security"],
    icon: <Leaf className="w-5 h-5 text-white" />,
    iconBg: "bg-green-500",
    imageUrl: "/adaptability/2.png"
  },
  {
    title: "Cloud & Data Center Excellence",
    description: "Enabling scalable, resilient, and high-performance infrastructure through hybrid cloud, multi-cloud, and modern data center solutions.",
    capabilities: ["AWS", "Microsoft Azure", "Google Cloud", "Hybrid Cloud", "DevOps", "Containerization", "Data Center Infrastructure Management"],
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    iconBg: "bg-orange-600",
    imageUrl: "/adaptability/3.png"
  },
  {
    title: "Connected Enterprise Systems",
    description: "Integrating ERP, CRM, HRM, and business platforms into a unified digital backbone for real-time visibility and operational efficiency.",
    capabilities: ["Odoo ERP", "Custom ERP Development", "CRM Solutions", "Business Process Automation", "API & System Integrations"],
    icon: <LinkIcon className="w-5 h-5 text-white" />,
    iconBg: "bg-fuchsia-600",
    imageUrl: "/adaptability/5.png"
  },
  {
    title: "Rapid Digital Product Innovation",
    description: "Accelerating product development using modern frameworks, agile methodologies, and cloud-native architectures to bring ideas to market faster.",
    capabilities: ["Web & Mobile Applications", "SaaS Platforms", "UI/UX Design", "MVP Development", "Application Modernization"],
    icon: <Rocket className="w-5 h-5 text-white" />,
    iconBg: "bg-blue-600",
    imageUrl: "/adaptability/4.png"
  }
];

const TransformationCard = ({ pillar }: { pillar: Pillar }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl overflow-hidden flex flex-col h-full p-5">
    {/* Image Header */}
    <div className="relative h-48 w-full overflow-hidden">
      <img 
        src={pillar.imageUrl} 
        alt={pillar.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className={`absolute bottom-4 left-4 p-2 rounded-lg ${pillar.iconBg}`}>
        {pillar.icon}
      </div>
    </div>

    {/* Content */}
    <div className="p-3 flex flex-col flex-grow">
      <h3 className="text-xl md:text-3xl pt-2 font-bold text-gray-900 mb-3">
        {pillar.title}
      </h3>
      <p className="text-base lg:text-xl text-gray-500 leading-relaxed mb-6">
        {pillar.description}
      </p>
      
      <div className="mt-auto">
        <p className="text-base lg:text-xl font-semibold text-gray-700 mb-2">Capabilities include:</p>
        <p className=" text-gray-400 leading-relaxed">
          {pillar.capabilities.join(", ")}.
        </p>
      </div>
    </div>
  </div>
);

export default function TransformationPillars() {
  return (
    <section className="bg-gray-50 py-10 lg:py-20 ">
      <Container>
         <h2 className="text-[22px] md:text-[32px] lg:text-[52px] font-bold text-gray-900 mb-2 text-center">
            The Betopia Enterprise <span className='text-[#FF9500]'>Transformation Pillars</span> 
        </h2>
         <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-12 "></div>
        {/* <h2 className="text-[22px] md:text-[32px] lg:text-[52px] font-bold text-gray-900 mb-5 lg:mb-10 tracking-tight">
          The Betopia Enterprise Transformation Pillars
        </h2> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <TransformationCard key={index} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}