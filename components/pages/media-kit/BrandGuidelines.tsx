"use client";

import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function BrandGuidelines() {
  return (
    <div className="w-full bg-white text-[#0F172A]">
      <div className="max-w-[1675px] w-11/12 mx-auto  pt-10 lg:pt-20 ">
        <PageSubtitle
          text="Betopia Limited exclusively owns all brand assets, including its logos,
          product names, designs, and slogans. Partners and the public may
          reference Betopia and its products only in truthful text form and without
          implying endorsement. Use of logos, icons, trade dress, or
          “official/partner” claims requires explicit written authorization.
"
          className="leading-8 lg:leading-10 mb-5"
        />
        <PageSubtitle
          text="Betopia’s name must not be used in business names, domains, apps,
          merchandise, or altered forms. Apps integrating with Betopia must use
          unique branding. Any confusingly similar designs are prohibited.
          Betopia reserves the right to revoke permissions that conflict with
          its values of Innovation, Integrity, and Excellence. For approvals or
          logo requests, contact brand@betopialimited.com.
"
          className="leading-8 lg:leading-10 mb-10 lg:mb-16"
        />
      </div>
    </div>
  );
}
