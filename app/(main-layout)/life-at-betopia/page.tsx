import BottomHero from "@/components/pages/life-at-betopia/BottomHero";
import BuildTheFuture from "@/components/pages/life-at-betopia/BuildTheFuture";
import Hero from "@/components/pages/life-at-betopia/Hero";
import NumbersAndValues from "@/components/pages/life-at-betopia/NumbersAndValues";
import TeamSections from "@/components/pages/life-at-betopia/TeamSections";
import WhereWeThrive from "@/components/pages/life-at-betopia/WhereWeThrive";

export default function page() {
  return (
    <div>
      <Hero />
      <BottomHero />
      <NumbersAndValues />
      <WhereWeThrive />
      <TeamSections />
      <BuildTheFuture />
    </div>
  );
}
