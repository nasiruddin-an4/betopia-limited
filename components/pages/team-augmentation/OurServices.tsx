import React from 'react'

export default function OurServices() {
  return (
    <div className='bg-[#EFF6FF]'>

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Our <span className='text-[#FF9500]'>Services</span> </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10'>
          <div className='h-[246px] rounded-2xl relative bg-center bg-cover hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105' style={{
            backgroundImage: "url('/team-augmentation/service.jpg')",
          }}>
            <div className='z-50 absolute bottom-4 left-4'>
              <h5 className='text-white text-base md:text-xl lg:text-2xl font-normal font-rooto'>Full Stack Development</h5>
              <p className='text-[#CAD5E2] text-xs md:text-sm lg:text-base font-normal font-rooto'>End-to-end application development</p>
            </div>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl z-10"></div>
          </div>
          <div className='h-[246px] rounded-2xl relative bg-center bg-cover hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105' style={{
            backgroundImage: "url('/team-augmentation/service.jpg')",
          }}>
            <div className='z-50 absolute bottom-4 left-4'>
              <h5 className='text-white text-base md:text-xl lg:text-2xl font-normal font-rooto'>Cloud Solutions</h5>
              <p className='text-[#CAD5E2] text-xs md:text-sm lg:text-base font-normal font-rooto'>Scalable cloud infrastructure</p>
            </div>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl z-10"></div>
          </div>
          <div className='h-[246px] rounded-2xl relative bg-center bg-cover hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105' style={{
            backgroundImage: "url('/team-augmentation/service.jpg')",
          }}>
            <div className='z-50 absolute bottom-4 left-4'>
              <h5 className='text-white text-base md:text-xl lg:text-2xl font-normal font-rooto'>Mobile Development</h5>
              <p className='text-[#CAD5E2] text-xs md:text-sm lg:text-base font-normal font-rooto'>iOS & Android applications</p>
            </div>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl z-10"></div>
          </div>
          <div className='h-[246px] rounded-2xl relative bg-center bg-cover hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105' style={{
            backgroundImage: "url('/team-augmentation/service.jpg')",
          }}>
            <div className='z-50 absolute bottom-4 left-4'>
              <h5 className='text-white text-base md:text-xl lg:text-2xl font-normal font-rooto'>DevOps & CI/CD</h5>
              <p className='text-[#CAD5E2] text-xs md:text-sm lg:text-base font-normal font-rooto'>Automated deployment pipelines</p>
            </div>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl z-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
