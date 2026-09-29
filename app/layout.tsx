import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Chand | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Ayush Chand, a Full Stack Developer and AI Enthusiast building modern web applications and AI-powered products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}