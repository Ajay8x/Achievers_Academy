import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School Bus & Transportation Fleet | GPS Tracked & CCTV Secured",
  description: "Safe, punctual school bus fleet covering Manmad, Chandwad, Niphad, and surrounding rural talukas with real-time GPS tracking and CCTV safety.",
  keywords: ["School Bus Manmad", "GPS School Transport Niphad", "Safe School Bus Chandwad", "Transport Coverage Nashik"],
};

export default function TransportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

