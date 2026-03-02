import Container from "@/components/layout/Container";
import React from "react";

const ValuContent = () => {
  return (
    <section className="relative w-full py-10 md:py-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/values/valuebg.jpg')" }}
      />

      {/* Overlay (soft white layer for readability) */}
      <div className="absolute inset-0 bg-white/90" />

      {/* Content */}
      <Container>

      <div className="relative ">
        {/* Values */}
        <div className=" space-y-4 lg:space-y-8 ">
          <div>
            <h2 className="text-[28px] md:text-4xl lg:text-[52px] mb-6 lg:mb-10">
              At Betopia, our values aren’t just words they are our way of
              working, thinking, and building the future. They guide every
              decision, shape our culture, and inspire us to deliver secure,
              cloud-ready, AI-powered business solutions for clients around the
              globe.
            </h2>
          </div>

          {/* Integrity */}
          <div>
            <h3 className="text-xl xl:text-[36px] font-bold">
              Integrity:{" "}
              <span className="text-base md:text-lg lg:text-2xl font-normal">
                “Do Right, Always”. We act with honesty, transparency, and
                accountability in every interaction. Trust is the foundation of
                our relationships with clients, partners, and colleagues.
              </span>
            </h3>
          </div>

          {/* Innovation */}
          <div>
            <h3 className="text-xl xl:text-[36px] font-bold">
              Innovation:{" "}
              <span className="text-base md:text-lg lg:text-2xl font-normal">
                “Think Bold, Build Smart”. Curiosity fuels our creativity. We
                embrace AI, cloud, and data-driven solutions to solve real-world
                challenges and help businesses transform.
              </span>
            </h3>
          </div>

          {/* Collaboration */}
          <div>
            <h3 className="text-xl xl:text-[36px] font-bold">
              Collaboration:{" "}
              <span className="text-base md:text-lg lg:text-2xl font-normal">
                “Together, We Achieve More”. Teamwork and empathy are at the
                heart of everything we do. By sharing knowledge and working
                closely with clients, we create outcomes no one could achieve
                alone.
              </span>
            </h3>
          </div>

          {/* Excellence */}
          <div>
            <h3 className="text-xl xl:text-[36px] font-bold">
              Excellence:{" "}
              <span className="text-base md:text-lg lg:text-2xl font-normal">
                “Deliver Beyond Expectation”. Teamwork and empathy are at the
                heart of everything we do. By sharing knowledge and working
                closely with clients, we create outcomes no one could achieve
                alone.
              </span>
            </h3>
          </div>

          {/* courage  */}
          
          <div>
            <h3 className="text-xl xl:text-[36px] font-bold">
              Courage:{" "}
              <span className="text-base md:text-lg lg:text-2xl font-normal">
                “Lead Change, Embrace Challenges”. We take bold, smart risks and
                tackle challenges head-on. Courage drives us to innovate,
                disrupt, and lead in a rapidly changing world.
              </span>
            </h3>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default ValuContent;
