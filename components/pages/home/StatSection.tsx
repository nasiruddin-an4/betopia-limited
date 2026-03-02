import Container from "@/components/layout/Container";
import { statsData } from "@/data/home";
export default function StatSection() {
  return (
    <Container>
      <div className="flex items-center justify-center py-5 md:py-[45px]">       
        <div className="w-full">         
          {/* Header */}
          <div className="text-center mb-8 md:mb-[87px]">
            
            {/* <p className="text-sm md:text-base 2xl:text-[20px] text-[#070A0E] py-[3px] px-[11px] w-[90px] mx-auto rounded-md bg-[#F0F0F1] uppercase tracking-wider mb-4">
              
              Label
            </p> */}
            <h2 className="text-xl md:text-4xl lg:text-[43px] font-bold text-[#070A0E] mb-4">
              
            Global Impact at Scale
            </h2>
            <p className="text-[#4A4C4F] text-lg 2xl:text-2xl">
              
              Powering businesses worldwide with trusted technology, proven expertise, and global delivery strength.
            </p>
          </div>
          <div className="relative overflow-hidden">
            
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              
              <source src="/videos/stat.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-11 p-8 md:p-16 2xl:p-[87px]">
              
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="text-center group border border-white/40 bg-[#FFFFFF1A] backdrop-blur-[32px] p-4 md:p-7 rounded-[11px] flex flex-col items-center  justify-center"
                >
                  
                  <h2 className="text-3xl md:text-5xl 2xl:text-[77px] font-bold text-white mb-3">
                    
                    {item.value}
                  </h2>
                  <h3 className="text-lg md:text-2xl 2xl:text-[36px] font-semibold text-white mb-1">
                    
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base 2xl:text-2xl text-white mt-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
