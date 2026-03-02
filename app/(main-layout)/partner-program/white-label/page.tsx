
import Hero from '@/components/pages/partner/white-label/Hero'
import WhiteLabelAbout from '@/components/pages/partner/white-label/WhiteLabelAbout'
import WhiteLabelFeatures from '@/components/pages/partner/white-label/WhiteLabelFeatures'
import WhiteLabelHowWork from '@/components/pages/partner/white-label/WhiteLabelHowWork'
import WhiteLabelPartner from '@/components/pages/partner/white-label/WhiteLabelPartner'
import WhiteLabelPartnerCTA from '@/components/pages/partner/white-label/WhiteLabelPartnerCTA'


const page = () => {
  return (
    <div>
     <div>
      <Hero/>
      {/* <WhiteLabelBanner /> */}
      <WhiteLabelAbout />
      <WhiteLabelPartner />
      <WhiteLabelFeatures />
      <WhiteLabelHowWork />
      <WhiteLabelPartnerCTA />
    </div>
    </div>
  )
}

export default page
