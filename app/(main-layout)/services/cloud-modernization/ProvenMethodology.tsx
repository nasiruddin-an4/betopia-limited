import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import MethodologyCard from "@/components/shared/services/MethodologyCard";
import { cloudProvenMethodologySteps } from "@/data/service";

export default function ProvenMethodology() {
  return (
    <section className="relative bg-linear-to-br from-[#101828] to-[#1E2939] py-10 lg:py-20">
      <Container>
        <div className="text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF1A] px-4 py-2 lg:text-[18px] text-[#FF9500]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8718 25.4311C20.2558 25.4311 25.4311 20.2558 25.4311 13.8718C25.4311 7.48778 20.2558 2.3125 13.8718 2.3125C7.48778 2.3125 2.3125 7.48778 2.3125 13.8718C2.3125 20.2558 7.48778 25.4311 13.8718 25.4311Z"
                stroke="#FF9500"
                strokeWidth="2.31186"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8711 20.8048C17.7015 20.8048 20.8067 17.6996 20.8067 13.8692C20.8067 10.0388 17.7015 6.93359 13.8711 6.93359C10.0407 6.93359 6.93555 10.0388 6.93555 13.8692C6.93555 17.6996 10.0407 20.8048 13.8711 20.8048Z"
                stroke="#FF9500"
                strokeWidth="2.31186"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8705 16.1823C15.1473 16.1823 16.1823 15.1473 16.1823 13.8705C16.1823 12.5936 15.1473 11.5586 13.8705 11.5586C12.5936 11.5586 11.5586 12.5936 11.5586 13.8705C11.5586 15.1473 12.5936 16.1823 13.8705 16.1823Z"
                stroke="#FF9500"
                strokeWidth="2.31186"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Proven Methodology
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-[24px] md:text-[32px] lg:text-[52px] font-bold text-white">
            One journey. Zero shortcuts.
          </h2>

          <PageSubtitle
            text="We engage with customers through flexible models designed to support both short-term initiatives and long-term transformation"
            className="mt-4 text-white"
          />

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#FF9500]" />

          {/* Cards */}
          <div className="mt-14 grid gap-6 lg:gap-9.25 sm:grid-cols-2 lg:grid-cols-4">
            {cloudProvenMethodologySteps.map((item, i) => (
              <MethodologyCard key={i} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
