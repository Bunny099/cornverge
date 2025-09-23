import Link from "next/link"
export default function Footer(){
    return <footer className="py-4 border-t border-purple-200 flex justify-center gap-6 text-sm text-gray-500">
        <Link href="/privacy" className="hover:text-purple-700">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-purple-700">
          Terms of Service
        </Link>
      </footer>
}