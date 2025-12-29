import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router";
import type { CampaignSelectType } from "../../types";
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
  const data = useLoaderData();
  const [selectedCampaign, setSelectedCampaign] = useState(
    data.length > 0 ? data[0].id : "",
  );

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/dashboard")) {
      navigate(`dashboard/${selectedCampaign}`);
    }
  }, [selectedCampaign]);

  return (
    <main className="sidebar flex-1 space-y-8 px-4 pt-6 pb-10 md:space-y-14 md:px-6">
      <div className="flex items-center gap-4 pb-5 font-sans">
        {!isSidebarOpen && <SidebarTrigger className="hover:bg-sidebar" />}
        <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
          <SelectTrigger className="rounded-full border border-[#F0F2F5] bg-[#F7F9FC] px-4 font-medium text-[#0E021A] shadow-none md:w-fit">
            <SelectValue placeholder="Select campaign " />
          </SelectTrigger>
          <SelectContent className="sidebar p-3 font-medium text-[#0E021A]">
            <SelectGroup>
              {data?.map((item: CampaignSelectType) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                  className="cursor-pointer rounded-none border-b border-[#F0F2F5] focus:bg-transparent"
                >
                  {item.title}
                </SelectItem>
              ))}

              <Link
                to={"/create-campaign"}
                className="mt-2 flex items-center justify-center rounded-full border-b border-[#F0F2F5] bg-[#F1F1FF] p-2 text-sm font-semibold text-[#6360F0]"
              >
                <PlusIcon color="#6360F0" /> Create a campaign
              </Link>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Outlet />
    </main>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <LayoutContent />
    </SidebarProvider>
  );
}
