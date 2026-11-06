import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accreditations & Affiliations | CBSE, State Board, MSBTE & PCI",
  description: "Official institutional affiliations and recognitions: Central Board of Secondary Education (CBSE), Maharashtra SSC/HSC Board, MSBTE, and Pharmacy Council of India.",
  keywords: ["CBSE Affiliation", "Maharashtra Board Recognition", "MSBTE Approval", "PCI Recognition"],
};

export default function AccreditationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
