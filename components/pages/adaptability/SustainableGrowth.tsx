import React from 'react';
import { Leaf, BarChart3, Zap, Target } from 'lucide-react';
import Image from 'next/image';
import PageSubtitle from '@/components/shared/heading/pageSubtitle';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconBg: string;
}

const FeatureCard = ({ icon: Icon, title, description, iconBg }: FeatureProps) => (
  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className={`p-2 rounded-lg ${iconBg} bg-opacity-10`}>
      <Icon className={`w-6 h-6 ${iconBg.replace('bg-orange-600', 'text-white')}`} strokeWidth={2} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function SustainableGrowth() {
  const features = [
    {
      icon: Leaf,
      title: "Optimizing Resources",
      description: "Maximize efficiency while minimizing environmental impact",
      iconBg: "bg-orange-300"
    },
    {
      icon: BarChart3,
      title: "Reducing Waste",
      description: "Streamline operations to eliminate unnecessary consumption",
      iconBg: "bg-orange-300"
    },
    {
      icon: Zap,
      title: "Improving Efficiency",
      description: "Intelligent systems that work smarter, not harder",
      iconBg: "bg-orange-300"
    },
    {
      icon: Target,
      title: "Long-term Growth",
      description: "Sustainable solutions for responsible business evolution",
      iconBg: "bg-orange-300"
    }
  ];

  return (
    <section className="max-w-7xl w-11/12 mx-auto px-4 pb-10 lg:pb-20 font-sans bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="space-y-8">
          <div className="max-w-xl">
            <h2 className="text-[22px] md:text-4xl xl:text-[52px] font-bold text-gray-900  mb-6">
              Smart Tech. Sustainable Growth.
            </h2>
              <PageSubtitle
          text="Betopia helps organizations align innovation with sustainability 
              optimizing resources, reducing operational waste, improving 
              efficiency, and enabling long-term responsible growth through 
              intelligent digital solutions."
          className="text-gray-500"
        />
         
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {features.map((feature, index) => (
              <FeatureCard  key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Right Column: Image/Visual */} 
         <div className="relative w-full h-full min-h-[350px] rounded-xl overflow-hidden">
  <Image
    src="/adaptability/1221.png"
    alt="Digital interaction"
    fill
    className="object-cover"
  />
</div>


      </div>
    </section>
  );
}