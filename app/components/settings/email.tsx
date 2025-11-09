import { ArrowUpRight, Ellipsis } from "lucide-react";

export default function Email() {
  return (
    <section className="space-y-6">
      <h5 className="font-mackinac font-bold text-[#0E021A] md:text-[22px]">
        Email address
      </h5>
      <article className="flex items-center justify-between gap-1.5 font-sans">
        <div className="space-y-2">
          <h6 className="font-medium text-[#150524]">Nessa.Linn@contreeb.io</h6>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <p className="text-sm font-medium text-[#667185]">
              Verify email address to keep your account secure
            </p>{" "}
            <span className="flex items-center justify-center gap-2 rounded-[8px] bg-[#FBE2B7] px-2 py-0.5 text-xs font-medium text-[#865503]">
              Verify <ArrowUpRight />
            </span>
          </div>
        </div>
        <Ellipsis color="#0E021A" size={14} />
      </article>
    </section>
  );
}
