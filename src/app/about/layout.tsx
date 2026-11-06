import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Institutional Vision, Mission & Leadership",
  description: "Learn about Achievers Group of Institutes, our two-decade legacy of educational excellence, rural development vision, and dedication to shaping future leaders.",
  keywords: ["About Achievers Academy", "Achievers Group History", "Vision Mission Achievers", "Educational Leadership Nashik"],
  openGraph: {
    title: "About Achievers Academy - Excellence in Education",
    description: "Discover our educational philosophy and how we empower students across Nashik district.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

