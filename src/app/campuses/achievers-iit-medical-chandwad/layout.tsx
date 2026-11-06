import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Achievers IIT & Medical Chandwad | 11th & 12th Science, JEE, NEET & Hostels",
  description: "Achievers IIT & Medical campus at Chandwad-Manmad Road is the premier competitive entrance and residential hub for JEE Main/Advanced, NEET UG, and MHT-CET coaching.",
  keywords: ["Achievers IIT Medical Chandwad", "JEE Coaching Chandwad", "NEET Coaching Nashik", "Residential Hostel Chandwad", "11th 12th Science Chandwad"],
};

export default function ChandwadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

