import Link from 'next/link'
import React from 'react'

export default function Product2CTA() {
    return (
        <div className="bg-[#FF9500]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <h3 className='text-center leading-20 text-white text-3xl md:text-5xl lg:text-[52px]  font-normal'>Looking For an all-in-one <br /> HRM Solution? </h3>
                <p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[#ffffff] mx-auto max-w-[1000px] px-2 sm:px-4"
                >Start your free trial today and experience the future of HR management. No credit card required.</p>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
                    <Link href='/contact'>
                        <button
                            className="bg-[#ffffff]   text-[#F54900] cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                        >Start Free Trial
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M3.87305 9.29688H14.7193" stroke="#F54900" strokeWidth="1.54946" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.29492 3.87354L14.718 9.29666L9.29492 14.7198" stroke="#F54900" strokeWidth="1.54946" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
