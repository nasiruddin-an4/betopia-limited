'use client';

import React from 'react'; 

// Simple fade-in animation for the section
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhatIsWhiteLabel = () => {
  return (
    <section 
      className="py-16 px-8 bg-white"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
          {/* Left Side - Normal Image (no rounded shape) */}
          <div className="w-full">
            <img
              src="/partnership/Subtract.png"
              alt="Business Partnership Handshake"
              className="w-full h-auto object-cover rounded-none"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-12">
            {/* Title */}
            <div className="text-center lg:text-left">
                <h3 className=' text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>What is <span className='text-[#FF9500]'>White Label Partnership</span> </h3>
              
              <p className='text-sm md:text-base text-center lg:text-2xl font-normal font-robot  my-3 text-[#45556C]'> Empower your brand with our comprehensive solutions</p>
           
              
            </div>

            {/* Feature Cards */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="space-y-2 items-start gap-6 bg-[#F5F5F599] p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M13.5 4.5H6C5.17157 4.5 4.5 5.17157 4.5 6V16.5C4.5 17.3284 5.17157 18 6 18H13.5C14.3284 18 15 17.3284 15 16.5V6C15 5.17157 14.3284 4.5 13.5 4.5Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30 4.5H22.5C21.6716 4.5 21 5.17157 21 6V10.5C21 11.3284 21.6716 12 22.5 12H30C30.8284 12 31.5 11.3284 31.5 10.5V6C31.5 5.17157 30.8284 4.5 30 4.5Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30 18H22.5C21.6716 18 21 18.6716 21 19.5V30C21 30.8284 21.6716 31.5 22.5 31.5H30C30.8284 31.5 31.5 30.8284 31.5 30V19.5C31.5 18.6716 30.8284 18 30 18Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.5 24H6C5.17157 24 4.5 24.6716 4.5 25.5V30C4.5 30.8284 5.17157 31.5 6 31.5H13.5C14.3284 31.5 15 30.8284 15 30V25.5C15 24.6716 14.3284 24 13.5 24Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Deliver Betopia Solutions</h3>
                  <p className="mt-3 text-gray-600">
                    Provide comprehensive solutions including Cloud, AI, Cybersecurity, ERP, HRMS, POS, and Voting Systems under your own branding.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="space-y-2 items-start gap-6 bg-[#F5F5F599] p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M13.5 4.5H6C5.17157 4.5 4.5 5.17157 4.5 6V16.5C4.5 17.3284 5.17157 18 6 18H13.5C14.3284 18 15 17.3284 15 16.5V6C15 5.17157 14.3284 4.5 13.5 4.5Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30 4.5H22.5C21.6716 4.5 21 5.17157 21 6V10.5C21 11.3284 21.6716 12 22.5 12H30C30.8284 12 31.5 11.3284 31.5 10.5V6C31.5 5.17157 30.8284 4.5 30 4.5Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30 18H22.5C21.6716 18 21 18.6716 21 19.5V30C21 30.8284 21.6716 31.5 22.5 31.5H30C30.8284 31.5 31.5 30.8284 31.5 30V19.5C31.5 18.6716 30.8284 18 30 18Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.5 24H6C5.17157 24 4.5 24.6716 4.5 25.5V30C4.5 30.8284 5.17157 31.5 6 31.5H13.5C14.3284 31.5 15 30.8284 15 30V25.5C15 24.6716 14.3284 24 13.5 24Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Enterprise-Grade Infrastructure</h3>
                  <p className="mt-3 text-gray-600">
                    Leverage our robust enterprise platforms and multi-cloud solutions to scale your business with confidence and reliability.
                  </p>
                </div>
              </div>

              {/* Card 3 (Duplicate in design) */}
             <div className="space-y-2 items-start gap-6 bg-[#F5F5F599] p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M13.5 4.5H6C5.17157 4.5 4.5 5.17157 4.5 6V16.5C4.5 17.3284 5.17157 18 6 18H13.5C14.3284 18 15 17.3284 15 16.5V6C15 5.17157 14.3284 4.5 13.5 4.5Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30 4.5H22.5C21.6716 4.5 21 5.17157 21 6V10.5C21 11.3284 21.6716 12 22.5 12H30C30.8284 12 31.5 11.3284 31.5 10.5V6C31.5 5.17157 30.8284 4.5 30 4.5Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30 18H22.5C21.6716 18 21 18.6716 21 19.5V30C21 30.8284 21.6716 31.5 22.5 31.5H30C30.8284 31.5 31.5 30.8284 31.5 30V19.5C31.5 18.6716 30.8284 18 30 18Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.5 24H6C5.17157 24 4.5 24.6716 4.5 25.5V30C4.5 30.8284 5.17157 31.5 6 31.5H13.5C14.3284 31.5 15 30.8284 15 30V25.5C15 24.6716 14.3284 24 13.5 24Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Deliver Betopia Solutions</h3>
                  <p className="mt-3 text-gray-600">
                    Provide comprehensive solutions including Cloud, AI, Cybersecurity, ERP, HRMS, POS, and Voting Systems under your own branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWhiteLabel;