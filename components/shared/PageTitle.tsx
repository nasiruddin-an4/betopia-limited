type PageTitleProps = {
  normalText: string;
  highlightText: string;
  normalClass?: string;
  highlightClass?: string;
  wrapperClass?: string;
};

const PageTitle = ({
  normalText,
  highlightText,
  normalClass = "text-white",
  highlightClass = "text-[#FF9500]",
  wrapperClass = "",
}: PageTitleProps) => {
  return (
    <div
      className={`text-2xl md:text-5xl 2xl:text-[64px] lg:leading-[72px] ${wrapperClass}`}
    >
      <h1 className={normalClass}>{normalText}</h1>
      <h2 className={highlightClass}>{highlightText}</h2>
    </div>
  );
};

export default PageTitle;

