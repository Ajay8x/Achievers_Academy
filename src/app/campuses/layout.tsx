import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Campuses | Manmad, Chandwad & Niphad",
  description: "Explore the three campuses of Achievers Group of Institutes in Nashik district: Achievers World School Manmad, Achievers IIT & Medical Chandwad, and Wisdom International School Niphad.",
  keywords: ["Achievers Campuses", "Schools in Manmad", "Coaching in Chandwad", "CBSE School Niphad"],
};

export default function CampusesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

