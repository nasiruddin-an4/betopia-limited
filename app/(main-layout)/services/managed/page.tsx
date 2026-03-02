import React from 'react'
import Hero from './Hero'
import WhatWeDo from './WhatWeDo'
import WhyBetopia from './WhyBetopia'
import ProvenMethodology from './ProvenMethodology'
import ServiceCTA from '@/components/shared/services/ServiceCTA'

const page = () => {
  return (
    <div>
      <Hero/>
      <WhatWeDo/>
      <WhyBetopia/>
      <ProvenMethodology/>
      <ServiceCTA
        title="Let IT Run Smoothly. Every Day."
        subtitle="Because operational stability drives growth."
        description="Partner with Betopia Limited to simplify IT operations, reduce risk, and maintain continuous performance"
      />
    </div>
  )
}

export default page
