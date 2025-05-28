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
  Info,
  TriangleAlert,
  Dot,
} from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { AuthenticationDialog } from "./authentication-dialog";

const notifications = [
  {
    id: 1,
    text: "Kênh nào đó đã tải lên: Dayly Vlog 1 ngày của người đẹp trai nhất thế giới...",
    time: "12 tiếng trước",
    icon: <Info className="text-blue-500" />,
    read: true,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
  {
    id: 2,
    text: "Kênh nào đó đã tải lên: Dayly Vlog 1 ngày của người đẹp trai nhất thế giới...",
    time: "12 tiếng trước",
    icon: <TriangleAlert className="text-red-500" />,
    read: false,
    avatar: "/imgs/dummy-avatars/mouse.png",
  },
];

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const loggined = true;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSearchActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row justify-between sticky top-0 z-50 border-b items-center bg-background text-foreground h-15 px-4 py-5 w-full">
      {isSearchActive ? (
        <div className="flex items-center gap-2 w-full">
          <Button variant="ghost" onClick={() => setIsSearchActive(false)}>
            <ArrowLeft />
          </Button>
          <div className="flex-1 w-full flex justify-center">
            <SearchBar />
          </div>
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
                  className="w-110 px-2"
                  align="end"
                  sideOffset={25}
                >
                  <DropdownMenuLabel className="text-lg">
                    Thông báo
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((notif) => (
                    <DropdownMenuItem
                      key={notif.id}
                      className={`flex items-start gap-3 py-4 h-24 ${
                        notif.read ? "text-white" : "text-gray-400"
                      }`}
                    >
                      <img
                        src={notif.avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-center gap-1">
                        <div className="flex justify-between items-start w-full">
                          <p className="w-[80%] line-clamp-2">{notif.text}</p>
                          {notif.icon}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <p className="flex items-center text-sm font-medium cursor-pointer transition-colors whitespace-nowrap hover:text-primary">
                    Hi, User
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" sideOffset={25}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
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
