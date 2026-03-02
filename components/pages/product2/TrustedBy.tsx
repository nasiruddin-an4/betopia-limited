import React from 'react'

export default function TrustedBy() {
    return (
        <div className="bg-[#FFF7ED]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <h3 className='text-center text-black text-xl md:text-2xl lg:text-2xl  font-normal'>Trusted <span className='text-[#FF9500]'>by</span> </h3>
                {/*  */}
                <div className='mt-10 flex items-center justify-center gap-10'>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110 text-base shadow-2xl md:text-lg lg:text-2xl font-normal  text-[#45556C] border border-gray-200 py-5 px-8 bg-white rounded-2xl">
                        Jivochat
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110 text-base shadow-2xl md:text-lg lg:text-2xl font-normal  text-[#45556C] border border-gray-200 py-5 px-8 bg-white rounded-2xl">
                        Bitrix24
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110 text-base shadow-2xl md:text-lg lg:text-2xl font-normal  text-[#45556C] border border-gray-200 py-5 px-8 bg-white rounded-2xl">
                        SendGrid
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110 text-base shadow-2xl md:text-lg lg:text-2xl font-normal  text-[#45556C] border border-gray-200 py-5 px-8 bg-white rounded-2xl">
                        Twilio
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110 text-base shadow-2xl md:text-lg lg:text-2xl font-normal  text-[#45556C] border border-gray-200 py-5 px-8 bg-white rounded-2xl">
                     AWS
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110 text-base shadow-2xl md:text-lg lg:text-2xl font-normal  text-[#45556C] border border-gray-200 py-5 px-8 bg-white rounded-2xl">
                        Stripe
                    </h5>
                </div>
            </div>
        </div>
    )
}
