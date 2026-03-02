"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

interface BlogPost {
  id: number;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/product/voting_moc.png",
    tags: [
      "End-to-end encryption & role-based access",
      "Real-time results and audit-ready reporting",
      "Scalable for enterprise, government, and private use",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Count Trust",
    description:
      "A secure, cloud-based digital voting system designed for  organizations, institutions, and large-scale decision-making",
  },
  {
    id: 2,
    image: "/product/image 36 (2).png",
    tags: [
      "Employee lifecycle management",
      "Payroll, attendance & performance tracking",
      "Compliance-ready and data-driven insights",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Betopia HRM",
    description:
      "A modern Human Resource Management platform built to streamline workforce operations and improve productivity.",
  },
  {
    id: 3,
    image: "/product/hrm.jpg",
    tags: [
      "Modular, scalable architecture",
      "Cloud & on-prem deployment options",
      "Designed for growing and large enterprises",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Betopia Inhouse ERP",
    description:
      "An enterprise-grade ERP solution that connects finance, operations, inventory, and management into a single intelligent platform.",
  },
  {
    id: 4,
    image: "/product/comming-soon.avif",
    tags: [
      "Modular, scalable architecture",
      "Cloud & on-prem deployment options",
      "Designed for growing and large enterprises",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Betopia Agentic AI",
    description:
      "An enterprise-grade ERP solution that connects finance, operations, inventory, and management into a single intelligent platform.",
  },
   
];

export default function BlogCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="max-w-[1660px] mx-auto">
      {/* <h2 className="text-center text-2xl lg:text-[42px] font-medium text-black">
        We help organizations operate <br />
        <span className="text-[#FF9500]">smarter, faster, and at scale</span>
      </h2>
      <Link className="flex items-center justify-center" href="">
        <button
          className="inline-flex items-center gap-2 border my-10 
      border-[#FF9500] text-[#1F1F1F] px-4 py-1 rounded-lg
      text-sm md:text-base transition cursor-pointer"
        >
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M11.2153 4.42188H16.3916V9.59814"
              stroke="#4E4E4E"
              strokeWidth="0.862711"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.3916 4.42188L4.3136 16.4998"
              stroke="#4E4E4E"
              strokeWidth="0.862711"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link> */}
      {/* Header */}
      {/* Navigation */}
      <div className="flex items-center justify-between ">
        <div className=" ">
          {/* Title */}
          <h2 className="text-2xl  lg:text-4xl font-bold text-[#45556C] mb-4">
            Product
          </h2>
          <div className="w-20 h-1 bg-[#FF9500]  mb-6"></div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-gray-200 hover:bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="w-7 h-7 text-gray-600" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-gray-200 hover:bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Next slide"
          >
            <FaArrowRight className="w-7 h-7 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Carousel*/}
      <div className="relative w-full overflow-hidden  ">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={55}
            slidesPerView={2.8}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.8,
              },
              768: {
                slidesPerView: 2.8,
              },
            }}
            // pagination={{
            //   clickable: true,
            //   el: ".custom-pagination",
            //   bulletClass:
            //     "inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all",
            //   bulletActiveClass: "w-8 bg-gray-900",
            // }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="pb-16"
          >
            {blogPosts.map((post, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#ffffff] border border-gray-200 p-5 gap-[32px] rounded-2xl overflow-hidden  ">
                  {/* Image */}
                  <div className="relative   h-[355.58px] overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="">
                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-base md:text-[19px] px-4 py-1 rounded-full font-medium ${
                            tag === "UI Design"
                              ? "bg-[#E7F6E7] text-[#0D720A]"
                              : tag === "Graphic Design"
                              ? "bg-[#FAEBEB] text-[#942528]"
                              : "bg-[#E7EFFC] text-[#0D469E]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}

                    {/* Date and Read Time */}
                    {/* <div className="md:text-lg text-[#4A4C4F] font-medium mb-3">
                      {post.date} · {post.readTime}
                    </div> */}

                    {/* Title */}
                    <h3 className="text-xl md:text-[29px] font-semibold text-[#45556C] my-3">
                      {post.title}
                    </h3>

                    {/* Description */}
                    {/* <p className="text-base md:text-xl text-[#4E4E4E] leading-relaxed">
                      {post.description}
                    </p>
                    <ul className="ml-8 mb-8">
                      {post.tags.map((tag, index) => (
                        <li
                          key={index}
                          className={`text-base md:text-xl px-4 py-1 text-[#4E4E4E] rounded-full font-normal list-disc`}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul> */}
                    <Link href="/coming-soon">
                      <button
                        className="inline-flex items-center gap-2 
             bg-linear-to-r from-[#FF9500] to-[#F54900] text-[#ffffff] px-4  py-1.5 rounded-lg text-sm md:text-base transition cursor-pointer"
                      >
                        Explore More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13 5H19V11"
                            stroke="#FFFDFD"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 5L5 19"
                            stroke="#FFFDFD"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import Container from "@/components/layout/Container";
// import { MdArrowOutward } from "react-icons/md";
// import Link from "next/link";

// interface BlogPost {
//   id: number;
//   image: string;
//   tags: string[];
//   date: string;
//   readTime: string;
//   title: string;
//   description: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     image: "/product/voting_moc.png",
//     tags: ["End-to-end encryption & role-based access", "Real-time results and audit-ready reporting", "Scalable for enterprise, government, and private use"],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Betopia SaaS Voting Platform",
//     description:
//       "A secure, cloud-based digital voting system designed for  organizations, institutions, and large-scale decision-making",
//   },
//   {
//     id: 2,
//     image: "/product/image 36 (2).png",
//     tags: ["Employee lifecycle management","Payroll, attendance & performance tracking","Compliance-ready and data-driven insights"],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Betopia HRM Software",
//     description:
//       "A modern Human Resource Management platform built to streamline workforce operations and improve productivity.",
//   },
//   {
//     id: 3,
//     image: "/product/erp.jpg",
//     tags: ["Modular, scalable architecture", "Cloud & on-prem deployment options", "Designed for growing and large enterprises"],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Betopia ERP System",
//     description:
//       "An enterprise-grade ERP solution that connects finance, operations, inventory, and management into a single intelligent platform.",
//   },
// ];

// export default function BlogCarousel() {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className="pt-10 md:pt-20 max-w-[1800px] ml-auto">
//         {/* Header */}
//            {/* Navigation */}
//             <div className="flex items-center justify-between py-8 ">
//               <div className="custom-pagination flex items-center gap-1"></div>

//               <div className="flex gap-3 mr-32">
//                 <button
//                   onClick={() => swiperRef.current?.slidePrev()}
//                   className=" flex items-center justify-center cursor-pointer"
//                   aria-label="Previous slide"
//                 >
//                   <FaArrowLeft className="w-5 h-5 text-gray-600" />
//                 </button>
//                 <button
//                   onClick={() => swiperRef.current?.slideNext()}
//                   className=" flex items-center justify-center cursor-pointer"
//                   aria-label="Next slide"
//                 >
//                   <FaArrowRight className="w-5 h-5 text-gray-600" />
//                 </button>
//               </div>
//             </div>

//       {/* Carousel*/}
//       <div className="relative w-full overflow-hidden pl-[6%]">
//         <div className="">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={56}
//             slidesPerView={1.3}
//             speed={800}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               640: { slidesPerView:1.3 },
//               768: { slidesPerView:1.3 },
//               1024: { slidesPerView:1.3 },
//             }}
//             pagination={{
//               clickable: true,
//               el: ".custom-pagination",
//               bulletClass:
//                 "inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all",
//               bulletActiveClass: "w-8 bg-gray-900",
//             }}
//             onBeforeInit={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             className="pb-16"
//           >
//             {blogPosts.map((post) => (
//               <SwiperSlide key={post.id}>
//                 <div className="bg-[#ffffff] p-8 md:flex items-end gap-[43px] rounded-2xl overflow-hidden  ">
//                   {/* Image */}
//                   <div className="relative min-w-[560.4px] h-[345.58px] overflow-hidden rounded-xl">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       fill
//                       className="object-cover"
//                       priority
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="">
//                     {/* Tags */}
//                     {/* <div className="flex flex-wrap gap-2 mb-8">
//                       {post.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className={`text-base md:text-[19px] px-4 py-1 rounded-full font-medium ${
//                             tag === "UI Design"
//                               ? "bg-[#E7F6E7] text-[#0D720A]"
//                               : tag === "Graphic Design"
//                               ? "bg-[#FAEBEB] text-[#942528]"
//                               : "bg-[#E7EFFC] text-[#0D469E]"
//                           }`}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div> */}

//                     {/* Date and Read Time */}
//                     {/* <div className="md:text-lg text-[#4A4C4F] font-medium mb-3">
//                       {post.date} · {post.readTime}
//                     </div> */}

//                     {/* Title */}
//                     <h3 className="text-xl md:text-[39px] font-semibold text-[#FF9500] mb-3">
//                       {post.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-base md:text-xl text-[#4E4E4E] leading-relaxed">
//                       {post.description}
//                     </p>
//                      <ul className="ml-8 mb-8">
//                       {post.tags.map((tag, index) => (
//                         <li
//                           key={index}
//                           className={`text-base md:text-xl px-4 py-1 text-[#4E4E4E] rounded-full font-medium list-disc`}
//                         >
//                           {tag}
//                         </li>
//                       ))}
//                     </ul>
//                     <Link href="/product">
//                 <button
//                   className="inline-flex items-center gap-4 border
//              border-[#FF9500] text-[#1F1F1F] px-6  py-2 rounded-lg text-base md:text-lg transition cursor-pointer"
//                 >
//                   Explore More
//                   <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
//   <path d="M11.2153 4.42188H16.3916V9.59814" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M16.3916 4.42188L4.3136 16.4998" stroke="#4E4E4E" strokeWidth="0.862711" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
//                 </button>
//               </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//         </div>
//       </div>
//     </div>
//   );
// }
