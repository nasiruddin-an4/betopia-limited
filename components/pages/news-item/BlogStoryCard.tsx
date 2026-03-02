import Image from "next/image";

type BlogStoryCardProps = {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
};

export default function BlogStoryCard({
  image,
  category,
  date,
  readTime,
  title,
  description,
  link,
}: BlogStoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            📅 {date}
          </span>
          <span className="flex items-center gap-1">
            ⏱ {readTime}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 hover:text-[#FF9500] transition">
          <a href={link}>{title}</a>
        </h3>

        <p className=" text-sm leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  );
}
