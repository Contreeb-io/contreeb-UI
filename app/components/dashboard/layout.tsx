import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger, useSidebar } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

function LayoutContent() {
  const { open } = useSidebar();

  return (
    <main className="px-4 py-6 md:px-6">
      <div className="flex items-center gap-4">
        {!open && <SidebarTrigger className="hover:bg-sidebar" />}
        <div>select</div>
      </div>
      <Outlet />
    </main>
  );
}

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <LayoutContent />
    </SidebarProvider>
  );
}
