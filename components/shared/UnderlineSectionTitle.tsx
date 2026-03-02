interface UnderlineSectionTitleProps {
  title: string;
  titleClassName?: string;
  underlineClassName?: string;
  wrapperClassName?: string;
}

const UnderlineSectionTitle = ({
  title,
  titleClassName = "text-2xl md:text-5xl lg:text-[52px] font-semibold text-gray-800",
  underlineClassName = "w-[103.86px] h-[5.19px] bg-[#FF9500]",
  wrapperClassName = "text-center ",
}: UnderlineSectionTitleProps) => {
  return (
    <div className={wrapperClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <span
        className={`block mx-auto mt-[21px] rounded-full ${underlineClassName}`}
      />
    </div>
  );
};

export default UnderlineSectionTitle;
