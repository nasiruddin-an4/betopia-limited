import React from "react";

interface HeadingOneProps {
  title: string;
  highlight?: string;
  center?: boolean;
}

const HeadingOne: React.FC<HeadingOneProps> = ({
  title,
  highlight,
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 lg:mb-8">
        {title}{" "}
        {highlight && (
          <span className="text-[#FF9500]">{highlight}</span>
        )}
      </h2>

      <div
        className={`w-20 h-1 bg-[#FF9500] mt-3 mb-10 lg:mb-16 ${
          center ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default HeadingOne;
