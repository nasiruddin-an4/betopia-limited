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
      <div className="max-w-[1673.9px] mx-auto py-[48px]">

        {/* Section Title */}
        <UnderlineSectionTitle
          title={title}
          wrapperClassName="mb-10 md:mb-[67px] text-center text-[#4A5565]"
        />

        <div className="bg-white rounded-[22px] shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-[#FF9500] px-[33px] py-[36px]">
            <div className="grid grid-cols-6 gap-6 text-white font-bold md:text-[22px]">
              <div>Partner Type</div>
              <div>Description</div>
              <div>Brand Use</div>
              <div>Support Provided</div>
              <div>Revenue Sharing</div>
              <div>Partnership <br /> Fee</div>
            </div>
          </div>

          {/* Rows */}
          <div className="p-[34px] space-y-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-6 items-start"
              >
                {/* Partner Type */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-bold text-[#101828] md:text-[22px]">
                    {item.partnerType}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#4A5565] md:text-[22px] leading-[33px]">
                  {item.description}
                </p>

                {/* Brand Use */}
                <p className="text-[#4A5565] md:text-[22px] leading-[33px] w-[70%]">
                  {item.brandUse}
                </p>

                {/* Support */}
                <p className="text-[#4A5565] md:text-[22px] leading-[33px]">
                  {item.supportProvided}
                </p>

                {/* Revenue */}
                <div className="bg-[#DCFCE7] rounded-full  md:w-[80%] text-center">
                    <div className="text-[#008236] font-bold md:text-[22px]">
                        $
                    </div>
                  <div className="text-[#008236] font-bold md:text-[22px]">
                    {item.revenueSharing}
                  </div>
                </div>

                {/* Fee */}
                <div className="text-[#FF9500] font-bold md:text-[22px]">
                  {item.partnershipFee}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PartnerTable;
