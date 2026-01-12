import { useQuery } from "@tanstack/react-query";
import {
  Check,
  EllipsisVertical,
  Landmark,
  MoveUpRight,
  PencilLine,
  Share2,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useRouteLoaderData } from "react-router";
import EditCampaign from "../components/dashboard/edit-campaign";
import { dashboardColumns } from "../components/donations/dashboard-columns";
import { DataTable } from "../components/donations/data-table";
import StatCardsSkeletonGroup from "../components/skeletons/stat-card-skeleton";
import { TableSkeleton } from "../components/skeletons/table-skeleton";
import DeleteModal from "../components/ui/delete-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import StatCard from "../components/ui/stat-card";
import { queryKeys } from "../constant";
import { useCopy } from "../hooks/use-copy";
import {
  getRecentDonations,
  getTotalDonationReceived,
  getTotalDonors,
} from "../lib/dashboard";
import { formatLongDate } from "../lib/utils";
import type { Campaign } from "../types";

export default function Dashboard() {
  const campaigns = useRouteLoaderData("dashboard-layout");
  const { id } = useParams<{ id: string }>();
  const [selectedCampaign, setSelectedCampaign] = useState(
    campaigns?.find((item: Campaign) => item.id.toString() === id),
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { copied, handleCopyToClipboard } = useCopy(
    selectedCampaign.shareable_link,
  );

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedCampaign(
      campaigns?.find((item: Campaign) => item.id.toString() === id),
    );
  }, [id]);

  const { data: recentDonations, isPending: isDonationsPending } = useQuery({
    queryFn: () => getRecentDonations(id!),
    queryKey: queryKeys.recentDonations(id!),
    enabled: !!id,
  });

  const { data: dashboardData, isPending: isCardsPending } = useQuery({
    queryFn: async () => {
      const [totalDonations, totalDonors] = await Promise.all([
        getTotalDonationReceived(id!),
        getTotalDonors(id!),
      ]);
      return {
        totalDonations: totalDonations.total_donations,
        totalDonors: totalDonors.total_donors,
      };
    },
    queryKey: queryKeys.dashboardData(id!),
    enabled: !!id,
  });

  return (
    <>
      <main className="mx-auto max-w-225.5 space-y-6 font-sans">
        <section className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <article className="space-y-4">
            <div className="space-y-2">
              <div className="w-fit rounded-full bg-[#FBF1F1] px-2.5 py-0.75 text-sm font-medium text-[#3E3838] md:text-base">
                {selectedCampaign?.campaign_type === "personal_campaign"
                  ? "Personal"
                  : "Public"}
              </div>
              <h5 className="font-mackinac text-xl font-bold text-[#0E021A] md:text-[28px]">
                {selectedCampaign?.title}
              </h5>
              <p className="text-xs text-[#344054] md:text-sm">
                Raising funds to turn my{" "}
                <span className="font-semibold underline">
                  {selectedCampaign?.title}
                </span>{" "}
                dream into reality!
              </p>
            </div>
            <div className="flex w-fit items-center gap-x-3 rounded-xl bg-[#F5F5F5] px-3 py-2.5">
              <div className="text-xs text-[#646464] md:text-sm">
                {formatLongDate(selectedCampaign?.start_date)}
              </div>
              <img src="/line-dashes-small.svg" alt="dashes" />
              <div className="text-xs font-medium text-[#0E021A] md:text-sm">
                {formatLongDate(selectedCampaign?.end_date)}
              </div>
            </div>
          </article>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 rounded-full bg-[#F0F2F5] px-4 py-2 text-sm font-medium text-[#0E021A] md:text-base"
              onClick={handleCopyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="mr-1 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 size={16} /> Share
                </>
              )}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-full bg-[#F0F2F5] px-4 py-2 text-sm font-medium text-[#0E021A] md:text-base">
                {" "}
                <EllipsisVertical size={16} />
                More
              </DropdownMenuTrigger>
              <DropdownMenuContent className="space-y-1.5 rounded-2xl border border-[#F0F0F0] p-3 font-sans shadow-[0px_2px_15px_7px_rgba(1,0,66,0.05)]">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#0E021A] hover:bg-[#F0F2F5]">
                  <PencilLine size={16} color="#0E021A" />
                  Edit campaign
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#0E021A] hover:bg-[#F0F2F5]"
                  onSelect={() => navigate(`/payment-requests/${id}`)}
                >
                  <Landmark size={16} color="#0E021A" /> Request payment
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#DC2626] hover:bg-[#F0F2F5]"
                  onSelect={() => setShowDeleteModal(true)}
                >
                  <Trash2 size={16} color="#DC2626" />
                  Delete campaign
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        <DeleteModal
          header="Delete campaign?"
          text="Removing this campaign means you loss data on is history. This action is irreversible. Are you sure you want to remove?"
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />

        <EditCampaign />

        <img src="/line-dashes.svg" alt="dashes" className="hidden md:block" />
        <img
          src="/line-dashes-mobile.svg"
          alt="dashes"
          className="block md:hidden"
        />
        <section className="space-y-6">
          {isCardsPending ? (
            <StatCardsSkeletonGroup />
          ) : (
            <article className="flex flex-wrap items-center justify-between gap-4">
              <StatCard
                label="Target"
                value={selectedCampaign?.goal_amount}
                bgColor="#FBF9F1"
                textColor="#282310"
                showCurrency
              />
              <StatCard
                label="Total received"
                value={dashboardData?.totalDonations}
                bgColor="#E7F6EC"
                textColor="#036B26"
                showCurrency
              />
              <StatCard
                label="Number of donors"
                value={dashboardData?.totalDonors}
                bgColor="#E3EFFC"
                textColor="#04326B"
              />
            </article>
          )}

          {isDonationsPending ? (
            <TableSkeleton columns={5} rows={10} />
          ) : recentDonations?.length >= 1 ? (
            <article className="rounded-2xl border border-[#EAECF0] bg-white">
              <div className="flex items-center justify-between px-6 py-4">
                <h3 className="font-medium text-[#101828] md:text-lg">
                  Recent donations
                </h3>
                <Link
                  to={`/donations/${id}`}
                  className="flex items-center gap-2 rounded-xl border border-[#E4E7EC] px-4 py-1.5 text-sm font-medium text-[#101928] md:py-2.5"
                >
                  See all <MoveUpRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
              <DataTable
                columns={dashboardColumns}
                data={recentDonations || []}
              />
            </article>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-[#F0F0F0] py-8">
              <img src="/empty-state.webp" className="size-24" />
              <div className="mx-auto space-y-2 text-center md:max-w-75">
                <h5 className="font-fraunces font-bold text-[#0E021A]">
                  No donations in yet
                </h5>
                <p className="font-sans text-sm text-[#595959]">
                  You haven’t received any notions yet. Any recent donation you
                  will receive will show here
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
