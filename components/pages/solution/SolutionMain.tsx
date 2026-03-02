import CoreSolutions from "./CoreSolutions";
import Process from "./Process";
import SolutionBanner from "./SolutionBanner";
import SuccessStories from "./SuccessStories";
import Technologies from "./Technologies";
import Together from "./Together";
import WhyChooseSolution from "./WhyChooseSolution";

const SolutionMain = () => {
  return (
    <div>
      <SolutionBanner />
      <CoreSolutions />
      <WhyChooseSolution/>
      <Technologies/>
      <SuccessStories/>
      <Process/>
      <Together/>
    </div>
  );
};

export default SolutionMain;
