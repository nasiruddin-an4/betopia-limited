import Image from 'next/image'
import React from 'react'

const GlobalAbout = () => {
  return (
     <div className="bg-[#F9FAFB]">
      <div className="py-10 md:py-20 flex flex-col md:flex-row justify-between gap-8 lg:gap-[60px] w-11/12 mx-auto px-3">
        {/* Content */}
          <div className="md:w-1/2 ">
          {/* Main Image */}
          <Image
            className="object-cover rounded-xl w-full h-full lg:h-[550px]"
            src="/global/22.jpg"
            alt="Main vision"
            width={880}
            height={600}
          />

         
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">

          <h1 className="text-3xl md:text-4xl xl:text-[52px] font-bold">
            A Global Connected Organization
          </h1>

          <p className="mt-6 lg:mt-7 text-lg md:text-xl xl:text-2xl text-[#41404299] ">
           BETOPIA Limited combines regional presence with centralized governance to deliver secure, reliable, and scalable solutions worldwide.

          </p>
      
          <p className="mt-6 md:mt-7 text-lg md:text-xl xl:text-2xl text-[#41404299] ">
         Our global footprint allows us to stay close to our clients while maintaining unified delivery standards and operational excellence.

          </p>
        </div>
      
      </div>
    </div>
  )
}

export default GlobalAbout
