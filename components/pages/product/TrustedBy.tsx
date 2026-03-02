import React from 'react'

export default function TrustedBy() {
    return (
        <div className="bg-[#F8FAFC]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <h3 className='text-center text-black text-xl md:text-2xl lg:text-2xl  font-bold'>Trusted <span className='text-[#FF9500]'>by</span> </h3>
                {/*  */}
                <div className='mt-10 flex flex-wrap items-center justify-center gap-10'>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110  text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl">
                        JC
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110  text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl">
                        B24
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110  text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl">
                        SG
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110  text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl">
                        TW
                    </h5>
                    <h5 className="hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-110  text-base shadow-2xl md:text-xl lg:text-2xl font-normal  text-[#45556C] p-8 bg-white rounded-2xl">
                        AWS
                    </h5>
                </div>
            </div>
        </div>
    )
}
