import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { TopNavigation } from "@/components/global/top-navigation";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
// import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "iEscolar",
  description: "Sistema de Gerenciamento Escolar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "min-h-screen")}>
        <SessionProvider>
          <TopNavigation>{children}</TopNavigation>
        </SessionProvider>
      </body>
    </html>
  );
}
