"use client";
import Image from "next/image";
import { owners } from "@/data/about";

export interface Owner {
  name: string;
  role: string;
  imageUrl: string;
  slogan: string;
  bio: string;
  bg: string;
  text: string;
  variant: "dark" | "light";
  experience?: string; // ✅ optional
}
import { motion, type Variants } from "framer-motion";
import Container from "@/components/layout/Container";

const containerVariants: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 1,
    x: direction === "left" ? -80 : 80,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Owners = () => {
  return (
    <section className="">
      {/* Header */}
      <Container>
        {/* <div className="flex items-center gap-2 text-[#FF9500] mb-6">
          <Image src="/about/world/1.svg" alt="Globe" width={20} height={20} />
          <span className="font-bold  md:text-[19px]">Global Presence</span>
        </div> */}

        {/* <h1 className="text-3xl md:text-4xl xl:text-[52px] font-bold text-[#101828] mb-6 lg:mb-16 text-center">
          Leadership Teams
        </h1> */}
          <div className="text-center mb-[56px]">
             <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-[#101828]">
                  Leadership Teams
             </h2>
             <span className="block w-[93px] h-[5px] bg-[#FF9500] mx-auto mt-[18px] rounded-full" />
           </div>
      </Container>
      {owners.map((owner, index) => {
        const isEven = index % 2 === 0;
        const direction = isEven ? "right" : "left";

        return (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
          >
            {/* Image */}
            <div
              className={`${isEven ? "lg:order-1" : "lg:order-2"} 
  ${owner.imageUrl ? "" : "bg-[#F1F5F9]"} 
  flex items-center justify-center`}
            >
              {owner.imageUrl && (
                <Image
                  src={owner.imageUrl}
                  alt={owner.name}
                  width={600}
                  height={700}
                  className="w-full md:h-[700px] h-[300px] object-contain"
                />
              )}
            </div>

            {/* Content */}
            
            <div
              className={`${owner.bg} ${
                owner.text
              } flex flex-col justify-center  md:py-14 ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Container>
              
              <motion.div
                custom={direction}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className={`${owner.bg} ${owner.text} flex flex-col justify-center py-10 xl:py-0 px-2 xl:px-20`}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-[36px] font-bold mb-6 md:mb-7 "
                >
                  {owner.slogan}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-2xl  mb-10 md:mb-[35px] "
                >
                  {owner.bio}
                </motion.p>

                <div>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl"
                  >
                    {owner.name}
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className={`text-lg ${
                      owner.variant === "dark"
                        ? "text-[#FFFFFFCC]"
                        : "text-[#464646]"
                    }`}
                  >
                    {owner.role}
                  </motion.p>
                  {owner.experience && (
                    <motion.p
                      variants={itemVariants}
                      className={`text-lg ${
                        owner.variant === "dark"
                          ? "text-[#FFFFFFCC]"
                          : "text-[#464646]"
                      }`}
                    >
                      {owner.experience}
                    </motion.p>
                  )}

                  <motion.p
                    variants={itemVariants}
                    className={`text-lg ${
                      owner.variant === "dark"
                        ? "text-[#FFFFFFB2]"
                        : "text-[#464646]"
                    }`}
                  >
                    Betopia Limited
                  </motion.p>
                </div>
              </motion.div>
            </Container>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Owners;
