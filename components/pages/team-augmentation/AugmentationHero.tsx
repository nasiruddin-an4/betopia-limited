'use client'
import { scrollToDivById } from '@/utils/dom';
import Link from 'next/link'
import React from 'react'

const AugmentationHero = () => {
    return (
        <div className="relative w-full h-[900px] overflow-hidden">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/hero/team_augmentation_hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />


            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">
                <h6 className='text-xs md:text-sm lg:text-base mb-4  px-5 py-2 rounded-3xl bg-white/20 border border-[#FF9500]'>
                    💰 SAVE UP TO 60% ON DEVELOPMENT COSTS
                </h6>

                <h1
                    className=" font-normal text-white 
          text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[83px] leading-24"
                >
                    Why Pay <span className='text-[#FF9500]'>$100k+</span> <br /> for Software Engineers?
                </h1>
                <h2
                    className=" font-normal text-[#FFFFFF99]
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[64px] leading-tight"
                >
                    Scale Your Tech Team Smarter with Betopia
                </h2>

                <p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#CAD5E2] max-w-[1100px] px-2 sm:px-4"
                >
                    Stop overspending on H-1B hires. Build high-performing global IT teams with Betopia Limited at 50–60% less cost without compromising quality, security, or delivery speed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
                    <Link href='/career'>
                        <button
                            className="bg-linear-to-r from-[#FF9500] to-[#F54900]   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                        >
                            Hire Developers Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                                <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link> 
                        <button 
                        onClick={() => {  
            setTimeout(() => {
              scrollToDivById('pricing');
            }, 300); 
        }}
                            className="hover:bg-[#FF9500] bg-white text-[#FF9500] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                        >
                            View Pricing
                        </button> 
                </div>


                <div className='flex items-center justify-evenly lg:w-[776px] mx-auto my-9'>
                    <div >
                        <h3 className='text-2xl md:text-4xl lg:text-[41px] text-[#FF8904]  font-normal mb-3'>60%</h3>
                        <p className='text-[#90A1B9] text-xs md:text-sm lg:text-base  font-normal'>Cost Savings</p>
                    </div>
                    <div >
                        <h3 className='text-2xl md:text-4xl lg:text-[41px] text-[#FF8904]  font-normal mb-3'>2 Weeks</h3>
                        <p className='text-[#90A1B9] text-xs md:text-sm lg:text-base  font-normal'>Onboarding</p>
                    </div>
                    <div >
                        <h3 className='text-2xl md:text-4xl lg:text-[41px] text-[#FF8904]  font-normal mb-3'>500+</h3>
                        <p className='text-[#90A1B9] text-xs md:text-sm lg:text-base  font-normal'>Developers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AugmentationHero