import EnterpriseTalentCard from "./EnterpriseTalentCard";

export default function Page() {
  return (
    <section className="max-w-[1480px] mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center py-8 mb-5">
            <span className="inline-block mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-1  font-semibold text-white">
                Why Choose Us
            </span>
            <h2 className="text-2xl md:text-[52px] font-bold text-[#0f172a] md:tracking-tight text-center">
                Why Betopia Resource Augmentation?
            </h2>
            <div className="mx-auto mt-4 block h-1 w-14 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900]" />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseTalentCard
          title="Enterprise-Grade Talent"
          description="Certified professionals in cloud, AI, cybersecurity, and enterprise applications."
          bgImage="/augmentation/aug-img-1.jpg"
        //   href="/talent"
        />

        <EnterpriseTalentCard
          title="Flexible Engagement"
          description="Scale teams for 3–12 months or project-specific durations."
          bgImage="/augmentation/aug-img-2.png"
        />

        <EnterpriseTalentCard
          title="Global Delivery Hubs"
          description="Dhaka, Manila, and Eastern Europe for time-zone-aligned and cost-efficient talent."
          bgImage="/augmentation/aug-img-3.png"
        />
        <EnterpriseTalentCard
          title="Enterprise-Grade Talent"
          description="Certified professionals in cloud, AI, cybersecurity, and enterprise applications."
          bgImage="/augmentation/aug-img-4.png"
        //   href="/talent"
        />

        <EnterpriseTalentCard
          title="Flexible Engagement"
          description="Scale teams for 3–12 months or project-specific durations."
          bgImage="/augmentation/aug-img-5.png"
        />

        <EnterpriseTalentCard
          title="Global Delivery Hubs"
          description="Dhaka, Manila, and Eastern Europe for time-zone-aligned and cost-efficient talent."
          bgImage="/augmentation/aug-img-6.png"
        />
      </div>
    </section>
  );
}
