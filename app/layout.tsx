import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreyas Jha | Full-Stack Developer",
  description: "Portfolio of Shreyas Jha - Full-Stack Developer specializing in AI/ML applications, React, Next.js, and modern web technologies",
  keywords: ["Shreyas Jha", "Full-Stack Developer", "React", "Next.js", "AI/ML", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

