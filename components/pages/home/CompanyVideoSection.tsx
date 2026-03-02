"use client";
import Container from "@/components/layout/Container";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { VscPlayCircle } from "react-icons/vsc";
export default function CompanyVideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-[#ECEFF4] ">

    <Container>
      <div className="flex items-center justify-center mt-10 rounded-xl md:px-14 py-10 md:pt-[80px] md:pb-20  rounded-b-md ">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[430px] overflow-hidden group">
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

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-4xl"></div>


          {/* Content */}
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            <div className=" ">
              <h1 className="text-[#ffffff] text-center text-3xl 2xl:text-[100px] font-medium mb-8">
               Betopia Limited
              </h1> 
            </div>
            {/* Watch Video Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute -bottom-0.5 -right-0.5 h-[67.5px] w-[201.3333px] bg-[#D9D9D9] flex justify-center
             items-center gap-2 cursor-pointer  rounded-tl-4xl rounded-br-4xl overflow-hidden"
            >
              <VscPlayCircle className="w-6 h-6 transform transition duration-700 group-hover:scale-110" />
              <span className="text-sm md:text-base font-medium transform transition duration-700 group-hover:scale-110">
                Watch video
              </span>
            </button>
          </div>
        </div>
        {/* Video Modal */}
        {isModalOpen && (
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
        )}
      </div>
    </Container>
    </div>
  );
}

// "use client";
// import Container from "@/components/layout/Container";
// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import { VscPlayCircle } from "react-icons/vsc";

// export default function CompanyVideoSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <Container>
//       <div className=" flex items-center justify-center px-7 py-10 md:pt-30 md:pb-20 bg-[#ECEFF4] mb-10 md:mb-23.5 rounded-b-md ">
//         {/* Hero Section */}
//         <div className="relative w-full h-107.5 rounded-4xl overflow-hidden group">
//           {/* Video Background */}
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
//           >
//             <source src="/videos/companyvideo.mp4" type="video/mp4" />
//           </video>

//           {/* Content */}
//           <div className="relative h-full flex items-center justify-center">
//             <div className="text-center">
//               <h1 className="text-white text-5xl 2xl:text-[57px] font-medium mb-8">
//                 Betopia Limited
//               </h1>
//             </div>

//             {/* Watch Video Button */}
//             <div className="absolute bottom-0 right-0 z-20">
//               {/* MASK */}
//               <div className="absolute inset-0 bg-[#D9D9D9] rounded-tl-4xl" />

//               {/* BUTTON */}
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="relative h-[107.5px] w-[271.3333px]
//                flex items-center justify-center gap-2
//                rounded-tl-4xl cursor-pointer transform transition duration-700 group-hover:scale-110"
//               >
//                 <VscPlayCircle className="w-6 h-6" />
//                 <span className="font-medium">Watch video</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Video Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur">
//             <div className="relative w-full max-w-4xl">
//               {/* Close Button */}
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
//               >
//                 <RxCross2 className="w-8 h-8" />
//               </button>

//               {/* Video Container */}
//               <div className="relative pt-[56.25%]  rounded-lg overflow-hidden">
//                 <iframe
//                   className="absolute inset-0 w-full h-full"
//                   src="https://www.youtube.com/embed/liF4ik9BwZ4?autoplay=1&rel=0"
//                   title="YouTube video"
//                   frameBorder="0"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }
