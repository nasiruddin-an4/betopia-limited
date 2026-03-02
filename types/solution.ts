import { ReactNode } from "react";

export interface WhyBetopiaItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface WhyBetopiaContent {
  heading: string;
  highlight: string;
  image: string;
  items: WhyBetopiaItem[];
}

export interface ClientValueStoryProps {
  title: string;
}
