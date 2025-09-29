"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { SidebarMenuButton } from "@/components/ui/sidebar"
export default function LogoutButton({ showText = true }: { showText?: boolean }) {
  const router = useRouter()

  async function handleLogout() {
    await signOut({ redirect: false })
    router.push("/")
  }

  return (<SidebarMenuButton className="bg-red-600 text-primary-foreground " onClick={handleLogout}> <LogOut className="w-4 h-4 " /> <span>Logout</span> </SidebarMenuButton>

  )
}
