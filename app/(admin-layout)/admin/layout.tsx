"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-sidebar";

import Header from "@/components/header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
