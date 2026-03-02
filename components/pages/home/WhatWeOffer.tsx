import Container from '@/components/layout/Container'
import React from 'react'
import { Cloud, Shield, BarChart3, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhatWeOffer() {

    const services = [
    {
      icon: Cloud,
      color: 'bg-blue-500',
      title: 'Cloud Modernization',
      description: 'Cloud-native rebuilds, legacy refactoring, and multi-cloud deployment',
    },
    {
      icon: Shield,
      color: 'bg-green-500',
      title: 'Cybersecurity & Compliance',
      description: 'Secure-by-design development and compliance automation',
    },
    {
      icon: BarChart3,
      color: 'bg-purple-500',
      title: 'AI & Analytics',
      description: 'AI-powered enterprise applications and predictive analytics',
    },
    {
      icon: Users,
      color: 'bg-[#FF9500]',
      title: 'Resource Augmentation',
      description: 'Enterprise-grade talent on-demand for your initiatives',
    },
  ];

  return (
    <div className='max-w-[1660px] mx-auto'>
      <div className=" flex items-center justify-center px-7 py-10 md:pt-[120px] md:pb-20 bg-[#ffffff] mb-10 md:mb-[94px] rounded-b-md ">
        {/* Hero Section */}
        <div className="relative w-full h-[750px] overflow-hidden group">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full rounded-4xl h-full object-cover overflow-hidden"
          >
            <source src="/videos/companyvideo.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 rounded-4xl"></div>


          {/* Content */}
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            <div className=" ">
              {/* Title */}
        <h2 className="text-4xl text-center lg:text-5xl font-bold text-white mb-4">
         What We Offer
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-6"></div>
        <p className="text-xl text-[#D1D5DC] max-w-3xl mx-auto mb-16 text-center">
          A global IT powerhouse competing with industry giants like Infosys &
          TCS
        </p>


               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/10 max-w-[286px] flex flex-col justify-between h-full backdrop-blur-md rounded-2xl p-5 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <div>
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                </div>
                <Link
                  href="/"
                  className="text-orange-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <span>    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg></span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/meeting-scheduler"
                target="_blank"> 
            <button className="bg-linear-to-r from-[#FF9500]  cursor-pointer  to-orange-600 text-white font-semibold px-10 py-5 rounded-xl shadow-2xl hover:shadow-[#FF9500]/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              Book a Consultation
              <span>→</span>
            </button>
                </Link>
          </div>
            </div>
            {/* Watch Video Button */}
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="absolute -bottom-0.5 -right-0.5 h-[107.5px] w-[271.3333px] bg-[#D9D9D9] flex justify-center
             items-center gap-2 cursor-pointer  rounded-tl-4xl rounded-br-4xl overflow-hidden"
            >
              <VscPlayCircle className="w-6 h-6 transform transition duration-700 group-hover:scale-110" />
              <span className="text-sm md:text-base font-medium transform transition duration-700 group-hover:scale-110">
                Watch video
              </span>
            </button> */}
          </div>
        </div>
        {/* Video Modal */}
        {/* {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur">
            <div className="relative w-full max-w-4xl"> 
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <RxCross2 className="w-8 h-8" />
              </button> 
              <div className="relative pt-[56.25%]  rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/liF4ik9BwZ4?autoplay=1&rel=0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}
