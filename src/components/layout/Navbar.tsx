import { Button } from "../ui/button"
import Link from "next/link"
export default function Navbar(){
    return <nav className=" border-b border-purple-800 flex items-center justify-between px-4 py-3 w-full">
        <h1 className="font-inter text-3xl text-purple-700">Cornverge</h1>
        <Button variant={"ghost"} className="bg-purple-700 hover:bg-purple-800 text-white text-lg hover:text-white cursor-pointer">
            <Link href={"/auth/login"}>Start</Link>
        </Button>
    </nav>
}