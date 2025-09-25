import { Button } from "../ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between px-8 md:px-12 py-4 backdrop-blur-sm bg-white/70 shadow-sm">
      <div className="flex items-center text-lg md:text-xl font-extrabold text-black tracking-wider">
        <span className="text-purple-700">CORNVERGE</span>
      </div>

      <Link href="/auth/login">
        <Button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 cursor-pointer transition-all">
          START
        </Button>
      </Link>
    </nav>
  )
}
