import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wisdom International School Niphad | CBSE Affiliated Schooling & Sports",
  description: "Wisdom International School in Niphad offers comprehensive CBSE curriculum schooling with sprawling athletic fields, grand auditorium, and secure GPS bus transportation.",
  keywords: ["Wisdom International School Niphad", "CBSE School Niphad", "Best School in Niphad", "School with Bus Niphad"],
};

export default function NiphadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

