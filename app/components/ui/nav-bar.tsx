import { X } from "lucide-react";
import { Link } from "react-router";
import { useScroll } from "../../hooks/use-scroll";

export default function NavBar({
  text,
  closeText,
}: {
  text?: string;
  closeText?: boolean;
}) {
  const changeBg = useScroll();

  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full ${!changeBg ? "bg-[#FFFFFF29]" : "bg-white/50"} `}
    >
      <header className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Contreebute-logo" className="h-10 w-32" />

          {text && (
            <>
              <div className="hidden h-[32px] border border-[#c1c1c1] md:block"></div>

              <h3 className="mt-1 hidden text-sm font-medium text-[#2B2B2B] md:block">
                {text}
              </h3>
            </>
          )}
        </div>

        <Link
          to={"/"}
          className="flex items-end gap-1 rounded-full bg-[#E3EFFC] p-2 text-sm text-[#2B2B2B]"
        >
          <X size={16} color="#101928" /> {closeText && <span>close</span>}
        </Link>
      </header>
    </div>
  );
}
