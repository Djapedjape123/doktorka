import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitovi i Istine o Akupunkturi",
  description: "Saznajte istinu o akupunkturi u Novom Sadu. Da li boli? Da li je to samo placebo? Otkrijte najčešće zablude o tradicionalnoj kineskoj medicini.",
  alternates: {
    canonical: "https://www.drkosarac.rs/mit-ili-istina", // ZAMENI SA PRAVIM URL-om
  },
};

export default function MitoviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}