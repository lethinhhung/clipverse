import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { LayoutDashboard, Users, Clapperboard, Info } from "lucide-react";

import { NavUser } from "./nav-user";
import { Separator } from "./ui/separator";
import Image from "next/image";

const dummyData = {
  user: {
    name: "Nhat Di",
    email: "duyy@example.com",
    avatar: "./imgs/dummy-avatars/mouse.png",
    isAdmin: true,
  },
  navMain: [
    {
      name: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "User Account",
      url: "/admin/user-management",
      icon: Users,
    },
    {
      name: "Video",
      url: "/admin/video-management",
      icon: Clapperboard,
    },

    {
      name: "Report",
      url: "/admin/report-management",
      icon: Info,
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center justify-between">
        <Image
          className="dark:invert group-data-[collapsible=icon]:hidden"
          src="/imgs/logo-text.svg"
          alt="Next.js logo"
          width={120}
          height={60}
          priority
        />
        <SidebarTrigger className="p-4" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarMenu>
            {dummyData.navMain
              .filter((item) => item.name !== "Admin" || dummyData.user.isAdmin)
              .map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-4">
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroup>
        <Separator className="!w-3/4 mx-auto custom-separator" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dummyData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
