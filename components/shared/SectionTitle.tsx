type SectionTitleProps = {
  normalText: string;
  highlightText: string;
  className?: string;
};

export default function SectionTitle({ normalText, highlightText,className = "" }: SectionTitleProps) {
  return (
    <h1 className={`text-3xl md:text-4xl xl:text-[52px] font-bold ${className}`}>
      <span className="text-[#0F172B]">{normalText} </span>
      <span className="text-[#FF9500]">{highlightText}</span>
    </h1>
  );
}
