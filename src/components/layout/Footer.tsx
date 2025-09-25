import Link from "next/link"

export default function Footer(){
  return (
    <footer className="flex flex-col py-6 border-t border-gray-300">
      <div className="flex justify-center gap-6 text-sm text-gray-500 mb-2">
        <Link href="/privacy" className="hover:text-purple-700 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-purple-700 transition-colors">
          Terms of Service
        </Link>
      </div>
      <p className="text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Cornverge. All rights reserved.
      </p>
    </footer>
  )
}
