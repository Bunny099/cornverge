
import { Home, Calendar, Kanban, Mail, Settings, Notebook } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";
import LogoutButton from "@/app/dashboard/components/logout";

const Items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "Gmail", url: "/dashboard/gmail", icon: Mail },
  { title: "Jira", url: "/dashboard/jira", icon: Kanban },
  { title: "Calender", url: "/dashboard/calender", icon: Calendar },
  { title: "Notion", url: "/dashboard/notion", icon: Notebook },

]
export default function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <h1 className="text-xl text-primary">CV</h1>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            {Items.map((t) => (
              <SidebarMenuItem key={t.title}>
                <SidebarMenuButton asChild>
                  <Link href={t.url}>
                    <t.icon />
                    <span>{t.title}</span>
                  </Link>
                </SidebarMenuButton>

              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <LogoutButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}