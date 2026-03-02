import Image from 'next/image'
import React from 'react'

export default function WhyBetopia() {
    return (
        <div className="bg-[#ffffff]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Why are <span className='text-[#FF9500]'>Betopia</span> </h3>

                <p
                    className="mt-4 text-center sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] mx-auto max-w-[1100px] px-2 sm:px-4"
                >Discover the advantages that set us apart in HR management solutions
                </p>
                {/*  */}
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mt-20'>
                    <div className='space-y-10'>
                        {/*  */}
                        <div className='flex items-start gap-5 bg-white rounded-2xl'>
                            <h3 className='px-4 py-3 rounded-3xl bg-[#FF9500] text-[27px] text-white  font-normal'>01</h3>
                        
                            <div>
                                <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] ">
                                    Cloud-based flexibility
                                </h5>

                                <div
                                    className="flex items-center mt-3 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
                                >Access your HR data anytime, anywhere with our secure cloud infrastructure. Work remotely without compromising on functionality.
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='flex items-start gap-5 bg-white rounded-2xl'>
                            <h3 className='px-4 py-3 rounded-3xl bg-[#FF9500] text-[27px] text-white  font-normal'>02</h3>
                        
                            <div>
                                <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] ">
                                    Reduce administrative time
                                </h5>

                                <div
                                    className="flex items-center mt-3 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
                                >Automate repetitive tasks and reduce manual data entry by up to 70%. Let your HR team focus on strategic initiatives.
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='flex items-start gap-5 bg-white rounded-2xl'>
                           <h3 className='px-4 py-3 rounded-3xl bg-[#FF9500] text-[27px] text-white  font-normal'>03</h3>
                        
                            <div>
                                <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B] ">
                                    Employee & Payroll
                                </h5>

                                <div
                                    className="flex items-center mt-3 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]"
                                >Integrated employee management and payroll processing in one platform. Ensure accuracy and compliance with every payment cycle.
                                </div>
                            </div>
                        </div>
                    </div>


                    <Image src='/product02.png' alt='hrm_software' width={711} height={577} />
                </div>
            </div>
        </div>
    )
}
