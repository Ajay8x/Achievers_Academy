import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Higher Secondary (Class 11 & 12 Science) | Maharashtra State Board",
  description: "Join the premier 11th & 12th Science junior college stream at Achievers Academy with 100% board passing results and advanced practical science labs.",
  keywords: ["11th Science Admission", "12th Science Board", "Junior College Science Chandwad", "HSC Science Maharashtra"],
};

export default function HigherSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
