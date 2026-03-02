'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronRight, BiCheckCircle } from 'react-icons/bi'
import { motion, AnimatePresence } from "framer-motion"
import { JSX } from 'react/jsx-dev-runtime'


type ServiceItem = {
  title: string
  description: string
  link: string
  icon: string
}

type Solution = {
  id: number
  title: string
  link: string
  icon: string
  description: string
  services: ServiceItem[]
}
 


const solutions: Solution[] = [
 {
  id: 1,
  icon: "",
  link: "/solutions/identity-management",
  title: "Services",
  description:
    "In today’s digital-first world, identity is the new perimeter. Our Identity Management & Security Solutions provide a unified framework to protect, govern, and enable digital identities.",
  services: [
    {
      title: "Cloud Modernization",
      description:
        "Migrate and modernize workloads for scalable and secure cloud environments. ",
      link: "/services/cloud-modernization",
      icon: "/icons/cloud.svg",
    },
    {
      title: "Cybersecurity & Compliance",
      description:
        "End-to-end security with compliance-ready frameworks and threat protection.",
      link: "/services/cybersecurity",
      icon: "/icons/security.svg",
    },
    {
      title: "AI & Analytics",
      description:
        "AI-powered insights and analytics to drive smarter decisions.",
      link: "/services/ai-analytics",
      icon: "/icons/ai.svg",
    },
    {
      title: "Resource Augmentation",
      description:
        "Scale your team with experienced engineers and IT professionals.",
      link: "/services/resource-augmentation",
      icon: "/icons/team.svg",
    },
  ],
},
 {
  id: 2,
  icon: "",
  link: "/solutions/identity-management",
  title: "Solutions",
  description:
    "In today’s digital-first world, identity is the new perimeter. Our Identity Management & Security Solutions provide a unified framework to protect, govern, and enable digital identities.",
  services: [
    {
      title: "Microsoft",
      description:
        "Migrate and modernize workloads for scalable and secure cloud environments.",
      link: "/services/cloud-modernization",
      icon: "/icons/cloud.svg",
    },
    {
      title: "Google Cloud",
      description:
        "End-to-end security with compliance-ready frameworks and threat protection.",
      link: "/services/cybersecurity",
      icon: "/icons/security.svg",
    },
    {
      title: "AWS",
      description:
        "AI-powered insights and analytics to drive smarter decisions.",
      link: "/services/ai-analytics",
      icon: "/icons/ai.svg",
    }, 
  ],
},
 {
  id: 3,
  icon: "",
  link: "/solutions/identity-management",
  title: "Products",
  description:
    "In today’s digital-first world, identity is the new perimeter. Our Identity Management & Security Solutions provide a unified framework to protect, govern, and enable digital identities.",
  services: [
    {
      title: "In-house ERP",
      description:
        "Migrate and modernize workloads for scalable and secure cloud environments.",
      link: "/services/cloud-modernization",
      icon: "/icons/cloud.svg",
    },
    {
      title: "HRMS",
      description:
        "Migrate and modernize workloads for scalable and secure cloud environments.",
      link: "/services/cloud-modernization",
      icon: "/icons/cloud.svg",
    },
    {
      title: "POS",
      description:
        "End-to-end security with compliance-ready frameworks and threat protection.",
      link: "/services/cybersecurity",
      icon: "/icons/security.svg",
    },
    {
      title: "Voting & Governance Systems",
      description:
        "AI-powered insights and analytics to drive smarter decisions.",
      link: "/services/ai-analytics",
      icon: "/icons/ai.svg",
    }, 
  ],
},
 {
  id: 4,
  icon: "",
  link: "/solutions/identity-management",
  title: "Partnership Program",
  description:
    "In today’s digital-first world, identity is the new perimeter. Our Identity Management & Security Solutions provide a unified framework to protect, govern, and enable digital identities.",
  services: [
    {
      title: "White-label & co-branded ecosystem for IT & consulting firms",
      description:
        "Migrate and modernize workloads for scalable and secure cloud environments.",
      link: "/services/cloud-modernization",
      icon: "/icons/cloud.svg",
    },
    
  ],
}
//   {
//     id: 2,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Secure Business Productivity Solutions",
//     description: "Empower your workforce with tools that balance performance, collaboration, and protection. Enable seamless communication through secure email, messaging, and conferencing platforms. Collaborate in real time with document sharing, co-authoring, and version control—without compromising data integrity. Protect sensitive information with encryption, access controls, and compliance-ready policies.",
//     features: [
//       "Secure Email & Communication",
//       "Document Protection",
//       "Data Loss Prevention",
//       "Mobile Device Management",
//       "Secure File Sharing"
//     ],
//   },
//   {
//     id: 3,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Enterprise Infrastructure Solutions",
//     description: "We provide servers, storage, virtualization, and tools to manage containers, making it easy for your business to grow. Built-in backup, recovery, and monitoring keep your systems safe, while centralized infrastructure and virtual desktops let your team work securely from anywhere, save money, and stay productive.",
//     features: [
//       "Cloud Infrastructure",
//       "Hybrid Cloud Solutions",
//       "Network Infrastructure",
//       "Server Management",
//       "Disaster Recovery"
//     ],
//   },
//   {
//     id: 4,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Enterprise Networking Solutions",
//     description: "Enterprise Networking Solutions deliver a robust, interconnected infrastructure that links offices, data centers, cloud environments, and user devices into a seamless, secure system.",
//     features: [
//       "SD-WAN Solutions",
//       "Network Security",
//       "Load Balancing",
//       "VPN & Remote Access",
//       "Network Monitoring"
//     ],
//   },
//   {
//     id: 5,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Cyber Security Solutions",
//     description: "Our services cover infrastructure, networks, applications, and data with real-time monitoring and threat response. We also manage vulnerabilities and simulate attacks to strengthen defenses. We secure emails, cloud services, and AI systems, ensuring compliance and business continuity. With our end-to-end approach, your organization stays safe and resilient.",
//     features: [
//       "Threat Detection & Response",
//       "Firewall & Intrusion Prevention",
//       "Security Information & Event Management",
//       "Vulnerability Assessment",
//       "Security Awareness Training"
//     ],
//   },
//   {
//     id: 6,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Cyber Security Services",
//     description: "Our approach includes continuous monitoring, threat detection & response, vulnerability management, and attack simulations to proactively strengthen your defenses. We also ensure email, cloud services, and AI systems are protected and compliant, reducing risk across all surfaces.",
//     features: [
//       "24/7 Security Monitoring",
//       "Incident Response",
//       "Security Audits",
//       "Compliance Management",
//       "Penetration Testing"
//     ],
//   },
//   {
//     id: 7,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Digital & APP Innovation Solutions",
//     description: "We transform ideas into seamless digital experiences with intuitive design and cutting-edge technology. Our web and mobile apps are fast, secure, and scalable to grow with your business.",
//     features: [
//       "Custom Application Development",
//       "Mobile App Solutions",
//       "Digital Transformation Consulting",
//       "API Integration",
//       "UX/UI Design"
//     ],
//   },
//   {
//     id: 8,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "Data Solutions",
//     description: "Our Data Solutions help businesses unlock the true potential of their data. We provide end-to-end services including data collection, integration, management, and analytics, enabling informed decision-making and actionable insights.",
//     features: [
//       "Data Analytics & BI",
//       "Data Warehousing",
//       "Big Data Solutions",
//       "Machine Learning Integration",
//       "Data Governance"
//     ],
//   },
//   {
//     id: 9,
//     image:"/solution/endpoint-management.png",
//     link:"",
//     title: "AI Solutions",
//     description: "Our AI Solutions help businesses leverage artificial intelligence to boost innovation and efficiency. We provide end-to-end services machine learning, predictive analytics, NLP, and intelligent automation—turning complex data into actionable insights.",
//     features: [
//       "AI Strategy & Consulting",
//       "Natural Language Processing",
//       "Computer Vision Solutions",
//       "Predictive Analytics",
//       "AI-Powered Automation"
//     ],
//   }
];

export default function SolutionSection() {
  // 👉 by default first one open
  const [activeId, setActiveId] = useState<number>(solutions[0].id)

  const handleToggle = (id: number) => {
    setActiveId(prev => (prev === id ? prev : id))
  }

  return (
    <div className='max-w-[1440px] mx-auto min-h-[1000px]'>
        <h2 className='text-center text-2xl lg:text-[42px] font-medium text-black'>We help organizations operate <br />
        <span className='text-[#FF9500]'>smarter, faster, and at scale</span>
</h2>
<Link className='flex items-center justify-center' href="">
    <button
      className="inline-flex items-center gap-2 border my-10 
      border-[#FF9500] text-[#1F1F1F] px-4 py-1 rounded-lg
      text-sm md:text-base transition cursor-pointer"
    >
      Explore More
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M11.2153 4.42188H16.3916V9.59814" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.3916 4.42188L4.3136 16.4998" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </Link>
    <section className="max-w-[650px] -mt-32 mx-auto space-y-4 rotate-270 h-[900px]">
      {solutions.map((solution) => {
        const isActive = activeId === solution.id

        return (
          <div
            key={solution.id}
            className={` overflow-hidden ${isActive ? "rotate-90 my-36" : "border-b border-black"}`}
          >
            {/* ===== Title (show only if NOT active) ===== */}
            {!isActive && (
              <button
                onClick={() => handleToggle(solution.id)}
                className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-50 transition "
              >
                <h3 className="text-lg lg:text-[36px] font-semibold text-[#4E4E4E]">
                  {solution.title}
                </h3>

                {/* <BiChevronRight className="text-2xl" /> */}
              </button>
            )}

            {/* ===== Active Card ===== */}
            <AnimatePresence mode="wait">
  {isActive && (
    <motion.div
      key={solution.id}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0.5, scale: 1 }} 
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#ECEFF4] text-gray-900 border border-gray-400 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12  w-[650px] mx-auto"
    >
<h2 className="text-lg lg:text-[36px] font-semibold text-[#4E4E4E] mb-3 rotate-270 md:col-span-1 w-fit h-fit -ml-14 mt-40">
        {solution.title}
      </h2>
      <div className='md:col-span-11'>
        <h2 className="text-lg lg:text-[36px] font-semibold text-[#4E4E4E] mb-3">
        {solution.title}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {solution.services.map((perService, idx) => {
  return (
    <div key={idx} className="p-3 rounded-2xl border bg-white border-[#ECEFF4] hover:border-[#e0e0e0] space-y-1 flex flex-col justify-between space-y-2">
       {/* <Image
  src={perService.icon}
  alt={perService.title}
  width={64}
  height={46}
/> */}
<div className='space-y-2'>
    
      <h4 className="text-lg font-semibold">
        {perService.title}
      </h4>

      <p className="text-sm text-gray-600">
        {perService.description}
      </p>
</div>

      <Link className='underline text-end text-black text-xs flex items-center gap-1 justify-end' href={perService.link}>Explore more<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M11.1787 4.29883H16.3381V9.45824" stroke="#1F1F1F" strokeWidth="0.859901" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.3381 4.29883L4.29944 16.3374" stroke="#1F1F1F" strokeWidth="0.859901" strokeLinecap="round" strokeLinejoin="round"/>
</svg></Link>
    </div>
  );
})}
      </div>
      </div>


      {/* <Image
        src={solution.image}
        alt={solution.title}
        width={772}
        height={540}
        className="w-full h-auto mb-6 rounded-lg"
      />

      <h2 className="text-lg lg:text-3xl font-bold text-[#4E4E4E] mb-3">
        {solution.title}
      </h2>

      <p className="text-gray-700 text-sm lg:text-base">
        {solution.description}
      </p>

       <Link href={solution.link}>
    <button
      className="inline-flex items-center gap-2 border mt-5
      border-[#FF9500] text-[#1F1F1F] px-4 py-1 rounded-lg
      text-sm md:text-base transition cursor-pointer"
    >
      Explore More
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M11.2153 4.42188H16.3916V9.59814" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.3916 4.42188L4.3136 16.4998" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </Link> */}
    </motion.div>
  )}
</AnimatePresence>
            {/* {isActive && (
            <div
className={`
    flex-1 bg-[#ECEFF4] text-gray-900 border border-gray-400 rounded-2xl
    transition-all duration-500 ease-out overflow-hidden
    ${
      isActive
        ? 'opacity-100 scale-100 translate-y-0 p-8 max-h-[1200px]'
        : 'opacity-0 scale-95 translate-y-6 p-0 max-h-0 pointer-events-none'
    }
  `}
>
  <Image
    src={solution.image}
    alt={solution.title}
    width={772}
    height={540}
    className="w-full h-auto mb-6 rounded-lg"
  />

  <h2 className="text-lg lg:text-3xl font-bold text-[#4E4E4E] mb-3">
    {solution.title}
  </h2>

  <p className="text-gray-700 text-base lg:text-2xl">
    {solution.description}
  </p>

  <Link href={solution.link}>
    <button
      className="inline-flex items-center gap-2 border mt-10
      border-[#FF9500] text-[#1F1F1F] px-4 py-1 rounded-lg
      text-sm md:text-base transition cursor-pointer"
    >
      Explore More
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M11.2153 4.42188H16.3916V9.59814" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.3916 4.42188L4.3136 16.4998" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </Link>
</div>
          )} */}
          </div>
        )
      })}
    </section>
    </div>
  )
}
