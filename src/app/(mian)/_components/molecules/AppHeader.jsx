"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuthContext } from "@/providers/provider";
import Image from "next/image";

const AppHeader = () => {
  const { user } = useAuthContext();
  return (
    <div className="px-2 py-2 text-black flex justify-between items-center">
      <SidebarTrigger />
      <Image
        src={user?.pictureURL}
        alt={user?.name }
        width={30}
        height={30}
        className="rounded-full"
      />
    </div>
  );
};

export default AppHeader;
