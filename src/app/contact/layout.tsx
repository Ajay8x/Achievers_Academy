import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us & Campus Directions | Phone, Email & Maps",
  description: "Get in touch with Achievers Group of Institutes. Phone helplines (+91 8459360161), email, office working hours, and Google Maps directions for Manmad, Chandwad, and Niphad.",
  keywords: ["Contact Achievers Academy", "Achievers Phone Number", "Achievers Manmad Address", "Chandwad Campus Map"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

