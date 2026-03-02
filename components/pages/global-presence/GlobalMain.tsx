import React from 'react'
import GlobalHero from './GlobalHero'
import GlobalAbout from './GlobalAbout'
import Headquarter from './Headquarter'
import RegionalOffices from './RegionalOffices'
import DeliveryHubs from './DeliveryHubs'
import GlobalCTA from './GlobalCTA'
import TrustSection from './TrustSection'
import DeliveryModal from './DeliveryModal'
import ServeSection from './ServeSection'
import TrustedPartners from './TrustedPartners'

const GlobalMain = () => {
  return (
    <div>
      <GlobalHero/>
      <TrustedPartners/>
      {/* <GlobalAbout/> */}
      <Headquarter/>
      <RegionalOffices/>
      <DeliveryHubs/>
      {/* <ServeSection/> */}
      <DeliveryModal/>
      <TrustSection/>
      <GlobalCTA/>
    </div>
  )
}

export default GlobalMain
