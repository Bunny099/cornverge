import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-purple-100">
     
      <Navbar />

    
      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800">
          Cornverge is all you need
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Connect Notion, Gmail, Calendar, and Jira in one universal dashboard.
        </p>
      </div>

      
      <Footer/>
    </div>
  );
}
