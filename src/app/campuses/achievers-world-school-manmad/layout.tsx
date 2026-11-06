import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Achievers World School Manmad | Nursery to 10th CBSE Curriculum",
  description: "Achievers World School at Shrinath Dream City, Umrane Road, Manmad offers world-class foundational, primary, and secondary education with modern science and computer laboratories.",
  keywords: ["Achievers World School Manmad", "Best School in Manmad", "Nursery to 10th Manmad", "CBSE School Manmad"],
};

export default function ManmadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

