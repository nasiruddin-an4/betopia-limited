import React from 'react'; 
import { BiCheckCircle, BiMenu } from 'react-icons/bi';

const CTS: React.FC = () => {
  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"> 

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className='py-4'>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-2">
                3S&G IPS-SBF Conference
              </h1>
              <p className="text-[#ffb411f8] text-sm">25 Aug, 2024</p>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */} 
            <img
              src="/blog/ImageWithFallback (17).png"
              alt="Conference stage"
              className="rounded-lg  w-full h-auto"
            /> 

          {/* Right Side - Content */}
          <div className="text-white space-y-6">

            <p className="text-gray-300 leading-relaxed">
              A colligation of Asia-Gen Enterprises led by Mr. Rezaurul Hoque and 
              Mr. Kamrul Ahemmed attended the World Productivity Congress in 
              Singapore, exploring the topic of Smart and Safe data management and 
              data governance for business growth and resilience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BiCheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  These events brought together global leaders and industry experts from 
                  across Asia to discuss critical topics around using new technology.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <BiCheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Discussions included insights from Dr. Taihad Bin Imam and Dr. Amedabe 
                  Cusser focusing on Singapore-Bd Asia pioneering Data-driven Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTS;