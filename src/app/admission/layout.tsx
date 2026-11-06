import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admission 2025-2026 | Online Application Form & Procedure",
  description: "Apply online for Nursery to 12th Standard and JEE/NEET competitive entrance coaching across Manmad, Chandwad, and Niphad campuses. Download checklist and register.",
  keywords: ["Admission 2025-26", "Apply for School Admission", "Junior College Admission Chandwad", "Online Admission Form Achievers"],
};

export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

