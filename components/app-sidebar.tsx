import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "./ui/sidebar";
import { PanelRightOpen, LayoutDashboard, Flame, Heart } from "lucide-react";
import { NavMain } from "./nav-main";
import { ChannelList } from "./channel-list";
import { NavUser } from "./nav-user";
import Line from "./line";

const dummyData = {
  user: {
    name: "Nhat Di",
    email: "duyy@example.com",
    avatar: "./imgs/dummy-avatars/mouse.png",
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
  ],
  channels: [
    {
      name: "Channel 1",
      url: "#",
      avatar: "/imgs/dummy-avatars/mouse.png",
    },
    {
      name: "Channel 2",
      url: "#",
      avatar: "/imgs/dummy-avatars/mouse.png",
    },
    {
      name: "Channel 3",
      url: "#",
      avatar: "/imgs/dummy-avatars/mouse.png",
    },
    {
      name: "Channel 4",
      url: "#",
      avatar: "/imgs/dummy-avatars/mouse.png",
    },
    {
      name: "Channel 5",
      url: "#",
      avatar: "/imgs/dummy-avatars/mouse.png",
    },
  ],
  services: [
    {
      name: "Feedback",
      url: "#",
    },
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
      <SidebarHeader>
        <SidebarTrigger className="-ml-1" />
        {/* <h3>Youtube Clone</h3> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain navMain={dummyData.navMain} />
        <Line length="80%" />
        <ChannelList channels={dummyData.channels} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dummyData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
