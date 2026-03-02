import HeadingSix from "@/components/shared/heading/HeadingSix";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

type MethodologyCardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function MethodologyCard({
  title,
  desc,
  icon,
}: MethodologyCardProps) {
  return (
    <div className="rounded-[17px] bg-white p-6 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      {icon}

      <HeadingSix
        title={title}
        center={false}
        className="mt-4.5 text-xl font-bold text-black"
      />

      <PageSubtitle
        text={desc}
        className="mt-3 text-[#4A5565]"
      />
    </div>
  );
}
