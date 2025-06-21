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
import { LayoutDashboard, Flame, Heart, ShieldUser } from "lucide-react";
import { SidebarChannelList } from "./channel-list";
import { NavUser } from "./nav-user";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { ReportDialog } from "./report-dialog";
import { is } from "date-fns/locale";

const dummyData = {
  user: {
    name: "Nhat Di",
    email: "duyy@example.com",
    avatar: "./imgs/dummy-avatars/mouse.png",
    isAdmin: false,
  },
  navMain: [
    {
      name: "Home",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Trending",
      url: "/trending",
      icon: Flame,
    },
    {
      name: "Favorites",
      url: "/favorites",
      icon: Heart,
    },

    {
      name: "Administrator",
      url: "/admin",
      icon: ShieldUser,
    },
  ],
  channels: [
    {
      _id: "#",
      name: "Channel 1",
      avatar: "/imgs/dummy-avatars/mouse.png",
      bio: "Channel 1 description",
    },
    {
      _id: "#",
      name: "Channel 2",
      avatar: "/imgs/dummy-avatars/mouse.png",
      bio: "Channel 2 description",
    },
    {
      _id: "#",
      name: "Channel 3",
      avatar: "/imgs/dummy-avatars/mouse.png",
      bio: "Channel 3 description",
    },
    // {
    //   _id: "#",
    //   name: "Channel 4",
    //   avatar: "/imgs/dummy-avatars/mouse.png",
    //   bio: "Channel 4 description",
    // },
    // {
    //   _id: "#",
    //   name: "Channel 5",
    //   avatar: "/imgs/dummy-avatars/mouse.png",
    //   bio: "Channel 5 description",
    // },
  ],
  services: [
    {
      name: "About Us",
      url: "#",
    },
    {
      name: "Our Policy",
      url: "#",
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
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarMenu>
            {dummyData.navMain
              .filter(
                (item) =>
                  item.name !== "Administrator" || dummyData.user.isAdmin
              )
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
        <SidebarChannelList channels={dummyData.channels} />
        <Separator className="!w-3/4 mx-auto custom-separator" />
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarMenu>
            {/* Feedback */}
            <ReportDialog asChild isFeedback>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>Feedback</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </ReportDialog>
            {/* Items */}
            {dummyData.services.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex items-center gap-4">
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dummyData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
