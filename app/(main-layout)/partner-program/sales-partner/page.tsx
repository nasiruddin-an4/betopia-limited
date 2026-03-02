import BetopiaRole from '@/components/pages/partner/sales-partner/BetopiaRole'
import CollaborationProcess from '@/components/pages/partner/sales-partner/CollaborationProcess'
import Responsibilities from '@/components/pages/partner/sales-partner/Responsibilities'
import SalesAgentHero from '@/components/pages/partner/sales-partner/SalesAgentHero'
import SalesBenefits from '@/components/pages/partner/sales-partner/SalesBenefits'
import SalesCTA from '@/components/pages/partner/sales-partner/SalesCTA'
import SalesToolsSupport from '@/components/pages/partner/sales-partner/SalesToolsSupport'
import WhyJoin from '@/components/pages/partner/sales-partner/WhyJoin'
import React from 'react'

const page = () => {
  return (
    <div>
      <SalesAgentHero/>
      <WhyJoin/>
      <SalesBenefits/>
      <Responsibilities/>
      <BetopiaRole/>
      <SalesToolsSupport/>
      <CollaborationProcess/>
      <SalesCTA/>
    </div>
  )
}

export default page
