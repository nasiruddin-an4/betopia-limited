import Navbar from "@/components/layout/Navbar/Navbar";
import BrandMarquee from "@/components/pages/home/BrandMarquee";
import BusinessGrowSection from "@/components/pages/home/BusinessGrowSection";
import CompanyVideoSection from "@/components/pages/home/CompanyVideoSection";
import LifeAtBetopia from "@/components/pages/home/LifeAtBetopia";
import PortfolioSlider from "@/components/pages/home/PortfolioSlider";
import ServicesSection from "@/components/pages/home/ServicesSection";
import StatSection from "@/components/pages/home/StatSection";
import TeamSection from "@/components/pages/home/TeamSection";
import TestimonialSlider from "@/components/pages/home/Testimonial";
import BlogSlider from "@/components/pages/home/BlogSlider";
import ContactSection from "@/components/pages/home/ContactSection";
import Banner2 from "@/components/pages/home2/Banner2";
import Trust from "@/components/pages/home2/Trust";
import Footer2 from "@/components/layout/Footer/Footer2";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner2 />
      <ServicesSection />
      <StatSection />
      <Trust/>
      <BrandMarquee />
      <BusinessGrowSection />
      <CompanyVideoSection />
      <PortfolioSlider />
      <TeamSection />
      <LifeAtBetopia />
      <TestimonialSlider />
      <BlogSlider />
      <ContactSection />
      <Footer2/>
    </div>
  );
};

export default page;
