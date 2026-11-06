import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "JEE Main & Advanced, NEET Medical & MHT-CET Coaching",
  description: "Specialized competitive entrance preparation at Achievers IIT & Medical Chandwad. DPPs, All-India test series, doubt solving clinics, and top rankers.",
  keywords: ["JEE Coaching Nashik", "NEET Coaching Maharashtra", "MHT-CET Classes Chandwad", "IIT JEE Medical Institute"],
};

export default function CompetitiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

