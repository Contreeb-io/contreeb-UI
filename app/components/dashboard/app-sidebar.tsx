import {
  Ellipsis,
  HandCoins,
  House,
  LogOut,
  ReceiptText,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";

export function AppSidebar({ selectedCampaign }: { selectedCampaign: string }) {
  const { setOpenMobile } = useSidebar();
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setOpenMobile(false);
  };

  const handleDropdownNavigation = (path: string) => {
    setOpen(false);

    setTimeout(() => {
      setOpenMobile(false);
      navigate(path);
    }, 150);
  };

  return (
    <Sidebar>
      <SidebarHeader className="font-mackinac flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Contreebute-logo" className="h-10 w-28" />
          <span className="rounded-full bg-[#F0E3FC] px-1.25 py-0.75 text-[10px] font-bold text-[#8620D4]">
            beta
          </span>
        </div>
        <SidebarTrigger className="hover:bg-sidebar" />
      </SidebarHeader>
      <SidebarContent className="mt-14 space-y-1">
        <NavLink
          to={
            selectedCampaign ? `/dashboard/${selectedCampaign}` : `/dashboard`
          }
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
              isActive ? "bg-[#DAD9FF47] text-[#0400CD]" : "text-[#333333]"
            }`
          }
          onClick={handleNavClick}
        >
          <House size={16} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={
            selectedCampaign ? `/donations/${selectedCampaign}` : `/donations`
          }
          onClick={handleNavClick}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
              isActive ? "bg-[#DAD9FF47] text-[#0400CD]" : "text-[#333333]"
            }`
          }
        >
          <HandCoins size={16} />
          <p>Donations</p>
        </NavLink>
        <NavLink
          to={
            selectedCampaign
              ? `/payment-requests/${selectedCampaign}`
              : `/payment-requests`
          }
          onClick={handleNavClick}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
              isActive ? "bg-[#DAD9FF47] text-[#0400CD]" : "text-[#333333]"
            }`
          }
        >
          <ReceiptText size={16} />
          <p>Payment requests</p>
        </NavLink>
      </SidebarContent>

      <SidebarFooter className="flex flex-row items-center justify-between rounded-xl border border-[#F0F2F5] bg-[#EEEEFF54] p-2">
        <div className="flex max-w-[90%]">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={user?.image || ""} alt="name" />
              <AvatarFallback className="bg-[#000130] text-sm font-bold text-white">
                {user?.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="-space-y-0.5">
              <h6 className="truncate text-sm font-semibold">{user?.name}</h6>
              <p className="line-clamp-1 truncate text-xs text-[#344054] md:max-w-[85%]">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger>
            <Ellipsis color="#0E021A" size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="sidebar rounded-2xl border border-[#4949491F] p-3 font-sans shadow-[0px_2px_15px_7px_rgba(1,0,66,0.05)]">
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2 p-4 text-sm font-medium text-[#1A1A1A]"
              onSelect={() => handleDropdownNavigation("/settings")}
            >
              <Settings color="#1A1A1A" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2 p-4 text-sm font-medium text-[#1A1A1A]"
              onSelect={() => logout()}
            >
              <LogOut color="#1A1A1A" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
