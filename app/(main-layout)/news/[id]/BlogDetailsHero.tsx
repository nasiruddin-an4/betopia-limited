import Link from 'next/link';
import React from 'react'; 
import { BiCalendar, BiMapPin } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';
import { FaUserSecret } from 'react-icons/fa';

const BlogDetailsHero: React.FC = () => {
  return (
    <div className=" bg-gray-100  pb-5">
        <div className='h-32 mb-5 bg-black w-full'></div>
      <div className="max-w-[1440px] mx-auto">
        {/* Back Button */}
        <Link href="/news">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <BsArrowLeft size={20} />
          <span className="text-sm font-medium">Back to News</span>
        </button>
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background Image */}
          <img 
            src="/blog/ImageWithFallback (7).png" 
            alt="Workshop background"
            className="w-full h-[600px] object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block bg-[#FF9500] text-white text-xs font-semibold px-4 py-2 rounded-full">
                Upcoming Event
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Joint Workshop
            </h1>
            
            {/* Subtitle */}
            <p className="text-orange-400 text-lg md:text-xl font-medium mb-6">
              Bringing Growth & Cost Efficiency for Tech Leaders
            </p>
            
            {/* Event Details */}
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <BiCalendar size={18} className="text-orange-400" />
                <span className="text-sm">28 Aug, 2024</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CgLock size={18} className="text-orange-400" />
                <span className="text-sm">2:00 PM - 5:00 PM</span>
              </div>
              
              <div className="flex items-center gap-2">
                <BiMapPin size={18} className="text-orange-400" />
                <span className="text-sm">Hotel Sheraton, Dhaka</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FaUserSecret size={18} className="text-orange-400" />
                <span className="text-sm">150+ Tech Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHero;