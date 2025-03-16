"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/molecules/AppSidebar";
import AppHeader from "./_components/molecules/AppHeader";
import { useAuthContext } from "@/providers/provider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardProvider = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    user && checkUserAuth();
  }, [user]);

  const checkUserAuth = () => {
    if (!user) {
      router.replace("/");
    }
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <div className="p-4">{children}</div>
      </div>
      ;
    </SidebarProvider>
  );
};

export default DashboardProvider;
