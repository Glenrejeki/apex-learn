// app/layout.tsx

// 1. IMPORT FONT yang hilang
import { Inter } from "next/font/google";

// Import komponen ThemeProvider yang sudah diperbaiki
import { ThemeProvider } from "@/components/theme-provider"; 
import "./globals.css";
// 2. DEFINISI FONT yang hilang
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apex Learn App",
  description: "A learning application built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ⚠️ suppressHydrationWarning mengatasi peringatan theme mismatch
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}