import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "50+",
    label: "Published Stories",
  },
  {
    icon: Users,
    value: "10k+",
    label: "Monthly Readers",
  },
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
  },
  {
    icon: TrendingUp,
    value: "200%",
    label: "Annual Growth",
  },
];

export default function CountStats() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0B1324] to-[#050A18] py-20">
      <div className="max-w-[1480px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Betopia in Numbers
          </h2>

          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="
                relative rounded-2xl bg-white/5 p-8 text-center
                backdrop-blur-md
                border border-white/10
                shadow-[0_0_40px_rgba(0,0,0,0.4)]
                transition hover:translate-y-[-4px]
              "
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r from-[#FF9500] to-[#F54900]">
                <item.icon className="h-7 w-7 text-white" />
              </div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-[#FF9500]">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
