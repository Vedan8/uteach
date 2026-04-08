import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uteach - Teach Students Worldwide",
  description:
    "An all-in-one platform to teach students worldwide. Connect with international students and teachers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
