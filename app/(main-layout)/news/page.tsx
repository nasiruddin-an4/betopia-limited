import BlogHero from '@/components/pages/blog/BlogHero'
import ERP from '@/components/pages/blog/ERP'
import MoreHighlights from '@/components/pages/blog/MoreHighlights'
import OurLatestInsights from '@/components/pages/blog/OurLatestInsights'
import PartnerWithUs from '@/components/pages/blog/PartnerWithUs'
import TransformingBusiness from '@/components/pages/blog/TransformingBusiness'
import React from 'react'

export default function page() {
  return (
    <div>
        <BlogHero/>
        <ERP/>
        <TransformingBusiness/>
        <MoreHighlights/>
        <PartnerWithUs/>
        <OurLatestInsights/>
    </div>
  )
}
