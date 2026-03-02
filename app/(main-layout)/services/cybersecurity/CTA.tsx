import CTAButton from "@/components/shared/button/CTAButton";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";


export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
         Secure Your Enterprise Today
        </h2>
        <PageSubtitle
          text="Partner with Betopia to build a robust security framework that protects your business"
          className="mt-6 md:mt-7 text-[#FFFFFFE5] max-w-[700px] mx-auto text-center"
        />
        <CTAButton />
      </div>
    </section>
  );
}

