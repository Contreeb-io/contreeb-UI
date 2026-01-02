import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Payment from "../components/settings/payment";
import Profile from "../components/settings/profile";

type Tab = "profile" | "payment";

export default function Settings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  useEffect(() => {
    const query = searchParams.get("tab") as Tab;
    if (query) {
      setActiveTab(query);
    }
  }, [searchParams]);

  return (
    <main className="max-w-140 space-y-8 pb-8 xl:ml-35.5">
      <article className="space-y-2">
        <h3 className="font-mackinac text-xl font-bold text-[#0E021A] md:text-[28px]">
          Settings
        </h3>
        <p className="font-sans text-xs text-[#344054] md:text-sm">
          Manage your profile and personal information
        </p>
      </article>

      <article className="flex items-center border-b border-[#D0D5DD]">
        <button
          className={`p-4 text-sm font-medium ${
            activeTab === "profile"
              ? "border-b border-[#03009C] text-[#03009C]"
              : "text-[#344054] hover:text-[#344054]/80"
          }`}
          onClick={() => setSearchParams("?tab=profile")}
        >
          Profile
        </button>
        <button
          className={`p-4 text-sm font-medium ${
            activeTab === "payment"
              ? "border-b border-[#03009C] text-[#03009C]"
              : "text-[#344054] hover:text-[#344054]/80"
          }`}
          onClick={() => setSearchParams("?tab=payment")}
        >
          Payment methods
        </button>
      </article>

      {activeTab === "profile" && <Profile />}
      {activeTab === "payment" && <Payment />}
    </main>
  );
}
