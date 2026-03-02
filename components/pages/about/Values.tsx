import Container from '@/components/layout/Container';
import PageSubtitle from '@/components/shared/heading/pageSubtitle';
import Image from 'next/image'
const values = [
  {
    id: 1,
    href: '/about/values/1.png',
    title: "Innovation",
    description:
      "Continuously pushing boundaries in enterprise technology",
  },
  {
    id: 2,
    href: '/about/values/2.png',
    title: "Integrity",
    description:
      "Transparent, ethical, and accountable in every engagement",
  },
  {
    id: 3,
    href: '/about/values/3.png',
    title: "Excellence",
    description:
      "Delivering enterprise-grade quality in services and products",
  },
    {
    id: 4,
    href: '/about/values/4.png',
    title: "Collaboration",
    description:
      "Partnering with clients, employees, and ecosystem partners for mutual success.",
  },
      {
    id: 5,
    href: '/about/values/5.png',
    title: "Global Mindset",
    description:
      "Culturally intelligent, globally aware, and future-focused",
  },
];
const Values = () => {
  return (
       <section className="bg-white py-10 md:py-20">
         <Container>
           {/* Section Title */}
           <div className="text-center mb-[56px]">
             <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-[#101828]">
               Our Values
             </h2>
             <span className="block w-[93px] h-[5px] bg-[#FF9500] mx-auto mt-[18px] rounded-full" />
           </div>
   
           {/* Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 px-3 xl:px-0 gap-7 ">
             {values.map((item) => (
               <div
                 key={item.id}
                 className="bg-white border border-[#F3F4F6] rounded-2xl p-4 md:p-7 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
               >
                 <Image src={item.href} alt={item.title} width={74} height={74} className="mb-[19px]"/>
   
                 <h4 className="text-xl xl:text-[30px] font-bold text-[#0A0A0A] mb-[11px] text-center">
                   {item.title}
                 </h4>
   <PageSubtitle
            text={item.description}
            className="text-[#4A5565] text-center"
          />
                
               </div>
             ))}
           </div>
         </Container>
       </section>
  )
}

export default Values
