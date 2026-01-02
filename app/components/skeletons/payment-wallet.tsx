import { Skeleton } from "../ui/skeleton";

export default function PaymentWallet() {
  return (
    <div className="rounded-2xl bg-[#F5F5F5]/60 p-4">
      <div className="flex w-full items-start justify-between">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-3 w-24" />

              <Skeleton className="h-4 w-40" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-9 w-17.5 rounded-full" />

          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
