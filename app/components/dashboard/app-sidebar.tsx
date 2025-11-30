import {
  Ellipsis,
  HandCoins,
  House,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
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

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpenMobile(false);
  };

  return (
    <Sidebar>
      <SidebarHeader className="font-mackinac flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Contreebute-logo" className="h-10 w-28" />
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
          onClick={handleNavClick}
        >
          <House size={16} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={"/donations"}
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

        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger>
            <Ellipsis color="#0E021A" size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="sidebar rounded-2xl border border-[#4949491F] p-3 font-sans shadow-[0px_2px_15px_7px_rgba(1,0,66,0.05)]">
            <DropdownMenuItem
              className="flex items-center gap-2 p-4 text-sm font-medium text-[#1A1A1A]"
              onClick={() => setOpen(false)}
            >
              <Link to="/settings" className="flex w-full items-center gap-2">
                <Settings color="#1A1A1A" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2 p-4 text-sm font-medium text-[#1A1A1A]"
              onClick={() => setOpen(false)}
            >
              <Link to="/profile" className="flex w-full items-center gap-2">
                <User color="#1A1A1A" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex items-center gap-2 p-4 text-sm font-medium text-[#1A1A1A]"
              onClick={handleNavClick}
            >
              <button
                // onClick={handleSignOut}
                className="flex w-full items-center gap-2 text-left"
              >
                <LogOut color="#1A1A1A" />
                Sign out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
