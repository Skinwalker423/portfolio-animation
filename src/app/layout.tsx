import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/components/TransitionProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art Gonzalez portfolio app",
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
      <body
        className={cn(
          inter.className,
          "bg-gradient-to-b from-secondary to-blue-100"
        )}
      >
        <TransitionProvider>{children}</TransitionProvider>
        <Toaster />
      </body>
    </html>
  );
}
