import React from 'react'
import { LuAward } from 'react-icons/lu';
import PartnerTable from '../common/PartnerTable';

const partnerData = [
  {
    icon: <LuAward className="size-8 bg-[#FFEDD4] text-[#FF9500]  w-[36px] h-[55px] rounded-[14px] " />,
    partnerType: "White-Label Partner",
    description:
      "Operates under own brand; Betopia provides full delivery as a white-label service provider",
    brandUse: "Own brand with backend support from Betopia",
    supportProvided: "Full project delivery, Training",
    revenueSharing: "40% of project value",
    partnershipFee: "$3,500/year",
  },
];
const WhiteLabelPartner = () => {
  return (
    <div>
      <PartnerTable data={partnerData} />
    </div>
  )
}

export default WhiteLabelPartner
