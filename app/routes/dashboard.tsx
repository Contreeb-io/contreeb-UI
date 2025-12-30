import { MoveUpRight, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams, useRouteLoaderData } from "react-router";
import { dashboardColumns } from "../components/donations/dashboard-columns";
import { DataTable } from "../components/donations/data-table";
import StatCard from "../components/ui/stat-card";
import { formatLongDate } from "../lib/utils";
import type { Campaign } from "../types";

export default function Dashboard() {
  const campaigns = useRouteLoaderData("dashboard-layout");
  const { id } = useParams<{ id: string }>();
  const [selectedCampaign, setSelectedCampaign] = useState(
    campaigns?.find((item: Campaign) => item.id.toString() === id),
  );

  useEffect(() => {
    setSelectedCampaign(
      campaigns?.find((item: Campaign) => item.id.toString() === id),
    );
  }, [id]);

  // const { data } = useQuery({
  //   queryFn: () => getCampaign(id!),
  //   queryKey: queryKeys.singleCampaign(id!),
  //   enabled: !!id,
  // });

  return (
    <>
      <main className="mx-auto max-w-[902px] space-y-6 font-sans">
        <section className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <article className="space-y-4">
            <div className="space-y-2">
              <div className="w-fit rounded-full bg-[#FBF1F1] px-[10px] py-[3px] text-sm font-medium text-[#3E3838] md:text-base">
                {selectedCampaign?.campaign_types === "personal_campaign"
                  ? "Personal"
                  : "Public"}
              </div>
              <h5 className="font-mackinac text-xl font-bold text-[#0E021A] md:text-[28px]">
                {selectedCampaign?.title}
              </h5>
              <p className="text-xs text-[#344054] md:text-sm">
                Raising funds to celebrate my{" "}
                <span className="font-medium underline">
                  {selectedCampaign?.title}
                </span>{" "}
                and make it a memorable
              </p>
            </div>
            <div className="flex w-fit items-center gap-x-3 rounded-[8px] bg-[#F5F5F5] px-3 py-2.5">
              <div className="text-xs text-[#646464] md:text-sm">
                {formatLongDate(selectedCampaign?.start_date)}
              </div>
              <img src="/line-dashes-small.svg" alt="dashes" />
              <div className="text-xs font-medium text-[#0E021A] md:text-sm">
                {formatLongDate(selectedCampaign?.end_date)}
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
              <h3 className="font-medium text-[#101828] md:text-lg">
                Recent donations
              </h3>
              <Link
                to={"/donations"}
                className="flex items-center gap-2 rounded-[8px] border border-[#E4E7EC] px-4 py-1.5 text-sm font-medium text-[#101928] md:py-2.5"
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
    </>
  );
}
