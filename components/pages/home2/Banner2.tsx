const Banner2 = () => {
  return (
    <div className="relative min-h-[97vh] w-full md:w-[98%] mx-auto md:mt-[31px] md:rounded-[36.94px] overflow-hidden flex items-end  justify-center text-center text-white ">

      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden md:rounded-[36.94px]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero/home2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scrolling Text */}
     <div className="fixed -left-12 top-1/2 -translate-y-1/2 z-50 ">
        <span className="block -rotate-90 text-[#0C0F3C] text-2xl whitespace-nowrap bg-white px-5 py-2 rounded-3xl shadow-lg">
          Scrolling
        </span>
      </div>

      {/* Main Content */}
       <div className="relative z-20 container flex flex-col items-center justify-center px-4 pb-[10%]">
        <h1 className="text-[34px] md:text-5xl 2xl:text-[80px] font-bold">
          From Bangladesh to the World
        </h1>

        <h1 className="text-[20px] md:text-4xl 2xl:text-[50px]  text-center pt-7 pb-4 ">
          Delivering Secure, Cloud-Ready & AI-Powered Enterprise Solutions
        </h1>

        <p className="text-sm md:text-2xl md:w-[95%] ">
          Betopia Limited is a global enterprise transformation partner specializing in Managed IT Services, Cloud Infrastructure, AI-driven platforms, Data Solutions, and Cybersecurity. We help organizations modernize, secure, and scale their digital ecosystems with future-ready technology.
        </p>
      </div>
    </div>
  );
};

export default Banner2;
