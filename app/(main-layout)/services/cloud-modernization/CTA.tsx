import Container from "@/components/layout/Container";
import CTAButton from "@/components/shared/button/CTAButton";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";


export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
      <Container>
      <div className="py-10 md:py-23.25 flex flex-col items-center">
        <h2 className="text-white text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
        Transform Your Cloud. Transform Your Business.
        </h2>
           <HeadingThree
                title="Modern infrastructure isn’t optional. It’s decisive."
                className="text-white mt-4 text-center"
                center={false}
              />
        <PageSubtitle
          text="Partner with Betopia Limited to modernize your cloud environment with confidence, security, and measurable business value."
          className="mt-6 text-[#FFFFFFE5] lg:w-[40%] mx-auto text-center"
        />
        <CTAButton />
      </div>
      </Container>
    </section>
  );
}

// import CTAButton from "@/components/shared/button/CTAButton";
// import PageSubtitle from "@/components/shared/heading/pageSubtitle";


// export default function CTA() {
//   return (
//     <section className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900]">
//       <div className="py-10 md:py-23.25 flex flex-col items-center">
//         <h2 className="text-white text-center text-[28px] md:text-[32px] lg:text-[52px] font-bold">
//           Ready to Leverage AI for Your Business?
//         </h2>
//         <PageSubtitle
//           text=" Let our AI experts help you identify opportunities and implement intelligent solutions tailored to your needs"
//           className="mt-6 md:mt-7 text-[#FFFFFFE5] max-w-[700px] mx-auto text-center"
//         />
//         <CTAButton />
//       </div>
//     </section>
//   );
// }
