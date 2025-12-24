import { Link } from "react-router";

export default function DashboardEmpty() {
  // useQuery({ queryFn: getCampaigns, queryKey: ["campaigns"] });

  return (
    <main className="w-full">
      <section className="mx-auto flex max-w-[566px] flex-col items-center justify-center gap-4 rounded-2xl bg-[#F7F7F7] py-8">
        <img
          src="/empty-state.webp"
          alt="empty illustration"
          className="size-20"
        />
        <div className="max-w-[322px] self-center text-center">
          <h1 className="font-mackinac text-base text-[#0E021A] md:text-lg">
            You have no campaign
          </h1>
          <p className="text-xs text-[#344054] md:text-sm">
            Bring your dreams to live by allowing your friends and family help
            you achieve it.
          </p>
        </div>
        <Link
          to={"/create-campaign"}
          className="w-full max-w-[322px] rounded-full bg-[#6360F0] px-4 py-2.5 text-center font-medium text-white"
        >
          Create a campaign
        </Link>
      </section>
    </main>
  );
}
