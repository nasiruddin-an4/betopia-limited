import { Calendar, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";

type StoryCardProps = {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
  logo?: string;
  logohref?: string;

};

export default function StoryCard({
  image,
  category,
  date,
  readTime,
  title,
  description,
  link,
  logo,
  logohref
}: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 md:h-96 lg:h-76">
  {/* Category badge */}
  {category && (
    <span className="absolute left-4 top-4 z-10 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 py-1 text-xs font-semibold text-white">
      {category}
    </span>
  )}

  {/* Optional Logo */}
     {logo && logohref && (
          <a
            href={logohref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 md:-top-12 z-10 p-2 "
          >
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="object-contain w-20 md:w-[150px]  md:h-[150px]"
            />
          </a>
        )}



  {/* Main Image */}
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

      {/* <div className="relative h-76">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div> */}

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-2 md:gap-4  text-gray-500 text-xs lg:text-base">
          <span className="flex items-center gap-1">
            <Calendar size={16}/> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16}/> {readTime}
          </span>
        </div>

        
        <h3 className="mb-3 text-lg lg:text-xl font-bold leading-snug text-gray-900 hover:text-[#FF9500] transition">
          <a href={link}>{title}</a>
        </h3>

        <p className="mb-6  leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>

        <a
          href={link}
          className="inline-flex items-center gap-1  font-semibold text-[#FF9500] transition"
        >
          Read Full Story <span className="mt-1"><ChevronRight/></span>
        </a>
      </div>
    </article>
  );
}
