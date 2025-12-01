import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";
import NavBar from "../ui/nav-bar";

export default function FormLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="relative min-h-svh px-6 pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(125,68,182,0.5)_0%,rgba(183,111,255,0.43)_100%)] blur-[70px] md:blur-[490px]" />

      <NavBar />

      <div className="mt-24">{children}</div>
    </section>
  );
}
