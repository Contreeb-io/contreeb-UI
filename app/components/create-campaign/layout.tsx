import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

export default function FormLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate min-h-svh px-5 pb-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)]" />

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
