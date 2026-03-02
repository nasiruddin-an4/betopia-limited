import React from 'react';
import Image from 'next/image';
import PageSubtitle from '@/components/shared/heading/pageSubtitle';

interface Partner {
  name: string;
  tier: string;
  logoSrc: string;
}

const partners: Partner[] = [
  { name: 'AWS Advanced', tier: 'Partnership', logoSrc: '/adaptability/b6.png' },
  { name: 'Google Cloud', tier: 'Partnership', logoSrc: '/adaptability/b5.png' },
  { name: 'Microsoft Azure', tier: 'Partnership', logoSrc: '/adaptability/b4.png' },
  { name: 'Fortinet', tier: 'Partnership', logoSrc: '/adaptability/b3.png' },
  { name: 'Odoo', tier: 'Partnership', logoSrc: '/adaptability/b2.png' },
  // Note: The screenshot shows AWS Advanced twice, but usually these are unique
  { name: 'Trend Micro', tier: 'Partnership', logoSrc: '/adaptability/b1.png' }, 
];

const GlobalTechnologyEcosystem = () => {
  return (
    <section className="max-w-7xl w-11/12 mx-auto px-4 py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Image with Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="relative h-[300px] md:h-[500px] w-full">
            <Image
              src="/adaptability/2112.png" // Replace with your actual image path
              alt="Team discussing technology"
              fill
              className="object-cover object-right"
            />
            {/* Top Right Label Overlay */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">Global Partners</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content & Partners */}
        <div className="flex flex-col space-y-5 lg:space-y-8">
          <div>
            <h2 className="text-[24px] md:text-4xl xl:text-[52px] font-semibold text-gray-900 leading-tight mb-4 lg:mb-6">
             Global-Powered Tech
            </h2>
                  <PageSubtitle
          text="Our solutions are strengthened through strategic partnerships with leading
              global technology providers and OEMs, enabling us to deliver best-in-class
              enterprise solutions worldwide."
          className="text-gray-500 max-w-xl"
        />
           
          </div>

          <div>
            <h3 className="text-xs font-normal text-gray-800 uppercase tracking-widest mb-6">
              TECHNOLOGY & OEM PARTNERS:
            </h3>
            
            {/* Partners Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center lg:items-center space-y-2">
                  <div className="relative flex items-center justify-center w-full">
                    {/* Image Field for Logos */}
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      width={50}
                      height={40}
                      className="object-contain transition-all duration-300 mx-auto"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold text-center">
                      {partner.tier}
                    </p>
                    <p className="text-sm lg:text-xl font-bold text-gray-800 text-center">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalTechnologyEcosystem;