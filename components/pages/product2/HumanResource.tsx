import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HumanResource() {
  return (  
            <div className='bg-[#FFF7ED]'>
                <div className='max-w-[1480px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-20'>
                    <div> 
                        <h1
                            className=" font-normal text-balck 
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
                        >Human Resource Management (HRM)
                        </h1>
                        <p
                            className="mt-2 text-base sm:text-lg md:text-xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0"
                        >
                            A comprehensive HRM solution designed to align human capital with organizational goals, boosting performance and engagement. It offers modules for employee management, attendance, scheduling, leave, payroll, and self-service all in one platform. 
                              </p>
                        <Link href=''>
                            <button
                                className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                            >Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <path d="M3.85156 9.2417H14.6338" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.24219 3.85059L14.6333 9.24168L9.24219 14.6328" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <Image src='/human_resource_side.png' alt='human_resource_side' width={711} height={462} />
                </div>
            </div>
  )
}
