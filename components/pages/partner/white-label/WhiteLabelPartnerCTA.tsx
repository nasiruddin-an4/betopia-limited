import CTASection from "../common/CTA";

export default function WhiteLabelPartnerCTA() {
  return (
    <CTASection
      iconSrc="/about/rocket.png"
      videoSrc="/videos/partner/cta.mp4"
      titleLine1="Ready to Scale With Betopia"
      titleLine2="White-Label Solutions?"
      description="Join our partner network and start offering enterprise-grade solutions under your brand today"
      buttons={[
        {
          label: "Speak to a Partner Success Manager",
          href: "/partner/white-label/partner-form",
        },
      ]}
      // buttons={[
      //   // {
      //   //   label: "Apply Now & Start Earning",
      //   //   href: "/coming-soon",
      //   //   variant: "primary",
      //   // },
      //   {
      //     label: "Learn More About Us",
      //     href: "https://demo.betopialimited.com/about",
      //     variant: "secondary",
      //   },

      // ]}
    />
  );
}
