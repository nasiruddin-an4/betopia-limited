import ContactForm from "@/components/pages/contact/ContactForm";
import ContactFormRightSide from "@/components/pages/contact/ContactFormRightSide";
import ContactHero from "@/components/pages/contact/ContactHero";

export default function page() {
  return (
    <div className="bg-gray-50">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-360 gap-20 items-start mx-auto">
        <ContactForm />
        <ContactFormRightSide />
      </div>

      {/* <HaveAnyProject/>
       <OurOfficeLocations/>
       <TransformYourBusiness/> */}
    </div>
  );
}
