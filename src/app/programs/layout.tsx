import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Academic Programs & Learning Ecosystem",
  description: "Comprehensive educational programs from Nursery to 12th Standard, State Board and CBSE curriculum, plus national competitive exams (JEE, NEET, MHT-CET).",
  keywords: ["Achievers Programs", "Curriculum Nashik", "Science Stream Junior College", "Competitive Exams Coaching"],
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
