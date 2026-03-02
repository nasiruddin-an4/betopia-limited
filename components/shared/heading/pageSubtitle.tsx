
type PageSubtitleProps = {
  text: string;
  className?: string;
};

const PageSubtitle = ({ text, className = "" }: PageSubtitleProps) => {
  return (
    <p
      className={`text-base md:text-lg lg:text-2xl ${className}`}
    >
      {text}
    </p>
  );
};


export default PageSubtitle;