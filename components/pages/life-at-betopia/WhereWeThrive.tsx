import Image from "next/image";

interface WorkspaceCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const workspaceData: WorkspaceCard[] = [
  {
    id: 1,
    title: 'Modern Workspace',
    description: 'State-of-the-art facilities for focused work',
    image: '/life-at-betopia/ImageWithFallback (10).png'
  },
  {
    id: 2,
    title: 'Team Celebrations',
    description: 'Celebrating wins together as a team',
    image:  '/life-at-betopia/ImageWithFallback (11).png'
  },
  {
    id: 3,
    title: 'Collaboration Spaces',
    description: 'Open areas designed for creative teamwork',
    image:  '/life-at-betopia/ImageWithFallback (12).png'
  },
  {
    id: 4,
    title: 'Team Events',
    description: 'Regular gatherings to build strong connections',
    image:  '/life-at-betopia/ImageWithFallback (13).png'
  }
];
export default function WhereWeThrive() {
  return (
     <div className='bg-[#fffefc]'>

      <div className='max-w-[1480px] w-11/12 mx-auto px-4 py-10 lg:py-20'>
        <h3 className='text-center text-black text-2xl md:text-5xl lg:text-[52px] font-bold'>Where We <span className='text-[#FF9500]'>Thrive</span> </h3>
                <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
         <p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center text-[#45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
        >Spaces designed for creativity, collaboration, and innovation</p>

        
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-12">
          {workspaceData.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
              width={757}
              height={384}
                src={card.image}
                alt={card.title}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-2">{card.title}</h3>
                <p className="text-lg text-gray-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}
