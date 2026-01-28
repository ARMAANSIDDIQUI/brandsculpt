import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import ImageProtection from "@/components/ImageProtection";

export const metadata: Metadata = {
  title: "Brandsculpt - Creative Agency",
  description: "Brandsculpt is a creative agency specializing in social media management, branding, photography, content creation, influencer marketing, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ImageProtection />
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}