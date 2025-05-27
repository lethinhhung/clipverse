"use client";

import React, { useState } from "react";
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
import { LogOut, ArrowLeft, Search } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { AuthenticationDialog } from "./authentication-dialog";

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const loggined = false;
  return (
    <div className="flex flex-row justify-between items-center bg-background text-foreground h-15 px-1 py-5 w-full">
      {isSearchActive ? (
        <>
          <div className="flex items-center gap-2 w-full">
            <Button variant="ghost" onClick={() => setIsSearchActive(false)}>
              <ArrowLeft />
            </Button>
            <div className="flex-1 w-full flex justify-center">
              <SearchBar />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center gap-2 ">
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

            <div className="hidden sm:flex flex-1 px-2 flex justify-center w-full">
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
            <div className="flex flex-row items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>Hehe</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div>|</div>
              <Button variant={"ghost"}>
                Log out
                <LogOut />
              </Button>
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
