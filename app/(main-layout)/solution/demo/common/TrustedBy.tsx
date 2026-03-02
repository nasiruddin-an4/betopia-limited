import Container from "@/components/layout/Container";
import React from "react";

export default function TrustedBy() {
  return (
    <div className="bg-linear-to-t from-[#FFF7ED] to-[#FFFFFF]">
      <Container>
      <div className="py-10 md:py-20">
        <h3 className="text-center text-black text-xl md:text-2xl lg:text-2xl  font-normal">
          Trusted <span className="text-[#FF9500]">by</span>{" "}
        </h3>
        <p className="mt-2 text-center mx-auto text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0">
          Partnered with industry leaders
        </p>
        {/*  */}
        <div className="mt-10 flex items-center justify-center gap-43">
          <h5
            className="text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            AWS
          </h5>
          <h5
            className="text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            Azure
          </h5>
          <h5
            className="text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            GCP
          </h5>
          <h5
            className="text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            IBM
          </h5>
          <h5
            className="text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl transition-all duration-300 ease-out
    hover:-translate-y-2"
          >
            Oracle
          </h5>
        </div>
      </div>
      </Container>
    </div>
  );
}
