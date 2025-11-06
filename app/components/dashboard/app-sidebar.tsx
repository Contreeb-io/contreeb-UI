import { BanknoteX, Ellipsis, House } from "lucide-react";
import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "../ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="font-mackinac flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-[#010040]">Contreebute.io</h1>
          <span className="rounded-full bg-[#F0E3FC] px-[5px] py-[3px] text-[10px] font-bold text-[#8620D4]">
            beta
          </span>
        </div>
        <SidebarTrigger className="hover:bg-sidebar" />
      </SidebarHeader>
      <SidebarContent className="mt-14 space-y-1">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
              isActive ? "bg-[#DAD9FF47] text-[#0400CD]" : "text-[#333333]"
            }`
          }
        >
          <House size={16} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={"/donations"}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
              isActive ? "bg-[#DAD9FF47] text-[#0400CD]" : "text-[#333333]"
            }`
          }
        >
          <BanknoteX size={16} />
          <p>Donations</p>
        </NavLink>
      </SidebarContent>
      <SidebarFooter className="flex flex-row items-center justify-between rounded-[8px] border border-[#F0F2F5] bg-[#EEEEFF54] p-2">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="name" />
            <AvatarFallback className="bg-[#000130] text-sm font-bold text-white">
              CN
            </AvatarFallback>
          </Avatar>
          <div className="-space-y-0.5">
            <h6 className="text-sm font-semibold">Lina Niss</h6>
            <p className="text-xs text-ellipsis text-[#344054]">
              lina.niss@contreeb.io
            </p>
          </div>
        </div>
        <Ellipsis color="#0E021A" size={16} />
      </SidebarFooter>
    </Sidebar>
  );
}
