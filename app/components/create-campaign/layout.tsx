import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

export default function FormLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-svh bg-white/40 bg-[url('/top.webp')] bg-cover bg-center bg-no-repeat px-5 pb-10 backdrop-blur-[980px]">
      <div className="font-mackinac w-full max-w-[1440px]">
        <div className="flex h-16 w-full items-center justify-between">
          <Link to={"/"}>
            <p className="text-xl font-bold text-[#010040]">Contreebute.io</p>
          </Link>

          <Link to={"/"} className="size-9 rounded-full bg-[#E3EFFC] p-2">
            <X size={20} color="#101928" />
          </Link>
        </div>
      </div>

      <div className="mt-10">{children}</div>
    </section>
  );
}
