import { Button } from "../ui/button"
import Link from "next/link"
export default function Navbar() {
    return <nav className=" border-b border-purple-800 flex items-center justify-between px-4 py-3 w-full">
        <div className="flex items-center text-3xl text-purple-600 font-semibold">    
           <h1>Cornverge</h1>
        </div>
        
        <Button variant={"ghost"} className="bg-purple-700 hover:bg-purple-800 text-white text-lg hover:text-white cursor-pointer">
            <Link href={"/auth/login"}>Start</Link>
        </Button>
    </nav>
}