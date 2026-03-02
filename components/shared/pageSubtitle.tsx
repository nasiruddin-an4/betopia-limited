import React from "react";

type PageSubtitleProps = {
  text: string;
  className?: string;
};

const PageSubtitle = ({ text, className = "" }: PageSubtitleProps) => {
  return (
    <p
      className={`text-base md:text-lg xl:text-xl  ${className}`}
    >
      {text}
    </p>
  );
};


export default PageSubtitle;