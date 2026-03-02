"use client";
import React from 'react';
import { ChevronDown, Newspaper, UploadCloud } from 'lucide-react';
import Link from 'next/link';

const RegistrationForm = () => {
  return (
    <>
    <div className="relative w-full h-[500px] lg:h-[563px] overflow-hidden pb-16">
        {/* Background video */}
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/partner/white-label.mp4"
            autoPlay
            loop
            muted
            playsInline
        />


        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col mt-18 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">

            <h1
                className=" font-bold text-white 
                text-3xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-24"
            >
                Explore our platform with <span className="text-[#FF9500]">White-Label </span> <br /> solutions designed to fit your brand perfectly. 
            </h1>

            <p
                className="mt-4 sm:mt-6 text-base sm:text-sm md:text-sm lg:text-xl font-normal  text-[#CAD5E2] max-w-[1000px] px-2 sm:px-4"
            >Take the first step towards a rewarding partnership.
            </p>
            <Link href="https://wa.me/+8801332840871" target="_blank">
            <button className="flex mt-10 items-center gap-2 px-6 py-2.5 cursor-pointer rounded-full border border-[#FF9500] border-b-4 bg-white/10 text-white transition-all hover:bg-white/20">
                <span className="text-lg font-semibold tracking-wide">
                Talk to Our Partnership Team
                </span>
            </button> 
            </Link>

        </div>
    </div>

    {/* Partner section */}
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-[52px] font-bold text-[#1A1A1A] mb-6">
          Why Partner with <span className="text-[#F97316]">Betopia</span>
        </h2>

        {/* Paragraph */}
        <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed font-normal max-w-4xl mx-auto">
          Betopia helps businesses grow by turning challenges into opportunities. 
          We provide smart Cloud, AI, and Cybersecurity solutions that fit your 
          exact needs. In a world that's always changing, we make sure you're 
          not just keeping up, you're staying ahead. Every solution we create 
          is made by experts and built around your goals, never copied from a template.
        </p>
      </div>
    </section>


    <div className="min-h-screen m bg-linear-to-br from-[#FFF5F0] via-[#FDEEE5] to-[#FCE3D4] p-4 md:p-12 font-sans text-[#4A4A4A]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">
          Towards <span className="text-[#F59E0B]">First Step</span>
        </h1>

        <form className="space-y-10">
          
          {/* Section 1: Business */}
          <section>
            {/* <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#F59E0B] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <h2 className="text-xl font-semibold bg-white/50 px-4 py-1 rounded-full border border-white/40">Business</h2>
            </div> */}

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 font-bold text-base lg:text-xl">
                <span className="w-2 h-2 rounded-full bg-[#FDBA74]"></span> Your Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormGroup label="Full Name" placeholder="Enter Full Name" />
                <FormGroup label="Email Address" placeholder="Enter Company Email" />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Enter your WhatsApp Number</label>
                  <div className="flex items-center bg-white rounded-lg border border-gray-100 p-1">
                    <div className="flex items-center gap-2 px-3 border-r border-gray-200">
                      <span className="text-lg">🇦🇪</span>
                      <span className="text-sm">+971</span>
                      <ChevronDown size={14} />
                    </div>
                    <input type="text" className="w-full px-3 py-2 outline-none text-sm" placeholder="+1 (555) 000-000" />
                  </div>
                </div>
              </div>

              {/* <h3 className="flex items-center gap-2 font-bold text-sm pt-4">
                <span className="w-2 h-2 rounded-full bg-[#FDBA74]"></span> Business Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectGroup label="Business Type" placeholder="Select Business Type" />
                <SelectGroup label="Interested Area" placeholder="Select Interested area" />
                <SelectGroup label="Your Business Domain/Website" placeholder="Select Your Domain/Website" />
              </div> */}
            </div>
          </section>

          {/* Section 2: Location */}
          <section>
            {/* <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#F59E0B] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <h2 className="text-xl font-semibold bg-white/50 px-4 py-1 rounded-full border border-white/40">Location</h2>
            </div> */}

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-bold text-base lg:text-xl">
                <span className="w-2 h-2 rounded-full bg-[#FDBA74]"></span>Your Address 
              </h3>
              <p className="text-xs text-gray-500 italic -mt-2">Enter address details for better management.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <SelectGroup label="Address" placeholder="Select Country" />
                <SelectGroup label="State" placeholder="Select state" />
                <SelectGroup label="City" placeholder="Select city" />
                <FormGroup label="ZIP Code" placeholder="Enter zip code" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormGroup label="Area (optional)" placeholder="Enter zip code" />
                <FormGroup label="Community/Building" placeholder="Enter Building name" />
                <FormGroup label="Street" placeholder="Enter street/road name" />
                <FormGroup label="Block No." placeholder="Enter block name" />
              </div>
            </div>
          </section>

          {/* Section 3: Submit Document */}
          {/* <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#F59E0B] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <h2 className="text-xl font-semibold bg-white/50 px-4 py-1 rounded-full border border-white/40">Submit Document</h2>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-[#FDBA74]"></span> Upload a proof of your identity
              </h3>
              <p className="text-xs text-gray-500 -mt-2">Betopia Limited Requires a valid government-issued ID (Passport/ National ID/ Driving license)</p>
              
              <div className="bg-white border-2 border-dashed border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="bg-[#FFF5F0] p-4 rounded-full mb-4">
                  <UploadCloud className="text-[#F59E0B]" size={32} />
                </div>
                <p className="font-bold text-lg">Drag and Drop your</p>
                <p className="text-[#F59E0B] font-bold">image <span className="text-gray-400 font-normal text-sm">or</span> file</p>
                <p className="text-xs text-gray-400 mt-2">or <span className="underline cursor-pointer">browse file</span> on your computer</p>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 px-2 uppercase tracking-tight">
                <span>Supported Formats: JPG, PNG, PDF, DOC</span>
                <span>Maximum Size: 24MB</span>
              </div>
            </div>
          </section> */}

          {/* Footer Agreement & Submit */}
          <div className="space-y-8 pt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1.5 w-4 h-4 accent-[#F59E0B]"
                />
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">
                  I confirmed that I uploaded a valid government-issued photo
                  ID. This ID includes my picture, signature, name, date of
                  birth, and address.
                </span>
              </label>

            <button className="w-full md:w-80 mx-auto block bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 rounded-xl transition-all shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

// Helper Components for clean code
const FormGroup = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      required
      className="bg-white rounded-lg border border-gray-100 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#F59E0B] placeholder:text-gray-300"
    />
  </div>
);

const SelectGroup = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium">{label}</label>
    <div className="relative">
      <select className="w-full bg-white rounded-lg border border-gray-100 px-4 py-3 text-sm outline-none appearance-none text-gray-400 focus:ring-1 focus:ring-[#F59E0B]">
        <option>{placeholder}</option>
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
    </div>
  </div>
);

export default RegistrationForm;