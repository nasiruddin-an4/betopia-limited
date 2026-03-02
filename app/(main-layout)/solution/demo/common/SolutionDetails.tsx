import Container from "@/components/layout/Container";
import React from "react";

interface SolutionDetailsProps {
  badgeText?: string;
  title: string;
  highlightText?: string;
  description: string[];
  videoSrc: string;
  reverse?: boolean;
}

const SolutionDetails: React.FC<SolutionDetailsProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  videoSrc,
}) => {
  return (
    <div className="bg-[#EFF6FF]">
      <Container>
        <div className="py-20 flex justify-between gap-26 ">
          {/* Content */}
          <div>
            {badgeText && (
              <h6 className="w-fit text-xs md:text-sm lg:text-base text-[#FF9500] mb-4 px-5 py-2 rounded-3xl bg-[#FF95004D]">
                {badgeText}
              </h6>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              {title}{" "}
              {highlightText && (
                <span className="text-[#FF9500]">{highlightText}</span>
              )}
            </h1>

            {description.map((text, index) => (
              <p
                key={index}
                className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#45556C] "
              >
                {text}
              </p>
            ))}
          </div>

          {/* Video */}
          <video
            className="w-full max-w-[711px] h-[462px] rounded-2xl object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Container>
    </div>
  );
};

export default SolutionDetails;
