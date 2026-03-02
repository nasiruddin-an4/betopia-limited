import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

type StoryCardProps = {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
};

export default function CampaignsCard({
  image,
  category,
  date,
  readTime,
  title,
  description,
  link,
}: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 md:h-76">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 py-1  font-semibold text-white text-sm md:text-base">
          {category}
        </span>

        <Image
          src={image}
          alt={title}
          fill
          className="object-center object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-4  text-[#6A7282] ">
          <span className="flex items-center gap-1">
            <Calendar size={16} />{" "}
            <span className="text-xs xl:text-base "> {date}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} />{" "}
            <span className="text-xs xl:text-base"> {readTime}</span>
          </span>
        </div>

        <h3 className="mb-3 text-xl xl:text-[30px] font-bold  text-[#101828] hover:text-[#FF9500] transition">
          <a href={link}>{title}</a>
        </h3>
        <PageSubtitle text={description} className="text-[#4A5565] mb-6" />

        <a
          href={link}
          className="inline-flex items-center gap-2  font-semibold text-[#FF9500] transition hover:gap-3"
        >
          Read Full Story{" "}
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                stroke="#FF9500"
                strokeWidth="1.95"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}
