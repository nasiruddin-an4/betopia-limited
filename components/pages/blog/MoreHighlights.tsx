'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Blog {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}



const blogs: Blog[] = [
  {
    id: 1,
    image: "/blog/highlights1.png",
    date: "15 Dec, 2024",
    title: "Enhancing Collaboration",
    description:
      "Bdcalling IT Ltd- a concern of Betopia Group has participated in the seminar titled “Enhance Collaboration Between Institute and Industry”.",
    link: "/news/1",
  },
  {
    id: 2,
    image: "/blog/highlights2.png",
    date: "15 Dec, 2024",
    title: "Joint Workshop",
    description:
      "Betopia Group & CUET Organized Career Pathways in Web and Software Development & Farewell of the 2019 Batch.",
    link: "/news/2",
  },
  {
    id: 3,
    image: "/blog/highlights3.png",
    date: "15 Dec, 2024",
    title: "Sales Training",
    description:
      "Betopia Group organized a dynamic Next Level Sales Training aimed at enhancing the skills and capabilities of sales.",
    link: "/news/3",
  },
  {
    id: 4,
    image: "/blog/highlights1.png",
    date: "20 Dec, 2024",
    title: "Leadership Meetup",
    description:
      "A leadership-focused meetup discussing modern management and growth strategies.",
    link: "/news/4",
  },
];


 


 

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="relative border border-gray-300 rounded-2xl bg-white transition-all duration-300 ease-in-out hover:bg-gray-200">
      <div className="absolute bg-white px-3 py-1 flex items-center gap-2 text-xs md:text-sm lg:text-base font-normal  text-[#45556C] rounded-2xl right-3 top-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4.62109 1.15527V3.46574" stroke="#FF9500" strokeWidth="1.15523" strokeLinecap="round" />
          <path d="M9.24219 1.15527V3.46574" stroke="#FF9500" strokeWidth="1.15523" strokeLinecap="round" />
          <path d="M10.9743 2.31055H2.88766C2.24964 2.31055 1.73242 2.82776 1.73242 3.46578V11.5524C1.73242 12.1904 2.24964 12.7077 2.88766 12.7077H10.9743C11.6123 12.7077 12.1295 12.1904 12.1295 11.5524V3.46578C12.1295 2.82776 11.6123 2.31055 10.9743 2.31055Z" stroke="#FF9500" strokeWidth="1.15523" />
          <path d="M1.73242 5.77612H12.1295" stroke="#FF9500" strokeWidth="1.15523" />
        </svg>
        {blog.date}
      </div>

      <Image
        className="rounded-t-2xl"
        src={blog.image}
        alt="highlights"
        width={465}
        height={295}
      />

      <div className="px-7 pb-7 pt-10">
        <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#0F172B]">
          {blog.title}
        </h5>

        <div className="flex items-center mt-4 gap-3 text-xs md:text-sm lg:text-base font-normal  text-[#45556C]">
          {blog.description}
        </div>

        <Link href={blog.link}>
          <button className="hover:bg-[#FF9500] bg-white text-[#FF9500] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 md:py-3 mt-3 text-sm md:text-base">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};
 





export default function MoreHighlights() {
    const [showAll, setShowAll] = useState<boolean>(false);

  const visibleBlogs: Blog[] = showAll ? blogs : blogs.slice(0, 3);
    return (
        <div id='blog' className="bg-[#FFFFFF]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>More <span className='text-[#FF9500]'>Highlights</span> </h3>
                <p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
                >Explore our latest events, conferences, and success stories from around the world</p>

                {/*  */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20'>
                    {visibleBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
                </div>
                 {showAll ? (
          <button
            onClick={() => setShowAll(false)}
            className="hover:bg-[#FF9500] border w-fit mx-auto border-gray-200 bg-white text-[#424242] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 md:py-3 mt-10 text-sm md:text-base"
          >
            Hide Articles
          </button>
        ) : (
          <button
            onClick={() => setShowAll(true)}
            className="hover:bg-[#FF9500] border w-fit mx-auto border-gray-200 bg-white text-[#424242] hover:text-white cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 md:py-3 mt-10 text-sm md:text-base"
          >
            View All Articles
          </button>
        )}
            </div>

        </div>
    )
}
