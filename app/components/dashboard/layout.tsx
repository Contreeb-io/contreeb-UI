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
    <main className="sidebar flex-1 space-y-8 px-4 py-6 md:space-y-14 md:px-6">
      <div className="flex items-center gap-4 font-sans">
        {!isSidebarOpen && <SidebarTrigger className="hover:bg-sidebar" />}
        <Select>
          <SelectTrigger className="rounded-full border border-[#F0F2F5] bg-[#F7F9FC] px-4 font-medium text-[#0E021A] shadow-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent className="sidebar font-medium text-[#0E021A]">
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
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
