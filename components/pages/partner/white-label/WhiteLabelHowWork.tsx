import { LuRocket, LuBrain, LuTarget } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import HowItWorks from "../common/HowItWorks";

const steps = [
  {
    number: "01",
    icon: <LuRocket />,
    title: "Apply & Onboard",
    description: "Quick application and account setup with our partnership team",
  },
  {
    number: "02",
    icon: <LuBrain />,
    title: "Training & Enablement",
    description:
      "Learn Betopia solutions and multi-cloud offerings through comprehensive training",
  },
  {
    number: "03",
    icon: <LuTarget />,
    title: "Generate Leads",
    description:
      "Identify clients, submit requirements, and collaborate with Betopia delivery team",
  },
  {
    number: "04",
    icon: <BiDollar />,
    title: "Earn Revenue",
    description: "Receive 40% of project value and recurring SaaS income",
  },
];

export default function WhiteLabelHowWork() {
  return <HowItWorks title="How It Works" steps={steps} />;
}
