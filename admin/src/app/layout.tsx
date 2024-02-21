import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import NextAuthProvider from "../components/NextAuthProvider";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer />
      </body>
    </html>
  );
}
