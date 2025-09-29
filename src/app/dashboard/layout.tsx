import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth"
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/dashboard/Sidebar";
export default async function DahboardLayout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/auth/login")
    }
    return <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 overflow-y-auto   mx-auto w-full">
            <SidebarTrigger />
            {children}
        </main>

    </SidebarProvider>



}