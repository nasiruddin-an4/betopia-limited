import { LuRocket, LuBrain, LuTarget } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import HowItWorks from "../common/HowItWorks";

const steps = [
  {
    number: "01",
    icon: <LuRocket />,
    title: "Apply & Onboard",
    description: "Get verified as a co-branded partner.",
  },
  {
    number: "02",
    icon: <LuBrain />,
    title: "Training & Enablement",
    description:
      "Learn offerings, multi-cloud solutions, and Betopia platforms.",
  },
  {
    number: "03",
    icon: <LuTarget />,
    title: "Generate Leads",
    description:
      "Identify potential clients and submit requirements",
  },
  {
    number: "04",
    icon: <BiDollar />,
    title: "Close Deals & Earn Revenue",
    description: "Collaborate with Betopia on delivery and receive 30% of project value.",
  },
];

export default function CoBrandedHowWork() {
  return <HowItWorks title="How It Works" steps={steps} />;
}
