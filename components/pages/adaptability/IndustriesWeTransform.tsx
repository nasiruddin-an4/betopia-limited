import PageSubtitle from '@/components/shared/heading/pageSubtitle';
import React from 'react';

interface Industry {
  title: string;
  image: string; // Replace with your actual asset paths
}

const industries: Industry[] = [
  { title: "Banking & Financial Services", image: "/adaptability/11.webp" },
  { title: "Manufacturing & Supply Chain", image: "/adaptability/22.jpg" },
  { title: "Healthcare & Life Sciences", image: "/adaptability/33.jpg" },
  { title: "Retail & E-commerce", image: "/adaptability/44.jpg" },
  { title: "Telecom & Media", image: "/adaptability/55.webp" },
  { title: "Education & Public Sector", image: "/adaptability/66.jpg" },
];

const IndustriesWeTransform = () => {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="max-w-6xl w-11/12 mx-auto px-3 text-center">
        {/* Header Section */}
        <h2 className="text-[22px] md:text-[32px] lg:text-[52px] font-bold text-gray-900 mb-2">
          Industries <span className='text-[#FF9500]'>We Transform</span> 
        </h2>
         <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-6 lg:mb-8 "></div>
           <PageSubtitle
          text="Betopia delivers tailored digital transformation solutions across multiple industries"
          className="text-gray-500 mb-8 lg:mb-12 max-w-3xl mx-auto"
        />
  

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="relative group h-64 overflow-hidden rounded-xl cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Dark Overlay for text legibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Label Button (Centered at bottom) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 px-4 rounded-lg text-sm font-medium transition-all text-base lg:text-xl  text-center">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeTransform;