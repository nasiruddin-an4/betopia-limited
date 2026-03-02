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
        title="Build Software That Moves Your Business Forward."
        subtitle="Because great software is a growth engine."
        description="Partner with Betopia Limited to build, modernize, and scale software solutions with confidence and speed."
      />
    </div>
  )
}

export default page
