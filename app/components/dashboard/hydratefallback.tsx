import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

// Spinner Component
function Spinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0400CD]" />
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export function HydrateFallback() {
  return (
    <SidebarProvider>
      <AppSidebar selectedCampaign="" />
      <SidebarInset>
        <Spinner />
      </SidebarInset>
    </SidebarProvider>
  );
}
