export default function IdealFor() {
  return (
    <div className="max-w-375 mx-auto py-10 px-3 xl:px-0">
      <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px]  font-bold">
        <span className="text-[#FF9500]">Betopia ERP </span> is Ideal for
      </h3>
      <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>

      <div className="flex flex-wrap items-center justify-center gap-7 mt-10">
        {/*  */}
        <div
          className="relative w-full md:w-87.5 lg:w-120.25 h-95 md:h-72.5 lg:h-95 bg-cover rounded-xl"
          style={{
            backgroundImage: "url('/product/111.jpg')",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-6 border border-gray-300 text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
            Small & Medium Enterprises (SMEs)
          </div>
        </div>
        {/*  */}
        <div
          className="relative w-full md:w-87.5 lg:w-120.25 h-95 md:h-72.5 lg:h-95 bg-cover rounded-xl"
          style={{
            backgroundImage: "url('/product/222.png')",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-6 border border-gray-300 text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
            Large Enterprises & Corporate Groups
          </div>
        </div>
        {/*  */}
        <div
          className="relative w-full md:w-87.5 lg:w-120.25 h-95 md:h-72.5 lg:h-95 bg-cover rounded-xl"
          style={{
            backgroundImage: "url('/product/333.jpeg')",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-6 border border-gray-300 text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
            HR & Finance Teams
          </div>
        </div>
        {/*  */}
        <div
          className="relative w-full md:w-87.5 lg:w-120.25 h-95 md:h-72.5 lg:h-95 bg-cover rounded-xl"
          style={{
            backgroundImage: "url('/product/444.png')",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-6 border border-gray-300 text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
            Manufacturing & Supply Chain
          </div>
        </div>
        {/*  */}
        <div
          className="relative w-full md:w-87.5 lg:w-120.25 h-95 md:h-72.5 lg:h-95 bg-cover rounded-xl"
          style={{
            backgroundImage: "url('/product/555.png')",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-6 border border-gray-300 text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
            Retail & E-commerce
          </div>
        </div>
        {/*  */}
        <div
          className="relative w-full md:w-87.5 lg:w-120.25 h-95 md:h-72.5 lg:h-95 bg-cover rounded-xl"
          style={{
            backgroundImage: "url('/product/4.webp')",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-6 border border-gray-300 text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
            Project-Based Organizations
          </div>
        </div>
      </div>
    </div>
  );
}
