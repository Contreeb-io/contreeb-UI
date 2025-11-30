import { CloudDownload, ListFilter, X } from "lucide-react";
import { useState } from "react";
import { DataTable } from "../components/donations/data-table";
import {
  donationColumns,
  type Payment,
} from "../components/donations/donation-columns";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";

export default function Donations() {
  const [selectedDonation, setSelectedDonation] = useState<Payment | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (donation: Payment) => {
    setSelectedDonation(donation);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedDonation(null), 200);
  };

  return (
    <main className="mx-auto max-w-[902px] space-y-6 pb-20 font-sans">
      <section className="space-y-2">
        <h1 className="font-mackinac text-2xl font-bold text-[#0E021A]">
          Donations
        </h1>
        <p className="text-sm text-[#344054]">View all your donations</p>
      </section>
      <img src="/line-dashes.svg" alt="dashes" className="hidden md:block" />
      <img
        src="/line-dashes-mobile.svg"
        alt="dashes"
        className="block md:hidden"
      />
      <section className="rounded-2xl border border-[#EAECF0] bg-white">
        <div className="flex items-center justify-between gap-3 px-3 py-4 md:px-6">
          <Input
            type="text"
            placeholder="🔍︎ Search for Item. name, or email"
            className="border-[#D0D5DD] md:max-w-[375px]"
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-[8px] border border-[#E4E7EC] px-4 py-2.5">
              <ListFilter size={16} strokeWidth={1.5} />
              <span className="hidden sm:block">Filter</span>
            </div>
            <div className="flex items-center gap-2 rounded-[8px] border border-[#E4E7EC] px-4 py-2.5">
              <CloudDownload size={16} strokeWidth={1.5} />
              <span className="hidden sm:block">Export</span>
            </div>
          </div>
        </div>
        <DataTable
          columns={donationColumns}
          data={[
            {
              date: "20th May, 2025",
              name: "Saeed Ibrahim",
              amount: 40,
              items: "Laptop, Mouse",
            },
            {
              date: "20th May, 2025",
              name: "Yussif Mohammed",
              amount: 60,
              items: "Monitor, Keyboard",
            },
            {
              date: "20th May, 2025",
              name: "Ahmed Ali",
              amount: 50,
              items: "Headphones",
            },
          ]}
          onRowClick={handleRowClick}
        />
      </section>

      {/* Donation Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="top-[95%] flex max-h-[98%] w-[96%] translate-y-[-95%] flex-col gap-8 overflow-y-auto rounded-2xl p-8 pb-10 md:top-[50%] md:max-w-[603px] md:translate-y-[-50%]"
          showCloseButton={false}
        >
          <article className="flex items-center justify-between">
            <DialogHeader>
              <DialogTitle className="sr-only text-sm font-bold text-[#0E021A]">
                Donation Details
              </DialogTitle>
            </DialogHeader>
            <DialogClose
              id="close"
              className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#E3EFFC] p-2"
            >
              <X size={16} color="#101928" />
            </DialogClose>
          </article>

          {selectedDonation && (
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between border-b border-[#F0F2F5] pb-4">
                <label className="text-xs font-medium text-[#98A2B3]">
                  Date
                </label>
                <p className="text-sm text-[#1A1A1A]">
                  {selectedDonation.date}
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-[#F0F2F5] pb-4">
                <label className="text-xs font-medium text-[#98A2B3]">
                  Item(s)
                </label>
                <p className="text-sm text-[#1A1A1A]">
                  {selectedDonation.items}
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-[#F0F2F5] pb-4">
                <label className="text-xs font-medium text-[#98A2B3]">
                  Amount(GHS)
                </label>
                <p className="text-sm text-[#1A1A1A]">
                  {selectedDonation.amount.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-[#F0F2F5] pb-4">
                <label className="text-xs font-medium text-[#98A2B3]">
                  Recipient name/email
                </label>
                <p className="text-sm text-[#1A1A1A]">
                  {selectedDonation.name}
                </p>
              </div>

              <div className="flex items-center justify-between pb-4">
                <label className="text-xs font-medium text-[#98A2B3]">
                  Message
                </label>
                <p className="text-sm text-[#1A1A1A]">--</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
