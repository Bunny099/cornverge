import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";



const inter = Montserrat({
  variable:"--font-inter",
  subsets:["latin"]
})
export const metadata: Metadata = {
  title: "Cornverge",
  description: "Cornverge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
