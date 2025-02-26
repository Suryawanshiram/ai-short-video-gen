import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/molecules/AppSidebar";
import AppHeader from "./_components/molecules/AppHeader";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        {children}
      </div>
      ;
    </SidebarProvider>
  );
};

export default DashboardProvider;
