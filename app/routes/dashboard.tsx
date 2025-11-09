import { MoveUpRight, Pencil } from "lucide-react";
import { Link } from "react-router";
import { dashboardColumns } from "~/components/donations/dashboard-columns";
import { DataTable } from "~/components/donations/data-table";
import StatCard from "~/components/ui/stat-card";

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-[902px] space-y-6 font-sans">
      <section className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <article className="space-y-4">
          <div className="space-y-2">
            <span className="rounded-full bg-[#FBF1F1] px-[5px] py-[3px] text-xs font-medium text-[#3E3838] md:text-sm">
              Personal
            </span>
            <h5 className="font-mackinac text-xl font-bold text-[#0E021A] md:text-[28px]">
              21st Birthday
            </h5>
            <p className="text-xs text-[#344054] md:text-sm">
              Raising funds to celebrate my <span>21st birthday</span> and make
              it a memorable
            </p>
          </div>
          <div className="flex w-fit items-center gap-x-3 rounded-[8px] bg-[#F5F5F5] px-3 py-2.5">
            <div className="text-xs text-[#646464] md:text-sm">
              25th April, 2025
            </div>
            <img src="/line-dashes-small.svg" alt="dashes" />
            <div className="text-xs font-medium text-[#0E021A] md:text-sm">
              25th April, 2025
            </div>
          </div>
        </article>
        <div className="flex items-center gap-2 rounded-full bg-[#F0F2F5] px-4 py-2 text-sm font-medium text-[#0E021A] md:text-base">
          <Pencil size={16} />
          Edit campaign
        </div>
      </section>
      <img src="/line-dashes.svg" alt="dashes" className="hidden md:block" />
      <img
        src="/line-dashes-mobile.svg"
        alt="dashes"
        className="block md:hidden"
      />
      <section className="space-y-6">
        <article className="flex flex-wrap items-center justify-between gap-4">
          <StatCard
            label="Target"
            value="4,1211"
            bgColor="#FBF9F1"
            textColor="#282310"
            showCurrency
          />
          <StatCard
            label="Total received"
            value="4,1211"
            bgColor="#E7F6EC"
            textColor="#036B26"
            showCurrency
          />
          <StatCard
            label="Number of donors "
            value="211"
            bgColor="#E3EFFC"
            textColor="#04326B"
          />
        </article>

        <article className="rounded-2xl border border-[#EAECF0] bg-white">
          <div className="flex items-center justify-between px-6 py-4">
            <h3 className="text-lg font-medium text-[#101828]">
              Recent donations
            </h3>
            <Link
              to={"/donations"}
              className="flex items-center gap-2 rounded-[8px] border border-[#E4E7EC] px-4 py-2.5 text-sm font-medium text-[#101928]"
            >
              See all <MoveUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
          <DataTable
            columns={dashboardColumns}
            data={[
              {
                date: "20th May, 2025",
                name: "saeed",
                amount: 40,
                items: "laptop",
              },
              {
                date: "20th May, 2025",
                name: "yussif",
                amount: 60,
                items: "laptop",
              },
              {
                date: "20th May, 2025",
                name: "hi",
                amount: 50,
                items: "laptop",
              },
            ]}
          />
        </article>
      </section>
    </main>
  );
}
