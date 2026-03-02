import React from "react";

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  time: string;
}

export const officeLocationsData: OfficeLocation[] = [
  {
    city: "Dhaka",
    country: "Bangladesh",
    address: "123 Business Avenue, Gulshan-2, Dhaka 1200",
    time: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "456 Tech Park, Marina Bay, Singapore 018956",
    time: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
  {
    city: "San Francisco",
    country: "USA",
    address: "789 Innovation Street, CA 94102",
    time: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
];



interface OfficeLocationCardProps {
  city: string;
  country: string;
  address: string;
  time: string;
}

const OfficeLocationCard: React.FC<OfficeLocationCardProps> = ({
  city,
  country,
  address,
  time,
}) => {
  return (
    <div className="p-9 rounded-2xl border-2 border-gray-200 bg-white hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
      <div className="p-3 rounded-xl w-full bg-[#FFEDD4] flex items-center gap-3">
        {/* Location Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M23.242 11.6212C23.242 17.4236 16.8051 23.4665 14.6436 25.3328C14.4423 25.4843 14.1972 25.5661 13.9452 25.5661C13.6933 25.5661 13.4482 25.4843 13.2468 25.3328C11.0853 23.4665 4.64844 17.4236 4.64844 11.6212C4.64844 9.15558 5.62792 6.79091 7.3714 5.04743C9.11489 3.30394 11.4796 2.32446 13.9452 2.32446C16.4109 2.32446 18.7756 3.30394 20.519 5.04743C22.2625 6.79091 23.242 9.15558 23.242 11.6212Z"
            stroke="#F54900"
            strokeWidth="2.3242"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9472 15.1074C15.8727 15.1074 17.4335 13.5465 17.4335 11.6211C17.4335 9.69563 15.8727 8.13477 13.9472 8.13477C12.0218 8.13477 10.4609 9.69563 10.4609 11.6211C10.4609 13.5465 12.0218 15.1074 13.9472 15.1074Z"
            stroke="#F54900"
            strokeWidth="2.3242"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B]">
        {city}
      </h5>
      </div>


      <p className="mt-10 text-xs md:text-sm lg:text-base  text-[#45556C]">
        {country}
      </p>

      <p className="mt-10 text-xs md:text-sm lg:text-base  text-[#45556C]">
        {address}
      </p>

      <div className="flex items-center mt-10 gap-2 text-xs md:text-sm lg:text-base  text-[#45556C]">
        {/* Clock Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M9.29492 4.64844V9.29683L12.3938 10.8463"
            stroke="#FF6900"
            strokeWidth="1.54946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.29419 17.0442C13.5729 17.0442 17.0415 13.5756 17.0415 9.29688C17.0415 5.01815 13.5729 1.54956 9.29419 1.54956C5.01547 1.54956 1.54688 5.01815 1.54688 9.29688C1.54688 13.5756 5.01547 17.0442 9.29419 17.0442Z"
            stroke="#FF6900"
            strokeWidth="1.54946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {time}
      </div>
    </div>
  );
}; 


export default function OurOfficeLocations() {
    return (
        <div className="bg-[#EFF6FF]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Our <span className='text-[#FF9500]'>Office Locations</span> </h3>
                <p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
                >
                    Visit us at any of our global offices. We&apos;re here to help you succeed. </p>
                {/*  */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10'>
                     {officeLocationsData.map((office, index) => (
            <OfficeLocationCard key={index} {...office} />
          ))}

                </div>

            </div>
        </div>
    )
}
