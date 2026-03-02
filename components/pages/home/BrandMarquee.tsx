'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function BrandMarquee() {
  const brands = [
    { name: "Google", src: "/more_brand/1.svg", width: 160, height: 68 },
    { name: "Figma", src: "/more_brand/2.svg", width: 160, height: 68 },
    { name: "Trustpilot", src: "/more_brand/3.svg", width: 160, height: 68 },
    { name: "Upwork", src: "/more_brand/4.svg", width: 160, height: 68 },
    { name: "Pendo", src: "/more_brand/5.svg", width: 160, height: 68 },
    { name: "Adobe", src: "/more_brand/6.svg", width: 160, height: 68 },
    { name: "Dribbble", src: "/more_brand/7.svg", width: 160, height: 68 },
    { name: "Google", src: "/more_brand/8.svg", width: 160, height: 68 },
    { name: "Figma", src: "/more_brand/9.svg", width: 160, height: 68 },
    { name: "Trustpilot", src: "/more_brand/10.svg", width: 160, height: 68 },
    { name: "Upwork", src: "/more_brand/11.svg", width: 160, height: 68 },
    { name: "Pendo", src: "/more_brand/12.svg", width: 160, height: 68 },
    { name: "Adobe", src: "/more_brand/13.svg", width: 160, height: 68 },
    { name: "Dribbble", src: "/more_brand/14.svg", width: 160, height: 68 },
    { name: "Google", src: "/more_brand/15.svg", width: 160, height: 68 },
    { name: "Figma", src: "/more_brand/16.svg", width: 160, height: 68 },
    { name: "Trustpilot", src: "/more_brand/17.svg", width: 160, height: 68 },
    { name: "Upwork", src: "/more_brand/18.svg", width: 160, height: 68 },
    { name: "Pendo", src: "/more_brand/19.svg", width: 160, height: 68 },
    { name: "Adobe", src: "/more_brand/20.svg", width: 160, height: 68 },
    { name: "Dribbble", src: "/more_brand/21.svg", width: 160, height: 68 },
    { name: "Dribbble", src: "/more_brand/22.svg", width: 160, height: 68 },
    { name: "Dribbble", src: "/more_brand/23.svg", width: 160, height: 68 },
  ];

  return (
  <div className="w-full h-auto overflow-hidden py-10 lg:py-0 mb-20 ">
    <h2 className="text-4xl text-center lg:text-5xl font-bold text-[#45556C] mb-4">
          What We Offer
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-4"></div>
        <p className="text-xl text-[#6e6e6e] max-w-3xl mx-auto mb-6 text-center">
          Comprehensive enterprise solutions tailored to your digital
          transformation journey
        </p>
  {/* <div className="md:-rotate-[7.83deg] lg:-rotate-[3.83deg] -rotate-[17.83deg] origin-center w-[120%] md:w-[105%] -ml-8 md:-ml-[2.5%]">
    <div className="shadow-up border-[#FF9500] py-7 md:py-11 my-16 md:my-24">
      <Marquee gradient={false} speed={120}>
        <div className="flex items-center gap-20 px-10">
          {brands.concat(brands).map((company, index) => (
            <Image
              key={`${company.name}-${index}`}
              src={company.src}
              alt={`${company.name} logo`}
              width={150}
              height={38}
              className="h-8 md:h-[60px]"
            />
          ))}
        </div>
      </Marquee>
    </div>
  </div> */}
</div>

  );
}




// 'use client';

// import Marquee from 'react-fast-marquee';
// import Image from 'next/image';

// export default function BrandMarquee() {
//   const brands = [
//     { name: "Google", src: "/brand/company1.png", width: 160, height: 68 },
//     { name: "Figma", src: "/brand/company2.png", width: 160, height: 68 },
//     { name: "Trustpilot", src: "/brand/company3.png", width: 160, height: 68 },
//     { name: "Upwork", src: "/brand/company4.png", width: 160, height: 68 },
//     { name: "Pendo", src: "/brand/company5.png", width: 160, height: 68 },
//     { name: "Adobe", src: "/brand/company6.png", width: 160, height: 68 },
//     { name: "Dribbble", src: "/brand/company7.png", width: 160, height: 68 },
//   ];

//   return (
//   <div className="w-full h-auto overflow-hidden">
//   <div className="-rotate-[3.83deg] origin-center w-[105%] -ml-[2.5%]">
//     <div className="bg-[#FF9500] py-4 md:py-11 my-10 md:my-20">
//       <Marquee gradient={false} speed={60}>
//         <div className="flex items-center gap-20">
//           {brands.concat(brands).map((company, index) => (
//             <img
//               key={`${company.name}-${index}`}
//               src={company.src}
//               alt={`${company.name} logo`} 
//               className=" "
//             />
//           ))}
//         </div>
//       </Marquee>
//     </div>
//   </div>
// </div>

//   );
// }
