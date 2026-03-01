import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticia — AI Workforce Solutions",
  description:
    "Ticia builds AI employees that companies can hire, onboard, and deploy like any human worker — with email, company access, and real-time meeting capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#0a0a0a" }}>
      <body className="antialiased" style={{ backgroundColor: "#0a0a0a", color: "#f0f0f0" }}>
        {children}
      </body>
    </html>
  );
}
