type PageTitleProps = {
  normalText: string;
  highlightText: string;
  normalClass?: string;
  highlightClass?: string;
  wrapperClass?: string;
};

const OnelinePageTitle = ({
  normalText,
  highlightText,
  normalClass = "text-white",
  highlightClass = "text-[#FF9500]",
  wrapperClass = "",
}: PageTitleProps) => {
  return (
    <div
      className={`text-2xl md:text-5xl xl:text-[64px] font-bold ${wrapperClass}`}
    >
      <h1 className={normalClass}>{normalText} <span  className={highlightClass}>{highlightText}</span></h1>
    </div>
  );
};

export default OnelinePageTitle;

