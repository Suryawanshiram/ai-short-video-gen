"use client";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import { Gem } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const path = usePathname();
  return (
    <div>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="flex gap-4 w-full">
              <Image
                src="/assets/LogoImg.png"
                width={40}
                height={40}
                alt="Logo"
                className="object-contain"
              />
            </SidebarGroupLabel>
            <SidebarGroupContent className="w-full py-6">
              <div className="w-full py-4 flex gap-4 mt-4">
                <Button>+ Create New Video</Button>
              </div>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={path.startsWith(item.url)}
                    >
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
        <SidebarFooter>
          <div className="p-4 border border-lg mb-6 rounded-lg bg-gray-700">
            <div className="flex items-center justify-between">
              <Gem className="text-white dark:" />
              <h3 className="text-white">5 Credit Left</h3>
            </div>
            <Button className="w-full my-4">Buy More Credit</Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
