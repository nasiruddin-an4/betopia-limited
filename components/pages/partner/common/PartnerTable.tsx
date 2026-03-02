import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import React from "react";

export interface PartnerRow {
  icon: React.ReactNode;
  partnerType: string;
  description: string;
  brandUse: string;
  supportProvided: string;
  revenueSharing: string;
  partnershipFee: string;
}

interface PartnerTableProps {
  title?: string;
  data: PartnerRow[];
}

const PartnerTable: React.FC<PartnerTableProps> = ({
  title = "Partner Types & Offerings",
  data,
}) => {
  return (
    <div className="bg-[#F9FAFB]">
  <div className="max-w-[1673.9px] mx-auto py-[48px] pl-4">

    {/* Section Title */}
    <UnderlineSectionTitle
      title={title}
      wrapperClassName="mb-10 md:mb-[67px] text-center text-[#4A5565]"
    />

    {/* Scroll Wrapper */}
    <div className="bg-white rounded-md shadow-2xl overflow-x-auto">
      
      {/* Table */}
      <div className="min-w-[1600px]">

        {/* Header */}
        <div className="bg-[#FF9500] px-6 py-5">
          <div className="grid grid-cols-6 gap-6 text-white font-bold md:text-lg">
            <div>Partner Type</div>
            <div>Description</div>
            <div>Brand Use</div>
            <div>Support Provided</div>
            <div>Revenue Sharing</div>
            <div>Partnership Fee</div>
          </div>
        </div>

        {/* Rows */}
        <div className="p-5 space-y-8">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-6 gap-6 items-start">
              
              <div className="font-bold text-[#101828] md:text-sm">
                {item.partnerType}
              </div>

              <p className="text-[#4A5565] md:text-sm">
                {item.description}
              </p>

              <p className="text-[#4A5565] md:text-sm w-[70%]">
                {item.brandUse}
              </p>

              <p className="text-[#4A5565] md:text-sm">
                {item.supportProvided}
              </p>

              <div className="bg-[#DCFCE7] rounded-full md:w-[80%] text-center">
                <div className="text-[#008236] py-2 font-bold md:text-sm">
                  ${item.revenueSharing}
                </div>
              </div>

              <div className="text-[#FF9500] font-bold md:text-sm">
                {item.partnershipFee}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</div>

  );
};

export default PartnerTable;
