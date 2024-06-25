import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/components/TransitionProvider";

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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
