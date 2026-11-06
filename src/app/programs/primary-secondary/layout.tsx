import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Primary & Secondary School (Class 1 to 10) | CBSE & State Board",
  description: "Holistic Class 1 to 10 education at Achievers Academy. Strong foundations in Mathematics, Science, and Languages with smart classrooms and laboratories.",
  keywords: ["Class 1 to 10 Admission", "CBSE Primary School", "Secondary School Manmad Niphad", "School Education Nashik"],
};

export default function PrimarySecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
