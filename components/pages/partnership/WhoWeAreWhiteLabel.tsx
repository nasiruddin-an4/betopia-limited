"use client";

import React from "react"; 
import { BiGlobe, BiShieldAlt } from "react-icons/bi";
import { GoZap } from "react-icons/go";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhoWeAreWhiteLabel = () => {
  return (
    <section 
      className="py-20 px-8 bg-white"
    >
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          A global IT powerhouse competing with industry giants like Infosys &
          TCS
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Card 1 - Global IT Consulting Powerhouse */}
          <div 
            className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
              <BiGlobe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global IT Consulting Powerhouse
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Competing with Infosys & TCS on the global stage
            </p>
          </div>

          {/* Card 2 - Enterprise-Grade Solutions */}
          <div 
            className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-md">
              <GoZap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Delivering Cloud, AI, Cybersecurity, and cutting-edge Products
            </p>
          </div>

          {/* Card 3 - Vendor-Neutral Solutions */}
          <div 
            className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
              <BiShieldAlt className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vendor-Neutral Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Multi-cloud expertise across Microsoft, AWS, and Google Cloud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreWhiteLabel;
