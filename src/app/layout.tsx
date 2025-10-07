import type { Metadata } from "next";
import {  Lora,} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["cyrillic", "latin"]

})

export const metadata: Metadata = {
  title: "Cornverge",
  description: "Cornverge-Brings all your tools together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`  ${lora.variable}  antialiased`}
      >
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
