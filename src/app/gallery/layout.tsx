import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Campus Photo Gallery | Infrastructure, Labs & Classrooms",
  description: "View photo highlights of Achievers Academy campuses: modern science laboratories, computer labs, auditoriums, outdoor sports fields, and toddler play centers.",
  keywords: ["Achievers Photos", "Campus Gallery", "Science Lab Photos", "School Infrastructure Nashik"],
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

