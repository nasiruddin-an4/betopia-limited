import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function JoinJourney() {
  return (
    <section className="w-full bg-[#FF9500]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-20 md:px-20">
          {/* Left  */}
          <div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight">
              Join Us on Our Journey
            </h2>

            <p className="mt-6 text-[#FFFFFFE5]  text-base md:text-[21px] leading-relaxed">
              Be part of a team that’s transforming enterprise infrastructure
              globally. We’re always looking for talented individuals who share
              our passion for innovation and excellence.
            </p>
            <Link href="/career">
              <button
                className="mt-[37px] inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-[9px]
             transition"
              >
                Explore Careers
                <span className="text-lg">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Right  */}
          <div className="relative hidden md:flex justify-center">
            <Image
              src="/about/rocket.png"
              alt="Rocket"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
