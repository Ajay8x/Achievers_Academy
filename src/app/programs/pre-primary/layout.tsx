import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nursery, Junior KG & Senior KG | Early Childhood Education",
  description: "Sensory, activity-based pre-primary education in Manmad and Niphad. Loving environment, foundational phonics, numbers, and motor skills development.",
  keywords: ["Nursery School Manmad", "Junior KG Niphad", "Senior KG Admission", "Best Pre-Primary School"],
};

export default function PrePrimaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
