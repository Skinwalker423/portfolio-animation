import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art dev portfolio app",
  description:
    "Crafting user-centric websites that convert. See my portfolio of various projects, boosting user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-screen h-screen bg-gradient-to-b from-[#fce2d3]/50 to-blue-100'>
          <div className='h-24'>
            <Navbar />
          </div>
          <div className={`h-[calc(100vh-6rem)]`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
