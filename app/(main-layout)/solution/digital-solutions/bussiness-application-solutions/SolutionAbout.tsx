import Image from "next/image";

interface SolutionAboutProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  backgroundColor?: string;
}

const SolutionAbout = ({
  badgeText,
  title,
  description,
  imageSrc,
  imageWidth = 712,
  imageHeight = 462,
}: SolutionAboutProps) => {
  return (
    <div>
      <div className="py-10  lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-[54px] max-w-[1523px] w-11/12 mx-auto px-3 md:px-8 ">
        {/* Content */}
        <div className="">
          <h6 className="w-fit text-base text-[#FF9500] mb-4 px-5 py-2 rounded-3xl bg-[#FF95004D]">
            {badgeText}
          </h6>

          <h2 className="text-3xl md:text-4xl xl:text-[52px] ">
            {title}
          </h2>

          <p className="mt-4 text-lg md:text-xl xl:text-2xl text-[#45556C] whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Image */}
        <Image
          src={imageSrc}
          alt=""
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SolutionAbout;
