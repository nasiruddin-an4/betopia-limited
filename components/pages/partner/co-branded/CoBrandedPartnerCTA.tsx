import CTASection from "../common/CTA";

export default function CoBrandedPartnerCTA() {
  return (
    <CTASection
      iconSrc="/about/rocket.png"
      videoSrc="/videos/partner/cta.mp4"
      titleLine1="Start Your High-Value"
      titleLine2="Co-Branded Partnership Today"
      description="Join our partner network and start offering enterprise-grade solutions under your brand today"
      buttons={[
        // {
        //   label: "Apply Now & Start Earning",
        //   href: "/coming-soon",
        //   variant: "primary",
        // },
        {
          label: "Speak to a Partner Success Manager",
          href: "/partner/co-branded/partner-form",
        },
      ]}
    />
  );
}
