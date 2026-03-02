
import CoBrandedAbout from '@/components/pages/partner/co-branded/CoBrandedAbout'
import CoBrandedFeatures from '@/components/pages/partner/co-branded/CoBrandedFeatures'
import CoBrandedHowWork from '@/components/pages/partner/co-branded/CoBrandedHowWork'
import CoBrandedPartner from '@/components/pages/partner/co-branded/CoBrandedPartner'
import CoBrandedPartnerCTA from '@/components/pages/partner/co-branded/CoBrandedPartnerCTA'
import Hero from '@/components/pages/partner/co-branded/hero'
import React from 'react'

const page = () => {
  return (
     <div>
      <Hero/>
      <CoBrandedAbout/>
      <CoBrandedPartner/>
      <CoBrandedFeatures/>
      <CoBrandedHowWork/>
      <CoBrandedPartnerCTA/>
    </div>
  )
}

export default page
