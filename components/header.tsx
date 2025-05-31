"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "./search-bar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogOut,
  ArrowLeft,
  Search,
  Clapperboard,
  Bell,
  EllipsisVertical,
  Trash2,
} from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { AuthenticationDialog } from "./authentication-dialog";
import { useRouter } from "next/navigation";

const notificationsData = [
  {
    id: 1,
    text: "A channel has uploaded: Top 100 animals with 4 legs",
    time: "12 hours ago",
    type: "info",
    read: false,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
  {
    id: 2,
    text: "Content reported: Copyright infringement detected",
    time: "2 hours ago",
    type: "report",
    read: false,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
  {
    id: 3,
    text: "Content reported: Copyright infringement detected",
    time: "2 hours ago",
    type: "report",
    read: true,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
  {
    id: 4,
    text: "Another info notification",
    time: "1 hour ago",
    type: "info",
    read: true,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
  {
    id: 5,
    text: "Yet another notification",
    time: "30 minutes ago",
    type: "info",
    read: false,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
  {
    id: 6,
    text: "Extra notification to test scroll",
    time: "10 minutes ago",
    type: "info",
    read: true,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
];

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);
  const router = useRouter();

  const loggined = true;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setIsSearchActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({
        ...notif,
        read: true,
      }))
    );
  };

  const deleteAll = () => {
    setNotifications([]);
  };

  const deleteNotification = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="flex flex-row justify-between sticky top-0 z-50 border-b items-center bg-background text-foreground h-15 px-4 py-5 w-full">
      {isSearchActive ? (
        <div className="flex items-center gap-2 w-full">
          <Button variant="ghost" onClick={() => setIsSearchActive(false)}>
            <ArrowLeft />
          </Button>

          <SearchBar />
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="flex md:hidden" />
              <Image
                className="dark:invert w-10 h-10 object-contain"
                src="/imgs/logo-default.svg"
                width={100}
                height={40}
                alt="Logo"
                priority
              />
            </div>

            <div className="hidden sm:flex flex-1 px-2 justify-center w-full">
              <SearchBar />
            </div>

            <Button
              variant="ghost"
              className="flex sm:hidden mr-2"
              onClick={() => setIsSearchActive(true)}
            >
              <Search />
            </Button>
          </div>

          {loggined ? (
            <div className="flex flex-row items-center gap-6">
              <Button>
                <Clapperboard /> Upload
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Bell />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-110 px-2 max-h-[calc(5*6rem)] overflow-y-auto"
                  align="end"
                  sideOffset={25}
                >
                  <DropdownMenuLabel className="flex items-center justify-between">
                    <p className="text-lg">Notifications</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          onClick={(e) => e.stopPropagation()}
                          className="p-0"
                          aria-label="Notification options"
                        >
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        sideOffset={5}
                        className="w-48"
                      >
                        <DropdownMenuItem
                          onClick={() => {
                            markAllRead();
                          }}
                        >
                          Mark all as read
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            deleteAll();
                          }}
                        >
                          Delete all
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((notif) => (
                    <DropdownMenu key={notif.id}>
                      <DropdownMenuItem className="flex items-start gap-3 py-4 h-24">
                        <Image
                          src={notif.avatar}
                          alt="avatar"
                          width={100}
                          height={100}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 flex flex-col justify-center gap-1">
                          <div className="flex justify-between items-start w-full gap-5">
                            <p
                              className={`w-[80%] line-clamp-2 ${
                                notif.read
                                  ? "text-gray-500 dark:text-gray-400"
                                  : "text-foreground"
                              }`}
                            >
                              {notif.text}
                            </p>
                            <Image
                              src={notif.avatar}
                              alt="avatar"
                              width={100}
                              height={100}
                              className="w-20 h-10 rounded-md object-cover flex-shrink-0"
                            />

                            <Button
                              variant="ghost"
                              onClick={(e) => deleteNotification(notif.id, e)}
                              className="p-0"
                            >
                              <Trash2 />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            {notif.time}
                          </p>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenu>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <p className="flex items-center text-sm font-medium cursor-pointer transition-colors whitespace-nowrap hover:text-primary">
                    Hi, User
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-70 px-2"
                  align="center"
                  sideOffset={25}
                >
                  <DropdownMenuLabel className="flex items-center gap-3">
                    <Image
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      src="/imgs/dummy-avatars/mouse.png"
                      width={100}
                      height={40}
                      alt="Logo"
                      priority
                    />
                    <div className="flex flex-col gap-1">
                      <p className="line-clamp-2">Your Channel Name</p>
                      <Button
                        variant="link"
                        className="text-xs text-gray-400 !p-0 !px-0 self-start text-left gap-1 h-fit"
                        onClick={() => {
                          router.push("/channel/my-channel");
                        }}
                      >
                        Go to Your Channel
                      </Button>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                  <DropdownMenuItem>Option 4</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <LogOut />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <AuthenticationDialog asChild>
              <Button>Login</Button>
            </AuthenticationDialog>
          )}
        </>
      )}
    </div>
  );
}
