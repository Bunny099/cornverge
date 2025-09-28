import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./toggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-3 md:px-12 py-4 backdrop-blur-sm bg-card/70 shadow-md transition-colors duration-300">
      <div className="text-2xl font-extrabold tracking-wide text-foreground">
        <span className="text-primary">CORNVERGE</span>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
      <Link href="/auth/login">
        <Button className=" px-5 py-2 rounded-full hidden md:block transition-all duration-300 shadow-md cursor-pointer">
          START
        </Button>
      </Link>
      </div>
      
    </nav>
  );
}
