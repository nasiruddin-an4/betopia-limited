import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface EnterpriseTalentCardProps {
  title: string;
  description: string;
  bgImage: string;
  href?: string; // optional clickable
  className?: string;
}

export default function PartnerCard({
  title,
  description,
  bgImage,
  href,
  className,
}: EnterpriseTalentCardProps) {
  const cardContent = (
    <>
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" /> */}

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white m-5 bg-[#4A5565EB] rounded-[10px]  h-[145px]   ">
        <h3 className="text-xl md:text-[28px] font-semibold text-center text-[#FF9500]">
          {title}
        </h3>
        <p className="mt-1 text-lg md:text-xl text-white text-center">
          {description}
        </p>
      </div>
    </>
  );

  const baseClasses = clsx(
    "group relative overflow-hidden rounded-3xl cursor-pointer",
    "aspect-[4/3] w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={baseClasses}>
      {cardContent}
    </div>
  );
}
