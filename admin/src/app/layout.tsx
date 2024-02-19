import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.scss";
import NextAuthProvider from "../components/NextAuthProvider";

const antonio = Antonio({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
  variable: "--antonio",
});

export const metadata: Metadata = {
  title: "Restify Admin",
  description: "Restaurant Orders managing your restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={antonio.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
