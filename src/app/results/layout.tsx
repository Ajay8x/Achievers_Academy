import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Academic Results & Board Toppers | 100% HSC Success, JEE & NEET Qualifiers",
  description: "Explore the historic achievements of Achievers Academy students. 100% pass record in Maharashtra HSC Science board, 99+ percentiles in JEE, and top NEET MBBS selections.",
  keywords: ["Achievers Results", "HSC Board Toppers Nashik", "JEE Result Chandwad", "NEET Selections Maharashtra"],
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

