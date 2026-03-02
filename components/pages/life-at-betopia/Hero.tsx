import OnelinePageTitle from '@/components/shared/OnelinePageTitle'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] 2xl:min-h-screen  overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full  object-cover "
        src="/videos/hero/life_at_betopia.mp4"
        autoPlay
        loop
        muted
        playsInline
      />


      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-32  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16 lg:pt-[30%] xl:pt-[25%] 2xl:pt-0">
        <div className="  xl:min-w-[1440px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          
          <Link className="text-xl lg:text-3xl font-semibold" href="/life-at-betopia">
            Life at Betopia
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto ">
          <div className='w-[20%] md:w-full'>

          <OnelinePageTitle normalText="Grow Your Career at " highlightText="Betopia" />
          </div>

          <p
            className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2]  w-[20%] md:w-[40%] lg:w-[50%]`}
          >
          A culture built on innovation, collaboration, and limitless growth. Where great minds come together to build the future.
          </p>
        </div>
      </div>
      {/* Content */}
      {/* <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16 lg:mt-12">
        <h6 className='text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-[#FF690033] border border-[#FF9500]'>
          Our Culture
        </h6>

        <h1
          className=" font-bold text-white 
          text-3xl md:text-5xl lg:text-[68px] xl:text-[64px] "
        >
          Life at <span className='text-[#FF9500]'>Betopia</span>
        </h1>

        <p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[800px] px-2 sm:px-4"
        >A culture built on innovation, collaboration, and limitless growth. Where great minds come together to build the future. </p>

      </div> */}




    </div>
  )
}
