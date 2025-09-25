import type { Metadata } from "next";
import { Montserrat, Lora, Caveat } from "next/font/google";
import "./globals.css";


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
    <html lang="en">
      <body
        className={`  ${lora.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
