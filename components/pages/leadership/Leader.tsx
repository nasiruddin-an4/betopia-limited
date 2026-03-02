"use client";
import Image from "next/image";

export interface Owner {
  name: string;
  role: string;
  imageUrl: string;
  slogan: string;
  bio: string;
  bg: string;
  text: string;
  variant: "dark" | "light";
  experience?: string;
}
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { leaders } from "@/data/leaders";

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

const Leader = () => {
  return (
    <section className="">
      {/* Header */}
      <div className="w-11/12 mx-auto px-3 ">
        {/* <div className="flex items-center gap-2 text-[#FF9500] mb-6">
          <Image src="/about/world/1.svg" alt="Globe" width={20} height={20} />
          <span className="font-bold  md:text-[19px]">Global Presence</span>
        </div> */}

        {/* <h1 className="text-3xl md:text-[52px] font-bold text-[#101828] mb-6 md:mb-[37px]">
          Leadership Teams
        </h1> */}
      </div>
      {leaders.map((owner, index) => {
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
                  height={670}
                  className="w-full h-full md:h-[670px] object-contain"
                />
              )}
            </div>

            {/* Content */}
            <div
              className={`${owner.bg} ${
                owner.text
              } flex flex-col justify-center  py-8 ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <motion.div
                custom={direction}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className={`${owner.bg} ${owner.text} flex flex-col justify-center px-5 xl:px-[73px]`}
              >
                <div>
                  <motion.p
                    variants={itemVariants}
                    className={`text-lg xl:text-xl mb-2 ${
                      owner.variant === "dark"
                        ? "text-[#FFFFFFCC]"
                        : "text-[#464646]"
                    }`}
                  >
                    {owner.role}
                  </motion.p>

                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl xl:text-[36px] mb-3 "
                  >
                    {owner.name}
                  </motion.h2>
                </div>

                <motion.p
                  variants={itemVariants}
                  className="text-lg xl:text-xl  mb-4 text-justify"
                >
                  {owner.content}
                </motion.p>

                {/* <button className="flex items-center gap-2 text-lg md:text-2xl">
                  Read More{" "}
                  <span className="bg-black p-3 rounded-full text-white">
                       <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
                  </span>
                </button> */}
                <button className="flex items-center gap-2 text-lg md:text-2xl">
                  <Link
                    href={`/leadership/${owner.id}`}
                    className="flex items-center gap-2 text-lg md:text-2xl"
                  >
                    Read More
                    <span className="bg-black p-3 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                          stroke="white"
                          strokeWidth="1.95"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </button>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Leader;
