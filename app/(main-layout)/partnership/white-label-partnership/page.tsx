import WhatIsWhiteLabel from '@/components/pages/partnership/WhatIsWhiteLabel'
import WhiteLabelCta from '@/components/pages/partnership/WhiteLabelCta'
import WhiteLabelKeyFeatures from '@/components/pages/partnership/WhiteLabelKeyFeatures'
import WhiteLabelPartnership from '@/components/pages/partnership/WhiteLabelPartnership'
import WhiteLabelWork from '@/components/pages/partnership/WhiteLabelWork'
import React from 'react'

export default function page() {
  return (
    <div>

      <WhiteLabelPartnership/>
      <WhatIsWhiteLabel/>
      <WhiteLabelKeyFeatures/>
      <WhiteLabelCta/>
      <WhiteLabelWork/>
    </div>
  )
}
