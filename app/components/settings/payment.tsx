import { PenLine, Trash2 } from "lucide-react";

export default function Payment() {
  let isEmpty = false;
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h5 className="font-mackinac text-[22px] font-bold text-[#0E021A]">
          Payment methods
        </h5>

        {!isEmpty && (
          <div className="flex items-center justify-center gap-1 rounded-full bg-[#F7F7F7] px-3 py-2.5 text-sm font-medium">
            <PenLine size={16} color="#737373" />
            Add
          </div>
        )}
      </div>

      {isEmpty ? (
        <EmptyState />
      ) : (
        <div className="rounded-2xl bg-[#F5F5F5]/60 p-4">
          <div className="flex w-full items-start justify-between font-sans">
            <div className="space-y-2">
              <div>
                <h5 className="text-sm text-[#737373]">Network provider</h5>
                <p className="font-medium text-[#404040]">mtn</p>
              </div>
              <div>
                <h5 className="text-sm text-[#737373]">Account name</h5>
                <p className="font-medium text-[#404040]">account name</p>
              </div>
              <div>
                <h5 className="text-sm text-[#737373]">Account number</h5>
                <p className="font-medium text-[#404040]">number</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center gap-2 rounded-full bg-[#F0F2F5] px-3 py-2 text-sm">
                <PenLine size={14} />
                Edit
              </div>
              <span className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#FEE2E2] px-3 py-2">
                <Trash2 color="#DC2626" />
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <article className="flex flex-col items-center justify-between rounded-2xl bg-[#F5F5F5] px-36 py-10">
      <div>
        <img src="/empty-payment.png" alt="payment empty state" />
        <p className="-mt-6 text-sm font-medium text-[#525252]">
          You have no payment method added
        </p>
      </div>
      <button className="mt-4 rounded-full bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white">
        Add payment method
      </button>
    </article>
  );
}
