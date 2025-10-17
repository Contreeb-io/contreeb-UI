import { X } from "lucide-react";
import type { ReactNode } from "react";

export default function FormLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen px-5 pb-10">
      <div className="flex h-16 max-w-[1440px] items-center justify-between">
        <p className="text-xl font-bold text-[#010040]">Contreeb.io</p>

        <div className="size-9 rounded-full bg-[#E3EFFC] p-2">
          <X size={20} color="#101928" />
        </div>
      </div>

      <div className="mt-10">{children}</div>
    </section>
  );
}
