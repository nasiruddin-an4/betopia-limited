import Container from "@/components/layout/Container";
import SectionTitle from "@/components/shared/SectionTitle";

const OurStory = () => {
  return (
    <Container>
    <div className=" relative text-white py-10 md:py-20 ">
      <div className=" pb-6 md:pb-14 text-center">
     <SectionTitle normalText="Our" highlightText="Story" />
      </div>
      <div className="text-center w-full md:w-[80%] mx-auto text-[#45556C] text-[19px]">
          <p className=" pb-4 md:pb-7">
          Every great journey begins with a vision. For Betopia Limited, that vision started in 2014 with a simple goal: to build technology that truly empowers businesses. From our humble beginnings, we grew steadily in 2015, earning the trust of early clients who believed in our mission. By 2019, our expansion carried us beyond borders, connecting us with global partners and new opportunities.
          </p>
          
          <p className=" pb-4 md:pb-7">
           The challenges of 2020 became a defining moment. While the world faced uncertainty, we scaled our operations and stood beside businesses as they transitioned into digital-first models. In 2022, we introduced new initiatives in AI, cloud, cybersecurity, and SaaS, creating solutions for tomorrow while solving today’s problems.

          </p>

          <p className=" pb-4 md:pb-7">
          Today, our story is one of scale, innovation, and trust. With 40,000+ clients, 50,000+ projects delivered, a team of 750+ dedicated professionals, and operations in 47+ countries, Betopia stands as a global partner in transformation. Our footprint stretches far and wide, with 30,000+ clients across Europe, 600+ in the USA, and 400+ in Australia.
          </p>

          <p className=" pb-4 md:pb-7">
           But numbers only tell part of the story. At its heart, Betopia is about people—our clients, our partners, and our team. Together, we are writing a story of growth and possibilities, building solutions that turn challenges into opportunities, and shaping a future where technology serves humanity.
          </p>

      </div> 
      </div>
      </Container>
  );
};

export default OurStory;
