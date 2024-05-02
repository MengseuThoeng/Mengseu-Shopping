import type { Metadata } from "next";
import { Inter, Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavbarComponent/page";
import Footer from "@/components/FooterComponent/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Seu's Shopping Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
