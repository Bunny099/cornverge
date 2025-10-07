import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between px-4 py-4 border-t border-border">
      <div className="flex justify-center gap-5 text-sm text-foreground mb-2">
        <Link href="/privacy" className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-primary transition-colors">
          Terms of Service
        </Link>
      </div>
      <p className="text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Cornverge. All rights reserved.
      </p>
    </footer>
  )
}
