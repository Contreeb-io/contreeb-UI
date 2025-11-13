import { CircleUserRound } from "lucide-react";

export default function DonationDetails() {
  return (
    <article className="w-full space-y-6 md:max-w-[638px]">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-[#0E021A] md:text-4xl">
          Highlife is Alive Crowdfunding
        </h1>
        <p className="text-sm text-[#5D5757] md:text-base">some descriptions</p>
      </div>

      <div className="flex w-fit items-center gap-2 rounded-full bg-[#F0F2F5] px-3 py-2 text-sm text-[#0E021A]">
        <div className="flex items-center justify-center rounded-full bg-[#FFFFFF] p-1.5">
          <CircleUserRound color="#737373" size={14} />
        </div>
        Nana Nsanku Drums
      </div>
    </article>
  );
}
