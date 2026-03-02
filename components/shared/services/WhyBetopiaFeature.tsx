import Image from "next/image";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

type WhyBetopiaFeatureProps = {
  icon: string;
  text: string;
  className?: string;
};

export default function WhyBetopiaFeature({
  icon,
  text,
  className = "",
}: WhyBetopiaFeatureProps) {
  return (
    <div
      className={`bg-white rounded-xl px-4 py-6 flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg ${className}`}
    >
      <Image src={icon} alt="feature" height={50} width={50} />
      <PageSubtitle text={text} className="text-[#000000CC] mt-1" />
    </div>
  );
}
