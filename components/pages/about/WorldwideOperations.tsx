import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';

interface OperationItem {
  icon: string;
  title: string;
  description: string;
}

const WorldwideOperations: React.FC = () => {
  const operations: OperationItem[] = [
    {
      icon: "/about/world/2.svg",
      title: "Headquarters",
      description: "Dhaka, Bangladesh",

    },
    {
      icon: "/about/world/3.svg",
      title: "Regional Offices",
      description: "USA, UAE",
    },
    {
      icon: "/about/world/4.svg",
      title: "Delivery Hubs",
      description: "Dhaka, Manila, Eastern Europe",
    },
    {
      icon: "/about/world/5.svg",
      title: "Future Expansion",
      description: "Japan, Canada, UK",
    },
    {
      icon: "/about/world/6.svg",
      title: "Client Served",
      description: "Served approximately 300 enterprise business across healthcare, BFSI, manufacturing, and technology",
    }
  ];

  return (
    <div className=" bg-[#F9F9F914] ">
      <Container>

      <div className=" py-10 lg:py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end px-3 xl:px-0">
          {/* Left Section */}
          <div className="lg:col-span-5">
            {/* Header */}
            <div className="flex items-center gap-2 text-[#FF9500] mb-6">
              <Image 
                src="/about/world/1.svg" 
                alt="Globe"
                width={20}
                height={20}
              />
              <span className="font-bold  lg:text-[19px]">Global Presence</span>
            </div>

            <h1 className="text-xl xl:text-[45px] font-bold text-[#101828] mb-6 lg:mb-[37px]">
              Worldwide Operations
            </h1>

            {/* Operations List */}
            <div className="space-y-[17px] ">
              {operations.map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#FF950014] border border-[#FFFFFF] rounded-lg p-3 transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer`}
                >
                    <div className="flex items-center gap-2">

                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                      />
                     

                        <div>
                         <h3 className="font-bold mb-2">
                        {item.title}
                      </h3>
                        <p className="text-xs lg:text-xl">
                        {item.description}
                      </p>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Map Image */}
          <div className='lg:h-[675px] lg:col-span-7'>

            <video
            className="lg:h-[675px] object-cover rounded-2xl"
            src="/videos/map.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default WorldwideOperations;