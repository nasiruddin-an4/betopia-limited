
export default function OurLatestInsights() {
  return (
    <div className="bg-linear-to-r from-[#FF9500] to-[#F54900]">

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-white text-3xl md:text-5xl lg:text-[52px]  font-bold'>Stay in the Loop</h3>
        <p
          className="mt-4 sm:mt-6 text-lg md:text-xl lg:text-2xl text-center font-normal  text-[#ffffff] mx-auto max-w-[1000px] px-2 sm:px-4"
        >Subscribe to get the latest news, updates, and insights delivered to your inbox</p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
          <input
            type="email"
            className="w-full max-w-[600px] text-sm md:text-lg font-normal text-white  py-3 px-4 bg-transparent rounded-xl 
             border border-gray-300 
             focus:border-white focus:ring-0 focus:outline-none"
            placeholder="Enter your email address"
          />
          <button
            className="hover:bg-[#ffffff] bg-white text-[#FF9500]  cursor-pointer flex items-center gap-4 rounded-xl font-semibold px-5 py-3  md:px-8 md:py-4 text-sm md:text-base"

          >Subscribe Now
          </button>
        </div>
        <p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-center font-normal  text-[#FFFFFFB2] mx-auto max-w-[1000px] px-2 sm:px-4"
        >Join 10,000+ professionals who trust Betopia for industry insights</p>
      </div>
    </div>
  )
}

