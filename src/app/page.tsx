import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">

      <Navbar />

      <section className="flex flex-col items-center justify-center text-center flex-1 px-4 md:px-0 mt-12">

        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight">
          <span className="flex justify-center space-x-1">
            {"Cornverge".split("").map((char, i) => (
              <span key={i} className="inline-block text-purple-700 animate-wave" style={{ animationDelay: `${i * 0.1}s` }}>
                {char}
              </span>
            ))}
          </span>
          <span className="ml-4 text-black">Brings all your tools together</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-800 max-w-xl">
          Manage your Notion, Gmail, Calendar, and Jira seamlessly in one dashboard.
        </p>

        <Button className="mt-8 px-8 py-3 text-lg rounded-full bg-black text-white hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg">
          <Link href={"/auth/login"}>Get Started</Link>
        </Button>

      </section>
      <Footer />
    </div>
  );
}
