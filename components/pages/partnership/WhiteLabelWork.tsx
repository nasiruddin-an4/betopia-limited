'use client'

import Image from 'next/image'
import React from 'react'

type Step = {
  id: number
  title: string
  description: React.ReactNode
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Apply & Onboard',
    description: 'Quick application and account setup process to get you started immediately.',
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8 2V6" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 2V6" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 10H21" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
  },
  {
    id: 2,
    title: 'Training & Enablement',
    description:"Learn about our solutions and access multi-cloud offerings to effectively serve your clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 8H4C3.44772 8 3 8.44772 3 9V11C3 11.5523 3.44772 12 4 12H20C20.5523 12 21 11.5523 21 11V9C21 8.44772 20.5523 8 20 8Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 8V21" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 12V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.5 8.00044C6.83696 8.00044 6.20107 7.73705 5.73223 7.2682C5.26339 6.79936 5 6.16348 5 5.50044C5 4.8374 5.26339 4.20151 5.73223 3.73267C6.20107 3.26383 6.83696 3.00044 7.5 3.00044C8.46469 2.98363 9.41003 3.4517 10.2127 4.3436C11.0154 5.2355 11.6383 6.50984 12 8.00044C12.3617 6.50984 12.9846 5.2355 13.7873 4.3436C14.59 3.4517 15.5353 2.98363 16.5 3.00044C17.163 3.00044 17.7989 3.26383 18.2678 3.73267C18.7366 4.20151 19 4.8374 19 5.50044C19 6.16348 18.7366 6.79936 18.2678 7.2682C17.7989 7.73705 17.163 8.00044 16.5 8.00044" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
  },
  {
    id: 3,
    title: 'Generate Leads',
    description: "Identify clients, submit requirements, and collaborate with Betopia delivery team for seamless execution.",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 21C18 18.8783 17.1571 16.8434 15.6569 15.3431C14.1566 13.8429 12.1217 13 10 13C7.87827 13 5.84344 13.8429 4.34315 15.3431C2.84285 16.8434 2 18.8783 2 21" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.0008 19.9992C22.0008 16.6292 20.0008 13.4992 18.0008 11.9992C18.6582 11.506 19.1839 10.8583 19.5313 10.1135C19.8788 9.36867 20.0373 8.54969 19.9928 7.72902C19.9483 6.90835 19.7022 6.1113 19.2763 5.40842C18.8503 4.70553 18.2577 4.11848 17.5508 3.69922" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
  },
  {
    id: 4,
    title: 'Earn Revenue',
    description: "Receive 40% of project value and recurring SaaS income for ongoing client relationships.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2V22" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
  },
]

export default function WhiteLabelWork() {
  return (
    <section className="bg-[#ffffff] py-20 px-4 grid grid-cols-1 lg:grid-cols-9 gap-10 max-w-[1440px] mx-auto">
      <div className="lg:col-span-5">
        <h3 className='my-5 text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>How It  <span className='text-[#FF9500]'>Works </span> </h3>
       

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-9 top-10 bottom-10 w-[3px] bg-[#FF9500]" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 bg-[#FFFCF3] rounded-2xl p-8 flex gap-6 border-2 border-transparent hover:border-[#667eea] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(102,126,234,0.25)]"
            >
              <div className="min-w-[70px] h-[70px] rounded-full bg-[#FF9500] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {step.id}
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
                  {step.icon}
                  <span className="text-[#000000] ">
                    {step.title}
                  </span>
                </h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image className='lg:col-span-4' src="/partnership/right.png" alt='right' width={687} height={1131}/>
    </section>
  )
}
