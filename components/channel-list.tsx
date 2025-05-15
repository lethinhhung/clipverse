import { MoreHorizontal } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import React from "react";

export function ChannelList({
  channels,
}: {
  channels: {
    name: string
    url: string
    avatar: string
  }[]
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Subcribed Channels</SidebarGroupLabel>
      <SidebarMenu>
        {channels.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild size="lg" className="h-auto py-2">
              <a href={item.url} className="flex items-center gap-4">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={item.avatar} alt={item.name}/>
                  <AvatarFallback className="rounded-lg">
                    {item.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}