import React from 'react'
import { FaRegHandshake } from 'react-icons/fa';
import PartnerTable from '../common/PartnerTable';

const partnerData = [
  {
    icon: <FaRegHandshake  className="size-8 bg-[#DBEAFE] text-[#FF9500]  w-[36px] h-[55px] rounded-[14px] " />,
    partnerType: "Co-Branded Partner",
    description:
      "Acts as Betopia's official sales agent, showcases Betopia's portfolio and services",
    brandUse: "Uses Betopia branding and collateral",
    supportProvided: "Training, Partner Success Manager, Sales enablement, Co-branded marketing",
    revenueSharing: "30% of project value",
    partnershipFee: "$2,000/year",
  },
];
const CoBrandedPartner = () => {
  return (
    <div>
      <PartnerTable data={partnerData} />
    </div>
  )
}

export default CoBrandedPartner
