import Container from '@/components/layout/Container'
import PageSubtitle from '@/components/shared/pageSubtitle'
import SectionTitle from '@/components/shared/SectionTitle'
import Image from 'next/image'
import React from 'react'

interface Capability {
  title: string
  description: string
  image: string
  bgcolor: string
}

const capabilitiesData: Capability[] = [
  {
    title: 'End User Devices (Laptop / Desktop / Mobile)',
    description:
      'Real-time protection against malware, ransomware, and zero-day threats across all endpoints.',
    bgcolor: 'bg-[#2B7FFF1A]',
    image: '/service/capabilities/1.svg',
  },
  {
    title: 'Device Operating Systems (Windows / Linux)',
    description:
      'End-to-end encryption for data at rest and in transit, ensuring complete security.',
    bgcolor: 'bg-[#AD46FF1A]',
    image: '/service/capabilities/2.svg',
  },
  {
    title: 'Endpoint Management (UEM) Solution',
    description:
      '24/7 monitoring and alerting for suspicious activities and security breaches.',
    bgcolor: 'bg-[#FF69001A]',
    image: '/service/capabilities/3.svg',
  },
  {
    title: 'Mobile Device Management Solution',
    description:
      'Unified dashboard to manage and monitor all endpoints from a single location.',
    bgcolor: 'bg-[#00C9501A]',
    image: '/service/capabilities/4.svg',
  },
  {
    title: 'Application Control Solution',
    description:
      'Complete control and security for all mobile devices across your organization.',
    bgcolor: 'bg-[#F6339A1A]',
    image: '/service/capabilities/5.svg',
  },
  {
    title: 'IT Helpdesk Solution',
    description:
      'Ensure regulatory compliance with automated policy enforcement and reporting.',
    bgcolor: 'bg-[#00B8DB1A]',
    image: '/service/capabilities/6.svg',
  },
]

const OurCapabilities = () => {
  return (
    <Container>
      <section className="py-10 md:py-20">
        {/* Badge */}
        <p className="mx-auto mb-4 w-fit rounded-full bg-[#FFEDD4] px-4 py-1.5 text-base font-medium text-[#FF9500]">
          Our Capabilities
        </p>

        {/* Header */}
        <div className="mb-10 text-center md:mb-[75px]">
          <SectionTitle
            normalText="Highly Effective"
            highlightText="Solutions"
          />
          <PageSubtitle
            text="Comprehensive endpoint security and management features designed for enterprise needs"
            className="mt-4 text-[#45556C] md:w-[50%] mx-auto"
          />
        </div>

        {/* Cards */}
     <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
  {capabilitiesData.map(({ title, description, image, bgcolor }) => (
    <div
      key={title}
      className={`
        group
        rounded-2xl border-2 border-[#E2E8F0] p-[37px] 
        ${bgcolor}
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-[#FF9500]
        hover:shadow-xl
      `}
    >
      {/* Icon */}
      <div
        className="
          mb-6 w-full rounded-2xl bg-white p-3.5
        "
      >
        <Image
          src={image}
          alt={title}
          width={37}
          height={37}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h5
        className="
          mb-6 text-base text-[#0F172B]
          md:text-xl lg:text-[23px]
          transition-colors duration-300
          group-hover:text-[#2B7FFF]
        "
      >
        {title}
      </h5>

      {/* Description */}
      <p
        className="
          text-xs text-[#45556C]
          md:text-base lg:text-[19px]
          transition-colors duration-300
          group-hover:text-[#334155]
        "
      >
        {description}
      </p>
    </div>
  ))}
</div>

      </section>
    </Container>
  )
}

export default OurCapabilities
