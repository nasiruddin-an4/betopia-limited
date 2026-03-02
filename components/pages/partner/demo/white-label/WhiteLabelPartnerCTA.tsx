import CTASection from "../common/CTA";

export default function WhiteLabelPartnerCTA() {
  return (
    <CTASection
      iconSrc="/about/rocket.png"
      videoSrc="/videos/partner/cta.mp4"
      titleLine1="Ready to Scale With Betopia"
      titleLine2="White-Label Solutions?"
      description="Let's discuss how Betopia can help you achieve your digital transformation goals."
      buttons={[
        // {
        //   label: "Apply Now & Start Earning",
        //   href: "/coming-soon",
        //   variant: "primary",
        // },
        {
          label: "Learn More About Us",
          href: "/about",
          variant: "secondary",
        },
      ]}
    />
  );
}
