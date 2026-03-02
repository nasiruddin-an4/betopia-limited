import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ScalableSecure() {
    return (

        <div className='bg-[#EFF6FF]'>
            <div className='max-w-[1480px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div>
                    <h6 className='w-fit text-xs md:text-sm lg:text-base text-[#FF9500] mb-4 px-5 py-2 rounded-3xl bg-[#FF95004D]'>
                        Why Choose Us
                    </h6>
                    <h1
                        className=" font-normal text-balck 
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
                    >
                        Scalable and <span className='text-[#FF9500]'>Secure</span>
                    </h1>
                    <p
                        className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0"
                    >
                        Our infrastructure solutions are built on industry-leading practices, ensuring your business operates with maximum efficiency, security, and reliability.
                    </p>

                    <div className='mt-6 space-y-3'>
                        <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
                            <Image src="/icons/active.png" alt="icon" width={23} height={23} /> Enterprise-grade security with 99.99% uptime
                        </div>
                        <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
                            <Image src="/icons/active.png" alt="icon" width={23} height={23} />Scalable architecture that grows with your business
                        </div>
                        <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
                            <Image src="/icons/active.png" alt="icon" width={23} height={23} />Real-time monitoring and automated incident response
                        </div>
                        <div className='flex items-center gap-3 text-sm lg:text-2xl text-[#314158] font-normal '>
                            <Image src="/icons/active.png" alt="icon" width={23} height={23} />24/7 expert support and dedicated account management
                        </div>
                    </div>
                    <Link href=''>
                        <button
                            className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"
                        >Learn More
                        </button>
                    </Link>
                </div>
                <video
                    className="w-[711px] h-[462px] rounded-2xl object-cover"
                    src="/videos/service_2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </div>
    )
}
