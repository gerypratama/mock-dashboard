import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { items } from "~/const/menu";
import { useLocation } from "@remix-run/react";

export default function AppSidebar() {
  const { toggleSidebar, state } = useSidebar();
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon" className="py-6">
      <SidebarHeader>
        <SidebarMenuButton onClick={toggleSidebar}>
          {state === "collapsed" ? <ChevronsRight /> : <ChevronsLeft />}
          <span>Custom trigger</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}