import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Residential Hostels & Mess Facilities | Boys & Girls Wings",
  description: "Secure, disciplined on-campus residential boarding with hygienic dining, supervised night study reading halls, morning yoga, and 24x7 warden vigilance.",
  keywords: ["Hostel School Nashik", "Boarding School Chandwad", "Boys Hostel Chandwad", "Girls Hostel School Maharashtra"],
};

export default function HostelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

