import { PlusIcon } from "lucide-react";
import { Outlet } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SidebarProvider, SidebarTrigger, useSidebar } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

function LayoutContent() {
  const { open, openMobile, isMobile } = useSidebar();
  const isSidebarOpen = isMobile ? openMobile : open;

  return (
    <main className="sidebar flex-1 space-y-8 px-4 pt-6 pb-10 md:space-y-14 md:px-6">
      <div className="flex items-center gap-4 pb-5 font-sans">
        {!isSidebarOpen && <SidebarTrigger className="hover:bg-sidebar" />}
        <Select>
          <SelectTrigger className="rounded-full border border-[#F0F2F5] bg-[#F7F9FC] px-4 font-medium text-[#0E021A] shadow-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent className="sidebar p-3 font-medium text-[#0E021A]">
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem
                value="apple"
                className="rounded-none border-b border-[#F0F2F5]"
              >
                Apple
              </SelectItem>
              <SelectItem
                value="banana"
                className="rounded-none border-b border-[#F0F2F5]"
              >
                Banana
              </SelectItem>
              <div className="mt-2 flex items-center justify-center rounded-full border-b border-[#F0F2F5] bg-[#F1F1FF] p-2 text-sm font-semibold text-[#6360F0]">
                <PlusIcon color="#6360F0" /> Create a campaign
              </div>
            </SelectGroup>
          </SelectContent>
        </Select>
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
